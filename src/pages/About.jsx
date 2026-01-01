import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We pride ourselves on delivering exceptional quality in every repair and installation we undertake.'
    },
    {
      icon: Users,
      title: 'Expert Technicians',
      description: 'Our skilled professionals bring years of experience in electronics repair and home services.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'We understand the value of your time and ensure prompt service for all repairs and installations.'
    },
    {
      icon: Shield,
      title: 'Satisfaction Guaranteed',
      description: 'Your satisfaction is our priority, backed by quality workmanship and reliable service.'
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
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About QuickFixPro</h1>
          <p className="mt-4 text-xl text-gray-600">Your trusted partner for tech repairs and home maintenance services</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded with a passion for technology and home solutions, QuickFixPro has been serving the Bhubaneswar community with professional repair and maintenance services. We specialize in laptop repairs, desktop upgrades, projector installations, TV setups, and comprehensive home maintenance solutions including chimney services.
            </p>
            <p className="text-gray-600">
              Our journey began with a simple vision: to provide reliable, affordable, and fast repair services for both your electronics and home needs. Today, we're proud to be your one-stop solution for keeping your technology running smoothly and your home in perfect condition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              At QuickFixPro, our mission is to deliver exceptional repair and maintenance services with honesty, transparency, and technical expertise. We believe in building long-term relationships with our customers by providing reliable solutions that extend the life of your devices and maintain the comfort of your home.
            </p>
            <p className="text-gray-600">
              We're committed to using genuine parts, modern diagnostic tools, and proven techniques to ensure every repair meets the highest standards. Whether it's fixing your laptop, setting up your home theater, or servicing your chimney, we treat every job with the same level of care and professionalism.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;