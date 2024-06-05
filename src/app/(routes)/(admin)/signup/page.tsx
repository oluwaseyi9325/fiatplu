"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUpCompo() {
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
      console.log("Form data", values);
    },
  });

  return (
    <section className="flex justify-center items-center md:h-screen md:px-0">
      <div className="w-full md:w-3/6 px-4 border shadow-lg rounded-lg p-10 bg-white md:px-10 text-customTextColor">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Image div */}
            <div className="flex justify-center md:justify-start order-1 md:order-2 h-9 my-auto mb-[20px] md:mb-0">
              <Image alt="" src={require("@/assets/loginlogo.png")} />
            </div>
            {/* Hero Section*/}
            <div className="text-area md:ml-8 mt-4 md:mt-0 order-2 md:order-1">
              <h2 className="text-[36px] leading-[32px] tracking-[0.15px] font-inter text-customTextColor font-semibold">
                Getting started
              </h2>
              <p className="text-[16px] leading-[24px] text-customTextColor">
                Fill in your information to access the Merchant’s dashboard
              </p>
            </div>
          </div>

          <div className="mt-[40px] flex flex-col md:flex-row gap-[20px] justify-center items-center md:justify-normal md:items-start">
            <div className="relative w-[114px] h-[100px] rounded-md shadow-lg border bg-gray-300">
              {/* <Image
                src={require("@/assets/avatar.png")}
                alt="profile picture"
                layout="fill"
                objectFit="fill"
              /> */}
            </div>
            <div className="my-auto">
              <div className="flex gap-[15px] mb-[15px]">
                <button className="bg-customOrangeBackground text-white rounded-[6px] py-1 px-3 hover:bg-customOrangeBackgroundDarker">
                  UPLOAD NEW PHOTO
                </button>
                <button className="border border-red-500 rounded-[6px] py-1 px-3 hover:bg-gray-100">
                  RESET
                </button>
              </div>
              <p className="font-inter leading-[21px] tracking-[0.15px] text-[14px]">
                Allowed PNG or JPEG. Max size of 800KB
              </p>
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col lg:flex-row flex-wrap mt-5 md:gap-x-[25px]"
          >
            <div className="mt-4 w-full md:w-[48%]">
              <label htmlFor="firstname" className="block font-medium">
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
              <label htmlFor="lastname" className="block font-medium">
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
                <p className="text-red-500 text-sm">{formik.errors.lastname}</p>
              ) : null}
            </div>
            <div className="mt-4 w-full md:w-[48%]">
              <label htmlFor="email" className="block font-medium">
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
              <label htmlFor="phonenumber" className="block font-medium">
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
              <label htmlFor="address" className="block font-medium">
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
                <p className="text-red-500 text-sm">{formik.errors.address}</p>
              ) : null}
            </div>
            <div className="mt-4 w-full md:w-[48%]">
              <label htmlFor="state" className="block font-medium">
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
                className="bg-customOrangeBackground p-2 rounded-lg text-white text-center cursor-pointer hover:bg-customOrangeBackgroundDarker"
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUpCompo;
