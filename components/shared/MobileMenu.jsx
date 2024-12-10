"use client"

import * as React from "react"
import { X } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function MobileMenu({ isOpen, onClose }) {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Salt Cave", href: "saltcave" },
    { title: "Sulphur Pool", href: "poolarea" },
    { title: "Fun Activities", href: "gamearea" },
    { title: "Wellness & Spa", href: "wellness" },
    { title: "About", href: "about" },
    { title: "Contact", href: "contact" },
    { title: "Careers", href: "careers" },
  ]

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className="fixed inset-y-0 right-0 z-50 h-full w-full bg-white p-6 shadow-lg sm:max-w-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo2.svg"
              alt="Rose Hafeet Logo"
              className="h-50 w-50"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Rose Hafeet</span>
              <span className="text-sm text-muted-foreground">Al Ain</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 4 }}
                className="relative"
              >
                <a
                  href={item.href}
                  className="flex items-center rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-muted"
                  onClick={onClose}
                >
                  {item.title}
                </a>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </motion.div>
  )
}

