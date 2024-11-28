'use client'
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useMenuContext } from "@/contexts/MenuContext"

export default function Header() {
  const {isMenuOpen, setMenu} = useMenuContext()
    return (
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
          <Image
            src="/logo.webp"
            alt="Spa treatment"
            width={40}
            height={40}
             />
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            <Button className="hidden md:inline-flex" variant="outline">Book Now</Button>
            <button className="md:hidden" onClick={() => setMenu(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    )
}