'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
   <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
  <Menu setActive={setActive}>
    <Link href={"page.tsx"}>
    <MenuItem setActive={setActive} active={active}
    item="Home">
      </MenuItem>
    </Link>
   <div className="flex flex-col space-y-4 text-sma">
    <MenuItem setActive={setActive} active={active}
    item="Projects">
    {/* <HoveredLink href="/coursec">Our Coursec</HoveredLink> */}
    <HoveredLink href="/coursec">All Projects</HoveredLink>
    <br />
    <br />
  <HoveredLink href="/coursec">LOGIN OR SIGN UP FORM</HoveredLink>
  <br />
  <br />
  <HoveredLink href="/coursec">OLX clone</HoveredLink>
    <br />
    <br />
    <HoveredLink href="/coursec">Todo App</HoveredLink>
    <br />
    <br />
    <HoveredLink href="/coursec">Calculater</HoveredLink>
    <br />
    <br />
    <HoveredLink target="_blank" href="https://abubakarbinzohiab.netlify.app/">Code Stodio</HoveredLink>
    <br />
    <br />
    <HoveredLink href="/coursec">Cola Next Website clone</HoveredLink>
    <br />
    <br />
    <HoveredLink href="/coursec">ATM</HoveredLink>
    <br />
    <br />
    <HoveredLink href="/coursec">Shed Hospital Form</HoveredLink>
    <br />
    <br />
    <HoveredLink href="/coursec">Saylani Website</HoveredLink>
    </MenuItem> 
   </div>
   <Link href={"Contact"}>
    <MenuItem setActive={setActive} active={active}
    item="Contact Us">
    </MenuItem>
  </Link>
  </Menu>

    </div>
  )
}

export default Navbar