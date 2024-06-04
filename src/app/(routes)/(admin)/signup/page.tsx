"use client"
import React, { useState } from 'react'
import Image from 'next/image'

function LoginCompo() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginBtn = () => {
        const details = { email, password }
        if (email && password) {
            // Perform login action here
        } else {
            alert("Please enter login details")
        }
    }

    return (
        <section className="flex justify-center my-20 md:px-0 px-5">
            <div className="w-full md:w-3/6 px-4 border shadow-lg rounded-lg p-10 bg-white">
            <div>
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
               SAVE CHANGES
              </div></div>
          </div>

    
                

             
            </div>
        </section>
    )
}

export default LoginCompo
