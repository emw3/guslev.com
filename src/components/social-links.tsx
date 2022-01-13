import cn from 'classnames'

const GithubLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 16"
    className="fill-neutral-800 dark:fill-slate-300 w-6 h-6 sm:w-8 sm:h-8"
  >
    <g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="githublogo">
        <path
          fill="transparent"
          d="M0 0h15.86v15.86H0z"
          transform="translate(.253906 .0493164)"
        ></path>
      </clipPath>
    </defs>
  </svg>
)

const LinkedinLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34 34"
    className="fill-zinc-800 dark:fill-slate-300 w-6 h-6 sm:w-8 sm:h-8"
  >
    <g>
      <path
        d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
)

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'github',
      url: 'https://github.com/emw3',
      icon: <GithubLogo />,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gustavo-levano/',
      icon: <LinkedinLogo />,
    },
  ]
  return (
    <div className={cn('flex space-x-4')}>
      {socialLinks.map(({ name, url, icon }) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
