import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Monitor as Desktop, Projector, Tv, Wrench } from 'lucide-react';
import Carousel from '../components/Carousel';
import ChimneyIcon from '../components/Icons/MonitorCustom';


const services = [
  {
    icon: Laptop,
    title: 'Laptop Repair',
    description: 'Professional laptop service including motherboard repair, OS troubleshooting, heating issues, and performance optimization.',
    features: ['Motherboard service', 'OS installation', 'Performance tuning', 'Data backup']
  },
  {
    icon: Desktop,
    title: 'Desktop Repair',
    description: 'Complete desktop diagnostic and repair service including component replacement, system upgrades, and OS fixes.',
    features: ['Component upgrades', 'Hardware service', 'System installation', 'Virus removal']
  },
  {
    icon: Projector,
    title: 'Projector Service',
    description: 'Projector installation, calibration, and repair services for homes, offices, and institutions.',
    features: ['Installation', 'Lamp replacement', 'Alignment', 'Calibration']
  },
  {
    icon: Tv,
    title: 'TV Repair',
    description: 'Television board repair, screen issues, sound failures, and installation services for all brands.',
    features: ['Board repair', 'Sound service', 'Wall mounting', 'Picture issues']
  },
  {
    icon: Wrench,
    title: 'Home Services',
    description: 'General home maintenance and handyman services handled by experienced technicians.',
    features: ['Repair jobs', 'Installations', 'Maintenance', 'Fast support']
  },
  {
    icon: ChimneyIcon,
    title: 'Chimney Service',
    description: 'Chimney deep cleaning, servicing, and installation to ensure proper suction and safe kitchen operation.',
    features: ['Deep cleaning', 'Motor service', 'Filter cleaning', 'New installation']
  },
];

const Services = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">Professional solutions for your custom needs</p>
        </div>

        <Carousel/>

        <div className="grid gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <service.icon className="h-8 w-8 text-purple-600" />
                  <h2 className="ml-4 text-2xl font-semibold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
