import React from "react";
import Navigation from "./Navigation";

interface MainProps {
  // Define any props if needed, e.g., title: string;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <div>{children}</div>
    </>
  );
};

export default Main;
