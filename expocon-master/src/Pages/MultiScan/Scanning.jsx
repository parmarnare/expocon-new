// Scanning.js
import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Link } from 'react-router-dom';
import img2 from '../../images/scantype/qr-code-2 1.png';
import Bnner from '../../Componets/Bnner';
import Successful from '../../images/scantype/ScanSuccessful.png';
const Scanning = ({ selectedCamera, onStopScanning }) => {
  // const scannerRef = useRef(null);

  // useEffect(() => {
  //   const scanner = new Html5QrcodeScanner(
  //     scannerRef.current,
  //     {
  //       fps: 10,
  //       qrbox: 250,
  //     },
  //     false
  //   );

  //   scanner.render((decodedText) => {
  //     alert(`QR Code detected: ${decodedText}`);
  //   });

  //   return () => {
  //     scanner.clear();
  //   };
  // }, []);

  return (
    <>
      <Bnner />
      <div className="flex justify-center items-center my-5">
        <div>
          <div className="text-center font-bold text-2xl font-poppins">
            Multi Scan : Hall 1 Entry : Scan QR via Website (Mobile Only)
          </div>
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-6 bg-white rounded-lg md:w-1/2 w-full  px-5 my-5  shado">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img
                src={img2}
                alt="QR Code"
                className="md:w-96 w-full  h-52 object-contain"
              />
            </div>
            <select
              className="mb-4 px-4 py-2 bg-gray-200 rounded-lg"
              value={selectedCamera}
              // onChange={handleCameraChange}
            >
              <option>Front Camera</option>
              <option>Back Camera</option>
              {/* Add more camera options if needed */}
            </select>
            <Link to="/Scanning">
              <button
                className="mb-2 px-4 py-2 bg-primary text-white rounded-lg"
                // onClick={() => onStartScanning(selectedCamera)}
              >
                Stop Scanning
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full justify-center my-5 px-5">
        <img
          src={Successful}
          alt=""
          className="flex justify-center items-center md:w-80 w-full "
        />
      </div>
    </>
  );
};

export default Scanning;
