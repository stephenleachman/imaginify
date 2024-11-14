'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"

const MobileNav = () => {

  const pathname = usePathname()

  return (
    <header className="header">
     <Link href="/" className="flex items-center gap-2 md:py-2">
      <Image 
        src="/assets/images/logo-text.svg"
        alt="Logo"
        width={180}
        height={28}
      />
     </Link>

     <nav className="flex gap-2">
      <SignedIn>
        <UserButton />

        <Sheet>
          <SheetTrigger>
            <Image 
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content">
           <>
           <DialogTitle>
            <Image 
              src="/assets/images/logo-text.svg"
              alt="Logo"
              height={23}
              width={152}
            />
            </DialogTitle>
             <ul className="header-nav_elements mt-5">
              {navLinks.map((link) => {
                const isActive = link.route === pathname 

                return (
                  <li key={link.route} className={`${ isActive && 'gradient-text'} py-18 flex whitespace-nonwrap text-dark-700`}>
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="Navbar Logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

           </>
          </SheetContent>
        </Sheet>
      </SignedIn>

        <SignedOut >
          <Button asChild className="button bg-purple-gradient bg-cover"> 
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav
