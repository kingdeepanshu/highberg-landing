import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-darker text-white selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Trainers />
        <Pricing />
        <Transformations />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default App;

// import React from 'react';

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-900">
//       <div className="text-center space-y-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white">
//           Tailwind + TS ✅
//         </h1>
//         <p className="text-slate-300 text-lg">
//           Ab tu apna Highberg layout yahan laga sakta hai.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;
