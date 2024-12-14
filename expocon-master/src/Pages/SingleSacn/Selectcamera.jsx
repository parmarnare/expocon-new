import React from 'react';
import Bnner from '../../Componets/Bnner';
import img2 from '../../images/scantype/qr-code-2 1.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Selectcamera = () => {
  return (
    <div>
      <Bnner />
      <div>
        <div className="flex justify-center items-center my-5">
          <div>
            <div className="text-center font-bold text-2xl font-poppins">
              Single Scan : Day 1 Breakfast : Scan QR via Website (Mobile Only)
            </div>
            <div className="flex justify-center items-center text-primary py-3">
              <div className="w-20 border-b-2 border-primary"></div>
              <i className="fa-solid fa-circle text-[8px]"></i>
              <div className="w-20 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <div className="bg-White  bg-opacity-20 md:w-1/2 w-full  px-5  shado rounded-xl p-5 text-center flex justify-center items-center flex-col">
          <img
            src={img2}
            alt=""
            className="md:w-96 w-full  h-52 object-contain"
          />
          <h2 className="font-bold text-2xl">Select Camera (4)</h2>

          <button
            type="submit"
            className="text-white flex gap-10 my-5 items-center  bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 h-full font-medium rounded-xl text-sm px-10 py-2 dark:bg-print dark:hover:bg-print dark:focus:ring-print"
          >
            <div>Front Camera</div>
            <div>
              <IoIosArrowUp />
              <IoIosArrowDown />
            </div>
          </button>
          <Link to="/stops-canning">
            <button
              type="submit"
              className="text-white  bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 h-full font-medium rounded-xl text-sm px-10 py-2 "
            >
              Start Scanning
            </button>
          </Link>
          <button
            type="submit"
            className="hover:text-white my-5 border-2 border-primary text-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 h-full font-medium rounded-xl text-sm px-14 py-2 "
          >
            Scan an Image FIle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selectcamera;
