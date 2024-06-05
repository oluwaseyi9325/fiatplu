"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

const LoginCompo = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Perform login action here
      console.log("Login details: ", values);
    },
  });

  return (
    <section className="flex justify-center items-center md:px-0 px-5 h-screen">
      <div className="w-full md:w-2/6 px-4 border shadow-lg rounded-lg p-10 bg-white">
        {/* <div className="flex justify-center mb-[63.6px] mt-[65px]"> */}
        <div className="flex justify-center">
          <Image alt="" src={require("../../../assets/loginlogo.png")} />
        </div>

        <div className="mt-4 text-center text-customTextColor leading-[34.5px]">
          <h2 className="text-[23px] font-semibold font-poppins opacity-90 mb-[6px]">
            Welcome to Fiatplug! 👋
          </h2>
          <p className="leading-[21px] text-[14px] tracking-[0.15px] font-poppins">
            Please sign in to your merchant account
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-6  mx-auto px-[20px]"
        >
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-[12px] leading-[20.5px] text-customOrangeTextColor font-poppins"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 mt-1 border border-bg-gray rounded-md font-poppins focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-customOrangeTextColor"
                  : ""
              }`}
            />

            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="block font-medium text-[12px] leading-[20.5px] text-customOrangeTextColor font-poppins"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 mt-1 border border-bg-gray rounded-md font-poppins focus:outline-none ${
                formik.touched.password && formik.errors.password
                  ? "border-customOrangeTextColor"
                  : ""
              }`}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex">
              <input
                type="checkbox"
                className="mr-2 w-[20px] h-[19px] my-auto"
              />
              <label
                htmlFor="remember"
                className="text-sm text-customOrangeTextColor my-auto font-poppins"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-customOrangeTextColor hover:underline font-poppins"
            >
              Forgot password?
            </a>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-customOrangeBackground p-3 text-center text-white rounded-lg text-[16px] tracking-[0.3px] leading-[22.23px] font-bold hover:bg-customOrangeBackgroundDarker cursor-pointer font-inter"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginCompo;
