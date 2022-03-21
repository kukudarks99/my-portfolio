import ProjectCard from "./Card";

export default function AcademicrojectList() {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-[#FFF5FF]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[550px] pt-20">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          <ProjectCard
            link="academic/ap1"
            imgLink="https://i.ibb.co/tM81qXZ/Screen-Shot-2022-03-20-at-9-59-07-PM.png"
            title="Care4share"
            description="Capston Project. Develope for room share and find roommate application"
          />
          <ProjectCard
            link="academic/ap2"
            imgLink="https://i.ibb.co/XWrd48P/react-logo.jpg"
            title="Employee Manager"
            description="Develop the employee management system using React JS."
          />

          <ProjectCard
            link="academic/ap3"
            imgLink="https://i.ibb.co/Fn9s3gT/aspnet-featured-png.png"
            title="Sports Pro"
            description="Develop the Sport team member management system using ASP.NET"
          />

          <ProjectCard
            link="academic/ap4"
            imgLink="https://i.ibb.co/N9wJ01L/spring-boot-logo.png"
            title="Spring Web"
            description="Develop the Web Page using the spring boot JAVA."
          />
          <ProjectCard
            link="academic/ap5"
            imgLink="https://i.ibb.co/mNTVNJY/Hero-Homepage-2880x1200.jpg"
            title="Salary Calculator"
            description="Develop the android salary calculator."
          />
        </div>
      </div>
    </div>
  );
}
