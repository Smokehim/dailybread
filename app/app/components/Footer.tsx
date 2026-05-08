import { Share2, Camera, Video, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Calendar', href: '#calendar' },
    { name: 'Youth', href: '#youth' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/1.png" alt="Daily Bread Outreach Ministry" className="h-16 w-16" />
              <div>
                <div className="font-bold text-xl">Daily Bread Outreach</div>
                <div className="font-bold text-xl">Ministry International</div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Spreading the Word of God and transforming lives through faith, hope, and love.
              Join us as we impact communities and nations with the gospel of Jesus Christ.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Share2 className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Camera className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Video className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>
            © {currentYear} Daily Bread Outreach Ministry International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
