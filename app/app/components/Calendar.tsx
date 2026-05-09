"use client";
import { useState } from 'react';
import { Calendar as CalendarIcon, Users, Sparkles } from 'lucide-react';

export function Calendar() {
  const [activeTab, setActiveTab] = useState<'church' | 'youth'>('church');

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0-11
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  // Dynamically calculate days in month and starting day
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday

  const churchEvents = [
    { date: '8', title: 'Midweek Service', time: '06:00 PM' },
    { date: '10', title: 'Overnight Prayer', time: '10:00 PM' },
    { date: '15', title: 'Leadership Meeting', time: '02:00 PM' },
    { date: '22', title: 'Prayer Conference', time: '06:00 PM' },
  ];

  // Add Sunday Service for every Sunday
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    if (date.getDay() === 0) {
      churchEvents.push({
        date: i.toString(),
        title: 'Sunday Service',
        time: '08:00 AM',
      });
    }
  }

  // Sort events by date
  churchEvents.sort((a, b) => parseInt(a.date) - parseInt(b.date));

  const youthEvents = [
    { date: '6', title: 'Youth Bible Study', time: '04:00 PM' },
    { date: '13', title: 'Youth Fellowship', time: '03:00 PM' },
    { date: '20', title: 'Youth Outreach', time: '10:00 AM' },
    { date: '27', title: 'Youth Camp Planning', time: '05:00 PM' },
  ];

  const events = activeTab === 'church' ? churchEvents : youthEvents;

  const monthYearString = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  // Year Theme configuration
  const yearTheme = "Year of Transformation"; // Change this to update the year theme

  return (
    <section id="calendar" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">Events &amp; Programs</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-red-700 bg-clip-text text-transparent mb-4">
            Church Calendar
          </h2>
          <p className="text-gray-600 text-xl">Stay updated with our events and activities</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('church')}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg ${
              activeTab === 'church'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CalendarIcon className="h-5 w-5" />
            Church Events
          </button>
          <button
            onClick={() => setActiveTab('youth')}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg ${
              activeTab === 'youth'
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-xl'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users className="h-5 w-5" />
            Youth Events
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3 shadow-md">
                  Theme: {yearTheme}
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {monthYearString}
                </h3>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-bold text-gray-700 py-2 text-sm md:text-base">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Days of the month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const hasEvent = events.some((e) => e.date === day.toString());
                  const event = events.find((e) => e.date === day.toString());
                  const isToday = day === currentDay;

                  return (
                    <div
                      key={day}
                      className={`aspect-square p-2 rounded-xl border-2 transition-all cursor-pointer ${
                        isToday
                          ? 'border-blue-900 bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg'
                          : hasEvent
                          ? activeTab === 'church'
                            ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 shadow-md'
                            : 'border-red-300 bg-gradient-to-br from-red-50 to-pink-100 hover:from-red-100 hover:to-pink-200 shadow-md'
                          : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                      title={event ? `${event.title} - ${event.time}` : ''}
                    >
                      <div className={`text-xs md:text-sm font-bold ${isToday ? 'text-white' : 'text-gray-700'}`}>
                        {day}
                      </div>
                      {hasEvent && (
                        <div className={`text-xs mt-1 font-bold ${
                          isToday
                            ? 'text-white'
                            : activeTab === 'church'
                            ? 'text-blue-700'
                            : 'text-red-700'
                        }`}>
                          •
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Event List */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {events.map((event, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                activeTab === 'church'
                  ? 'from-blue-600 to-purple-600'
                  : 'from-red-600 to-pink-600'
              } rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-300`} />

              <div className={`relative p-5 rounded-2xl border-2 shadow-lg ${
                activeTab === 'church'
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'
                  : 'bg-gradient-to-br from-red-50 to-pink-100 border-red-200'
              }`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-lg ${
                      activeTab === 'church'
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700'
                        : 'bg-gradient-to-br from-red-600 to-pink-600'
                    }`}
                  >
                    {event.date}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{event.title}</div>
                    <div className="text-sm text-gray-600 font-medium">
                      {event.time} • {currentDate.toLocaleString('en-US', { month: 'short' })} {event.date}, {currentYear}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events Gallery */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-red-700 bg-clip-text text-transparent mb-4">
              Past Events Gallery
            </h3>
            <p className="text-gray-600 text-lg">Memories from our previous gatherings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Easter Sunday Celebration", date: "April 2026", image: "/1.png" },
              { title: "Youth Conference", date: "March 2026", image: "/FB_IMG_1770408916779.jpg" },
              { title: "Worship Night", date: "February 2026", image: "/1.png" },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-400">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e2e8f0' width='400' height='300'/%3E%3Ctext fill='%2364748b' font-family='sans-serif' font-size='20' dy='10' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-blue-300 text-sm font-semibold mb-1">{item.date}</p>
                  <h4 className="text-white text-xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
