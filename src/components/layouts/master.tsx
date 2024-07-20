import Navigation from "./navigation";
import Section from "../section";
import { ActivityForm } from "../forms/activity-form";
import ActivityProvider from "../../context/activity-context";

const Master = ({ children }: any) => {
  return (
    <>
      <ActivityProvider>
        <div className="container mx-auto mb-10 pb-5">
          {children}
          <Navigation></Navigation>
          <div className="px-5">
            <ActivityForm></ActivityForm>
            <Section></Section>
          </div>
        </div>
      </ActivityProvider>
    </>
  );
};

export default Master;
