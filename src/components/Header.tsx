import React from 'react'
import {Link}  from 'react-router-dom'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MoonIcon } from 'lucide-react';

const Header : React.FC = () => {
  return (
    <header className="sticky top-0 left-0 z-50 backdrop-blur supports-[backdrop-blur]:bg-white/60 supports-[backdrop-blur]: w-full border-b px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Resume-as-Code</Link>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <Link to="/" className="hover:underline">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/pricing" className="hover:underline">Pricing</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about" className="hover:underline">About</Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/" className=" text-yellow-400">
            <MoonIcon/>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
  )
}

export default Header