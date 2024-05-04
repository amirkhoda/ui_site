import Careers from "@/components/careers";
import Hiring from "@/components/getHiring";
import LatestJob from "@/components/latestJob";
import Navbar from "@/components/navbar";
import Offer from "@/components/offer";
import SimpleSlider from "@/components/searchApply/AutoSlides";
import SearchApply from "@/components/searchApply/SearchApply";
import TopJob from "@/components/topJob/indx";

export default function Home() {
  return (
    <>
      <SearchApply />
      <SimpleSlider />
      <Hiring />
      <Careers />
      <TopJob />
      <Offer />
      <LatestJob />
    </>
  );
}
