import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles["wrapper"]}>
      <h1 className={styles["brand"]}>PomoStack</h1>
    </header>
  )
}
