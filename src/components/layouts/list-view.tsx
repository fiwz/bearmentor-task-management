import Navigation from "./navigation";

const ListView = ({ children }: any) => {
  return (
    <>
      <div className="container mx-auto mb-10 pb-5 w-screen">
        {children}
        <Navigation></Navigation>
        <p>Hello! This is List View Pages</p>
      </div>
    </>
  );
};

export default ListView;
