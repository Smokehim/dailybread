"use client";
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export function Branches() {
  const branches = [
    {
      name: 'Matero Branch',
      location: 'Lusaka, Zambia',
      address: 'P.O. Box 9012, Tema',
      phone: '+233 24 345 6789',
      email: 'tema@dailybread.org',
      pastor: {
        name: 'Evangelist Zulu',
        image: '/zulu.jpg'
      }
    },
    {
      name: 'Kabanana Branch',
      location: 'Kabanana, Zambia',
      address: 'P.O. Box 5678, KABANANA',
      phone: '+233 24 234 5678',
      email: 'kumasi@dailybread.org',
      pastor: {
        name: 'Pastor Tembo',
        image: '/pastor-sarah.jpg'
      }
    },
    {
      name: 'Matero Branch',
      location: 'Lusaka, Zambia',
      address: 'P.O. Box 9012, Tema',
      phone: '+233 24 345 6789',
      email: 'tema@dailybread.org',
      pastor: {
        name: 'Evangelist Zulu',
        image: '/pastor-michael.jpg'
      }
    }
  ];

  return (
    <section id="branches" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-red-700 bg-clip-text text-transparent mb-4">
            Our Branches
          </h2>
          <p className="text-gray-600 text-xl">Find a branch near you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-300" />

              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden">
                {/* Top Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500" />

                {/* Pastor Image */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={branch.pastor.image}
                    alt={branch.pastor.name}
                    className="w-50 h-50 rounded-lg object-cover border-2 border-blue-200 shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{branch.pastor.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">Branch Pastor</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{branch.location}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4 flex-shrink-0 text-green-500" />
                    <a href={`tel:${branch.phone}`} className="hover:text-blue-600 transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4 flex-shrink-0 text-red-500" />
                    <a href={`mailto:${branch.email}`} className="hover:text-blue-600 transition-colors break-all">
                      {branch.email}
                    </a>
                  </div>
                </div>

                {/* Map Preview with Gradient */}
                <div className="relative h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Navigation className="h-10 w-10 text-white/70" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
