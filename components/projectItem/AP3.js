import Image from "next/image";
export default function AP3() {
  return (
    <div className="flex w-full h-screen justify-center bg-[#FFF5FF]">
      <div className="flex flex-col">
        <div className="py-20">
          <Image
            src="https://i.ibb.co/Fn9s3gT/aspnet-featured-png.png"
            alt=""
            width={480}
            height={320}
          />
        </div>

        <div className="w-[550px]">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Sports Pro
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Skills
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">ASP.NET / C#</li>
            <li className="font-semibold text-base">Bootstrap</li>
            <li className="font-semibold text-base">MongoDB / Mongoose</li>
            <li className="font-semibold text-base">Node / Express</li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Project description
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              Sport team member management system developed by ASP.NET
            </li>
            <li className="font-semibold text-base">
              Frontend design framework used Bootstrap.
            </li>
            <li className="font-semibold text-base">
              Create, Read, Update, Delete member data in mongoDB
            </li>
            <li className="font-semibold text-base">
              NodeJS Express used to develop for RESTful API.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
