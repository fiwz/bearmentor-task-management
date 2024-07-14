import Navigation from "./navigation";
import Section from "../section";
// import ActivityCard from "../card";
import { ActivityForm } from "../forms/activity-form";

const Master = ({ children }: any) => {
  return (
    <>
      <div className="container mx-auto mb-10 pb-5 w-screen">
        {children}
        <Navigation></Navigation>
        <ActivityForm></ActivityForm>
        <Section>{/* <ActivityCard></ActivityCard> */}</Section>
      </div>
    </>
  );
};

export default Master;
