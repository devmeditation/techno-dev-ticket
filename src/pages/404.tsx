import Head from "next/head";
import Link from "next/link";
import { LogoSVG } from "../components/LogoSVG";

import styles from "../styles/custom404.module.css"

export default function Custom404() {
  return (
    <main>
      <Head>
        <title>Techno Dev Olinda - 404 Erro Page</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.logo}>
          <LogoSVG />
        </div>

          <strong className={styles.title}>
            <span>Ops!</span> Página não encontrada
          </strong>

          <footer>
            <Link href={"/"} className={styles.goback}>              
              Retornar para pagina inicial
            </Link>
          </footer>

        {/* <div>
          <Ticket className="flex-1 w-full h-auto drop-shadow-ticket" />
        </div> */}
      </section>
    </main>
  )
}
