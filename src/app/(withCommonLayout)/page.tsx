import FlashSale from "@/Components/UI/Home/FlashSale/FlashSale";
import HeroCarousel from "@/Components/UI/Home/HeroCarousel/HeroCarousel";
import TopCategories from "@/Components/UI/Home/TopCategories/TopCategories";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <FlashSale />
      <TopCategories />
    </div>
  );
};

export default HomePage;
