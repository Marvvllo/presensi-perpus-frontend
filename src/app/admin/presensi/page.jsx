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
          className="rounded-md px-4 py-1 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
        >
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
