"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function ContactFooterSection() {
  const whatsappNumber = "+6282389053355"; // Replace with actual WhatsApp number
  const whatsappMessage =
    "Hi! I'm interested in collaborating with you. Let's connect!";
  const email = "ramadayani550@gmail.com";
  const phone = "+6282389053355";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/ramadayaniyani",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@ramadayani52",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-black text-white py-16 sm:py-20">
      <motion.div
        className="w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Let's collaborate and create something amazing
          </p>

          <motion.div className="space-y-2 mb-8" variants={containerVariants}>
            <motion.p
              className="text-gray-300 text-sm sm:text-base"
              variants={itemVariants}
            >
              Have a project in mind?
            </motion.p>
            <motion.p
              className="text-gray-300 text-sm sm:text-base"
              variants={itemVariants}
            >
              Want to collaborate on something creative?
            </motion.p>
            <motion.p
              className="text-gray-300 text-sm sm:text-base"
              variants={itemVariants}
            >
              Let's bring your ideas to life together.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          variants={itemVariants}
        >
          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-sm transition-colors duration-300 text-sm sm:text-base shadow-lg"
            aria-label="Contact via WhatsApp"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">Contact via WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </motion.button>

          {/* Email Button */}
          <motion.button
            onClick={handleEmailClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-sm transition-colors duration-300 text-sm sm:text-base shadow-lg"
            aria-label="Send Email"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(107, 114, 128, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden sm:inline">Send Email</span>
            <span className="sm:hidden">Email</span>
          </motion.button>
        </motion.div>

        <motion.p
          className="text-gray-500 text-xs sm:text-sm text-center mb-8 sm:mb-10"
          variants={itemVariants}
        >
          ⚡ Quick response guaranteed!
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="border-t border-gray-800 pt-8 sm:pt-10"
          variants={itemVariants}
        >
          <motion.div
            className="text-center mb-6 sm:mb-8"
            variants={containerVariants}
          >
            <h3 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">
              Follow My Work
            </h3>
            <motion.div
              className="flex justify-center gap-6 sm:gap-8"
              variants={containerVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors group"
                  aria-label={social.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium">{social.name}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center text-gray-400 text-xs sm:text-sm space-y-2 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center justify-center gap-2"
              variants={itemVariants}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition-colors"
              >
                {email}
              </a>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-2"
              variants={itemVariants}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors"
              >
                {phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Footer Copyright */}
          <motion.div
            className="text-center text-gray-500 text-xs sm:text-sm border-t border-gray-800 pt-6"
            variants={itemVariants}
          >
            <p>© {new Date().getFullYear()} Ramadayani. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
