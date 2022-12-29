import { Inter } from "@next/font/google";
import { cookies } from "next/headers";
import Image from "next/image";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ token }: any) {
  const nextCookies = cookies();
  console.log(nextCookies.get("INSIGHT")?.value);
  console.log(nextCookies.get("TOKEN")?.value);
  //console.log(jwt.verify(nextCookies.get("TOKEN")?.value, "example_key"));
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          {nextCookies.has("INSIGHT") && nextCookies.get("INSIGHT")?.value
            ? "Authorized User"
            : "Not a Authorized User"}
        </h1>
        <h1>{token}</h1>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

export async function getInitialProps(context: any) {
  const nextCookies = cookies();
  console.log(nextCookies.get("INSIGHT")?.value);
  return {
    props: { token: nextCookies.get("INSIGHT")?.value || "some" }, // will be passed to the page component as props
  };
}
