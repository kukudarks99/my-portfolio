import Degrees from "../../components/academic/Degree";
import AcademicrojectList from "../../components/project/AcademicProjectList";

export default function Academic() {
  return (
    <>
      <div className="bg-[#FFF5FF]">
        <div className="container mx-auto py-20 min-h-screen">
          <Degrees />
          <AcademicrojectList />
        </div>
      </div>
    </>
  );
}
