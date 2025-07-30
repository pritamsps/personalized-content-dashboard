import React from "react";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";
import { useState, useEffect } from "react";

interface DashboardLayoutProps{
    children:React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
      const [searchTerm, setSearchTerm] = useState('');
      const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
      useEffect(() => {
        const timerId = setTimeout(() => {
          setDebouncedSearchTerm(searchTerm);
        }, 500);
        return () => {
          clearTimeout(timerId);
        };
      }, [searchTerm]);
      useEffect(() => {
        if (debouncedSearchTerm !== '') {
          console.log('Debounced search term:', debouncedSearchTerm);
        }
      }, [debouncedSearchTerm]);
      const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Content Dashboard</h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search content..."
                className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              <DarkModeToggle />
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">JS</div>
            </div>
          </header>
          <main className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
            <aside className="w-full md:w-64 bg-gray-200 dark:bg-gray-800 p-4 shadow-lg md:min-h-full">
              <h2 className="text-xl font-semibold mb-4">Navigation</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="block p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Personalized Feed
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="block p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Trending Section
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Settings
                  </Link>
                </li>
              </ul>
            </aside>
            <section className="flex-1 p-6 overflow-auto">
              {children}
            </section>
          </main>
        </div>
      );
    };

    export default DashboardLayout;
    