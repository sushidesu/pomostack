import styles from "./PomodoroRecord.module.css"

type PomodoroRecordProps = {
  content: string
}

export const PomodoroRecord = (props: PomodoroRecordProps) => {
  const { content } = props
  return <div className={styles["wrapper"]}>{content}</div>
}
