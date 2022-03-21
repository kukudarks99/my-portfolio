import CoverLetter from "../components/resume/CoverLetter";
import ResumeBio from "../components/resume/ResumeBio";
import Skills from "../components/resume/Skills";
import Summery from "../components/resume/Summery";

export default function Resume() {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-[#FFDFCA]">
      <div className="flex flex-col justify-center items-center">
        <ResumeBio />
        <Summery />
        <Skills />
        <CoverLetter />
      </div>
    </div>
  );
}
