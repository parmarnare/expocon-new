import React, { useEffect, useState } from "react";
import Bnner from "../../Componets/Bnner";
import axios from "axios";
import { toast } from "react-toastify";

const AddRegistration = () => {
  const [badges, setBadges] = useState([]);
  const [scanItems, setScanItems] = useState([]);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [badge, setBadge] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [notAllowed, setNotAllowed] = useState([]);
  const [reference, setReference] = useState("");

  const createAttendee = async (e) => {
    e.preventDefault();
    try {
      console.log(notAllowed);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/attendee/create`,
        { name, place, badge, mobile, email, reference, notAllowed }
      );
      if (res.data.success) {
        toast.success("attendee created");
        setNotAllowed([]);
        setName("");
        setPlace("");
        setBadge("");
        setMobile("");
        setEmail("");
        setReference("");
      }
    } catch (error) {
      toast.error("Error creating Attendee");
    }
  };

  const getScans = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/scan/all-scans`
      );
      if (res.data.success) {
        setScanItems(res?.data?.scans);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBadges = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/badge/all-badges`
      );
      if (res.data.success) setBadges(res?.data?.badges);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBadges();
    getScans();
  }, []);

  const handleCheckboxChange = (e, itemId) => {
    if (e.target.checked) {
      setNotAllowed([...notAllowed, itemId]);
    } else {
      setNotAllowed(notAllowed.filter((id) => id !== itemId));
    }
  };

  return (
    <div>
      <Bnner />
      <div className="flex justify-center items-center my-5">
        <div>
          <div className="text-center font-bold text-2xl font-poppins">
            New Registration
          </div>
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
      <div className="shado rounded-lg p-2 px-5 font-bold border-l-4 border-primary mx-5 my-5">
        New Registration
      </div>
      <form onSubmit={createAttendee}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center px-5">
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Full Name <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              type="text"
              id="base-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Place <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Place / 2nd Line on Badge"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Registration / Badge Category
              <small className="text-red text-xl">*</small>
            </label>
            <select
              required
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled>
                Select Badge
              </option>
              {badges?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.badge_category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Mobile Number <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Mobile Number"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Email <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="test@gmail.com"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Reference/Note <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Reference/Note"
            />
          </div>
        </div>

        <div className="shado rounded-lg p-2 px-5 font-bold border-l-4 border-primary mx-5 my-5">
          Not Allowed in Scanning
        </div>

        <div className="p-4">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center px-5">
            {scanItems?.map((item, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={item.scan_id}
                  type="checkbox"
                  defaultChecked={false}
                  onChange={(e) => handleCheckboxChange(e, item.scan_id)}
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-black"
                />
                <label htmlFor={item._id} className="ml-2 text-gray-700">
                  {item.scan_category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 text-white my-5 px-5">
          <button type="submit" className="bg-primary rounded-md p-2 px-5">
            Save & Submit
          </button>
          <button type="submit" className="bg-primary rounded-md p-2 px-5">
            Submit & Print
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRegistration;
