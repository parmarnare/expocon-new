import React, { useEffect, useState } from "react";
import Bnner from "../../Componets/Bnner";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const VisitorRegistrationKiosk = () => {
  const [allStates, setAllStates] = useState([]);
  const [allCountry, setAllCountry] = useState([]);
  const [allHowUs, setAllHowUs] = useState([]);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [place, setPlace] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [how_us, setHow_us] = useState("");

  const createAttendee = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/attendee/create`,
        {
          name,
          company,
          designation,
          place,
          state,
          country,
          mobile,
          email,
          how_us,
        }
      );
      if (res.data.success) {
        toast.success("attendee created");
        setName("");
        setCompany("");
        setDesignation("");
        setPlace("");
        setEmail("");
        setMobile("");
        setState("");
        setCountry("");
        setHow_us("");
      }
    } catch (error) {
      toast.error("All fields are required");
    }
  };

  const getStates = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/state/all-states`
      );
      if (res.data.success) setAllStates(res?.data?.states);
    } catch (error) {
      console.log(error);
    }
  };

  const getHowUs = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/howUs/all-howUs`
      );
      if (res.data.success) setAllHowUs(res?.data?.howUses);
      console.log(allHowUs);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/country/all-countries`
      );
      if (res.data.success) setAllCountry(res?.data?.countries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStates();
    getCountries();
    getHowUs();
  }, [allStates, allCountry, allHowUs]);

  return (
    <div>
      <Bnner />
      <div className="flex justify-center items-center my-5">
        <div>
          <div className="text-center font-bold text-2xl font-poppins">
            Visitor Registration Kiosk
          </div>
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>

      <form onSubmit={createAttendee}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center  px-5">
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
              Company <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              type="text"
              id="base-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Designation <small className="text-red text-xl">*</small>
            </label>
            <input
              required
              type="text"
              id="base-input"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Place / 2nd Line
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
          <div className="mb-5">
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
          <div className="mb-5">
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
          <div className="mb-5">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              State <small className="text-red text-xl">*</small>
            </label>
            <select
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled>
                Select State
              </option>
              {allStates?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.state_name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled>
                Select Country
              </option>
              {allCountry?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.country_name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-black "
            >
              How did you know about the exhibition
            </label>
            <select
              type="text"
              value={how_us}
              onChange={(e) => setHow_us(e.target.value)}
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            >
              <option value="" disabled>
                Select
              </option>
              {allHowUs?.map((item) => (
                <option value={item._id}>{item.howUs_name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-4 text-white my-5 px-5">
          <button type="submit" className="bg-primary rounded-md p-2 px-5">
            Submit
          </button>
          <Link to="/padge-printing" className="bg-primary rounded-md p-2 px-5">
            Print
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VisitorRegistrationKiosk;
