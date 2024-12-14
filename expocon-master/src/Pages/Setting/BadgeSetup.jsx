import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../Componets/Bnner";

const BadgeSetup = () => {
  const [marginTop, setMarginTop] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);


  const getEvent = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/event/get-badge`
      );
      if (res.data.success) {
        setMarginTop(res.data.badge.marginTop);
        setMarginBottom(res.data.badge.marginBottom);
        setMarginLeft(res.data.badge.marginLeft);
        setMarginRight(res.data.badge.marginRight);
      }
    } catch (error) {
      console.error("Error fetching badge setup:", error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const  badge_setup = {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    }

    const formData = new FormData();
    formData.append("badge_setup", JSON.stringify(badge_setup));

    try {
      const eventId = "667fedd5ab2117f6af392688";

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      const response = await axios.put(
        `${process.env.REACT_APP_API}/event/update/${eventId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        console.log("Badge setup updated successfully!");
      } else {
        console.error("Error updating badge setup:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating badge setup:", error);
    }
  };

  return (
    <div className="font-sans antialiased">
      <Banner />
      <main className="container mx-auto py-10">
        <h2 className="text-center text-3xl font-semibold mb-5">
          Badge Setup
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </h2>

        <form
          className="flex flex-wrap items-center justify-center w-full h-full gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="marginTop">Margin Top</label>
            <input
              id="marginTop"
              type="number"
              className="bg-inputBg border border-gray-300 pl-5 rounded-lg p-3"
              value={marginTop}
              onChange={(e) => setMarginTop(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="marginBottom">Margin Bottom</label>
            <input
              id="marginBottom"
              type="number"
              className="bg-inputBg border border-gray-300 pl-5 rounded-lg p-3"
              value={marginBottom}
              onChange={(e) => setMarginBottom(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="marginLeft">Margin Left</label>
            <input
              id="marginLeft"
              type="number"
              className="bg-inputBg border border-gray-300 pl-5 rounded-lg p-3"
              value={marginLeft}
              onChange={(e) => setMarginLeft(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="marginRight">Margin Right</label>
            <input
              id="marginRight"
              type="number"
              className="bg-inputBg border border-gray-300 pl-5 rounded-lg p-3"
              value={marginRight}
              onChange={(e) => setMarginRight(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-print text-white px-5 py-3 rounded-lg hover:bg-print"
          >
            Enter
          </button>
        </form>
      </main>
    </div>
  );
};

export default BadgeSetup;
