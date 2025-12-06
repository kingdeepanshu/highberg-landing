import React from 'react';

const trainers = [
  {
    name: "Varinder Singh",
    role: "Head Coach",
    specialty: "Bodybuilding",
    exp: "12 Years Exp",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Rahul Mehta",
    role: "Strength Coach",
    specialty: "Powerlifting",
    exp: "8 Years Exp",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Fitness Trainer",
    specialty: "Fat Loss & Toning",
    exp: "6 Years Exp",
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Amit Kumar",
    role: "Functional Trainer",
    specialty: "CrossFit & Agility",
    exp: "5 Years Exp",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop"
  }
];

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-surface to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-logo uppercase tracking-wide">Meet Our Trainers</h2>
           <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Train with professionals who know how to build champions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-brand-surface border border-white/5 rounded-sm overflow-hidden group hover:border-brand-accent/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 text-xs font-bold bg-brand-accent text-white rounded-sm uppercase tracking-widest shadow-md">
                    {trainer.role}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">{trainer.name}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-4">{trainer.specialty}</p>
                <div className="text-xs font-bold text-brand-accent uppercase tracking-wider border-t border-white/10 pt-4">
                  {trainer.exp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;