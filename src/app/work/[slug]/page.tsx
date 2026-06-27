import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { getProjectBySlug, PROJECTS } from "@/constants/content";
import { SITE } from "@/constants/site";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: `${project.name} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | ${SITE.fullName}`,
      description: project.tagline,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-(--width-layout) px-5 pt-28 pb-20 md:px-6 md:pt-36 md:pb-32">
        <CaseStudyLayout project={project} />
      </main>
      <Footer />
    </>
  );
}
