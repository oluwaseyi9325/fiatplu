"use client";

import Sidenav from '@/app/components/Sidenav';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoNotifications } from 'react-icons/io5';
import { GoPlus } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { FiSend } from "react-icons/fi";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 ml-0 md:ml-64 transition-all flex flex-col">
     
        
        <section className="p-6 flex-1 flex flex-col lg:flex-row gap-6 bg-white">
          <div className="flex-1 lg:flex-none lg:w-1/3 bg-[#FFF8ED]">
            <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4 items-center gap-4">
            <div className="text-xl font-bold">Chat</div>
            <GoPlus size={40} className="p-2 rounded-full bg-[#F7F7F7]" />
            <IoNotifications size={40} className="p-2 rounded-full bg-[#F7F7F7]" />
          </div>
              <div className="border p-2 rounded-lg flex gap-2 items-center mb-4">
                <CiSearch size={20} color="#A1A1A1" />
                <input placeholder="Search..." className="w-full focus:outline-none" />
              </div>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex items-center gap-4 my-2 shadow p-2 rounded-lg">
                  <Image src={require("../../../../assets/avatar.png")} alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="font-bold">James P. Chris</div>
                    <div className="text-sm text-gray-600">Hello, I would like to purchase an Amex card.</div>
                  </div>
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">2</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col bg-[#FFF8ED] p-4">
            <div className="flex items-center gap-3 mb-6">
              <Image alt='' src={require("../../../../assets/avatar.png")} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold">James Drake</div>
                <div className="text-[#F9A21B] font-bold">Online</div>
              </div>
              <MdCall size={30} color="#F9A21B" className="ml-auto" />
            </div>
            <div className="flex-1 overflow-y-auto mb-4 hide-scrollbar" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              {[1, 2, 3, 4, 5, 3, 4, 5, 6, 6].map((val, i) => (
                <div key={i} className="my-2">
                  {val % 2 === 0 ? (
                    <div className="text-right">
                      <div className="bg-[#F9A21B] text-white p-2 rounded-md inline-block">
                        Hello, I would like to sell my Amex card
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Thursday 11:41am</div>
                    </div>
                  ) : (
                    <div className="text-left">
                      <div className="bg-[#F2F4F7] p-2 rounded-md inline-block">
                        Hello, I would like to sell my Amex card
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Thursday 11:41am</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="sticky bottom-0 bg-white p-4">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <FiSend size={40} color="white" className="p-2 rounded-lg bg-[#F9A21B]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;

