import React, { useEffect } from "react";
import Bnner from "../../Componets/Bnner";
import { Html5Qrcode } from "html5-qrcode";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ScanbyWebsite = () => {
  const { id } = useParams();

  const isUserAllowed = async (scanUserId) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/attendee/is-allowed`,
        {
          reg_number: scanUserId,
          scan_id: id,
          scanType: "single",
        }
      );

      if (res?.data?.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while verifying the user.");
      console.error("Error verifying user:", error);
    }
  };

  const scanImageFile = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error("No file selected");
      return;
    }

    const html5QrCode = new Html5Qrcode("reader");
    try {
      const result = await html5QrCode.scanFile(file, true);
      await isUserAllowed(result);
    } catch (err) {
      toast.error("Error scanning file. Please try again.");
      console.error("Error scanning file:", err);
    }
  };

  return (
    <>
      <Bnner />
      <div className="flex flex-col justify-center items-center my-10">
        <div className="text-center font-bold text-2xl font-poppins">
          Single Scan: Day 1 Breakfast: Manual Search
        </div>
        <div className="flex justify-center items-center text-primary py-3">
          <div className="w-20 border-b-2 border-primary"></div>
          <i className="fa-solid fa-circle text-[8px] mx-2"></i>
          <div className="w-20 border-b-2 border-primary"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full my-10">
        <h1 className="text-3xl font-bold py-2">Scan QR Code</h1>
        <div
          className="w-[300px] flex items-center flex-col justify-center bg-gray-100 p-5 rounded-md"
          id="reader"
        >
          Upload Image to Scan QR Code
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={scanImageFile}
          className="mt-4 p-2 border rounded-md cursor-pointer bg-white text-center text-gray-700"
        />
      </div>
    </>
  );
};

export default ScanbyWebsite;
