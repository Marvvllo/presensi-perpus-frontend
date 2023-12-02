"use client";

import useSessionStore from "@/stores/sessionStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditPresensi = ({ params }) => {
  const id = params.id;
  const router = useRouter();

  const [error, setError] = useState("");
  const token = useSessionStore((state) => state.token);

  // Get Presensi
  const { data, isLoading } = useQuery({
    queryKey: [`presensi-show-${id}`],
    queryFn: () =>
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/presensi/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });

  const presensi = data?.data?.presensi;

  // Update Presensi
  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/presensi/${id}`,
        // Konversi FormData menjadi x-www-form-urlencoded
        new URLSearchParams(formData),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Request PUT harus dalam bentuk x-www-form-urlencoded
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    },
    onError: (error, variables, context) => {
      console.log(error);
      // setError("Email atau password salah
      setError("Data tidak valid");
      setTimeout(() => {
        setError("");
      }, 3000);
    },
    onSuccess: (response, variables, context) => {
      // console.log(response?.data?.user?.name);
      setError("Success");
      router.push("/admin/presensi");
    },
  });

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    mutation.mutate(formData);
    console.log(formData);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex flex-col gap-2 py-2">
      <section className="flex flex-row justify-between items-center px-4">
        <h1 className="font-medium text-3xl">Tambah Presensi</h1>
      </section>
      <section className="px-4">
        <form onSubmit={(e) => onSubmit(e)} method="post">
          <div className="form-group flex flex-col">
            <label htmlFor="nis">NIS</label>
            <input
              defaultValue={presensi?.nis}
              className="p-2 rounded-md border border-primary border-solid placeholder-slate-500"
              type="number"
              name="nis"
              id="nis"
              placeholder="Masukkan NIS..."
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="nama">Nama</label>
            <input
              defaultValue={presensi?.nama}
              className="p-2 rounded-md border border-primary border-solid placeholder-slate-500"
              type="text"
              name="nama"
              id="nama"
              placeholder="Masukkan nama lengkap..."
            />
          </div>
          <div className="form-group flex flex-col w-40">
            <label htmlFor="tanggal">Tanggal</label>
            <input
              className="p-2 rounded-md border border-primary border-solid"
              type="date"
              defaultValue={presensi?.tanggal}
              name="tanggal"
              id="tanggal"
            />
          </div>
          <p>{error}</p>
          <button
            className="rounded-md px-4 py-0.5 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
            type="submit"
          >
            Simpan
          </button>
        </form>
      </section>
    </main>
  );
};

export default EditPresensi;
