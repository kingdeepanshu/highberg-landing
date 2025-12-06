import React from 'react';

const transformations = [
  { name: "Rohit Verma", weight: "Lost 15kg", time: "5 Months", imgBefore: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop", imgAfter: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop" },
  { name: "Suman Deep", weight: "Gained Muscle", time: "3 Months", imgBefore: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop", imgAfter: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=600&auto=format&fit=crop" },
  { name: "Amit Singh", weight: "Lost 20kg", time: "6 Months", imgBefore: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop", imgAfter: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop" },
];

const Transformations: React.FC = () => {
  return (
    <section id="transformations" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-logo uppercase tracking-wide">Real Transformations</h2>
           <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">See what our members have achieved with dedication and our guidance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="bg-brand-surface border border-white/10 rounded-sm overflow-hidden hover:border-brand-accent transition-colors group">
              <div className="flex h-72">
                <div className="w-1/2 relative">
                  <img src={item.imgBefore} alt="Before" className="w-full h-full object-cover grayscale" />
                  <div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">Before</div>
                </div>
                <div className="w-1/2 relative border-l border-brand-accent">
                  <img src={item.imgAfter} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 right-0 bg-brand-accent px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">After</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white uppercase">{item.name}</h3>
                <p className="text-brand-accent text-sm font-bold mt-1 uppercase tracking-wider">
                  {item.weight} in {item.time}
                </p>
                <p className="text-gray-500 text-sm mt-3 italic border-t border-white/5 pt-3">"The diet plan was the game changer for me."</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;