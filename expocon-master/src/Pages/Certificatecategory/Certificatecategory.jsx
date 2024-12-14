// src/components/BadgeCategory.js
import React, { useEffect, useState } from "react";
import Bnner from "../../Componets/Bnner";
import { FaRegEdit } from "react-icons/fa";
import ToggleSwitch from "../../Componets/ToggleSwitch";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const CertificateCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editCertificateName, setEditCertificateName] = useState("");
  const [editCertificateId, setEditCertificateId] = useState("");
  const [editCertificateStatus, setEditCertificateStatus] = useState("");
  const [allCertificates, setAllCertificates] = useState([]);
  const [certificateName, setCertificateName] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEditModal = (name, id, status) => {
    setEditCertificateName(name);
    setEditCertificateId(id);
    setEditCertificateStatus(status);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const editCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/certificate/update`,
        {
          _id: editCertificateId,
          category: editCertificateName,
          status: editCertificateStatus,
        }
      );

      if (res?.data?.success) {
        setIsEditModalOpen(!isEditModalOpen);
        setCertificateName("");
        getAllCertificates();
        toast.success("Certificate Updated successfully");
      } else {
        toast.error("Error Updating Certificate");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const createCertificateCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/certificate/create`,
        { category: certificateName }
      );

      if (res?.data?.success) {
        setIsModalOpen(!isModalOpen);
        setCertificateName("");
        getAllCertificates();
        toast.success("Certificate Created successfully");
      } else {
        toast.error("Error Creating Certificate");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllCertificates = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/certificate/all-certificates`
      );

      if (res?.data?.success) {
        setAllCertificates(res?.data?.certificates);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCertificates();
  }, []);

  return (
    <>
      <Bnner />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <div></div>
            <h2 className="text-center text-3xl flex justify-center flex-col font-semibold mb-5">
              Certificate Category
              <div className="flex justify-center items-center text-primary py-3">
                <div className="w-20 border-b-2 border-primary"></div>
                <i className="fa-solid fa-circle text-[8px]"></i>
                <div className="w-20 border-b-2 border-primary"></div>
              </div>
            </h2>
            <button
              onClick={toggleModal}
              className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <IoMdAdd className="bg-white text-primary rounded-full" />
              <span>Add New</span>
            </button>
          </div>
          <div className="p-4 mx-auto overflow-auto">
            <table className="min-w-full bg-white shadow rounded-2xl px-5 overflow-auto">
              <thead className="bg-tablecolor bg-opacity-15">
                <tr>
                  <th className="py-2 px-4 rounded-tl-2xl">Action</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4 rounded-tr-2xl">Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {allCertificates.map((item) => (
                  <tr className="border-t" key={item._id}>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <button
                        onClick={() =>
                          toggleEditModal(
                            item.certificate_category,
                            item._id,
                            item.certificate_status
                          )
                        }
                        className="bg-blue-500 text-white flex items-center gap-2 px-2 py-1 rounded"
                      >
                        <FaRegEdit /> <span>Edit</span>
                      </button>
                    </td>
                    <td className="px-4 py-2">{item.certificate_category}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-center">
                        {item.certificate_status ? "Active" : "InActive"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-center">
            <button className="mx-1 bg-primary bg-opacity-70 text-white px-3 py-1 rounded">
              &lt;
            </button>
            <button className="mx-1 hover:bg-primary bg-opacity-70 text-black hover:text-white px-3 py-1 rounded">
              1
            </button>
            <button className="mx-1 hover:bg-primary bg-opacity-70 text-black hover:text-white px-3 py-1 rounded">
              2
            </button>
            <button className="mx-1 hover:bg-primary bg-opacity-70 text-black hover:text-white px-3 py-1 rounded">
              ...
            </button>
            <button className="mx-1 hover:bg-primary bg-opacity-70 text-black hover:text-white px-3 py-1 rounded">
              10
            </button>
            <button className="mx-1 bg-primary bg-opacity-70 text-white px-3 py-1 rounded">
              &gt;
            </button>
          </div>

          {/* Edit category modal */}
          {isEditModalOpen && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
              aria-hidden="true"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                  <div className="flex items-center justify-between p-4 border-b rounded-t bg-gray-200">
                    <h3 className="text-lg font-semibold dark:text-white">
                      Edit Badge Category
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-primary hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      onClick={toggleEditModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <form className="p-4" onSubmit={editCategory}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-start"
                        >
                          Category Name <small className="text-red"> *</small>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={editCertificateName}
                          onChange={(e) =>
                            setEditCertificateName(e.target.value)
                          }
                          className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          placeholder="Type category name"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="status"
                          className="block mb-2 text-sm font-medium text-start"
                        >
                          Category Status <small className="text-red"> *</small>
                        </label>
                        <select
                          className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          name="status"
                          value={editCertificateStatus}
                          onChange={(e) =>
                            setEditCertificateStatus(e.target.value)
                          }
                        >
                          <option value={false}>Inactive</option>
                          <option value={true}>Active</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-print hover:bg-print font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="text-white inline-flex items-center bg-gray-200 hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={toggleEditModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Add Badge category modal */}
          {isModalOpen && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
              aria-hidden="true"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                  <div className="flex items-center justify-between p-4 border-b rounded-t bg-gray-200">
                    <h3 className="text-lg font-semibold dark:text-white">
                      Add Badge Category
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-primary hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      onClick={toggleModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <form className="p-4" onSubmit={createCertificateCategory}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-start"
                        >
                          Category Name <small className="text-red"> *</small>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={certificateName}
                          onChange={(e) => setCertificateName(e.target.value)}
                          className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          placeholder="Type category name"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-print hover:bg-print font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="text-white inline-flex items-center bg-gray-200 hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={toggleModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificateCategory;
