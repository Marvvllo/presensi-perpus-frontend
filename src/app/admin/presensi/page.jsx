import React from "react";
import PresensiTable from "@/components/PresensiTable";
import Link from "next/link";

const Presensi = () => {
  return (
    <main className="flex flex-col gap-2 py-2">
      <section className="flex flex-row justify-between items-center px-4">
        <h1 className="font-medium text-3xl">Presensi</h1>
        <Link
          href="/admin/presensi/create"
          className="inline-flex flex-row gap-2 rounded-md px-4 py-1 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Tambah
        </Link>
      </section>

      {/* Tabel Presensi */}
      <section className="px-4">
        <PresensiTable />
      </section>
    </main>
  );
};

export default Presensi;
