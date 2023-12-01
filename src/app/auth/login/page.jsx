"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useSessionStore from "@/app/stores/sessionStore";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const setUser = useSessionStore((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: (credentials) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        credentials
      );
    },
    onError: (error, variables, context) => {
      // console.log(error.response?.data?.data?.name[0])
      setError("Email atau password salah.");
      setTimeout(() => {
        setError("");
      }, 3000);
    },
    onSuccess: (response, variables, context) => {
      setUser({
        name: response?.data?.data?.nama,
        token: response?.data?.access_token,
      });

      console.log(response?.data?.user?.name);
      setError("Success");
      router.push("/");
    },
  });

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    if (
      formData.get("email") == "" ||
      formData.get("password") == ""
    ) {
      setError("Mohon isi informasi anda.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    mutation.mutate(formData);
  }

  return (
    <main className="grid grid-cols-2">
      <section>
        <Image
          className="h-screen object-fill"
          src="/images/login-img.png"
          width={2885}
          height={2880}
          alt=""
        />
      </section>

      <form onSubmit={(e) => onSubmit(e)} method="post">
        <section className="h-full flex flex-col gap-2 justify-center items-center px-32">
          <Image
            className="w-full h-auto"
            src="/images/logo-md.png"
            width={900}
            height={240}
            alt=""
          />
          <h1 className="font-medium text-2xl">
            Presensi Perpustakaan
          </h1>

          {/* Email Form Group */}
          <div className="w-full flex flex-col">
            <label className="text-lg font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="bg-light-gray px-2 py-1 rounded-md outline outline-1 outline-black"
              type="text"
              name="email"
              id="email"
              placeholder="Masukkan email..."
            />
          </div>

          {/* Password Form Group */}
          <div className="w-full flex flex-col">
            <label className="text-lg font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="bg-light-gray px-2 py-1 rounded-md outline outline-1 outline-black"
              type="password"
              name="password"
              id="password"
              placeholder="Masukkan password..."
            />
          </div>

          <p className="self-start text-sm text-red-600">{error}</p>

          {/* Submit Button */}
          <button
            className="w-full rounded-md py-0.5 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
            type="submit"
          >
            Login
          </button>
        </section>
      </form>
    </main>
  );
};

export default Login;
