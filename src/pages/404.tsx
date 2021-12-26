import type { NextPage } from 'next'
import cn from 'classnames'

import Head from 'next/head'
import Container from '@/components/container'
import Layout from '@/components/layout'
import { WEBSITE_TITLE } from '@/lib/constants'

const Custom404: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Not Found - {WEBSITE_TITLE}</title>
        </Head>
        <Container>
          <div className="py-16">
            <h1
              className={cn('text-3xl sm:text-5xl font-extrabold text-center')}
            >
              404 Not Found
            </h1>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Custom404
