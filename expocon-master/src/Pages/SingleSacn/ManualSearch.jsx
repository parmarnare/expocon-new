import React from 'react';
import Bnner from '../../Componets/Bnner';

const ManualSearch = () => {
  return (
    <div>
      <Bnner />
      <div>
        <div className="flex justify-center items-center my-5">
          <div>
            <div className="text-center font-bold text-2xl font-poppins">
              Single Scan : Day 1 Breakfast : Manual Search
            </div>
            <div className="flex justify-center items-center text-primary py-3">
              <div className="w-20 border-b-2 border-primary"></div>
              <i className="fa-solid fa-circle text-[8px]"></i>
              <div className="w-20 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <form className="max-w-6xl mx-auto my-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-black dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            className=" w-full bg-red bg-opacity-20 p-4 ps-10 text-sm text-gray-900 border placeholder:text-black border-gray-300 rounded-full "
            placeholder="Search registered attendees"
            required
          />

          <button
            type="submit"
            className="text-white absolute end-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 h-full font-medium rounded-full text-sm px-10 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="p-4 mx-auto overflow-auto">
        <table className="min-w-full bg-white shadow rounded-2xl px-5 overflow-auto">
          <thead className="bg-tablecolor bg-opacity-15">
            <tr>
              <th className="py-2 px-4 rounded-tl-2xl">Action</th>
              <th className="py-2 px-4">Unique ID</th>
              <th className="py-2 px-4">Full Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Place</th>
              <th className="py-2 px-4 rounded-tr-2xl">E-mail ID</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b flex">
                <button className="text-white bg-print hover:underline rounded-lg px-5 mr-2 flex items-center gap-2 ">
                  <span>Scan Now</span>
                </button>
              </td>
              <td className="py-2 px-4 border-b">REG001</td>
              <td className="py-2 px-4 border-b">Sapna Prajapat</td>
              <td className="py-2 px-4 border-b">Speaker</td>
              <td className="py-2 px-4 border-b">Bangalore</td>
              <td className="py-2 px-4 border-b">xyz@gmail.com</td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b flex">
                <button className="text-white bg-red hover:underline rounded-lg px-4 mr-2 flex items-center gap-2 ">
                  <span>Not Allowed</span>
                </button>
              </td>
              <td className="py-2 px-4 border-b">REG001</td>
              <td className="py-2 px-4 border-b">Sapna Prajapat</td>
              <td className="py-2 px-4 border-b">Speaker</td>
              <td className="py-2 px-4 border-b">Bangalore</td>
              <td className="py-2 px-4 border-b">xyz@gmail.com</td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b flex">
                <button className="text-white bg-primary hover:underline rounded-lg px-3 mr-2 flex items-center gap-2 ">
                  <span className="text-sm">
                    Already Scanned <br />
                    29-06-2024 12:42:12
                  </span>
                </button>
              </td>
              <td className="py-2 px-4 border-b">REG001</td>
              <td className="py-2 px-4 border-b">Sapna Prajapat</td>
              <td className="py-2 px-4 border-b">Speaker</td>
              <td className="py-2 px-4 border-b">Bangalore</td>
              <td className="py-2 px-4 border-b">xyz@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManualSearch;
