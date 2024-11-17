"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/custom/Logo";
import { pageNavigationItems } from "@/lib/constants/home";
import { LOGOURL } from "@/lib/constants/common";

function DesktopNavigation({textColor, textHoverColor}) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {pageNavigationItems.map((item) => (
        <Link
          key={item}
          href="#"
          className={` text-${textColor} hover:text-${textHoverColor} transition-colors`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}

function MobileNavigation({textColor, textHoverColor}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={`md:hidden p-0 text-${textColor} absolute right-4 top-1/2 transform -translate-y-1/2`}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-16">
            <Image
              src={LOGOURL}
              alt="Rose Hafeet Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <nav className="flex flex-col space-y-4">
          {pageNavigationItems.map((item) => (
            <Link
              key={item}
              href="#"
              className={`text-lg hover:text-${textHoverColor} transition-colors`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function CompanyName({CompanyName, textColor}) {
  return (
    <h2 className={`text-2xl font-bold ${textColor} hidden md:block absolute left-1/2 transform -translate-x-1/2`}>
      {CompanyName}
    </h2>
  );
}

export default function Header({backgroundColor="white", textColor="black", textHoverColor="red-400"}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-100">
      <div className={`container bg-${backgroundColor} mx-auto px-4`}>
        <div className="flex items-center justify-between h-20">
          <Logo />
          <CompanyName textColor={textColor} CompanyName={"RoseHafeet"} />
          <DesktopNavigation textColor={textColor} textHoverColor={textHoverColor} />
          <MobileNavigation textColor={textColor} textHoverColor={textHoverColor} />
        </div>
      </div>
    </header>
  );
}
