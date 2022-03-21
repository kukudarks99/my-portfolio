import Image from "next/image";
export default function AP4() {
  return (
    <div className="flex w-full h-screen justify-center bg-[#FFF5FF]">
      <div className="flex flex-col">
        <div className="py-20">
          <Image
            src="https://i.ibb.co/N9wJ01L/spring-boot-logo.png"
            alt=""
            width={480}
            height={320}
          />
        </div>

        <div className="w-[550px]">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Spring Boot Web Page
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Skills
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">JAVA</li>
            <li className="font-semibold text-base">Spring / Spring Boot</li>
            <li className="font-semibold text-base">JPA</li>
            <li className="font-semibold text-base">Bootstrap5</li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Project description
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              Web Page with login system and board developed by Spring Boot
            </li>
            <li className="font-semibold text-base">
              All member data is stored in database and CRUD using JPA.
            </li>
            <li className="font-semibold text-base">
              Frontend design framework used Bootstrap5
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
