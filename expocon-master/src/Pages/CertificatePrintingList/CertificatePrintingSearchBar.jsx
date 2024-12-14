import React, { useEffect, useRef, useState } from "react";
import Bnner from "../../Componets/Bnner";
import { AiFillPrinter } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import QRCodePrintComponent from "../../Componets/QRCodePrintComponent";
import EditAttendee from "../../Componets/EditAttendee";
import axios from "axios";

import { useAuth } from "../../context/authContext";
import { decodeToken } from "react-jwt";
import { toast } from "react-toastify";
const CertificatePrintingSearchBar = () => {
  const [attendee, setAttendee] = useState([]);
  const [editAttendee, setEditAttendee] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCertificateId, setSelectedCertificateId] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const printRef = useRef();
  const [auth] = useAuth();

  const allAttendees = async (searchQuery) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/attendee/all-attendee`,
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
        `${process.env.REACT_APP_API}/attendee/update`,
        {
          reg_number,
          certificate_printed: true,
          certificate_print_dt: new Date(),
          certificate_printed_by: decodedToken?._id,
        }
      );
      if (res.data.success) {
        toast.success("Certificate Printed successfully");
      } else {
        toast.error("Error in Certificate Print : ", res.data.message);
      }
    } catch (error) {
      console.error("Error in Certificate Print", error);
    }
  };

  const handlePrintQRCode = (badgeId, name, place) => {
    setSelectedCertificateId(badgeId);
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

  const toggleModal = (item = "") => {
    setEditAttendee(item);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Bnner />
      <div>
        <div className="flex justify-center items-center my-5">
          <div>
            <div className="text-center font-bold text-2xl font-poppins">
              Certificate Printing
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
      <form className="max-w-6xl mx-auto my-5">
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
      </form>

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

                  <button
                    className="text-white bg-tablecolor px-3 rounded-lg flex gap-2 items-center"
                    onClick={() => toggleModal(item)}
                  >
                    <FiEdit />
                    <span>Edit</span>
                  </button>
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

      {/* Modal for editing attendee */}
      {isModalOpen && (
        <EditAttendee toggleModal={toggleModal} attendee={editAttendee} />
      )}

      {/* QR Code printing dialog */}
      <QRCodePrintComponent
      isCertificatePrinting={true}
        ref={printRef}
        name={selectedName}
        place={selectedPlace}
        value={selectedCertificateId}
      />
    </>
  );
};

export default CertificatePrintingSearchBar;
