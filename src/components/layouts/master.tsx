import Navigation from "./navigation";
import Section from "../section";
import { ActivityForm } from "../forms/activity-form";
import ActivityProvider from "../../context/activity-context";

const Master = ({ children }: any) => {
  return (
    <>
      <ActivityProvider>
        <div className="container mx-auto mb-10 pb-5 w-screen">
          {children}
          <Navigation></Navigation>
          <ActivityForm></ActivityForm>
          <Section></Section>
        </div>
      </ActivityProvider>
    </>
  );
};

export default Master;
