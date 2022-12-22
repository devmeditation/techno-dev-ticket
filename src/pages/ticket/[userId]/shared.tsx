import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Ticket } from "../../../components/Ticket";
import { getUser } from "../../../libs/database";

interface UserProps {
  user: {
    name: string;
    roleOrCompany?: string;
    githubUsername?: string;
    avatarUrl: string;
  };
}

export default function Shared({ user }: UserProps) {
  return (
    <main className="w-screen h-screen flex justify-center items-center p-5">
      <Head>
        <title>Fazer Shared do Ticket | Techno Dev Olinda</title>

        <meta name="robots" content="noindex" />
      </Head>

      <Ticket
        // size="big"
        // name={user.name}
        // githubUsername={user.githubUsername}
        // roleOrCompany={user.roleOrCompany}
        // avatarUrl={user.avatarUrl}
        className="drop-shadow-ticket w-full h-full p-5"
      />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

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
  }
}