/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const Header = ({handleOpenModal}) => {
  return (
    <div className="relative overflow-hidden">
      <ExampleContent handleOpenModal={handleOpenModal}/>
      <FuzzyOverlay />
    </div>
  );
};

export const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/black-noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = ({handleOpenModal}) => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-3xl md:text-6xl font-black text-neutral-50">
      Professional Saytlar Uchun Ishonchli Hamkor
      </p>
      <p className="text-center text-neutral-400">
      Lyra – bu ishonch, sifat va muvaffaqiyat ramzi.✨
      </p>
      <div className="flex items-center justify-center gap-3">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Loyihalar
        </button>
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50" onClick={handleOpenModal}>
          Sinab ko'ring
        </button>
      </div>
    </div>
  );
};

export default Header;
