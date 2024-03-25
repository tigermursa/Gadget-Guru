import FlashSale from "../../Components/UI/Home/FlashSale/FlashSale";
import HeroCarousel from "../../Components/UI/Home/HeroCarousel/HeroCarousel";
import MostPopular from "../../Components/UI/Home/MostPopular/MostPopular";
import TopCategories from "../../Components/UI/Home/TopCategories/TopCategories";
import BrandsMarquee from "../../Components/UI/Marquee/BrandsMarquee";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="container mx-auto">
        <FlashSale />
        <TopCategories />
        <MostPopular />
        <BrandsMarquee />
      </div>
    </div>
  );
};

export default HomePage;
