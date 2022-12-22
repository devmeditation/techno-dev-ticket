import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Ticket } from "../components/Ticket";
import { EditButton } from "../components/EditButton/EditButton";

import styles from "../styles/Home.module.css";

export default function Home() {
  const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}`;

  return (
    <main>
      <Head>
        <title>Techno Dev Olinda</title>
      </Head>

      <section className={styles.homeContainer}>
        <div className={styles.homeBox}>
          <img src="/imgs/dj.png" alt="" />

          <strong className={styles.homeTitle}>
            Cadastre-se e gere seu ticket para o evento
          </strong>

          <footer className={styles.homeButtonGroup}>
            <Link
              href={signInUrl}
              className={styles.buttonSignIn}
            >
              <Image
                src="/icons/github.svg"
                width={24}
                height={24}
                alt="Icone do Github"
              />
              Faça login com GitHub
            </Link>

            <EditButton />
          </footer>
        </div>

        <div>
          <Ticket className="flex-1 w-full h-auto drop-shadow-ticket" />
        </div>
      </section>
    </main>
  );
}
