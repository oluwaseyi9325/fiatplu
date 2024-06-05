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
            <div className="w-full md:w-2/6 px-4 border shadow-lg rounded-lg p-10 bg-white">
               <div className='flex justify-center'>
               <Image alt="" src={require("../../../assets/loginlogo.png")} />
               </div>

                <div className="mt-4 text-center">
                    <h2 className="text-xl font-semibold">Welcome to Fiatplug! 👋</h2>
                    <p>Please sign in to your merchant account</p>
                </div>

                <div className='mt-6'>
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block font-medium">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label htmlFor="remember" className="text-sm">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-[#F8A21C] hover:underline">Forgot password?</a>
                </div>

                <div className='mt-6'>
                    <button onClick={loginBtn} className='w-full bg-[#F8A21C] p-3 text-center text-white rounded-lg text-xl font-bold hover:bg-blue-700 cursor-pointer'>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default LoginCompo
