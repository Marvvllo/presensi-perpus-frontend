import "./globals.css";
import TanstackProvider from "../providers/TanstackProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Presensi Perpustakaan | SMK Telkom Banjarbaru",
  description: "SMK Telkom Banjarbaru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>{children}</TanstackProvider>
        <ToastContainer
          position="bottom-right"
          theme="light"
          autoClose={500}
        />
      </body>
    </html>
  );
}
