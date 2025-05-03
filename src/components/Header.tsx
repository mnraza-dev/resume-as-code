import React from 'react'
import {Link}  from 'react-router-dom'

const Header : React.FC= () => {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
      <div className="text-3xl font-semibold text-white">
        <Link to="/">Resume-as-Code</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default Header