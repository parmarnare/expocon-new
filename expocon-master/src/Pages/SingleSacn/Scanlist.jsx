import React, { useEffect, useState } from "react";
import Bnner from "../../Componets/Bnner";
import { Link } from "react-router-dom";
import axios from "axios";

const Scanlist = () => {
  const [scans, setScans] = useState([]);
  const getScanList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/scan/single-scans`
      );
      if (res.data.success) {
        setScans(res.data.scans);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getScanList();
  }, []);
  return (
    <div className="mb-5">
      <Bnner />
      <div className="flex justify-center items-center my-5">
        <div>
          <div className="text-center font-bold text-2xl font-poppins">
            Single Entry Scan List
          </div>
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
      {/* main code  */}
      <div className="space-y-4 md:px-20 px-2 ">
        {scans.map((item, index) => (
          <Link to={`/scan-type/${item.scan_id}`}>
            <div
              key={index}
              className="flex justify-between items-center my-3 bg-inputBg border border-gray-300 pl-5  rounded-lg"
            >
              <span>{item.scan_category}</span>
              <span className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600">
                Enter
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Scanlist;
