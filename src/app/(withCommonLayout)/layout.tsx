import NavigationBar from "@/Components/Shared/NavigationBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default layout;
