interface Activity {
  name: string;
  description: string;
  tags: string[];
  // startDate: Date;
  // endDate: Date;
  startDate: string;
  endDate: string;
  isCompleted: boolean;
}

function ActivityCard(activityItem: Activity) {
  return (
    <>
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{activityItem.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
function ActivityList(activity: Activity) {
  let list = [
    {
      name: activity.name,
      description: "restock refrigerator",
      tags: ["weekly"],
      startDate: "2024-07-01 10:00:00",
      endDate: "2024-07-01 11:00:00",
      isCompleted: false,
    },
    {
      name: "Workout",
      description: "",
      tags: ["weekly"],
      startDate: "2024-07-01 10:00:00",
      endDate: "2024-07-01 11:00:00",
      isCompleted: false,
    },
    {
      name: "Gaming",
      description: "",
      tags: ["weekly"],
      startDate: "2024-07-01 10:00:00",
      endDate: "2024-07-01 11:00:00",
      isCompleted: false,
    },
    {
      name: "Cooking",
      description: "",
      tags: ["weekly"],
      startDate: "2024-07-01 10:00:00",
      endDate: "2024-07-01 11:00:00",
      isCompleted: false,
    },
  ];

  return list.map((listItem, id) => (
    <ActivityCard
      key={id}
      name={listItem.name}
      description={listItem.description}
      tags={listItem.tags}
      startDate={listItem.startDate}
      endDate={listItem.endDate}
      isCompleted={listItem.isCompleted}
    />
  ));
}
export { ActivityList };
