import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Vybrané ukázky projektů se zaměřením na výkon, UX a čistou implementaci.",
  alternates: {
    canonical: "/projekty",
  },
};

const projects = [
  {
    name: "Aplikace A",
    description:
      "Firemní web s důrazem na rychlost načítání, přehlednost obsahu a mobilní UX.",
  },
  {
    name: "Aplikace B",
    description:
      "Interní nástroj, který zjednodušuje opakující se agendu a reportování.",
  },
  {
    name: "Aplikace C",
    description:
      "Produktový MVP prototyp od návrhu struktury po realizaci frontend vrstvy.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="shell py-12 md:py-16">
      <section className="fade-up mb-7 md:mb-9">
        <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[var(--fg-muted)]">
          Projekty
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Ukázka práce a realizovaných řešení
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.name} className="glass-card fade-up rounded-2xl p-4">
            <Image
              src={`/project-${index + 1}.svg`}
              alt={`Náhled projektu ${project.name}`}
              width={800}
              height={520}
              className="mb-4 h-44 w-full rounded-xl object-cover"
            />
            <h2 className="text-xl font-medium">{project.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
              {project.description}
            </p>
          </article>
        ))}
      </section>

      <div className="mt-8">
        <Link
          href="/"
          className="rounded-full border border-[var(--border-soft)] px-5 py-2.5 text-sm transition hover:bg-[var(--accent-soft)]"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    </main>
  );
}
