import React from "react";
import dayjs, { Dayjs } from "dayjs";

export const ACTIVITY_STATUS = {
  inactive: 0,
  active: 1,
  progress: 2,
};

export interface Activity {
  id: any;
  name: string;
  description: string;
  tags: string[];
  startDate: Dayjs;
  endDate: Dayjs;
  status: number;
}

// export interface ActivityContextType {}
export type ActivityContextType = {
  activities: Activity[];
  addActivity: Function;
  updateActivity: Function;
  showActivity: Function;
  deleteActivity: Function;
};

export const ActivityContext = React.createContext<ActivityContextType | null>(
  null
);

const ActivityProvider = ({ children }: any) => {
  const [activities, setActivities] = React.useState<Activity[]>([
    {
      id: crypto.randomUUID() as string,
      // name: formData.get("name") as string,
      name: "Coba Data Pertama",
      // description: formData.get("description") as string,
      // tags: inputTags ? inputTags.split(",") : [],
      // startDate: dayjs(formData.get("startDate") as string),
      // endDate: dayjs(formData.get("endDate") as string),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus placeat iste voluptatem molestias",
      tags: ["tag1", "tag2"],
      startDate: dayjs(),
      endDate: dayjs().add(7, "day"),
      status: ACTIVITY_STATUS.active,
    },
  ]);

  const addActivity = (activity: Activity) => {
    const newActivity = {
      // ...formObject,
      id: crypto.randomUUID() as string,
      // name: formData.get("name") as string,
      name: activity.name,
      // description: formData.get("description") as string,
      // tags: inputTags ? inputTags.split(",") : [],
      // startDate: dayjs(formData.get("startDate") as string),
      // endDate: dayjs(formData.get("endDate") as string),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus placeat iste voluptatem molestias",
      tags: ["tag1", "tag2"],
      startDate: dayjs(),
      endDate: dayjs().add(7, "day"),
      status: ACTIVITY_STATUS.active,
    };
    setActivities([...activities, newActivity]);
  };

  const updateActivity = (id: string) => {
    activities.filter((activity) => {
      if (activity.id === id) {
        activity.status = ACTIVITY_STATUS.inactive;
        setActivities(activities);
      }
    });
  };

  const showActivity = (id: string) => {
    const selectedActivity = activities.filter(
      (activity) => activity.id === id
    );
    return selectedActivity;
  };

  const deleteActivity = (id: string) => {
    const filteredActivity = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(filteredActivity);
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        addActivity,
        updateActivity,
        showActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
