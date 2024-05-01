'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"


function Navbar({ className }: { className?: string }) {
   const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>

        {/* home */}
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
          </Link>

          {/* courses */}
            <MenuItem setActive={setActive} active={active} item="Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All courses</HoveredLink>
                <HoveredLink href="/courses">Voice Fundamentals</HoveredLink>
                <HoveredLink href="/courses">Percussion Techniques</HoveredLink>
                <HoveredLink href="/courses">Advanced Vocal Modulation</HoveredLink>
                <HoveredLink href="/courses">Islamic Music History</HoveredLink>
              </div>

            </MenuItem>

          {/* contact  */}
            <Link href={"/contact"}>
              <MenuItem setActive={setActive} active={active} item="Contact">
              </MenuItem>
          </Link>
                

      </Menu>
      </div>
  )
}
      



export default Navbar