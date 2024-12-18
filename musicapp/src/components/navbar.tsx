"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
  <div
  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
    <Menu setActive={setActive}>
      <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item="HOME">
        </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="COURSES">
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/all-courses">All Courses</HoveredLink>
        <HoveredLink href="/basic-mtheory">Basic Music Theory</HoveredLink>
        <HoveredLink href="/adv-composition">Advance Composition</HoveredLink>
        <HoveredLink href="/song-writing">Song Writing</HoveredLink>
        <HoveredLink href="/music-production">Music Production</HoveredLink>
      </div>
      </MenuItem>
      <MenuItem
      setActive={setActive} active={active} item="SHOP">
        <div className="text-sm grid grid-cols-2 gap-10 p-4">
          <ProductItem
              title="Guitar"
              href="https://www.amazon.in/s?k=guitar"
              src="/guitarPNG.webp"
              description="The guitar is an instrument that can whisper or scream, laugh or cry, sing or shout. It's a voice, and in the hands of a master, it can speak volumes."
          />
          <ProductItem
              title="Piano"
              href="https://www.amazon.in/s?k=piano"
              src="/piano.png"
              description="The piano, with its 88 keys, is a universe of sound, capable of expressing every human emotion, from the deepest sorrow to the most exuberant joy."
          />
          <ProductItem
              title="Piano"
              href="https://www.amazon.in/s?k=piano"
              src="/piano.png"
              description="The piano, with its 88 keys, is a universe of sound, capable of expressing every human emotion, from the deepest sorrow to the most exuberant joy."
          />
          <ProductItem
            title="Guitar"
            href="https://www.amazon.in/s?k=guitar"
            src="/guitarPNG.webp"
            description="The guitar is an instrument that can whisper or scream, laugh or cry, sing or shout. It's a voice, and in the hands of a master, it can speak volumes."
          />
        </div>
      </MenuItem>
      <Link href={'/contact'}>
        <MenuItem setActive={setActive} active={active} item="CONTACT US">
        </MenuItem>
      </Link>
    </Menu>
    </div>
    );
}

export default Navbar;