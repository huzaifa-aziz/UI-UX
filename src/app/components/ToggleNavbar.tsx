'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      <div className="first flex flex-row items-center justify-between w-full md:w-auto">
        <h1 className="text-[#3563e9] text-4xl font-bold">MORENT</h1>

        <button
          className="text-2xl md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Image src="/profileman.png" alt="Menu" width={32} height={32} />
        </button>
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-52 w-full">
        <div className="input relative w-full md:w-auto ml-8">
          <Image
            src="/search-normal.png"
            alt=""
            width={24}
            height={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
          />
          <input
            type="text"
            title="search"
            placeholder="Search here"
            className="border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
          />
          <Image
            src="/filter.png"
            alt=""
            width={24}
            height={24}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>
        <div className="icons flex flex-row gap-20">
          {/* <Image src="/Profil & Notification.png" alt="" width={236} height={44} /> */}
          <Image src="/heart.png" alt="" width={32} height={32} />
          <Image src="/setting-2.png" alt="" width={32} height={32} />
          <Image src="/notification.png" alt="" width={32} height={32} />
          <Image src="/profileman.png" alt="" width={40} height={40} />
        </div>
      </div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-white"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          ✖
        </button>
        <nav className="flex flex-col gap-6 mt-16 px-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <a href="#" className="hover:text-gray-200">
            Services
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
