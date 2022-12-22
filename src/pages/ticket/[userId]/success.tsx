import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { LogoSVG } from "../../../components/LogoSVG";
import { Ticket } from "../../../components/Ticket";
import { SocialMediaFooter } from "../../../components/SocialMediaFooter/SocialMediaFooter";
import { SocialMediaShareButton } from "../../../components/SocialMediaShareButton/SocialMediaShareButton";
import { getUser } from "../../../libs/database";

import { userFake } from "../../../factory/userFake";

import styles from "../../../styles/success.module.css";

interface UserProps {
  user: {
    name: string;
    roleOrCompany?: string;
    githubUsername?: string;
    avatarUrl: string;
  };
}

export default function Suscess({ user }: UserProps) {
  const [hasTicketLinkBeenCopied, setHasTicketLinkBeenCopied] = useState(false);

  const router = useRouter();
  const userId = String(router.query.userId);

  const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${userId}/share`;
  const shareMessage = encodeURIComponent(
    `Fala, time! Estou participando da Techno Dev Olinda, um evento organizado super alto astral para agitar o verão dos Devs na cidade de Olinda-PE.\n\nJunte-se a mim pelo link: ${shareUrl}`
  );
  const twitterShareMessage = encodeURIComponent(
    `Fala, time! Estou participando da Techno Dev Olinda, um evento organizado super alto astral para agitar o verão dos Devs na cidade de Olinda-PE.\n\nJunte-se a mim!`
  );

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_APP_URL}/ticket.png?userId=${userId}`);
  // }, [userId]);

  async function handleCopyTicketLink() {
    await navigator.clipboard.writeText(shareUrl);
    setHasTicketLinkBeenCopied(true);

    setTimeout(() => {
      setHasTicketLinkBeenCopied(false);
    }, 2000);
  }

  return (
    <main>
      <Head>
        <title>Ticket Gerado | Techno Dev Olinda</title>

        <meta name="robots" content="noindex" />
      </Head>

      <section className={styles.successContainer}>
        <header>
          <LogoSVG />

          <div className={styles.successHeaderGroup}>
            <img src="/icons/check.svg" alt="" />

            <p className="font-semibold">
              Ticket criado{" "}
              <span className="text-yellow-500">com sucesso!</span>
            </p>
          </div>

          <p className={styles.successHeaderTitle}>Agora mostre ao mundo</p>

          <SocialMediaFooter
            shareMessage={shareMessage}
            shareUrl={shareUrl}
            twitterShareMessage={twitterShareMessage}
          />

          <button
            onClick={handleCopyTicketLink}
            disabled={hasTicketLinkBeenCopied}
            className={styles.successButton}
          >
            {hasTicketLinkBeenCopied ? (
              <>
                <img src="/icons/check-2.svg" alt="" />
                Copiado
              </>
            ) : (
              <>
                <img
                  src="/icons/copy.svg"
                  className="group-hover:brightness-0"
                  alt=""
                />
                Copiar link do convite
              </>
            )}
          </button>
        </header>

        <div>
          {user.name ? (
            <Ticket
              name={user.name}
              githubUsername={user.githubUsername}
              roleOrCompany={user.roleOrCompany}
              avatarUrl={user.avatarUrl}
              className={styles.successTicket}
            />
          ) : (
            <Ticket
              name={userFake.name}
              githubUsername={userFake.githubUsername}
              roleOrCompany={userFake.roleOrCompany}
              avatarUrl={userFake.avatarUrl}
              className={styles.successTicket}
            />
          )}
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
