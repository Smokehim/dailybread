import { Heart, Target, Eye, Cross, Globe2, Users2 } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: Heart,
      title: 'Our Mission',
      description: 'To spread the Word of God, win souls for Christ, and raise disciples who will impact their communities and the world with the gospel of Jesus Christ.',
      gradient: 'from-red-500 to-pink-500',
      iconBg: 'bg-red-500',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a leading light in the body of Christ, raising a generation of believers who walk in righteousness, power, and divine purpose.',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500',
    },
    {
      icon: Target,
      title: 'Our Values',
      description: 'Faith in God, love for one another, integrity in all we do, excellence in service, and commitment to the Great Commission.',
      gradient: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-500',
    },
  ];

  const stats = [
    { icon: Cross, value: '30+', label: 'Years of Ministry' },
    { icon: Users2, value: '1000+', label: 'Members' },
    { icon: Globe2, value: '3', label: 'Branches' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-red-400 to-pink-400 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-red-700 bg-clip-text text-transparent mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Daily Bread Outreach Ministry International is a Christ-centered church dedicated to
            spreading the gospel and transforming lives through the power of God's Word.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl border border-white/50 hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-2xl mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="group relative">
                {/* Glowing Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300`} />

                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  {/* Icon with Gradient */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} rounded-b-3xl`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
