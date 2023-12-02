import "./globals.css";
import TanstackProvider from "../providers/TanstackProvider";

export const metadata = {
  title: "Presensi Perpustakaan | SMK Telkom Banjarbaru",
  description: "SMK Telkom Banjarbaru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
