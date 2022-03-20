import Image from "next/image";
import backgroundImage from "/public/assets/images/landscape/5.svg";

export default function Landing() {
  return (
    <div
      className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span className="font-bold text-xl uppercase text-yellow-400">
              Hi! I am Taehyong Koo!
            </span>
            <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
              Building Mobile and Web Application
            </h1>
            <a
              href="#"
              className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
