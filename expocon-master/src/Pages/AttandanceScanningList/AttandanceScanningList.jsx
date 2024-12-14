import React from 'react';
import { Link } from 'react-router-dom';
import Bnner from '../../Componets/Bnner';

const AttandanceScanningList = () => {
  return (
    <div className="font-sans antialiased">
      {/* Registration Banner */}
      <Bnner />

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <h2 className="text-center text-3xl font-semibold mb-5">
          Attendance Scanning List
          <div className="flex justify-center items-center text-primary py-3">
            <div className="w-20 border-b-2 border-primary"></div>
            <i className="fa-solid fa-circle text-[8px]"></i>
            <div className="w-20 border-b-2 border-primary"></div>
          </div>
        </h2>

        <div className="space-y-4 md:px-20 px-2 ">
          {[
            '   Day 1 : Hall 1 : Morning Session',
            '  Day 2 : Hall 1 : Eventing Session',
            ' Workshop Day 1',
            ' Workshop Day 2',
            '  Day 1 : CME Hall 3 ',
          ].map((entry, index) => (
            <Link to="/attendance-scanning-kiosk">
              <div
                key={index}
                className="flex justify-between items-center my-3 bg-inputBg border border-gray-300 pl-5  rounded-lg"
              >
                <span>{entry}</span>
                <span className="bg-print text-white px-5 py-3 rounded-lg hover:bg-print">
                  Enter
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AttandanceScanningList;
