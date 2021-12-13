import cn from "classnames";

export default function Timeline() {
  const timelineItems = [
    {
      year: "2015",
      technologies: ["Zoho CRM", "PHP", "Javascript", "Bootstrap"],
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
      technologies: [""],
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
    <div className="py-8">
      <div className="flex flex-col">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex space-x-8">
            <div className={cn("w-12")}>{item.year}</div>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-zinc-900/25 dark:bg-slate-50/25"></div>
              <div className="w-px h-full bg-zinc-900/25 dark:bg-slate-50/25"></div>
            </div>
            <div>
              <ul>
                {item.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
