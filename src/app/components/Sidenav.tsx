import Image from "next/image";

const Sidenav = ({ isOpen, toggleSidebar }:any) => {
  return (
    <div className={`fixed text-center top-0 left-0 h-full w-64 bg-[#2b2b2b] text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
     
     <div className="flex items-center">
     <Image src={require("../../assets/logo.png")} alt=""/>
     </div>
      <nav>
        <ul>
          <li className="mb-4 flex justify-between">
            <a href="#home" className="hover:text-gray-300">Home</a>
          </li>
          <li className="mb-4">
            <a href="#users" className="hover:text-gray-300">Users</a>
          </li>
          <li className="mb-4">
            <a href="#settings" className="hover:text-gray-300">Settings</a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden text-white">Close</button>
    </div>
  );
};

export default Sidenav;
