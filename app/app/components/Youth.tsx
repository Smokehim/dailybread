import { Users2, Heart, BookOpen, Music, Gamepad2, Trophy } from 'lucide-react';

export function Youth() {
  const activities = [
    {
      icon: BookOpen,
      title: 'Bible Study',
      description: 'Deep dive into God\'s Word every Tuesday',
      time: 'Tuesdays, 6:00 PM',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Music,
      title: 'Worship & Praise',
      description: 'Express your love through music and dance',
      time: 'Sundays, 4:00 PM',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users2,
      title: 'Youth Fellowship',
      description: 'Connect with other young believers',
      time: 'Saturdays, 3:00 PM',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Gamepad2,
      title: 'Fun Activities',
      description: 'Games, sports, and recreational events',
      time: 'Monthly Events',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Serve and impact your community',
      time: 'Monthly Outreach',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Leadership Training',
      description: 'Develop your skills and potential',
      time: 'Quarterly Programs',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="youth" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full mb-6">
            <Users2 className="h-6 w-6 text-yellow-300" />
            <span className="font-bold text-lg">Youth Ministry</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Empowering
            </span>
            <br />
            The Next Generation
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join a vibrant community of young believers passionate about God, growing in faith, and making a difference
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${activity.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition duration-300`} />

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl mb-4 shadow-2xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-white/80 mb-3 leading-relaxed">{activity.description}</p>
                  <div className={`inline-block bg-gradient-to-r ${activity.color} px-4 py-2 rounded-full text-sm font-bold`}>
                    {activity.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Us?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Whether you're new to faith or have been walking with God for years, there's a place for you in our youth ministry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full font-bold shadow-2xl hover:shadow-yellow-500/50 transition-all">
                Join Youth Group
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/50 text-white rounded-full font-bold hover:bg-white/30 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
