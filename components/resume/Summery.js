export default function Summery() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center py-10">
        <div className="w-[550px]">
          <p className="underline decoration-sky-500/30 text-5xl font-extrabold">
            Summery
          </p>
        </div>
        <div className="w-[550px] pt-10">
          <ul className="list-disc pl-5">
            <li className="font-semibold text-base">
              Five year of experience as a developer
            </li>
            <li className="font-semibold text-base">
              Provided service for over 100,000 customers in five countries.
            </li>
            <li className="font-semibold text-base">
              Managed software serviced in more 50 institutions, including
              university and general hospitals
            </li>
            <li className="font-semibold text-base">
              Bachelor’s in Computer Engineering from University of Kyung Hee
              (2018)
            </li>
            <li className="font-semibold text-base">
              Bachelor’s in Electronics and Radio Engineering from University of
              Kyung Hee (2018)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
