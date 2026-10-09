import Link from "next/link"
import styles from "./style.module.css"
import { LogOut } from "lucide-react"

interface MenuProps {
  paginaAtiva: "inicio" | "historico";
}

const Menu = ({ paginaAtiva }: MenuProps) => {
    return (
        <aside className = { styles.sidebar } >
        <div className={styles.logoArea}>
          <span className={styles.brandTitle}>
            GARDEN<span>IA</span>
          </span>
        </div>

        <nav className={styles.navigation}>
          <Link href="/inicio" className={`${styles.navItem} ${
            paginaAtiva === "inicio" ? styles.active : ""
          }`}>
            Início
          </Link>
          <Link href="/historico"  className={`${styles.navItem} ${
            paginaAtiva === "historico" ? styles.active : ""
          }`}>
            Histórico
          </Link>
        </nav>

        <div className={styles.logoutArea}>
          <button className={styles.logoutBtn} aria-label="Sair">
            <LogOut size={24} />
          </button>
        </div>
      </aside >
  )
}

export default Menu