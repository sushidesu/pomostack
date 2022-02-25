import styles from "./Layout.module.css"

type LayoutProps = {
  header: React.ReactNode
  children: React.ReactNode
  footer: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { header, children, footer } = props

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>{header}</div>
      <div className={styles["main"]}>{children}</div>
      <div className={styles["footer"]}>{footer}</div>
    </div>
  )
}
