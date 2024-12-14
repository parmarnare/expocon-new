import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

const Graphicsetting = () => { 
  const [header_graphics, setHeader_graphics] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setHeader_graphics(acceptedFiles[0]);
      console.log("File accepted: ", acceptedFiles[0]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(); 
      formData.append("header_graphics", header_graphics);

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const response = await axios.put(
        `${process.env.REACT_APP_API}/event/update/667fedd5ab2117f6af392688`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      
      if(response.data.success){
        toast.success("Changed Successfully");
      }else{
        toast.error("Error in uploading banner");
      }
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-center text-3xl font-semibold mb-5">
        Graphic Setting
        <div className="flex justify-center items-center text-primary py-3">
          <div className="w-20 border-b-2 border-primary"></div>
          <i className="fa-solid fa-circle text-[8px]"></i>
          <div className="w-20 border-b-2 border-primary"></div>
        </div>
      </h2>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <p className="text-start mb-4">Current Featured Image *</p>
        <div className="border-2 border-dashed border-black p-2 my-10">
          <div
            {...getRootProps()}
            className="border-2 border-dashed py-  border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-500 transition relative"
          >
            <input {...getInputProps()} />
            {header_graphics ? (
              <img
                src={URL.createObjectURL(header_graphics)}
                alt="Uploaded"
                className=" w-full mx-auto  object-cover "
              />
            ) : (
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 001.92 3.39M6 19h12M9 12h6m-9 5a4 4 0 118 0M12 4v4m0 0V4m0 4l-3-3m3 3l3-3"
                  />
                </svg>
                <p className="mt-2">Upload Image</p>
              </div>
            )}
          </div>
        </div>
        <p className="text-start text-gray-500 mt-4">
          Preferred Size: (600x770) or Square Sized Image
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Graphicsetting;
