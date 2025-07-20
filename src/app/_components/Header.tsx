"use client";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur shadow-sm rounded-b-xl ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center text-lg font-bold text-blue-700 hover:text-blue-900 transition select-none "
        >
          Movie Explorer
        </Link>
      </div>
    </header>
  );
};

export default Header;
