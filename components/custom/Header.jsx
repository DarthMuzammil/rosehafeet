"use client";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import { useMenuContext } from "@/contexts/MenuContext";
import { navigationTabs } from "@/lib/homepage";

export default function Header() {
  const { isMenuOpen, setMenu } = useMenuContext();
  const pathname = usePathname()

  return (
    <header className="fixed w-full z-50 bg-white backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex flex-row">
            <Image
              src="/logo1.png"
              alt="Spa treatment"
              width={134}
              height={110}
            />
            <Image
              src="/logo2.svg"
              alt="Spa treatment"
              width={130}
              height={48}
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navigationTabs.map((item, index) => (
              <div key={item.displayname} className="flex flex-col">
                <a
                  href={`${item.path.toLowerCase()}`}
                  className={`relative text-[22px] text-gray-500 font-semibold hover:leading-[33px] hover:bg-gradient-to-r ${pathname === item.path ? ` bg-gradient-to-r from-[#2A3676] to-[#00A445] bg-clip-text text-transparent opacity-90 ` : ` `}  hover:from-[#2A3676] hover:to-[#00A445] hover:bg-clip-text hover:text-transparent hover:opacity-90 group`}
                >
                  {item.displayname}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#2A3676] to-[#00A445] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </div>
            ))}
          </nav>

          {/* Button */}
          <Button className="hidden md:inline-flex text-[22px] font-poppins font-semibold leading-[33px] bg-gradient-to-r from-[#2A3676] to-[#00A445] text-white px-6 py-2 rounded-md shadow-md hover:opacity-90">
            العربية
          </Button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={() => setMenu(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

