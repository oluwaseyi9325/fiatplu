import Image from "next/image";

const Header = ({ toggleSidebar }:any) => {
  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white  flex items-center px-6 shadow-md justify-between">
      <button onClick={toggleSidebar} className="md:hidden mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div>
      <div className='bg-[#F9A21B] p-3 rounded-full text-white text-center'>Post an order</div>
      <div>Hey, James..</div>
      <Image alt="" src={require("../../assets/avatar.png")}/>
      </div>
     
    </div>
  );
};

export default Header;
