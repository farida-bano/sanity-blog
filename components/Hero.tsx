// components/Hero.tsx

const Hero = () => {
     return (
       <section
         className="relative bg-cover bg-center text-white py-32"
         style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
       >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative container mx-auto text-center px-4">
           <h2 className="text-4xl md:text-6xl font-semibold mb-4">Welcome to Our Cooking Blog</h2>
           <p className="text-lg md:text-xl mb-6">Discover amazing recipes, cooking tips, and food stories!</p>
           <a href="/recipes" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
             Get Started
           </a>
         </div>
       </section>
     );
   };
   
   export default Hero;
   