import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUsers, faGlobe, faShieldAlt, faClock, faHeart, faAward, faHandshake, faStar, faQuoteLeft, faCalendarAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function About() {
   const navigate = useNavigate();
   const [counters, setCounters] = useState({ travelers: 0, airlines: 0, countries: 0, years: 0 });
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setIsVisible(true);
      const timer = setTimeout(() => {
         setCounters({ travelers: 1000000, airlines: 500, countries: 195, years: 5 });
      }, 500);
      return () => clearTimeout(timer);
   }, []);

   const testimonials = [
      { name: "Sarah Johnson", location: "New York", text: "AirTracker made my European vacation planning effortless. Best prices and amazing support!", rating: 5 },
      { name: "Michael Chen", location: "Singapore", text: "Booked 15+ flights through AirTracker. Never had any issues. Highly recommended!", rating: 5 },
      { name: "Emma Wilson", location: "London", text: "The user interface is so intuitive. Found the perfect flight in minutes!", rating: 5 }
   ];

   const timeline = [
      { year: "2019", title: "Founded", desc: "AirTracker was born with a vision to simplify air travel" },
      { year: "2020", title: "100K Users", desc: "Reached our first major milestone during challenging times" },
      { year: "2022", title: "Global Expansion", desc: "Partnered with 500+ airlines worldwide" },
      { year: "2024", title: "1M+ Travelers", desc: "Celebrating over a million happy customers" }
   ];

   return (
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen">
         {/* Hero Section */}
         <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h1 className="text-6xl font-bold text-gray-800 mb-6 animate-pulse">
                  <FontAwesomeIcon icon={faPlane} className="text-orange-600 mr-4 animate-bounce" />
                  About AirTracker
               </h1>
               <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Your trusted partner in making air travel simple, affordable, and accessible to everyone around the world.
               </p>
            </div>



            {/* Our Values */}
            <div className="mb-16">
               <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">Why Choose AirTracker?</h2>
               <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Experience the difference with our commitment to excellence</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
                     <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure Booking</h3>
                     <p className="text-gray-600 leading-relaxed">Bank-level encryption and secure payment processing protect your personal and financial information.</p>
                  </div>
                  
                  <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                     <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faClock} className="text-3xl text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-800">24/7 Support</h3>
                     <p className="text-gray-600 leading-relaxed">Our dedicated support team is available around the clock to assist with any travel needs or concerns.</p>
                  </div>
                  
                  <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
                     <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faGlobe} className="text-3xl text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Reach</h3>
                     <p className="text-gray-600 leading-relaxed">Access flights to 195+ countries with partnerships across 500+ airlines worldwide.</p>
                  </div>
                  
                  <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
                     <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faHeart} className="text-3xl text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-800">Best Prices</h3>
                     <p className="text-gray-600 leading-relaxed">AI-powered price comparison ensures you get the best deals and exclusive offers every time.</p>
                  </div>
               </div>
            </div>



            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-3xl shadow-2xl p-12">
               <FontAwesomeIcon icon={faRocket} className="text-6xl mb-6 animate-bounce" />
               <h2 className="text-5xl font-bold mb-6">Ready to Take Off?</h2>
               <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                  Join millions of satisfied travelers who trust AirTracker for their journey. Your next adventure is just a click away!
               </p>
               <div className="flex justify-center items-center space-x-12 mb-8">
                  <div className="text-center">
                     <FontAwesomeIcon icon={faUsers} className="text-5xl mb-3" />
                     <p className="text-xl font-semibold">Expert Team</p>
                  </div>
                  <div className="text-center">
                     <FontAwesomeIcon icon={faGlobe} className="text-5xl mb-3" />
                     <p className="text-xl font-semibold">Global Network</p>
                  </div>
                  <div className="text-center">
                     <FontAwesomeIcon icon={faHeart} className="text-5xl mb-3" />
                     <p className="text-xl font-semibold">Customer First</p>
                  </div>
               </div>
               <button 
                  onClick={() => navigate('/home')}
                  className="bg-white text-orange-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
               >
                  Start Your Journey Today
               </button>
            </div>
         </div>
      </section>
   );
}