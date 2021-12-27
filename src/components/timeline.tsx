import cn from 'classnames'

const Timeline = () => {
  const timelineItems = [
    {
      year: '2015',
      technologies: [
        'PHP',
        'Javascript',
        'Bootstrap',
        'MySQL',
        'Git',
        'Zoho CRM',
      ],
    },
    {
      year: '2016',
      technologies: ['Laravel', 'Vue JS', 'Vuex', 'REST API'],
    },
    {
      year: '2017',
      technologies: ['Salesforce Admin Certification'],
    },
    {
      year: '2018',
      technologies: ['Docker', 'Sass'],
    },
    {
      year: '2019',
      technologies: ['Tailwind CSS'],
    },
    {
      year: '2020',
      technologies: ['React JS', 'Redux', 'TypeScript', 'Flutter'],
    },
    {
      year: '2021',
      technologies: ['Next JS', 'Cypress'],
    },
  ]
  return (
    <>
      <div className={cn('"flex flex-col"')}>
        {timelineItems.map((item, index) => (
          <div key={index} className={cn('flex space-x-10')}>
            <div className={cn('w-12 -mt-3')}>
              <span
                className={cn(
                  'font-semibold leading-loose text-zinc-900 dark:text-slate-50'
                )}
              >
                {item.year}
              </span>
            </div>
            <div className={cn('flex flex-col items-center')}>
              <div className={cn('w-2 h-2 bg-zinc-900 dark:bg-slate-50')}></div>
              <div
                className={cn('w-px h-full bg-zinc-900/25 dark:bg-slate-50/25')}
              ></div>
            </div>
            <div className={cn('pb-8 -mt-2')}>
              <ul
                className={cn(
                  'list-none leading-relaxed text-zinc-900 dark:text-slate-50'
                )}
              >
                {item.technologies.map((tech, index: number) => (
                  <li key={index}>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Timeline
