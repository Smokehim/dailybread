import { Clock, Calendar, Moon, Users, Sparkles } from 'lucide-react';

export function ServiceTimes() {
  const services = [
    {
      icon: Calendar,
      title: 'Sunday Service',
      time: '11:00 AM – 12:30 PM',
      description: 'Join us for worship and fellowship',
      gradient: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: 'Prayer Meeting',
      time: 'SUNDAY 2:00 PM',
      description: ' PowerfuL prayer and worship service',
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500',
    },
    {
      icon: Moon,
      title: 'Bible Study ',
      time: 'SUNDAY 10:00 AM',
      description: 'Bible study and prayer meeting',
      gradient: 'from-purple-600 to-indigo-500',
      bgColor: 'bg-purple-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">Weekly Schedule</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-red-700 bg-clip-text text-transparent mb-4">
            Service Times
          </h2>
          <p className="text-gray-600 text-xl">Join us in worship and fellowship</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white mb-3 transition-colors">
                    {service.time}
                  </p>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {service.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white px-8 py-4 rounded-full shadow-xl">
            <Users className="h-6 w-6" />
            <span className="text-lg font-semibold">All are welcome! Come as you are</span>
          </div>
        </div>
      </div>
    </section>
  );
}
