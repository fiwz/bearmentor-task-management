import Navigation from "./navigation";
import Section from "../section";
import ActivityCard from "../card";
import { ActivityForm } from "../forms/activity-form";

const Master = ({ children }) => {
  return (
    <>
      <div className="container mx-auto mb-10 pb-5 w-screen">
        Hello this is container
        {children}
        <Navigation></Navigation>
        <ActivityForm></ActivityForm>
        <Section>
          <ActivityCard></ActivityCard>
        </Section>
      </div>
    </>
  );
};

export default Master;
