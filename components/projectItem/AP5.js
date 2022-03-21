import Image from "next/image";
export default function AP5() {
  return (
    <div className="flex w-full h-screen justify-center bg-[#FFF5FF]">
      <div className="flex flex-col">
        <div className="py-20">
          <Image
            src="https://i.ibb.co/mNTVNJY/Hero-Homepage-2880x1200.jpg"
            alt=""
            width={480}
            height={320}
          />
        </div>

        <div className="w-[550px]">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Mobile Salary Calculator
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Skills
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">JAVA / Android</li>
            <li className="font-semibold text-base">Android SDK</li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Project description
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              Mobile Salary Calculator developed by JAVA android system.
            </li>
            <li className="font-semibold text-base">
              Calculate overtime and normal working hours.
            </li>
            <li className="font-semibold text-base">
              Packaged by android signed apk and can be deployed by google
              playstore.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
