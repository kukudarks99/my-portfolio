import Image from "next/image";
import Link from "next/link";
import bioBackgroudImg from "/public/assets/images/landscape/7.svg";

export default function Bio() {
  return (
    <div
      className="flex w-full h-screen items-center"
      style={{
        backgroundImage: `url(${bioBackgroudImg.src})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-20">
        <div className="w-full flex flex-col items-center justify-between relative z-10">
          <p className="flex flex-col items-center font-extrabold text-6xl text-center md:text-8xl text-white">
            Creative Programmer
          </p>
          <p className="flex flex-col max-w-2xl text-center items-center font-extrabold text-2xl mt-6 text-gray-800">
            Mobile developer looking for a position in the development team,
            where I can apply my five years of developing experience,
            Objective-oriented programming, Android, iOS, Web development skills
            to develop applications.
          </p>
          <Link href="/academic">
            <a className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10">
              Showcases
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
