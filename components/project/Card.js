import Image from "next/image";
import Link from "next/link";
export default function ProjectCard(props) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-60 cursor-pointer m-auto">
      <Link href={props.link}>
        <a className="w-full block h-full">
          <Image src={props.imgLink} alt="" width={240} height={160} />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium"></p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {props.title}
            </p>
            <p className="h-20 text-gray-400 dark:text-gray-300 font-light text-md">
              {props.description}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
