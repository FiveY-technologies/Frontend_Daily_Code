import React, { useState } from 'react';
import logoImage from '../Assets/5y_Logo.jpeg'
import MapComponent from './Display';

import FuelDataTable from './fueldatatable';


function MapDisplay() {
    const [isOpen, setIsOpen] = useState(false);
    const [showFuelTable, setShowFuelTable] = useState(false);
    const [isTrackClicked, setIsTrackClicked] = useState(true)
    const handleTrackClick = () => {
        setIsTrackClicked(false);
      };
    const handleFuelClick = () => {
        setShowFuelTable(true);
    }

    return (
        <div className="bg-gray-100 font-family-karla flex">
<aside className={`relative bg-gradient-to-r from-sky-950 via-sky-950 to-sky-950 text-white h-screen w-64 ${isOpen ? 'block' : 'hidden'} sm:block shadow-xl`}>

                
            <div className="relative w-full; flex justify-end">
                        <button onClick={() => setIsOpen(!isOpen)} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 m-auto hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                            <img src={logoImage} alt="Profile" />
                        </button>
                        <button onClick={() => setIsOpen(false)} className={isOpen ? 'h-full w-full fixed inset-0 cursor-default' : 'hidden'}></button>
                        {isOpen && (
                            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                                <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                                <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                                <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                            </div>
                        )}
                    </div>
                   
            <nav className="text-white text-base font-semibold pt-3">
            <a
  href="index.html"
  className={`flex items-center py-4 pl-6 nav-item ${
    isTrackClicked
      ? 'bg-white text-sky-950' 
      : 'bg-sky-950 text-white' 
  }`}
  onClick={handleTrackClick}
>
            <i className={`fa fa-location-arrow mr-3 ${isTrackClicked ? 'text-sky-950' : 'text-white'}`} aria-hidden="true"></i>
                Track
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-sticky-note mr-3"></i>
                Reports
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-table mr-3"></i>
                Statistics
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-align-left mr-3"></i>
                Scheduled
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-tablet-alt mr-3"></i>
                Fms
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-calendar mr-3"></i>
                Calendar
            </a>
        </nav>
        
            </aside>
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                
                <header className={`w-full bg-sidebar py-5 px-6 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="flex items-center justify-between">
                        <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-white-300">Admin</a>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
                            {isOpen ? (
                                <i className="fas fa-times"></i>
                            ) : (
                                <i className="fas fa-bars"></i>
                            )}
                        </button>
                    </div>
                    <nav className="flex flex-col pt-4">
                    <a
  href="index.html"
  className={`flex items-center py-4 pl-6 nav-item ${
    isTrackClicked
      ? 'bg-white text-sky-950' 
      : 'bg-sky-950 text-white' 
  }`}
  onClick={handleTrackClick}>
                    <i className={`fa fa-location-arrow mr-3 ${isTrackClicked ? 'text-sky-950' : 'text-white'}`} aria-hidden="true"></i>
                    Track
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sticky-note mr-3"></i>
                    Reports
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-table mr-3"></i>
                    Statistics
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-align-left mr-3"></i>
                    Scheduled
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-tablet-alt mr-3"></i>
                    Fms
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-calendar mr-3"></i>
                    Calendar
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-cogs mr-3"></i>
                    Support
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    My Account
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt  mr-3"></i>
                    Sign Out
                </a>
                    </nav>
                </header>
                <div className="w-full border-t">
                <nav className="relative bg-gradient-to-r from-sky-950 via-sky-950 to-sky-900">
       
            
                
                    
                        <div className="  flex justify-between space-x-4">
                            <a href="#home" className="text-white hover:text-white px-3 py-3 border-r-2  text-sm font-medium">Tracking</a>
                            <a href="#about" className="text-white hover:text-white px-3 py-3 border-r-2  text-sm font-medium">Reports</a>
                            <a href="#contact" className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium">Analytics</a>
                            <a href="#home" className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium">Statistics</a>
                            <a href="#home" className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium">Sensor</a>
                            <a
                                href="#home"
                                className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium"
                                onClick={handleFuelClick} // Handle Fuel item click
                            >
                                Fuel
                            </a>
                            <a href="#home" className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium">Performance</a>
                            <a href="#home" className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium">WarriorDemo</a>
                            <a href="#home" className="text-white hover:text-white px-3 py-3 border-r-2 text-sm font-medium">NF</a>
                            <a href="#home" className="text-white hover:text-white px-3 py-3 text-sm font-medium">Exit</a>
        </div>
    </nav>
    <main className=" h-screen bg-white">
                {showFuelTable ? (
                    <FuelDataTable /> // Show the Fuel table if showFuelTable is true
                ) : (
                    <MapComponent /> // Show the MapComponent by default
                )}
            </main>
                </div>
            </div>
        </div>
    );
}

export default MapDisplay;
