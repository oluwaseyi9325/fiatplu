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
            <div className='text-2xl font-bold mb-6'>Analytics</div>
           
          
          </div>
         
        </section>
      </div>
    </div>
  );
}

export default Page;
