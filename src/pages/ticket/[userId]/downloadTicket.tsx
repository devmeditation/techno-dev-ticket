import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { userFake } from "../../../factory/userFake";

import { getUser } from "../../../libs/database";
import { Ticket } from "../../../components/Ticket";
import { SocialMediaFooter } from "../../../components/SocialMediaFooter/SocialMediaFooter";

import styles from "../../../styles/downloadTicket.module.css";

interface UserProps {
  user: {
    name: string;
    roleOrCompany?: string;
    githubUsername?: string;
    avatarUrl: string;
  };
}

export default function DownloadTicket({ user }: UserProps) {
  const router = useRouter();
  const userId = String(router.query.userId);

  const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${userId}/share`;
  const shareMessage = encodeURIComponent(
    `Fala, time! Estou participando da Techno Dev Olinda, um evento organizado super alto astral para agitar o verão dos Devs na cidade de Olinda-PE.\n\nJunte-se a mim pelo link: ${shareUrl}`
  );
  const twitterShareMessage = encodeURIComponent(
    `Fala, time! Estou participando da Techno Dev Olinda, um evento organizado super alto astral para agitar o verão dos Devs na cidade de Olinda-PE.\n\nJunte-se a mim!`
  );

  function handleDownloadTicket() {}

  return (
    <main>
      <Head>
        <title>Fazer Download do Ticket | Techno Dev Olinda</title>

        <meta name="robots" content="noindex" />
      </Head>

      <section className={styles.ticketImage}>
        {/* <Ticket
        size="big"
        name={user.name}
        githubUsername={user.githubUsername}
        roleOrCompany={user.roleOrCompany}
        avatarUrl={user.avatarUrl}
        className="drop-shadow-ticket"
      /> */}

        <div className={styles.ticketImageContainer}>
          <div>
            <Ticket
              size="small"
              name={userFake.name}
              githubUsername={userFake.githubUsername}
              roleOrCompany={userFake.roleOrCompany}
              avatarUrl={userFake.avatarUrl}
              className={styles.ticketImageButton}
            />
          </div>

          <div className={styles.ticketImageContainerGroup}>
            <img
              className="animate-spin h-[4rem]"
              src="/imgs/vinil-gold.png"
              alt=""
            />

            <p>
              Ticket pronto para <span>ser baixado!</span>
            </p>
          </div>

          <button onClick={handleDownloadTicket}>
            <img
              src="/icons/download.svg"
              alt="icone de download que é uma seta apantada para baixo"
            />
            Fazer download
          </button>

          <div>
            <SocialMediaFooter
              shareMessage={shareMessage}
              shareUrl={shareUrl}
              twitterShareMessage={twitterShareMessage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) throw new Error("Params not found!!");

  const user = await getUser(String(params.userId));

  if (!user) {
    throw new Error("User not found!");
  }

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
