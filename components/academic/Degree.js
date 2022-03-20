import ProjectCard from "../project/Card";

export default function Degrees() {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-[#FFF5FF]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[550px] pt-20">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Educational
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            GeorgeBrown College / Advanced Deploma
          </p>
          <p className="font-light text-xs">
            September. 2019. - April. 2022. Toronto, Canada.
          </p>
          <p className="font-semibold text-base py-2">
            - COMPUTER PROGRAMMER ANALYST
          </p>
        </div>

        <div className="w-[550px] pt-10">
          <p className="font-bold text-2xl py-2">
            Kyung Hee University / Bachelor of Engineering
          </p>
          <p className="font-light text-xs">
            March. 2009. - February. 2018. Suwon, Korea.
          </p>
          <p className="font-semibold text-base pt-2"> - Double major</p>
          <p className="font-semibold text-base py-2">
            - Electronics and Radio Engineering , Computer Engineering
          </p>
        </div>

        <div className="w-[550px] pt-20">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Academic Projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
