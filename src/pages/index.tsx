import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import {
  WEBSITE_DESCRIPTION,
  WEBSITE_IMAGE_URL,
  WEBSITE_TITLE,
  WEBSITE_URL,
} from '@/lib/constants'
import cn from 'classnames'
import Container from '@/components/container'
import Layout from '@/components/layout'
import SocialLinks from '@/components/social-links'
import DALLEImage from '@/components/dalle-image'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${WEBSITE_TITLE} - ${WEBSITE_DESCRIPTION}`}
        description={WEBSITE_DESCRIPTION}
        openGraph={{
          url: WEBSITE_URL,
          type: 'website',
          title: WEBSITE_TITLE,
          description: WEBSITE_DESCRIPTION,
          images: [
            {
              url: WEBSITE_IMAGE_URL,
              width: 192,
              height: 192,
              alt: 'Logo',
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
            <div className="py-8 sm:py-16 flex items-center flex-col gap-y-16 md:flex-row">
              <div className={cn('w-full md:w-2/3')}>
                <p
                  className={cn(
                    'leading-loose text-zinc-800 dark:text-slate-200 text-xl font-medium mb-1 sm:mb-2'
                  )}
                >
                  👋 Hello! I’m
                </p>
                <h1
                  className={cn(
                    'text-5xl font-sans font-extrabold mb-4 sm:mb-6 text-zinc-800 dark:text-slate-100'
                  )}
                >
                  Gustavo Levano.
                </h1>
                <div
                  className={cn(
                    'inline-flex transition-all duration-300 ease-in-out delay-150 p-1 sm:p-2 bg-zinc-800 dark:bg-slate-100'
                  )}
                >
                  <h2
                    className={cn(
                      'text-3xl font-sans font-bold transition-all duration-300 ease-in-out delay-150 text-slate-100 dark:text-zinc-800'
                    )}
                  >
                    Full-Stack Developer
                  </h2>
                </div>
              </div>
              <div className="order-first md:order-none w-full md:w-1/3 flex justify-end">
                <DALLEImage />
              </div>
            </div>
            <SocialLinks />
            <div className={cn('mt-8')}>
              <p
                className={cn(
                  'leading-loose text-zinc-800 dark:text-slate-200 text-xl font-medium'
                )}
              >
                My career as self-driven developer started 5 years ago. Since
                then I’ve not stopped learning and building new things.
                Currently I’m working at{' '}
                <a
                  href="https://www.caffelli.com/"
                  className={cn('underline underline-offset-8 decoration-1')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Caffelli
                </a>{' '}
                using the{' '}
                <span className="underline underline-offset-8 decoration-1">
                  React
                </span>
                ,{' '}
                <span className="underline underline-offset-8 decoration-1">
                  Vue
                </span>{' '}
                and{' '}
                <span className="underline underline-offset-8 decoration-1">
                  Laravel
                </span>{' '}
                stack.
              </p>
            </div>
          </>
        </Container>
      </Layout>
    </>
  )
}

export default Home
