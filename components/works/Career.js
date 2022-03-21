import CareerItem from "./CareerItem";

export default function Career() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[550px] pt-20">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Professional
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            Hmart / Part-time Programmer
          </p>
          <p className="font-light text-xs">
            September. 2020 - Now , Toronto, Canada
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li className="font-semibold text-base">
              Developer of mobile messenger and natural language processing A.I.
            </li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            Works Mobile Corporation / Intern
          </p>
          <p className="font-light text-xs">
            July. 2017 - August. 2017, Seongnam, Korea
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li className="font-semibold text-base">
              Developer of mobile messenger and natural language processing A.I.
            </li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            SDEnternet Inc. / Programmer
          </p>
          <p className="font-light text-xs">
            February. 2014 - August. 2016, Seoul, Korea
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li className="font-semibold text-base">
              Developer of mobile shooting game named ‘BeetleWing’
            </li>
            <li className="font-semibold text-base">
              ‘Beetlewing’ gaming available in Korea, the United States, Japan,
              China, Vietnam and Brazil
            </li>
            <li className="font-semibold text-base">
              Developer of mobile strategy simulation game named ‘Project K’
            </li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            NetBlue Inc. / Lead Programmer
          </p>
          <p className="font-light text-xs">
            September. 2011 - February. 2014, Daegu, Korea
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li className="font-semibold text-base">
              Developer of computerized cognitive rehabilitation equipment for
              the treatment of Dementia
            </li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            Amusant Startup Company / Programmer
          </p>
          <p className="font-light text-xs">
            January. 2011 - September 2011, Seoul, Korea
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li className="font-semibold text-base">
              Developer of ‘MusicMaker’ mobile application.
            </li>
            <li className="font-semibold text-base">
              A program that can analyze a person’s voice and compose music
              automatically.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
