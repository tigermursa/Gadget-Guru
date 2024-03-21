const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar */}
      {children}
      {/* footer */}
    </div>
  );
};

export default CommonLayout;
