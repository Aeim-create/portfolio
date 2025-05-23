"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop Now", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">StyleHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          <form className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-64 h-9 px-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
          </form>

          <div className="flex items-center space-x-2">
            <Link href="/account">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <span className="text-lg font-bold text-primary">StyleHub</span>
                </div>
                <Separator />
                <div className="flex flex-col space-y-4 py-4">
                  <form className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full h-9 px-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
                  </form>
                  <nav className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-base font-medium hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <Separator />
                <div className="flex flex-col space-y-3 py-4">
                  <Link href="/account" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>My Account</span>
                  </Link>
                  <Link href="/cart" className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 