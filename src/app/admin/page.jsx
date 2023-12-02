import PresensiTable from "@/components/PresensiTable";
import React from "react";

const Admin = () => {
  return (
    <main className="flex flex-col gap-2 py-2">
      <section className="flex flex-row justify-between items-center px-4">
        <h1 className="font-medium text-3xl">Beranda</h1>
      </section>
      <section className="w-full grid grid-cols-4 gap-4 px-4">
        {/* Item Presensi */}
        <article className="bg-primary text-white px-8 py-4 rounded-2xl">
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-4xl">2</p>
            <svg
              className="w-16 h-auto opacity-75"
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
          </div>
          <h2 className="font-medium text-2xl">Presensi</h2>
        </article>

        {/* Item Admin*/}
        <article className="bg-gray text-white px-8 py-4 rounded-2xl">
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-4xl">1</p>
            <svg
              className="w-16 h-auto opacity-75"
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
          </div>
          <h2 className="font-medium text-2xl">Admin</h2>
        </article>
      </section>

      {/* Presensi Terbaru */}
      <section className="px-4 flex flex-col gap-2">
        <h2 className="font-medium text-2xl">Presensi Terbaru</h2>
        <PresensiTable />
      </section>
    </main>
  );
};

export default Admin;
