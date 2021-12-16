import type { NextPage } from "next";
import cn from "classnames";

import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import UnderConstruction from "../../components/under-construction";
import { WEBSITE_TITLE } from "../../lib/constants";

import Image from "next/image";

import PersonalWebsiteDesktopImg from "../../assets/img/personal-website.png";

const Projects: NextPage = () => {
  const projectsList = [
    {
      title: "Personal Website",
      description: "A personal website built with Next.js and TailwindCSS.",
      link: "/",
      domain: "guslev.com",
      image: PersonalWebsiteDesktopImg,
      tags: ["Next.js", "TailwindCSS", "React", "TypeScript"],
      status: "Released",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Projects - {WEBSITE_TITLE}</title>
        </Head>
        <Container>
          <>
            <div className={cn("py-8 sm:py-16")}>
              <div className="flex flex-col space-y-8">
                {projectsList.map((project, index) => (
                  <article key={index}>
                    <div className="p-5 sm:p-10 bg-gradient-to-r from-yellow-100 via-lime-100 to-emerald-100 rounded">
                      <div
                        className={cn("drop-shadow-2xl", {
                          "blur-sm": project.status === "In Development",
                        })}
                      >
                        <Image
                          className="rounded"
                          src={project.image}
                          alt={project.title}
                          layout="responsive"
                        />
                      </div>
                    </div>
                    <h2
                      className={cn(
                        "mt-6 font-bold text-lg text-zinc-900 dark:text-slate-50"
                      )}
                    >
                      {project.title}
                    </h2>
                    <p
                      className={cn(
                        "mt-2 mb-6 text-zinc-900 dark:text-slate-50"
                      )}
                    >
                      {project.description}
                    </p>
                    <a
                      className={cn(
                        "border px-4 py-2 border-zinc-900 dark:border-slate-50 after:content-['_↗']"
                      )}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.domain}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
