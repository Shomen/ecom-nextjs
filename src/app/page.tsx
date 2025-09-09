import Carousel from "../components/Carousel";
import HomeSecondSection from "../components/HomeSecondSection";
import HomeNewInSection from "../components/HomeNewInSection";
import HomeDealSection from "../components/HomeDealSection";

export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeSecondSection />
      <HomeNewInSection />
      {/* New deal section */}
      <HomeDealSection />
    </div>
  );
}
