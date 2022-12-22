import Head from "next/head";
import Link from "next/link";
import { LogoSVG } from "../components/LogoSVG";

import styles from "../styles/custom404.module.css"

export default function Custom500() {
  return (
    <main>
      <Head>
        <title>Techno Dev Olinda - 500 Erro Page</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.logo}>
          <LogoSVG />
        </div>

          <strong className={styles.title}>
            <span>Ops!</span> Estamos com problemas técnico
          </strong>

          <footer>
            <Link href={"/"} className={styles.goback}>              
              Retornar para pagina inicial
            </Link>
          </footer>

          <div className="mt-5 flex flex-col justify-center items-center text-2xl">
            <p>Entre em contato com o suporte.</p>

            <Link href="https://www.bcl-st.com.br" target="_blank" rel="noopener noreferrer">
              <strong className={styles.title}>
                <span className="hover:text-white  hover:border-b-4 hover:bg-brand-700">Erro 500!</span>
              </strong>
            </Link>
          </div>
      </section>
    </main>
  )
}
