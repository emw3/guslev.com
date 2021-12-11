import type { NextPage } from "next";
import cn from "classnames";
import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { WEBSITE_TITLE } from "../lib/constants";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{WEBSITE_TITLE}</title>
        </Head>
        <Container>
          <div className="">
            <div className="py-8 sm:py-16">
              <p className={cn("font-mono text-xs sm:text-base mb-1 sm:mb-2")}>
                Hello! Im
              </p>
              <h1
                className={cn(
                  "text-3xl sm:text-5xl font-mono font-extrabold mb-4 sm:mb-6"
                )}
              >
                Gustavo Levano.
              </h1>
              <div
                className={cn(
                  "inline-flex transition-all duration-300 ease-in-out delay-150 skew-y-3 hover:skew-y-0 p-1 sm:p-2 bg-zinc-900 dark:bg-slate-50"
                )}
              >
                <h2 className={cn("text-xl sm:text-3xl font-mono font-bold transition-all duration-300 ease-in-out delay-150 text-slate-50 dark:text-zinc-900")}>
                  Full-Stack Developer
                </h2>
              </div>
            </div>
            <div className={cn('mt-8')}>
              <p className={cn('font-sans antialiased text-base sm:text-lg tracking-normal')}>
                Im a full-stack developer with a passion for building web and mobile applications. Ive built a number of apps for clients and have worked on a number of projects.
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
