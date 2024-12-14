import React from 'react';
import card1 from '../../images/Hero/card 1.png';
import card2 from '../../images/Hero/scanner 1.png';
import card3 from '../../images/Hero/barcode-scanner 1.png';
import card4 from '../../images/Hero/Certificate Printing.png';
import card5 from '../../images/Hero/Badge Printing Kiosk.png';
import card6 from '../../images/Hero/Certificate Printing  Kiosk.png';
import card7 from '../../images/Hero/Visitor Registration Kiosk.png';
import card8 from '../../images/Hero/Attandance Scanning Kiosk.png';
import card9 from '../../images/Hero/New Registration.png';
import card10 from '../../images/Hero/Badge Category.png';
import card11 from '../../images/Hero/Scan Category.png';
import card12 from '../../images/Hero/Certificate Category.png';
import { Link, } from 'react-router-dom'; 

const Hero = () => { 
  return (
    <div className="flex justify-center items-center bg-Login bg-cover h-screen w-full pt-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-col-1 gap-5">
        <Link to="/padge-printing">
          <div class="shado rounded-lg p-3 bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card1} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%]">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Badge Printing
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
        <Link to="/scan-list">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card2} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Single <br /> Scan
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/entryList">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card3} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Multi <br />
                  Scan
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
        <Link to="/certificate-printing-list">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card4} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Certificate <br /> Printing
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/self-badg-perinting-kiosk">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card5} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Badge <br />
                  Printing Kiosk
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/self-certificate-perinting-kiosk">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card6} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Certificate <br /> Printing Kiosk
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/visitor-registration-kiosk">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card7} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Visitor <br /> Registration Kiosk
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/attandance-scanning-list">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card8} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Attandance <br /> Scanning Kiosk
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
        <Link to="/add-registration">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card9} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  New Registration
                </p>
              </div>
            </div>
          </div>{' '}
        </Link>
        <Link to="/badge-category">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card10} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Badge Category
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/scan-category">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card11} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Scan Category
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Certificate-category">
          <div class="shado rounded-lg p-3  bg-White">
            <div class="flex justify-between w-full grow gap-10 items-center">
              <div class="w-[40%]  p-2 shadow-2xl rounded-full border-8 border-primary">
                <img src={card12} alt="img" class="w-[80px] " />
              </div>
              <div class="w-[60%] flex justify-center">
                <p class="text-blue font-bold text-lg text-center w-fit text-primary">
                  Certificate Category
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
