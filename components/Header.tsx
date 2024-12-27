"use client";
import { useState } from "react";
import { FaHome, FaSearch, FaUtensils, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Cooking Blog Logo" className="w-32 h-25" />
          <h1 className="text-2xl font-bold">Cooking and Tips Blog</h1>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-gray-400 flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="/recipes" className="hover:text-gray-400 flex items-center space-x-2">
            <FaUtensils />
            <span>Recipes</span>
          </a>
          <a href="/search" className="hover:text-gray-400 flex items-center space-x-2">
            <FaSearch />
            <span>Search</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 px-6">
          <nav className="space-y-4">
            <a
              href="/"
              className="block py-2 hover:text-gray-400 flex items-center space-x-2"
              onClick={toggleMobileMenu}
            >
              <FaHome />
              <span>Home</span>
            </a>
            <a
              href="/recipes"
              className="block py-2 hover:text-gray-400 flex items-center space-x-2"
              onClick={toggleMobileMenu}
            >
              <FaUtensils />
              <span>Recipes</span>
            </a>
            <a
              href="/search"
              className="block py-2 hover:text-gray-400 flex items-center space-x-2"
              onClick={toggleMobileMenu}
            >
              <FaSearch />
              <span>Search</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

