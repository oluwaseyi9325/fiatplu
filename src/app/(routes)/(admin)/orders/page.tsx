"use client";

import Header from '@/app/components/Header';
import Sidenav from '@/app/components/Sidenav';
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className="flex flex-col min-h-screen">
      <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-1 ml-0 md:ml-64 pt-16 transition-all">
        <section className="lg:p-[80px] p-8 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='bg-white p-6 rounded-lg text-black flex flex-col items-start'>
                <div className='text-xl'>Total Oders</div>
                <div className='text-xl mt-8'>Total of 48 active orders</div>
                <div className='bg-[#F9A21B] mt-2 px-20 py-2 rounded-lg shadow text-white lg:block hidden text-center text-1xl'>SEE ALL</div>
              </div>
            
                <div  className={`bg-white p-6 rounded-lg text-black flex flex-col items-start`}>
                  <div className='bg-[#56CA00] p-8 rounded-full'></div>
                  <div className='mt-1'>Status: Active</div>
                  <div className='flex gap-4 items-center'>
                  <div className='font-bold text-5xl '>453</div>
                  <div className='mt-1'>Total orders</div>
                  </div>
                </div>
                <div  className={`bg-white p-6 rounded-lg text-black flex flex-col items-start`}>
                  <div className='bg-[#CA1800] p-8 rounded-full'></div>
                  <div className='mt-1'>Status: Active</div>
                  <div className='flex gap-4 items-center'>
                  <div className='font-bold text-5xl'>453</div>
                  <div className='mt-1'>Total orders</div>
                  </div>
                </div>
            
            </div>

            <section className=" flex flex-col lg:flex-row gap-6 mt-3">
              <div className="flex-1 bg-white rounded-lg shadow p-6">
                <div className='mb-6'>
                  <div className='text-xl font-bold'>Create new order</div>
                  <div className='text-gray-600'>Create, edit, and publish your order</div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                  <Select>
      <SelectTrigger className=" bg-white">
        <SelectValue placeholder="Select order type" />
      </SelectTrigger>
      <SelectContent className='bg-white'>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                   
                  </div>
                  <div>
                    
                  <Select>
      <SelectTrigger className=" bg-white">
        <SelectValue placeholder="Select giftcard type" />
      </SelectTrigger>
      <SelectContent className='bg-white'>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                  </div>
                </div>
                <div className='mt-6'>
                 
                <Select>
      <SelectTrigger className=" bg-white">
        <SelectValue placeholder="Input amount range" />
      </SelectTrigger>
      <SelectContent className='bg-white'>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
               
              </div>
            </section>

            <section>
                <table>

                </table>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;

