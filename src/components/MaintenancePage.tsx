'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { assets } from '@/config/assets';
import { colors } from '@/config/colors';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const MaintenancePage = () => {
  return (
    <div 
      className="h-screen bg-white flex flex-col items-center justify-between overflow-hidden"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      <div className="flex flex-col items-center justify-between h-full px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center flex-1 w-full max-w-3xl mx-auto text-center space-y-6"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <Image 
              src={assets.logo} 
              alt="Projix Logo" 
              width={120}
              height={120}
              className="h-20 w-auto sm:h-24 md:h-28"
              priority
            />
          </div>

          {/* Lottie Animation */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <DotLottieReact
                src="https://lottie.host/ca65bbdf-b3dd-42e9-a762-050bfb216905/g8RzlWETDm.lottie"
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* French Message Only */}
          <div>
            <p 
              className="text-base sm:text-lg md:text-xl italic font-light leading-relaxed max-w-2xl"
              style={{ color: colors.primary }}
            >
              Nous construisons quelque chose d&apos;extraordinaire pour vous
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex justify-center">
            <div 
              className="px-5 py-2 rounded-full border-2 inline-flex items-center bg-white shadow-sm"
              style={{ 
                borderColor: colors.secondary
              }}
            >
              <span 
                className="font-medium text-xs sm:text-sm tracking-wide"
                style={{ color: colors.secondary }}
              >
                COMING SOON
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg shadow-sm border">
              <MdEmail 
                size={16} 
                style={{ color: colors.secondary }} 
              />
              <span 
                className="text-xs sm:text-sm font-medium"
                style={{ color: colors.tertiary }}
              >
                contact@projix.com
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg shadow-sm border">
              <MdPhone 
                size={16} 
                style={{ color: colors.secondary }} 
              />
              <span 
                className="text-xs sm:text-sm font-medium"
                style={{ color: colors.tertiary }}
              >
                +1 (514) 123-4567
              </span>
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons - Bottom */}
        <div className="flex justify-center pb-4">
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:opacity-80 shadow-sm"
              style={{ backgroundColor: colors.secondary }}
              aria-label="Follow us on Twitter"
            >
              <FaTwitter 
                size={16} 
                style={{ color: colors.white }} 
              />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:opacity-80 shadow-sm"
              style={{ backgroundColor: colors.secondary }}
              aria-label="Connect with us on LinkedIn"
            >
              <FaLinkedin 
                size={16} 
                style={{ color: colors.white }} 
              />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:opacity-80 shadow-sm"
              style={{ backgroundColor: colors.secondary }}
              aria-label="Follow us on Instagram"
            >
              <FaInstagram 
                size={16} 
                style={{ color: colors.white }} 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;