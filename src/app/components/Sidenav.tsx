import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdPeople, MdSettings, MdAttachMoney, MdEmail, MdRateReview, MdExitToApp } from "react-icons/md";

const Sidenav = ({ isOpen, toggleSidebar }: any) => {
  const pathName=usePathname()
  console.log(pathName)
  return (
    <div className={`fixed flex justify-center  top-0 left-0 h-full w-64 bg-[#2b2b2b] text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-20`}>
     <div className="">
     <div className="flex items-center pb-5 my-6">
        <Image src={require("../../assets/logo.png")} alt="Logo" className="" />
    </div>
      <nav className="flex items-center justify-center">
        <ul className="space-y-10">
          <SidebarItem icon={<MdDashboard color={`${pathName=="/dashboard"?"#F9A21B":""}`} size={24} />} textColor={pathName} path="Dashboard" text="Dashboard" />
          <SidebarItem icon={<MdPeople size={24} color={`${pathName=="/analytics"?"#F9A21B":""}`} />} textColor={pathName} path="Analytics"  text="Analytics" />
          <SidebarItem icon={<MdEmail size={24} color={`${pathName=="/chat"?"#F9A21B":""}`}/> } textColor={pathName} path="Chat"  text="Chat" />
          <SidebarItem icon={<MdAttachMoney size={24} color={`${pathName=="/orders"?"#F9A21B":""}`} />} textColor={pathName} path=""  text="Orders" />
          <SidebarItem icon={<MdRateReview size={24} color={`${pathName=="/transactions"?"#F9A21B":""}`} />} textColor={pathName} path="Transactions"  text="Transactions" />
          <SidebarItem icon={<MdSettings size={24} color={`${pathName=="/setttings"?"#F9A21B":""}`} />} textColor={pathName} path="Settings"  text="Settings" />
          <SidebarItem icon={<MdExitToApp size={24} />} textColor={pathName} path="signin"  text="Logout" />
          <div className='bg-[#F9A21B] px-10 py-2 rounded-lg text-white block lg:hidden text-center text-2xl'>Post an order</div>
        </ul>
      </nav>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
     </div>
    </div>
  );
};

const SidebarItem = ({ icon, text,textColor }: any) => {
  return (
    <li className="flex items-center gap-4">
      {icon}
      <Link href={`${text.toLowerCase()}`}
       className={`hover:text-gray-300
        ${textColor==`/${text.toLowerCase()}`?"text-[#F9A21B]":null}`}>{text}</Link>
    </li>
  );
};

export default Sidenav;

