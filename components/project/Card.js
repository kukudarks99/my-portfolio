import Image from "next/image";
export default function ProjectCard() {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-60 cursor-pointer m-auto">
      <a href="#" className="w-full block h-full">
        <Image
          src="https://dummyimage.com/240x160/636363/ffffff"
          alt=""
          width={240}
          height={160}
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-indigo-500 text-md font-medium"></p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            New Mac is here !
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            The new supermac is here, 543 cv and 140 000$. This is best racing
            computer about 7 years on...
          </p>
        </div>
      </a>
    </div>
  );
}
