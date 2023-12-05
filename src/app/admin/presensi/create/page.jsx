"use client";

import useSessionStore from "@/stores/sessionStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const CreatePresensi = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const token = useSessionStore((state) => state.token);

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/presensi`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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
      toast.success("Data berhasil ditambah.", {
        autoClose: 3000,
      });
      router.push("/admin/presensi");
    },
  });

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    mutation.mutate(formData);
  }

  return (
    <main className="flex flex-col gap-2 py-2">
      <button
        className="flex flex-row items-center gap-2 px-4 py-1 self-start"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Kembali
      </button>
      <section className="flex flex-row justify-between items-center px-4">
        <h1 className="font-medium text-3xl">Tambah Presensi</h1>
      </section>
      <form onSubmit={(e) => onSubmit(e)} method="post">
        <section className="px-4 flex flex-col gap-2">
          <div className="form-group flex flex-col">
            <label htmlFor="nis">NIS</label>
            <input
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
              defaultValue={new Date().toISOString().substring(0, 10)}
              name="tanggal"
              id="tanggal"
            />
          </div>
          <p>{error}</p>
          <button
            className="self-start rounded-md px-4 py-0.5 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
            type="submit"
          >
            Simpan
          </button>
        </section>
      </form>
    </main>
  );
};

export default CreatePresensi;
