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
          scanId: id,
          scanType: "multi",
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

  useEffect(() => {
    const startScanner = async () => {
      try {
        // Request camera permissions
        await navigator.mediaDevices.getUserMedia({ video: true });
        toast.info("Camera permissions granted. Initializing scanner...");

        const html5QrCode = new Html5Qrcode("reader");

        html5QrCode.start(
          { facingMode: "environment" }, 
          {
            fps: 10, 
            qrbox: { width: 300, height: 300 } // 
          },
          async (decodedText) => {
            try {
              await isUserAllowed(decodedText);
            } catch (error) {
              console.error("Error during QR code scan success handling:", error);
            }
          },
          (err) => {
            console.error("QR Code scan error:", err);
          }
        ).catch((err) => {
          console.error("Unable to start scanning.", err);
        });

        return () => {
          html5QrCode.stop().catch((err) => {
            console.error("Failed to stop scanner.", err);
          });
          html5QrCode.clear().catch((err) => {
            console.error("Failed to clear scanner. Reason:", err);
          });
        };
      } catch (error) {
        toast.error("Camera permissions denied. Please allow camera access to scan QR codes.");
        console.error("Error accessing camera:", error);
      }
    };

    startScanner();
  }, [id]);

  return (
    <>
      <Bnner />
      <div className="flex flex-col justify-center items-center my-10">
        <div className="text-center font-bold text-2xl font-poppins">
          Single Scan : Day 1 Breakfast : Scan QR via Hardware
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
          className="w-[300px] h-[300px] flex items-center flex-col justify-center bg-gray-100 p-5 rounded-md shadow-lg"
          id="reader"
        ></div>
      </div>
    </>
  );
};

export default ScanbyWebsite;
