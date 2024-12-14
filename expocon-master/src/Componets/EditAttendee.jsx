import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditAttendee = ({ toggleModal, attendee }) => {
  const [badges, setBadges] = useState([]); 
  const [name, setName] = useState(attendee.name);
  const [place, setPlace] = useState(attendee.place);
  const [badge, setBadge] = useState(attendee.badge);
  const [mobile, setMobile] = useState(attendee.mobile);
  const [email, setEmail] = useState(attendee.email); 
  const [reference, setReference] = useState(attendee.reference);


  const updateAttendee = async (e) => {
    e.preventDefault();
    toggleModal();
    try { 
      const res = await axios.put(
        `${process.env.REACT_APP_API}/attendee/update`,
        { reg_number:attendee.reg_number, name, place, badge, mobile, email, reference }
      );
      if (res.data.success) {
        toast.success("Attendee updated successfully");
      } else {
        toast.error("Error updating attendee:", res.data.message);
      }
    } catch (error) {
      toast.error("Error updating attendee:", error.response.data.message);
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
  }, []);


  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      aria-hidden="true"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 border-b rounded-t bg-gray-200">
            <h3 className="text-lg font-semibold dark:text-white">
              Edit Badge Category
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-primary hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="p-4" onSubmit={updateAttendee}>
            <div className="grid gap-4 mb-4 grid-cols-2">

              <div className="col-span-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Full Name <small className="text-red text-xl">*</small>
                </label>
                <input
                  type="text"
                  id="base-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Place
                </label>
                <input
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Place / 2nd Line on Badge"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Registration / Badge Category{" "}
                  <small className="text-red text-xl">*</small>
                </label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  {badges?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.badge_category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Mobile Number
                </label>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="test@gmail.com"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Reference/Note <small className="text-red text-xl">*</small>
                </label>
                <input
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Reference/Note"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-print hover:bg-print font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
              <button
                type="button"
                className="text-white inline-flex items-center bg-gray-200 hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAttendee;
