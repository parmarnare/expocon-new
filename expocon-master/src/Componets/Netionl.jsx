import React from "react";
import { Link } from "react-router-dom";
import card1 from "../images/qr-code-2 1.png";
import card2 from "../images/Search your.png";
import Banner from "./Bnner";

const Netionl = () => {
  return (
    <div>
      <Banner />
      <div className="flex justify-center items-center">
        <div className="flex gap-5 my-5">
          <div class="shado rounded-lg p-3 bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card1} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%]">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Scan your QR Code
                </p>
              </div>
            </div>
          </div>{" "}
          <div class="shado rounded-lg p-3 bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card2} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%]">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Search your <br />
                  Name / Registration
                </p>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Netionl;
