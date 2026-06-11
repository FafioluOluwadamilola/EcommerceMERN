import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (

    <div className="bg-[#F7F7F9] dark:bg-slate-950 min-h-screen py-14 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
            Have questions about our products, orders, or services?
            Our support team is always ready to help you.
          </p>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-slate-600">

            <h2 className="text-2xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-7 dark:text-gray-100">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                  <Mail />
                </div>
    
                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-500">
                    support@techstore.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="bg-green-100 text-green-600 p-3 rounded-2xl">
                  <Phone />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-500">
                    +234 901 234 5678
                  </p>
                </div>

              </div>

              {/* Address */}
              <div className="flex items-start gap-4">

                <div className="bg-purple-100 text-purple-600 p-3 rounded-2xl">
                  <MapPin />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Address
                  </h3>

                  <p className="text-gray-500">
                    15 Admiralty Way, Lekki Phase 1, Lagos
                  </p>
                </div>

              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">

                <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">
                  <Clock />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-gray-500">
                    Mon - Sat: 9AM - 7PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-slate-600">

            <h2 className="text-2xl font-bold mb-8">
              Send Us a Message
            </h2>

            <div className="space-y-5">

              {/* Name */}
              <div>

                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 dark:border-slate-600 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:bg-slate-800 dark:text-white"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />

              </div>

              {/* Subject */}
              <div>

                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:border-slate-600 dark:bg-slate-800 dark:text-white  "
                />

              </div>

              {/* Message */}
              <div>

                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                />

              </div>

              {/* Button */}
              <button
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Contact;