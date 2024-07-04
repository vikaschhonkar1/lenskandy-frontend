"use client";
import React, { useState } from "react";
import VirtualAppointmentForm from "./BookVirtualAppointment";
import PeopleIcon from "../../../public/assets/icons/PeopleIcon";

const BookAppointmentButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleFormSubmit = (data: any) => {
    console.log(data);
    closeDialog();
  };

  return (
    <div>
      {/* <button
        onClick={openDialog}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Open Contact Form
      </button> */}
      <div className=" hover:text-gray-900 text-center" onClick={openDialog}>
        <PeopleIcon />
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeDialog}
          ></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <button
              onClick={closeDialog}
              className="absolute top-2 right-2 text-gray-500"
            >
              &times;
            </button>
            <VirtualAppointmentForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointmentButton;
