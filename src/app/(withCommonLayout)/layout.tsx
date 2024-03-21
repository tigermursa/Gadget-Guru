import NavigationBar from "@/Components/Shared/NavigationBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      <div className="border border-red-600 container mx-auto ">
        {children}
      </div>
    </div>
  );
};

export default layout;
