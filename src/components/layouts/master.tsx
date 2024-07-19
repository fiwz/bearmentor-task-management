import Navigation from "./navigation";
import Section from "../section";
// import ActivityCard from "../card";
import { ActivityForm } from "../forms/activity-form";
import React, { useContext, useState } from "react";

export const ActivityContext = React.createContext<ActivityContextType | {}>(
  {}
);
export type ActivityContextType = {
  coba: string;
};
const ActivityProvider: any = ({ children }) => {
  const [coba, setCoba] = useState("halo");

  return (
    <ActivityContext.Provider value={{ coba, setCoba }}>
      {children}
    </ActivityContext.Provider>
  );
};

const Master = ({ children }: any) => {
  return (
    <>
      <div className="container mx-auto mb-10 pb-5 w-screen">
        {children}
        <ActivityProvider>
          <Navigation></Navigation>
          <ActivityForm></ActivityForm>
          <Section></Section>
        </ActivityProvider>
      </div>
    </>
  );
};

export default Master;
