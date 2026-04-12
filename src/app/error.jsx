"use client";

import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-gray-100 p-6">

      <div className="text-center max-w-md">

        {/* Animated icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-7xl"
        >
          💥
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-red-500 mt-4"
        >
          Oops! Something Broke
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mt-3"
        >
          {error.message || "Unexpected error occurred. Please try again."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center mt-6"
        >

          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition shadow"
          >
            Retry 🔄
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow"
          >
            Go Home 🏠
          </button>

        </motion.div>

      </div>
    </div>
  );
}