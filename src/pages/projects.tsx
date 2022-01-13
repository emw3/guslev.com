import type { NextPage } from 'next'
import cn from 'classnames'
import { WEBSITE_IMAGE_URL, WEBSITE_TITLE, WEBSITE_URL } from '@/lib/constants'
import Image from 'next/image'
import Container from '@/components/container'
import Layout from '@/components/layout'
import PersonalWebsiteDesktopImg from '@/assets/img/personal-website.png'
import TiendaDanivoDesktopImg from '@/assets/img/tienda-danivo.png'
import { NextSeo } from 'next-seo'

const Projects: NextPage = () => {
  const projectsList = [
    {
      title: 'Tienda Danivo',
      description:
        'An e-commerce built with Next.js, Commerce.js, and TailwindCSS.',
      link: 'https://danivo.pe',
      domain: 'danivo.pe',
      image: TiendaDanivoDesktopImg,
      tags: ['Next.js', 'Commerce.js', 'TailwindCSS', 'React', 'TypeScript'],
      status: 'In Development',
      year: '2021',
    },
    {
      title: 'Personal Website',
      description: 'A personal website built with Next.js and TailwindCSS.',
      link: '/',
      domain: 'guslev.com',
      image: PersonalWebsiteDesktopImg,
      tags: ['Next.js', 'TailwindCSS', 'React', 'TypeScript'],
      status: 'Released',
      year: '2021',
    },
    // MJG Application
    // Koehler Application
  ]

  return (
    <>
      <NextSeo
        title={'Projects - ' + WEBSITE_TITLE}
        description={'Some of the projects I have worked on.'}
        openGraph={{
          url: `${WEBSITE_URL}/projects`,
          type: 'website',
          title: 'Projects - ' + WEBSITE_TITLE,
          description: 'Some of the projects I have worked on.',
          images: [
            {
              url: WEBSITE_IMAGE_URL,
              width: 192,
              height: 192,
              alt: 'Gustavo Levano Logo',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@gemwl',
          site: '@gemwl',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Container>
          <>
            <div className={cn('py-8 sm:py-16')}>
              <div className="flex flex-col gap-20">
                {projectsList.map((project, index: number) => (
                  <article key={index} className="relative">
                    <span className="absolute -rotate-90 top-2 -left-6 text-xs font-extralight text-zinc-800 dark:text-slate-200">
                      {project.year}
                    </span>
                    <figure className="rounded mb-6">
                      <div
                        className={cn('drop-shadow-2xl', {
                          'blur-sm': project.status === 'In Development',
                        })}
                      >
                        <Image
                          className="rounded dark:brightness-95"
                          src={project.image}
                          alt={project.title}
                          layout="responsive"
                        />
                      </div>
                    </figure>
                    <h1
                      className={cn(
                        'mb-2 font-bold text-3xl text-zinc-800 dark:text-slate-200'
                      )}
                    >
                      {project.title}
                    </h1>
                    <p
                      className={cn(
                        'mb-8 text-lg font-medium text-zinc-800 dark:text-slate-200'
                      )}
                    >
                      {project.description}
                    </p>
                    <a
                      className={cn(
                        "justify-self-end border px-4 py-2 text-zinc-800 border-zinc-800 hover:bg-zinc-800 hover:text-slate-50 dark:text-slate-200 dark:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-zinc-900 after:content-['_↗']"
                      )}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.domain}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </>
        </Container>
      </Layout>
    </>
  )
}

export default Projects
