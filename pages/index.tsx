import type { NextPage } from "next";
import { WEBSITE_TITLE } from "../lib/constants";
import cn from "classnames";
import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import SocialLinks from "../components/social-links";
import Timeline from "../components/timeline";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | {WEBSITE_TITLE}</title>
        </Head>
        <Container>
          <>
            <div className={cn("py-8 sm:py-16")}>
              <p
                className={cn(
                  "leading-loose text-zinc-900 dark:text-slate-50 mb-1 sm:mb-2"
                )}
              >
                Hello! I’m
              </p>
              <h1
                className={cn(
                  "text-3xl sm:text-5xl font-sans font-extrabold mb-4 sm:mb-6"
                )}
              >
                Gustavo Levano.
              </h1>
              <div
                className={cn(
                  "inline-flex transition-all duration-300 ease-in-out delay-150 skew-y-3 hover:skew-y-0 p-1 sm:p-2 bg-zinc-900 dark:bg-slate-50"
                )}
              >
                <h2
                  className={cn(
                    "text-xl sm:text-3xl font-sans font-bold transition-all duration-300 ease-in-out delay-150 text-slate-50 dark:text-zinc-900"
                  )}
                >
                  Full-Stack Developer
                </h2>
              </div>
            </div>
            <SocialLinks />
            <div className={cn("mt-8")}>
              <p
                className={cn(
                  "leading-loose text-zinc-900 dark:text-slate-50"
                )}
              >
                My career as self-driven developer started 5 years ago. Since
                then I’ve not stopped learning and building new things.
                Currently I’m working at{" "}
                <a
                  href="https://www.caffelli.com/"
                  className={cn("underline font-bold decoration-green-500 decoration-4")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Caffelli
                </a>{" "}
                using the <b>React</b>, <b>Vue</b> and <b>Laravel</b> stack.
              </p>
              <div className={cn("py-8")}>
                <p
                  className={cn(
                    "leading-6 text-zinc-900 dark:text-slate-50 mb-8"
                  )}
                >
                  My learning path:
                </p>
                <Timeline />
              </div>
            </div>
          </>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
