export default function Skills() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center py-10">
        <div className="w-[550px]">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Skills
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              Android / iOS mobile programming
            </li>
            <li className="font-semibold text-base">
              C++ / Java OOP programming
            </li>
            <li className="font-semibold text-base">
              Python Server programming
            </li>
            <li className="font-semibold text-base">Database SQL</li>
            <li className="font-semibold text-base">
              Interpersonal Communication
            </li>
            <li className="font-semibold text-base">Teamwork</li>
            <li className="font-semibold text-base">Leadership</li>
            <li className="font-semibold text-base">Time management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
