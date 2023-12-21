const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1>{children}</h1>
    </div>
  );
};

export default Layout;
