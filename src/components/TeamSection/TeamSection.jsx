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
      name: "Imane Ryad",
      role: "Co-Founder",
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
      name: "Hamza Basfaou",
      role: "Product Manager",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Youssef A",
      role: "Sales Manager",
      photo: "https://randomuser.me/api/portraits/men/80.jpg",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <section id="team" className="w-full bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12">
          Welcome our talented team
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {team.map(({ name, role, photo, bgColor }) => (
            <div
              key={name}
              className="flex flex-col items-center"
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${bgColor} flex items-center justify-center mb-3 shadow-sm hover:shadow-md transition-shadow`}>
                <img
                  src={photo}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white hover:scale-105 transition-transform"
                />
              </div>
              
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 text-center">
                {name}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}