import { NextPage } from "next"
import Head from "next/head"
import { Layout } from "../components/ui/Layout"
import { Footer } from "../components/ui/Footer"
import { Header } from "../components/ui/Header"

const Home: NextPage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Head>
        <title>PomoStack</title>
        <meta name="description" content="Stack and record your pomodoros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>hello</p>
    </Layout>
  )
}

export default Home
