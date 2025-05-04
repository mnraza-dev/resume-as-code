import { Github, Linkedin, LucideTwitter } from 'lucide-react';
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-8 border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60 " >

      <div className="max-w-6xl mx-auto text-center">
        <p>

          &copy; 2025 Resume-as-Code. Built with ❤️ by <a href="https://github.com/mnraza-dev">MN Raza</a>.
        </p>

        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LucideTwitter className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer