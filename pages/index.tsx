import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { WEBSITE_TITLE } from '../lib/constants'


const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{WEBSITE_TITLE} - </title>
        </Head>
        <Container>
          <h1>Home</h1>
        </Container>
      </Layout>
    </>
  )
}

export default Home
