import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import pic1 from "../assets/pic1.jpg";


const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['A/5, Near Angana Resturant, Shahid Nagar, Bhubaneswar']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['9337249713', 'Mon-Sat: 9am-8pm']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['quickfixpro977@gmail']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday-Saturday: 9am-8pm', 'Sunday: Closed']
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-0 overflow-hidden flex items-center justify-center"
          >
            <img
              src={pic1}
              alt="Contact Visual"
              className="w-full h-full object-cover"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {contactInfo.map((info, index) => (
              <div key={info.title} className="bg-white rounded-xl shadow-lg p-6">
                <info.icon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;