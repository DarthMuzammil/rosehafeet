import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { MenuContextProvider } from "@/contexts/MenuContext";
import "./globals.css";
import { acme } from "./fonts";
import { LanguageContextProvider } from "@/contexts/LanguageContext";

export const metadata = {
  title: "Rosehafeet",
  description: "Bin Horaiz Holding Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={acme.className}>
        <MenuContextProvider>
          <LanguageContextProvider>
          <Header />
          {children}
          <Footer />
          </LanguageContextProvider>
        </MenuContextProvider>
      </body>
    </html>
  );
}
