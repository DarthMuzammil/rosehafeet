import localFont from "next/font/local";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { MenuContextProvider } from "@/contexts/MenuContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rosehafeet",
  description: "Bin Horaiz Holding Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuContextProvider>
          <Header />
          {children}
          <Footer />
        </MenuContextProvider>
      </body>
    </html>
  );
}
