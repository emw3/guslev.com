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
          <title>{WEBSITE_TITLE}</title>
        </Head>
        <Container>
          <>
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
                <h2
                  className={cn(
                    "text-xl sm:text-3xl font-mono font-bold transition-all duration-300 ease-in-out delay-150 text-slate-50 dark:text-zinc-900"
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
                  "font-sans antialiased text-base sm:text-lg tracking-normal"
                )}
              >
                My career as self-driven developer started 5 years ago. Since
                then I&apos;ve not stopped learning and building new things.
                Currently I&apos;m working at Caffelli using the React, Vue and
                Laravel stack.
              </p>
              <div className="py-8">
                <p className={"font-sans antialiased text-base sm:text-lg tracking-normal mb-8"}>Brief story of my developer life:</p>
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
