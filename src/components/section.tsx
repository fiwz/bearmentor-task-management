const SECTION_TYPE = [
  { id: "recent", title: "Recent Activities" },
  { id: "nearest-deadline", title: "Nearest Deadline" },
  { id: "complete", title: "Complete Activities" },
];

const Section = ({ children }) => {
  return (
    <>
      {SECTION_TYPE.map((type) => (
        <section className={`py-5 ${type.id}`}>
          <div
            className={`text-2xl text-secondary font-semibold py-3 ${type.id}`}
          >
            {type.title}
          </div>
          <div className="grid grid-cols-4 gap-4">{children}</div>
        </section>
      ))}
    </>
  );
};

export default Section;
