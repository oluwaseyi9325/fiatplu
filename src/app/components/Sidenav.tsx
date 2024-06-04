import Image from "next/image";
import { MdDashboard, MdPeople, MdSettings, MdAttachMoney, MdEmail, MdRateReview, MdExitToApp } from "react-icons/md";

const Sidenav = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div className={`fixed flex   justify-center  top-0 left-0 h-full w-64 bg-[#2b2b2b] text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-20`}>
     <div className="">
     <div className="flex items-center  my-6">
        <Image src={require("../../assets/logo.png")} alt="Logo" className="" />
      </div>
      <nav className="flex items-center justify-center">
        <ul className="space-y-10">
          <SidebarItem icon={<MdDashboard size={24} />} text="Dashboard" />
          <SidebarItem icon={<MdPeople size={24} />} text="Analytics" />
          <SidebarItem icon={<MdEmail size={24} />} text="Messages" />
          <SidebarItem icon={<MdAttachMoney size={24} />} text="Create an offer" />
          <SidebarItem icon={<MdRateReview size={24} />} text="Transactions" />
          <SidebarItem icon={<MdSettings size={24} />} text="Settings" />
          <SidebarItem icon={<MdExitToApp size={24} />} text="Logout" />
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

const SidebarItem = ({ icon, text }: any) => {
  return (
    <li className="flex items-center gap-4">
      {icon}
      <a href={`#${text.toLowerCase()}`} className="hover:text-gray-300">{text}</a>
    </li>
  );
};

export default Sidenav;

