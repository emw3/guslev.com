import cn from "classnames";

export default function Timeline() {
  const timelineItems = [
    {
      year: "2015",
      technologies: ["Zoho CRM", "PHP", "Javascript", "Bootstrap", "Git"],
    },
    {
      year: "2016",
      technologies: ["Laravel", "Vue JS", "Vuex"],
    },
    {
      year: "2017",
      technologies: ["Salesforce Admin Certification"],
    },
    {
      year: "2018",
      technologies: ["Docker"],
    },
    {
      year: "2019",
      technologies: ["Tailwind CSS"],
    },
    {
      year: "2020",
      technologies: ["Flutter", "Vue JS", "React JS", "Redux"],
    },
    {
      year: "2021",
      technologies: ["Next JS"],
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex space-x-10">
            <div className={cn("w-12 -mt-3")}>
              <span
                className={cn(
                  "font-semibold  font-sans antialiased text-base sm:text-lg tracking-normal"
                )}
              >
                {item.year}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-zinc-900 dark:bg-slate-50"></div>
              <div className="w-px h-full bg-zinc-900/25 dark:bg-slate-50/25"></div>
            </div>
            <div className={cn("pb-8 -mt-3")}>
              <ul className={cn("list-none")}>
                {item.technologies.map((tech, index) => (
                  <li key={index}>
                    <span
                      className={cn(
                        "font-sans antialiased text-base sm:text-lg tracking-normal"
                      )}
                    >
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
