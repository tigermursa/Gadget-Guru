import FooterPage from "@/Components/Shared/Footer";
import NavigationBar from "@/Components/Shared/NavigationBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto  ">
        {children}
      </div>
      <FooterPage/>
    </div>
  );
};

export default layout;
