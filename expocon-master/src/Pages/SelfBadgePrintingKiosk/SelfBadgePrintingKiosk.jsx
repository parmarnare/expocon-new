import React, { useEffect, useRef, useState } from "react";
import Netionl from "../../Componets/Netionl";
import { AiFillPrinter } from "react-icons/ai";
import axios from "axios";
import QRCodePrintComponent from "../../Componets/QRCodePrintComponent";
import { useAuth } from "../../context/authContext";
import { decodeToken } from "react-jwt";

const SelfBadgePrintingKiosk = () => {
  const [attendee, setAttendee] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBadgeId, setSelectedBadgeId] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const printRef = useRef();
  const [auth] = useAuth();

  const allAttendees = async (searchQuery) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/attendee/all-attendee`,
        { searchQuery }
      );
      if (res.data.success) {
        setAttendee(res.data.attendees);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    allAttendees();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        allAttendees(searchQuery);
      } else {
        setAttendee([]);
      }
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);
  const updateAttendeePrintStatus = async (reg_number) => {
    try {
      const token = auth?.token;
      const decodedToken = decodeToken(token, process.env.JWT_SECRET);

      const res = await axios.put(
        `http://localhost:5000/api/v1/attendee/update`,
        {
          reg_number,
          badge_printed: true,
          badge_print_dt: new Date(),
          badge_printed_by: decodedToken?._id,
        }
      );
      if (res.data.success) {
        console.log("Attendee updated successfully");
      } else {
        console.error("Error updating attendee:", res.data.message);
      }
    } catch (error) {
      console.error("Error updating attendee:", error);
    }
  };

  const handlePrintQRCode = (badgeId, name, place) => {
    setSelectedBadgeId(badgeId);
    setSelectedName(name);
    setSelectedPlace(place);
    setTimeout(() => {
      const printContent = printRef.current.innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;

      window.onafterprint = async () => {
        const printed = window.confirm("Did you print or save the QR code?");
        if (printed) {
          await updateAttendeePrintStatus(badgeId);
        }
        document.body.innerHTML = originalContent;
        window.location.reload();
      };

      window.print();
    }, 0);
  };

  return (
    <>
      <Netionl />
      <div>
        <div className="flex justify-center items-center my-5">
          <div>
            <div className="text-center font-bold text-2xl font-poppins">
              Badge Printing
            </div>
            <div className="flex justify-center items-center text-primary py-3">
              <div className="w-20 border-b-2 border-primary"></div>
              <i className="fa-solid fa-circle text-[8px]"></i>
              <div className="w-20 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-6xl mx-auto my-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-black dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full bg-red bg-opacity-20 p-4 ps-10 text-sm text-gray-900 border placeholder:text-black border-gray-300 rounded-full"
            placeholder="Search registered attendees"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="p-4 mx-auto overflow-auto">
        <table className="min-w-full bg-white shadow rounded-2xl px-5 overflow-auto">
          <thead className="bg-tablecolor bg-opacity-15">
            <tr>
              <th className="py-2 px-4 rounded-tl-2xl">Action</th>
              <th className="py-2 px-4">UID / Reg. No.</th>
              <th className="py-2 px-4">Full Name</th>
              <th className="py-2 px-4">Badge</th>
              <th className="py-2 px-4">City / 2nd Line</th>
              <th className="py-2 px-4">Mobile</th>
              <th className="py-2 px-4 rounded-tr-2xl">Email</th>
            </tr>
          </thead>
          <tbody>
            {attendee.map((item) => (
              <tr className="hover:bg-gray-100 text-center" key={item.id}>
                <td className="py-2 px-4 border-b flex">
                  {item?.badge_printed ? (
                    <button className="text-white bg-red hover:underline rounded-lg px-3 mr-2 flex items-center gap-2 ">
                      <AiFillPrinter />{" "}
                      <span className="text-sm">
                        Printed
                        <div className=" flex flex-col">
                          <span className="text-[10px]">
                            {new Date(item.badge_print_dt).toLocaleDateString(
                              "en-GB"
                            )}
                          </span>
                        </div>
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handlePrintQRCode(
                          item.reg_number,
                          item.name,
                          item.place
                        )
                      }
                      className="text-white hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30 bg-print  rounded-lg px-3 mr-2 flex items-center gap-2"
                    >
                      <AiFillPrinter /> <span className="py-3 px-2">Print</span>
                    </button>
                  )}
                </td>
                <td className="py-2 px-4 border-b">{item?.reg_number}</td>
                <td className="py-2 px-4 border-b">{item?.name}</td>
                <td className="py-2 px-4 border-b">
                  {item?.badge?.badge_category}
                </td>
                <td className="py-2 px-4 border-b">{item?.place}</td>
                <td className="py-2 px-4 border-b">{item?.mobile}</td>
                <td className="py-2 px-4 border-b">{item?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* QR Code printing dialog */}
      <QRCodePrintComponent
        ref={printRef}
        name={selectedName}
        place={selectedPlace}
        value={selectedBadgeId}
      />
    </>
  );
};

export default SelfBadgePrintingKiosk;
