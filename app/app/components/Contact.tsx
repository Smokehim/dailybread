"use client";
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const contact = [
                {
                  icon: Phone,
                  iconColor: 'from-green-500 to-emerald-500',
                  title: 'Phone',
                  content: ['+233 24 123 4567', '+233 30 234 5678']
                },
                {
                  icon: Mail,
                  iconColor: 'from-red-500 to-pink-500',
                  title: 'Email',
                  content: ['info@dailybread.org', 'contact@dailybread.org']
                },
                {
                  icon: MapPin,
                  iconColor: 'from-purple-500 to-indigo-500',
                  title: 'Address',
                  content: ['nyenyezi P.O. Box 1234 zambia']
                }
              ];
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20  w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
            <MessageCircle className="h-5 w-5" />
            <span className="font-semibold">Contact Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-red-700 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-xl">We'd love to hear from you</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {contact.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.iconColor} rounded-2xl flex-shrink-0 shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                    {item.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 font-medium">
                        {line}
                        {lineIndex < item.content.length - 1 && item.title === 'Address' && <br />}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="md:col-span-2 xl:col-span-1 h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10" />
                <div className="text-center relative z-10">
                  <MapPin className="h-16 w-16 text-white mx-auto mb-3 drop-shadow-lg" />
                  <p className="text-white font-bold text-lg">View on Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
