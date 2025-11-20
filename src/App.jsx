import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useProgress } from "@react-three/drei";

const App = () => {
  const { progress } = useProgress();

  const [isReady, setIsRead] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsRead(true);
    }
  }, [progress]);

  console.log(progress);

  return (
    <>
      {!isReady && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          {/* Arka plan çubuğu (typo düzeltildi) */}
          <div className="relative h-1 overflow-hidden rounded-2xl w-60 bg-white/20">
            {/* Dol dolan çubuk (bu satırı doğru eklemişsiniz) */}
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl" id="home">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        {/*Projects*/}
        {/*Expreience*/}
        {/*Testimonial*/}
        <Footer />
      </div>
    </>
  );
};

export default App;
