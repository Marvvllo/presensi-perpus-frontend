"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  {
    label: "Beranda",
    href: "/admin",
    icon: (
      <svg
        className="w-8 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    label: "Presensi",
    href: "/admin/presensi",
    icon: (
      <svg
        className="w-8 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Pengawas",
    href: "/admin/pengawas",
    icon: (
      <svg
        className="w-8 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Admin",
    href: "/admin/admin",
    icon: (
      <svg
        className="w-8 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const sidebarVariants = {
  closed: {
    width: "64px",
  },
  open: {
    width: "200px",
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: "block",
    },
  },
  closed: {
    opacity: 0,
    display: "none",

    transition: {
      duration: 0.2,
    },
  },
};

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <motion.aside
      layout
      animate={isNavOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="flex flex-col gap-4 bg-primary p-4 justify-between text-white font-medium"
    >
      <div>
        {/* Controls */}
        <div className="flex flex-row gap-1 pb-4">
          <button onClick={() => toggleNav()} id="sidebarButton">
            <svg
              className="w-8 h-auto text-white py-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
          <motion.div
            animate={isNavOpen ? "open" : "closed"}
            variants={linkVariants}
          >
            <div
              className="grid place-items-center bg-white rounded-lg p-2"
              id="navImage"
            >
              <Image
                className="w-24"
                src="/images/logo-md.png"
                width={899}
                height={240}
                alt="Logo SMK Telkom Banjarbaru"
              />
            </div>
          </motion.div>
        </div>

        {/* List */}
        <ul className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex flex-row gap-2 items-center"
              >
                {link.icon}
                <motion.p
                  animate={isNavOpen ? "open" : "closed"}
                  variants={linkVariants}
                  className="nav-link transition-all text-lg"
                >
                  {link.label}
                </motion.p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Logout */}
      <Link
        href="/auth/logout"
        className="flex flex-row gap-2 items-center"
      >
        <svg
          className="w-8 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
        <motion.p
          animate={isNavOpen ? "open" : "closed"}
          variants={linkVariants}
          className="transition-all nav-link text-lg"
        >
          Logout
        </motion.p>
      </Link>
    </motion.aside>
  );
};

export default Sidebar;
