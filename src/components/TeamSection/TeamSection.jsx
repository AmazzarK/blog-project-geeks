import React from "react";

export default function TeamSection() {
  const team = [
    {
      name: "Kaoutar Amazzar",
      role: "Founder",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      bgColor: "bg-purple-100",
    },
    {
      name: "Imane",
      role: "Co - Founder",
      photo: "https://randomuser.me/api/portraits/women/21.jpg",
      bgColor: "bg-blue-100",
    },
    {
      name: "Amine",
      role: "HR Manager",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
      bgColor: "bg-green-100",
    },
    {
      name: "Hamza",
      role: "Product Manager",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Youssef",
      role: "Sales Manager",
      photo: "https://randomuser.me/api/portraits/men/80.jpg",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white flex flex-col justify-center items-center py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-900 px-4">
          Welcome our talented team
        </h2>
        
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed">
          Distinguished by a blend of diverse talents, our exceptional team thrives on unity,
          innovation, and shared values, forging a collective journey towards unparalleled success.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 px-2">
          {team.map(({ name, role, photo, bgColor }) => (
            <div
              key={name}
              className="flex flex-col items-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] max-w-[180px] mx-2 mb-4"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full ${bgColor} flex items-center justify-center mb-3 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                <img
                  src={photo}
                  alt={name}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full object-cover border-2 border-white shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-1 text-center leading-tight">
                {name}
              </h3>
              
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 text-center">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}