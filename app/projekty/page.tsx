import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Vybrane ukazky projektu se zamerenim na vykon, UX a cistou implementaci.",
  alternates: {
    canonical: "/projekty",
  },
};

const projects = [
  {
    name: "Aplikace A",
    description:
      "Firemni web s durazem na rychlost nacitani, prehlednost obsahu a mobilni UX.",
  },
  {
    name: "Aplikace B",
    description:
      "Interni nastroj, ktery zjednodusuje opakujici se agendu a reportovani.",
  },
  {
    name: "Aplikace C",
    description:
      "Produktovy MVP prototyp od navrhu struktury po realizaci frontend vrstvy.",
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
          Ukazka prace a realizovanych reseni
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.name} className="glass-card fade-up rounded-2xl p-4">
            <Image
              src={`/project-${index + 1}.svg`}
              alt={`Nahled projektu ${project.name}`}
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
          Zpet na hlavni stranku
        </Link>
      </div>
    </main>
  );
}