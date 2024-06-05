import React from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          {/* <img src="/images/notfound.png" alt="Not Found" className="w-32 mx-auto" /> */}
        </div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#F9A21B' }}>Page Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link  className="bg-[#F9A21B] text-white px-4 py-2 rounded-md shadow hover:bg-[#e8901a] transition" href="/">
         
            Go to Homepage
          
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
