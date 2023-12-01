"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

const Login = () => {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // Handle response if necessary
    // const data = await response.json();
    console.log(formData.get("email"));
  }

  return (
    <main class="grid grid-cols-2">
      <section>
        <Image
          class="h-screen object-fill"
          src="/images/login-img.png"
          width={2885}
          height={2880}
          alt=""
        />
      </section>

      <form onSubmit={(e) => onSubmit(e)}>
        <section class="h-full flex flex-col gap-2 justify-center items-center px-32">
          <Image
            class="w-full h-auto"
            src="/images/logo-md.png"
            width={900}
            height={240}
            alt=""
          />
          <h1 class="font-medium text-2xl">Presensi Perpustakaan</h1>

          {/* Email Form Group */}
          <div class="w-full flex flex-col">
            <label class="text-lg font-medium" for="email">
              Email
            </label>
            <input
              class="bg-light-gray px-2 py-1 rounded-md outline outline-1 outline-black"
              type="text"
              name="email"
              id="email"
              placeholder="Masukkan email..."
            />
          </div>

          {/* Password Form Group */}
          <div class="w-full flex flex-col">
            <label class="text-lg font-medium" for="password">
              Password
            </label>
            <input
              class="bg-light-gray px-2 py-1 rounded-md outline outline-1 outline-black"
              type="password"
              name="password"
              id="password"
              placeholder="Masukkan password..."
            />
          </div>

          {/* Submit Button */}
          <button
            class="w-full rounded-md py-0.5 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
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
