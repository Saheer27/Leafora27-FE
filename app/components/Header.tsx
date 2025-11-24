"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Leafora27
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <Link
          href="/admin"
          className="hidden md:block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
        >
          Admin
        </Link>

        <Button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          ☰
        </Button>

        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/#services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/#gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="/booking" onClick={() => setOpen(false)}>
              Booking
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/admin" onClick={() => setOpen(false)}>
              Admin
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
