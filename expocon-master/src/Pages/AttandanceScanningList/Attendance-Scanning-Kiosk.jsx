import React from 'react';
import Bnner from '../../Componets/Bnner';
import Successful from '../../images/scantype/ScanSuccessful.png';
const AttendanceScanningKiosk = () => {
  const data = [
    {
      uid: 'REG001',
      fullName: 'Sapna Prajapat',
      category: 'Speaker',
      place: 'Bangalore',
      email: 'xyz@gmail.com',
    },
    {
      uid: 'REG001',
      fullName: 'Sapna Prajapat',
      category: 'Speaker',
      place: 'Bangalore',
      email: 'xyz@gmail.com',
    },
    {
      uid: 'REG001',
      fullName: 'Sapna Prajapat',
      category: 'Speaker',
      place: 'Bangalore',
      email: 'xyz@gmail.com',
    },
  ];
  return (
    <>
      <Bnner />
      <div>
        <div className="flex justify-center items-center my-5">
          <div>
            <div className="text-center font-bold text-2xl font-poppins">
              Hall 1 : Attendance Scanning Kiosk
            </div>
            <div className="flex justify-center items-center text-primary py-3">
              <div className="w-20 border-b-2 border-primary"></div>
              <i className="fa-solid fa-circle text-[8px]"></i>
              <div className="w-20 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
        {/* Search */}
        <form className="max-w-6xl mx-auto my-5">
          <div className="">
            <input
              type="search"
              id="default-search"
              className=" w-full bg-red bg-opacity-20 p-4 ps-10 text-sm text-gray-900 border placeholder:text-black border-gray-300 rounded-full "
              placeholder="Search registered attendees"
              required
            />
          </div>
        </form>

        <div className="p-4 mx-auto overflow-auto">
          <table className="min-w-full bg-white shadow rounded-2xl px-5 overflow-auto">
            <thead className="bg-tablecolor bg-opacity-15">
              <tr>
                <th className="py-2 px-4 rounded-tl-2xl">Unique ID</th>
                <th className="py-2 px-4">Full Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Place</th>
                <th className="py-2 px-4 rounded-tr-2xl">E-mail ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 text-center">
                  <td className="py-2 px-4 border-b">{row.uid}</td>
                  <td className="py-2 px-4 border-b">{row.fullName}</td>
                  <td className="py-2 px-4 border-b">{row.category}</td>
                  <td className="py-2 px-4 border-b">{row.place}</td>
                  <td className="py-2 px-4 border-b">{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center w-full justify-center my-5 px-5">
          <img
            src={Successful}
            alt=""
            className="flex justify-center items-center md:w-80 w-full "
          />
        </div>
      </div>
    </>
  );
};

export default AttendanceScanningKiosk;
