import Image from "next/image";
export default function AP1() {
  return (
    <div className="flex w-full h-screen justify-center bg-[#FFF5FF]">
      <div className="flex flex-col">
        <div className="py-20">
          <Image
            src="https://i.ibb.co/tM81qXZ/Screen-Shot-2022-03-20-at-9-59-07-PM.png"
            alt=""
            width={480}
            height={320}
          />
        </div>

        <div className="w-[550px]">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Care4Share
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Skills
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">Javascript / Python</li>
            <li className="font-semibold text-base">React / Redux / NextJS</li>
            <li className="font-semibold text-base">
              Fastapi / Mysql / SQLAlchemy
            </li>
            <li className="font-semibold text-base">
              Firebase Auth / Fire storage
            </li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Project purpose
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              40% of these students do not live with their parents.
            </li>
            <li className="font-semibold text-base">
              There are a million of postsecondary students needs affordable
              rooms and good roommates.
            </li>
            <li className="font-semibold text-base">
              We want to provide the platform where students can find their
              roommates and the affordable rooms.
            </li>
          </ul>
        </div>

        <div className="w-[550px] pt-10">
          <p className="underline decoration-sky-500/30 text-2xl font-extrabold">
            Project description
          </p>
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              Students and landlords can login care4share web using google
              firebase Auth.
            </li>
            <li className="font-semibold text-base">
              Student can find rooms or roommates.
            </li>
            <li className="font-semibold text-base">
              landlords can regist room for rent.
            </li>
            <li className="font-semibold text-base">
              All users can report or ticket to admin.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
