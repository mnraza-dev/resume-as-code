import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/context/theme-provider'
const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark";
  return (
    <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 '>
      <nav className='container mx-auto flex justify-between items-center px-4 h-16'>
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

            <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
              {isDark ? (
                <>
                  <SunIcon className='text-yellow-500 rotate-0 transition-all' size={20} />
                </>
              ) : (
                <>
                  <MoonIcon size={20} />
                </>
              )}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  )
}

export default Header