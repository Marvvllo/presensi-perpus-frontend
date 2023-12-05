import PresensiTable from "@/components/PresensiTable";
import TableCount from "@/components/TableCount";
import React from "react";

const Admin = () => {
  return (
    <main className="flex flex-col gap-2 py-2">
      <section className="flex flex-row justify-between items-center px-4">
        <h1 className="font-medium text-3xl">Beranda</h1>
      </section>
      <TableCount />

      {/* Presensi Terbaru */}
      <section className="px-4 flex flex-col gap-2">
        <h2 className="font-medium text-2xl">Presensi Terbaru</h2>
        <PresensiTable />
      </section>
    </main>
  );
};

export default Admin;
