import FooterPage from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";
import HeroCarousel from "@/Components/UI/Home/HeroCarousel/HeroCarousel";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <FooterPage />
    </>
  );
};

export default layout;
