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

export type ActivityContextType = {
  activities: Activity[];
  addActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}


export const TodoContext = React.createContext<null>(null);

const ActivityProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [activities, setActivities] = React.useState([
    {
      id: crypto.randomUUID() as string,
      name: 'Dummy 1',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus placeat iste voluptatem molestias",
      tags: ["tag1", "tag2"],
      startDate: dayjs(),
      endDate: dayjs().add(7, "day"),
      status: ACTIVITY_STATUS.active,
    },
    {
      id: crypto.randomUUID() as string,
      name: 'Dummy 2',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus placeat iste voluptatem molestias",
      tags: ["tag1", "tag2"],
      startDate: dayjs(),
      endDate: dayjs().add(7, "day"),
      status: ACTIVITY_STATUS.active,
    },
  ]);
}