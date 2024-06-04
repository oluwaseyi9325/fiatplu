"use client"

import Header from '@/app/components/Header';
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
        <section className="p-6 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className='text-2xl font-bold mb-6'>Merchant Dashboard</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {merchantData.map((item) => (
                <div key={item.id} className={`${item.bg} p-6 rounded-lg text-white flex flex-col items-start`}>
                  {item.icon}
                  <div className='font-bold text-5xl mt-3'>{item.value}</div>
                  <div className='mt-1'>{item.title}</div>
                </div>
              ))}
              <div className='bg-green-500 p-6 rounded-lg text-white flex flex-col items-start'>
                <div className='text-xl'>Numbers of sale</div>
                <div className='text-3xl mt-8 font-bold'>$100,000</div>
              </div>
            </div>
            <div className='mt-6'>
              <Image src={require("../../../../assets/graph.png")} alt="Graph" className='w-full h-auto' />
            </div>
          </div>
          <div className="flex-1 lg:flex-none lg:w-1/3">
            <div className='bg-white p-6 rounded-lg shadow'>
              <div className='text-2xl font-bold mb-4'>Recent Messages</div>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className='flex items-center gap-4 my-2'>
                  <Image src={require("../../../../assets/avatar.png")} alt="Avatar" className='w-10 h-10 rounded-full' />
                  <div className='flex-1'>
                    <div className='font-bold'>James P. Chris</div>
                    <div className='text-sm text-gray-600'>Hello, I would like to purchase an Amex card.</div>
                  </div>
                  <div className='bg-red-500 text-white px-2 py-1 rounded-full text-xs'>2</div>
                </div>
              ))}
              <div className='bg-yellow-500 p-3 rounded-full text-white text-center mt-4 cursor-pointer'>
                Post an order
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
