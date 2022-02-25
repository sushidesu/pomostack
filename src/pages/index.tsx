import { useCallback, useState } from "react"
import { NextPage } from "next"
import Head from "next/head"
import { Layout } from "../components/ui/Layout"
import { Footer } from "../components/ui/Footer"
import { Header } from "../components/ui/Header"

import { PomodoroRecord } from "../components/model/pomodoro/PomodoroRecord"

import styles from "./index.module.css"

const Home: NextPage = () => {
  const [text, setText] = useState<string>("")
  const handleBlur = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])
  const resetText = useCallback(() => {
    setText("")
  }, [])

  const [pomodoros, setPomodoros] = useState<string[]>([])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (text === "") {
        return
      }

      setPomodoros((prev) => prev.concat(text))
      resetText()
    },
    [text, resetText]
  )

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Head>
        <title>PomoStack</title>
        <meta name="description" content="Stack and record your pomodoros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["container"]}>
        <div className={styles["section"]}>
          <p
            className={styles["status-text"]}
          >{`Total: ${pomodoros.length} pomodoros`}</p>
          <form>
            <input value={text} onChange={handleBlur} />
            <button type="submit" onClick={handleSubmit}>
              OK
            </button>
          </form>
          <div className={styles["pomolist"]}>
            {pomodoros.map((pomodoro, i) => (
              <PomodoroRecord key={i} content={pomodoro} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
