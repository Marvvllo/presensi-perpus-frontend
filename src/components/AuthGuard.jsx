"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import useSessionStore from "@/stores/sessionStore";

export default function isAuth(Component) {
  return function isAuth(props) {
    const token = useSessionStore((state) => state.token);
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        return router.push("/auth/login");
      }
    }, []);

    if (!token) {
      // return null;
    }

    return <Component {...props} />;
  };
}
