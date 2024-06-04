"use client"
import React, { useState } from 'react'

function LoginCompo() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginBtn = () => {
        const details = { email, password }
        if (email && password) {

        } else {
            alert("Please enter login details")
        }
    }
  return (
    <section className="flex justify-center my-20 md:px-0 px-5">
    <div className="w-full md:w-1/4 px-4 border shadow-lg rounded-lg p-10">
        <h2 className='font-bold text-2xl'>Admin Sign In Page</h2>
        <div className='mt-3'>
            <label>Email</label>
            {/* <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" variant="flat" placeholder='Email' /> */}
        </div>
        <div className='mt-3'>
            <label>Password</label>
            {/* <Input security='key' onChange={(e) => setPassword(e.target.value)} value={password} type="password" variant="flat" placeholder='Password' /> */}
        </div>

        <div className='mt-5'>
            <div onClick={() => loginBtn()} className='bg-color p-3 text-center text-white rounded-lg text-xl font-bold hover:bg-purple-800 cursor-pointer'>Submit</div>
        </div>
    </div>
</section>
  )
}

export default LoginCompo