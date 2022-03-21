import ProjectCard from "./Card";

export default function WorkProjectList() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[550px] pt-20">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          <ProjectCard
            link="works/1"
            imgLink="https://dummyimage.com/240x160/8c8c8c/fff"
            title="title"
            description="description"
          />
          <ProjectCard
            link="works/1"
            imgLink="https://dummyimage.com/240x160/8c8c8c/fff"
            title="title"
            description="description"
          />
          <ProjectCard
            link="works/1"
            imgLink="https://dummyimage.com/240x160/8c8c8c/fff"
            title="title"
            description="description"
          />
          <ProjectCard
            link="works/1"
            imgLink="https://dummyimage.com/240x160/8c8c8c/fff"
            title="title"
            description="description"
          />
          <ProjectCard
            link="works/1"
            imgLink="https://dummyimage.com/240x160/8c8c8c/fff"
            title="title"
            description="description"
          />
        </div>
      </div>
    </div>
  );
}
