import React from 'react';
import card1 from '../../images/Setting/Graphic  Setting.png';
import card2 from '../../images/Setting/uplode Data.png';
import card3 from '../../images/Setting/dawnlod data.png';
import card4 from '../../images/Setting/Badge Setup.png';
import { Link } from 'react-router-dom';
const Setting = () => {
  return (
    <div className="flex justify-center items-center bg-Login bg-cover h-screen w-full pt-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-col-1 gap-5">
        <Link to="/graphic-setting">
          <div class="shado rounded-lg p-3 bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card1} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%]">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Graphic Setting
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
        <Link to="/upload-data">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card2} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Upload Data
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/download-report">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card3} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Download Report
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
        <Link to="/badge-setup">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card4} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Badge Setup
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
      </div>
    </div>
  );
};

export default Setting;
