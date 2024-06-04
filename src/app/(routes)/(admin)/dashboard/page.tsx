"use client"
import Header from '@/app/components/Header';
import Sidenav from '@/app/components/Sidenav';
import Image from 'next/image'
import React, { useState } from 'react';
import { FiClock } from "react-icons/fi";
function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidenav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <div className="ml-0 md:ml-64 pt-16 transition-all">
        <section className="p-6 md:flex justify-between gap-3">
           <div>
            <div className='text-2xl font-bold my-4'>Merchant Dashboard</div>
           <div className='md:grid grid-cols-3 gap-5 bg-white rounded-lg shadow-lg p-3'>
           {
                [1,2,3].map((val,i)=>
                  <div className='bg-[#1B9CF9] p-5 rounded-lg text-white'>
                    <FiClock size={30} />
                    <div className='font-bold text-3xl'>10</div>
                    <div>Total orders</div>
                  </div>
                )
            }
           </div>
            <div>
              <Image src={require("../../../../assets/graph.png")} alt={''}/>
            </div>
           </div>
          <div>
          <div className='bg-white p-5 rounded-lg shadow'>
            <div className='text-2xl font-bold'>Recent Messages</div>
            {
              [1,2,3,4,5].map((val,i)=>
              <div className='flex my-2 justify-between items-center gap-2'>
                <Image src={require("../../../../assets/avatar.png")} alt={''}/>
                <div>
                  <div>James p. chris</div>
                  <div>Hello, I will like to purchase an amex card</div>
                </div>
                <div className='bg-red-100 text-white p-2 rounded-full'>
                  2
                </div>
              </div>
              )
            }
            <div className='bg-[#F9A21B] p-3 rounded-full text-white text-center'>Post an order</div>
           </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;


