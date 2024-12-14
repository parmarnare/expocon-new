import React from 'react';
import { Link, useParams } from 'react-router-dom';
import img1 from '../../images/scantype/qr-code 1.png';
import img2 from '../../images/scantype/qr-code-2 1.png';
import img3 from '../../images/scantype/qr-code-scan 1.png';
import Bnner from '../../Componets/Bnner';
const MultiScan = () => {
  const {id} = useParams();
  return (
    <div>
      <Bnner />
      <div className="flex justify-center items-center my-5">
        <div>
          <div className="text-center font-bold text-2xl font-poppins">
            Multi Scan : Hall 1 Entry
          </div>
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:flex-row flex-col items-center gap-10 my-5">
        <div className="bg-primary bg-opacity-20 shado rounded-xl p-5 text-center">
          <img src={img1} alt="" className="w-60 h-52 object-contain" />
          <div className="text-red my-5">Scan QR via Camera</div>
          <Link to={`/scan-qr-hardware/${id}`}>
            <button
              type="submit"
              className="text-white  bg-print hover:bg-print focus:ring-4 focus:outline-none focus:ring-blue-300 h-full font-medium rounded-xl text-sm px-10 py-2 dark:bg-print dark:hover:bg-print dark:focus:ring-print"
            >
              Click Here
            </button>
          </Link>
        </div>
        <div className="bg-primary bg-opacity-20 shado rounded-xl p-5 text-center">
          <img src={img2} alt="" className="w-60 h-52 object-contain" />
          <div className="text-red my-5">Scan QR via Image</div>
          <Link to={`/request-permission/${id}`}>
            <button
              type="submit"
              className="text-white  bg-print hover:bg-print focus:ring-4 focus:outline-none focus:ring-blue-300 h-full font-medium rounded-xl text-sm px-10 py-2 dark:bg-print dark:hover:bg-print dark:focus:ring-print"
            >
              Start Scan
            </button>
          </Link>
        </div> 
      </div>
    </div>
  );
};

export default MultiScan;
