import React from 'react'
import {Link}  from 'react-router-dom'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const Header : React.FC = () => {
  return (
    <header className="w-full border-b px-6 py-4">
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
  )
}

export default Header