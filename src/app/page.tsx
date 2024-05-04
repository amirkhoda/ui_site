import Careers from "@/components/careers";
import Hiring from "@/components/getHiring";
import Navbar from "@/components/navbar";
import SimpleSlider from "@/components/searchApply/AutoSlides";
import SearchApply from "@/components/searchApply/SearchApply";

export default function Home() {
  return (
    <>
      <Navbar />

      <SearchApply />
      <SimpleSlider />
      <Hiring />
      <Careers />
    </>
  );
}
