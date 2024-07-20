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
  markCompleteActivity: Function;
  showSelectedActivity: Activity | null;
};

export const ActivityContext = React.createContext<ActivityContextType | null>(
  null
);

const ActivityProvider = ({ children }: any) => {
  const [activities, setActivities] = React.useState<Activity[]>([
    // {
    //   id: crypto.randomUUID() as string,
    //   name: "Dummy Activity Title",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus placeat iste voluptatem molestias",
    //   tags: ["tag1", "tag2"],
    //   startDate: dayjs(),
    //   endDate: dayjs().add(7, "day"),
    //   status: ACTIVITY_STATUS.active,
    // },
  ]);

  const [showSelectedActivity, setShowSelectedActivity] =
    React.useState<Activity | null>(null);

  const addActivity = (activity: Activity) => {
    const newActivity = {
      id: crypto.randomUUID() as string,
      name: activity.name,
      description: activity.description ? activity.description : "",
      tags: activity.tags ? activity.tags : [],
      startDate: dayjs(activity.startDate),
      endDate: dayjs(activity.endDate),
      status: ACTIVITY_STATUS.active,
    };
    setActivities([newActivity, ...activities]);
  };

  const updateActivity = (id: string) => {
    activities.filter((activity) => {
      if (activity.id === id) {
        activity.status = ACTIVITY_STATUS.inactive;
        setActivities(activities);
      }
    });
  };

  const markCompleteActivity = (id: string) => {
    const filteredActivities = activities.filter((activity) => {
      if (activity.id === id) {
        activity.status = ACTIVITY_STATUS.inactive;
      }
      return activity;
    });
    setActivities(filteredActivities);
  };

  const showActivity = (id: string) => {
    const selectedActivity = activities.find((activity) => activity.id === id);

    if (selectedActivity) setShowSelectedActivity(selectedActivity);

    return selectedActivity;
  };

  const deleteActivity = (id: string) => {
    const filteredActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(filteredActivities);
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        addActivity,
        updateActivity,
        showActivity,
        deleteActivity,
        markCompleteActivity,
        showSelectedActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
