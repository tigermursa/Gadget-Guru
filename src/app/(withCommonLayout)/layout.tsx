import NavigationBar from "../../Components/Shared/NavigationBar";
import FooterPage from "../../Components/Shared/Footer";

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
