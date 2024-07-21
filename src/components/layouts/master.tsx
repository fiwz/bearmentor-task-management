import { useLocation } from "react-router-dom";
import ActivityProvider from "../../context/activity-context";

import Navigation from "./navigation";
import Section from "../section";
import { ActivityForm } from "../forms/activity-form";
import { Intro } from "../intro";
import ListView from "./list-view";

const Master = ({ children }: any) => {
  const location = useLocation();

  return (
    <>
      <ActivityProvider>
        <div className="container mx-auto mb-10 pb-5">
          {children}
          <Navigation></Navigation>
          <div className="px-5">
            <Intro></Intro>
            <ActivityForm></ActivityForm>

            {location.pathname.includes("/list") ? (
              <ListView></ListView>
            ) : (
              <Section></Section>
            )}
          </div>
        </div>
      </ActivityProvider>
    </>
  );
};

export default Master;
