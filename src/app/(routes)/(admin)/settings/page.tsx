"use client";

import Sidenav from "@/app/components/Sidenav";
import Image from "next/image";
import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phonenumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State of Origin is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
      state: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data and ", values);
    },
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const merchantData = [
    {
      id: 1,
      value: 10,
      title: "Total orders",
      icon: <IoMdCheckmarkCircleOutline size={30} />,
      bg: "bg-blue-500",
    },
    {
      id: 2,
      value: 20,
      title: "Pending orders",
      icon: <FiClock size={30} />,
      bg: "bg-yellow-500",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-1 ml-0 md:ml-64 pt-24 transition-all">
        <section className="p-6 flex flex-col lg:flex-row gap-6 mt-3">
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            <div className="flex gap-3 mt-5">
              <div className="relative h-[50px] w-[50px]">
              <Image alt="user profile" src={require("../../../../assets/avatar.png")} className="" layout="fill"
                objectFit="fill" />
              </div>
              <div>
                <div className="leading-[30px] text-[20px] text-poppins font-[500]">James Drake</div>
                <div className="text-[#F9A21B] font-[500] tetx-[15px]">
                  Change profile picture
                </div>
              </div>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col lg:flex-row flex-wrap mt-[30px] md:gap-x-[25px] text-customTextColor"
            >
              <div className="mt-4 w-full md:w-[48%]">
                <label htmlFor="firstname" className="block font-medium text-[12px]">
                  First Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  {...formik.getFieldProps("firstname")}
                  placeholder="Enter your First Name"
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none ${
                    formik.touched.firstname && formik.errors.firstname
                      ? "border-customOrangeTextColor"
                      : ""
                  }`}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.firstname}
                  </p>
                ) : null}
              </div>
              <div className="mt-4 w-full md:w-[48%]">
                <label htmlFor="lastname" className="block font-medium text-[12px]">
                  Last Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  {...formik.getFieldProps("lastname")}
                  placeholder="Enter your Last Name"
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none ${
                    formik.touched.lastname && formik.errors.lastname
                      ? "border-customOrangeTextColor"
                      : ""
                  }`}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.lastname}
                  </p>
                ) : null}
              </div>
              <div className="mt-4 w-full md:w-[48%]">
                <label htmlFor="email" className="block font-medium text-[12px]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  placeholder="Enter your Email"
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-customOrangeTextColor"
                      : ""
                  }`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="mt-4 w-full md:w-[48%]">
                <label htmlFor="phonenumber" className="block font-medium text-[12px]">
                  Phone Number
                </label>
                <input
                  id="phonenumber"
                  type="text"
                  {...formik.getFieldProps("phonenumber")}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none ${
                    formik.touched.phonenumber && formik.errors.phonenumber
                      ? "border-customOrangeTextColor"
                      : ""
                  }`}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.phonenumber}
                  </p>
                ) : null}
              </div>
              <div className="mt-4 w-full md:w-[48%]">
                <label htmlFor="address" className="block font-medium text-[12px]">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  {...formik.getFieldProps("address")}
                  placeholder="Enter your Address"
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none ${
                    formik.touched.address && formik.errors.address
                      ? "border-customOrangeTextColor"
                      : ""
                  }`}
                />
                {formik.touched.address && formik.errors.address ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.address}
                  </p>
                ) : null}
              </div>
              <div className="mt-4 w-full md:w-[48%]">
                <label htmlFor="state" className="block font-medium text-[12px]">
                  State of Origin
                </label>
                <input
                  id="state"
                  type="text"
                  {...formik.getFieldProps("state")}
                  placeholder="Enter your state"
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none ${
                    formik.touched.state && formik.errors.state
                      ? "border-customOrangeTextColor"
                      : ""
                  }`}
                />
                {formik.touched.state && formik.errors.state ? (
                  <p className="text-red-500 text-sm">{formik.errors.state}</p>
                ) : null}
              </div>
              <div className="flex mt-10 w-full">
                <button
                  type="submit"
                  className="bg-customOrangeBackground py-2 px-10 w-full md:w-[unset] rounded-lg text-white text-center leading-[21px] font-poppins text-[14px] cursor-pointer hover:bg-customOrangeBackgroundDarker"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 lg:flex-none lg:w-1/3">
            <div className="">
              <div className="bg-white p-10 rounded-lg shadow">
                <div className="text-[20px] text-poppins leading-[30px] font-bold mb-4">Change password</div>
                <div className="leading-[19.5px] text-[13px] font-[400] text-poppins">
                  You can change your current password to ensure account is well
                  secured
                </div>
                <button className="bg-[#FFF5E4] p-3 rounded-lg leading-[22.5px] w-full text-[#F9A21B] text-center mt-4 cursor-pointer">
                  Change password
                </button>
              </div>
              <div className="bg-white p-10 rounded-lg shadow mt-4">
                <div className="text-[20px] text-poppins leading-[30px] font-bold mb-4">Delete account</div>
                <div className="leading-[19.5px] text-[13px] font-[400] text-poppins">
                  You can change your current password to ensure account is well
                  secured
                </div>
                <div className="bg-[#FFF5E4] p-3 rounded-lg leading-[22.5px] w-full text-[#F9A21B] text-center mt-4 cursor-pointer">
                  Delete account
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;

const Header = ({ toggleSidebar }: any) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-20 bg-white  items-center px-6 shadow-md flex   justify-between">
      <button onClick={toggleSidebar} className="md:hidden mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className="md:text-4xl text-2xl font-bold">Account Setting</div>
    </div>
  );
};
