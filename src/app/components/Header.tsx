import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";

const Header = ({ toggleSidebar }:any) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-20 bg-white  items-center px-6 shadow-md flex   justify-between">
      <button onClick={toggleSidebar} className="md:hidden mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
       <div className='bg-[#F9A21B] px-10 py-2 rounded-lg text-white lg:block hidden text-center text-2xl'>Post an order</div>
       <div className="border p-2 rounded-lg lg:flex gap-2 items-center  hidden">
       <CiSearch size={20} color="#A1A1A1"/>
        <input placeholder="Search..." />
       </div>
      <div className="flex items-center justify-between gap-3">
      <div>Hey, James</div>
      <Image alt="" src={require("../../assets/avatar.png")}/>
      <IoNotifications size={40}  className="p-2 rounded-full bg-[#F7F7F7]" />
      </div>
     
    </div>
  );
};

export default Header;
