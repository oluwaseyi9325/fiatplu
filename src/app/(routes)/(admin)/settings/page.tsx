"use client"

import Sidenav from '@/app/components/Sidenav';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiClock } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const merchantData = [
    {
      id: 1,
      value: 10,
      title: "Total orders",
      icon: <IoMdCheckmarkCircleOutline size={30} />,
      bg: "bg-blue-500"
    },
    {
      id: 2,
      value: 20,
      title: "Pending orders",
      icon: <FiClock size={30} />,
      bg: "bg-yellow-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-1 ml-0 md:ml-64 pt-16 transition-all">
        <section className="p-6 flex flex-col lg:flex-row gap-6 mt-3">
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            <div className='flex gap-3 mt-5'>
                <Image alt='' src={require("../../../../assets/avatar.png")} />
                <div>
                    <div>James Drake</div>
                    <div className='text-[#F9A21B] font-bold'>Change profile picture</div>
                </div>
            </div>
            <div className='lg:flex justify-between gap-3 mt-5'>
                <div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">Fullname</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your Fullname"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">Email</label>
                    <input
                        id="password"
                        type="Email"
                        placeholder="Enter your Email"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">Address</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your Address"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                </div>
                <div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">Last Name</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">Phone Number</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">State of Origin</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                </div>
            </div>
            <div className='flex mt-10'><div className='bg-[#F9A21B] p-2 rounded-lg text-white text-center  cursor-pointer'>
               Update
              </div></div>
          </div>
          <div className='flex-1 lg:flex-none lg:w-1/3'>
          <div className="">
            <div className='bg-white p-10 rounded-lg shadow'>
              <div className='text-2xl font-bold mb-4'>Change password</div>
              <div>You can change your current password to ensure account is well secured</div>
              <div className='bg-[#FFF5E4] p-3 rounded-lg text-[#F9A21B] text-center mt-4 cursor-pointer'>
              Change password
              </div>
            </div>
            <div className='bg-white p-10 rounded-lg shadow mt-4'>
              <div className='text-2xl font-bold mb-4'>Delete account</div>
              <div>You can change your current password to ensure account is well secured</div>
              <div className='bg-[#FFF5E4] p-3 rounded-lg text-[#F9A21B] text-center mt-4 cursor-pointer'>
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



const Header = ({ toggleSidebar }:any) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-20 bg-white  items-center px-6 shadow-md flex   justify-between">
      <button onClick={toggleSidebar} className="md:hidden mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className='md:text-4xl text-2xl font-bold'>Account Setting</div>
    </div>
  );
};



