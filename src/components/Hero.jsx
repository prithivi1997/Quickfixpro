import React from 'react';
import { motion } from 'framer-motion';
import ChimneyIcon from "../components/Icons/MonitorCustom";


import { Laptop, Monitor, Projector, Tv, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your One-Stop Shop for</span>
            <span className="block text-purple-600">Tech repair & Home Services</span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            From laptop to home maintenance.we deliver solutions with professional quality and care.
          </p>

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                  text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 
                  md:py-4 md:text-lg md:px-10"
              >
                Start Creating
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Laptop, title: 'Laptop', description: 'Professional laptop repair and maintenance services' },
              { icon: Monitor, title: 'Desktop', description: 'Expert desktop computer repair and upgrades' },
              { icon: Projector, title: 'Projector', description: 'Projector repair and installation services' },
              { icon: Tv, title: 'TV', description: 'Television repair and setup services' },
              { icon: ChimneyIcon, title: 'Chimney', description: 'Professional chimney repair, cleaning, and installation services' },
              { icon: Wrench, title: 'Home Services', description: 'Professional home repair and maintenance' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center">
                  <feature.icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
