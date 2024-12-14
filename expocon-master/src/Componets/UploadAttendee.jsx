import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const UploadData = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleReset = () => {
    setFile(null);
    setData([]);
  };

  const handleSubmit = async () => {
    if (file) {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = async (e) => {
        try {
          const data = e?.target?.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          setData(parsedData);
          console.log("Parsed Data:", parsedData);

          for (const row of parsedData) {
            try {
              console.log("Original notAllowed:", row.notAllowed);
              const notAllowed = row.notAllowed
                ? row.notAllowed.split(",").map((id) => id.trim())
                : [];
              console.log("Converted notAllowed:", notAllowed);

              const res = await axios.post(
                `${process.env.REACT_APP_API}/attendee/create`,
                {
                  reg_number: row.Reg_Number,
                  name: row.Name,
                  place: row.Place,
                  mobile: row.Mobile,
                  email: row.Email,
                  badge: row.Badge,
                  reference: row.Reference,
                  notAllowed: notAllowed,
                }
              );
              console.log("API response:", res.data);
            } catch (error) {
              console.error("Error posting data:", error);
            }
          }
        } catch (error) {
          console.error("Error parsing file:", error);
        }
      };
      reader.onerror = (error) => {
        console.error("File reading error:", error);
      };
      console.log("File submitted:", file);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-center text-3xl font-semibold mb-5">
          Upload Data
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </h2>
        <Link
          target="_blank"
          to="/files/format.xlsx"
          className="underline text-blue-300 text-dark-200"
        >
          Download File Format
        </Link>
        <div className="flex justify-between pb-1 mb-1">
          <p className="text-center text-bold pb-5">Banner Image (Ratio 1:1)</p>
        </div>

        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-500 transition"
        >
          <input {...getInputProps()} />
          <div className="text-blue-500 mb-2 flex justify-center">
            <svg
              width="112"
              height="75"
              viewBox="0 0 112 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90.3 28.357C88.7325 20.4678 84.4555 13.3638 78.1996 8.2584C71.9438 3.153 64.0972 0.362928 56 0.364747C42.5133 0.364747 30.8 7.96529 24.9667 19.088C18.1078 19.8241 11.7647 23.0515 7.15628 28.1499C2.54786 33.2484 -0.000801275 39.8583 1.88966e-07 46.7095C1.88966e-07 62.0496 12.5533 74.5164 28 74.5164H88.6667C101.547 74.5164 112 64.1352 112 51.344C112 39.109 102.433 29.1912 90.3 28.357ZM79.3333 42.075L57.6333 63.6254C56.7 64.5523 55.2533 64.5523 54.32 63.6254L32.6667 42.075H46.6667V23.5371H65.3333V42.075H79.3333Z"
                fill="#073B74"
              />
            </svg>
          </div>
          <p className="text-gray-500">Drag the file here or import the file</p>
          {file && <p className="text-green-500 mt-2">{file.name} selected</p>}
        </div>
        <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
