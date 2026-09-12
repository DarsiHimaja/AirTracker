import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPlaneUp, faPhone, faEnvelope, faMapMarkerAlt, faHeart, faShieldAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center mb-6 group">
                            <div className="relative">
                                <FontAwesomeIcon 
                                    icon={faLocationArrow} 
                                    className="text-4xl text-orange-500 group-hover:text-orange-400 transition-all duration-300 group-hover:rotate-12" 
                                />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="ml-4">
                                <h2 className="font-bold text-5xl bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Air</h2>
                                <h2 className="text-xl font-semibold text-gray-300 -mt-2">Tracker</h2>
                            </div>
                        </Link>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            Your trusted partner in making air travel simple, affordable, and accessible. 
                            Connecting millions of travelers to their dream destinations worldwide.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faShieldAlt} className="mr-2 text-green-400" />
                                <span>Secure Booking</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-400" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/home" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group py-1">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                    <span className="text-sm sm:text-base">Home</span>
                                </Link>
                            </li>
                        
                
                        </ul>
                    </div>

                    
                </div>
                
        

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="flex items-center mb-6 lg:mb-0">
                            <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
                            <span className="text-gray-300">
                                ©  AirTracker. Made with love for travelers worldwide.
                            </span>
                        </div>
                        
                        {/* Social Media Links */}

                    </div>
                </div>
            </div>
        </footer>
    );
}
