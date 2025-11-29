'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link"

export default function Navbar() {
  const pathname = usePathname();

  return pathname !== '/' && (
    <div className="mt-5">
      <Link className="text-lg font-bold hover:text-teal-400" href={"/"}>Home</Link>
    </div>
  )
}
