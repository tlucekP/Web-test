import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domů",
  description:
    "Směr určuje obchod. Technologie ho umožňují. Portfolio Petera Tlučhoře.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen pb-16">
      <header className="shell sticky top-4 z-10 pt-4">
        <nav className="glass-card fade-up flex items-center justify-between rounded-full px-5 py-3 text-sm md:px-7">
          <a className="font-semibold tracking-[0.08em]" href="#hero">
            PETER TLUČHOŘ
          </a>
          <div className="flex items-center gap-4 text-[0.92rem] text-[var(--fg-muted)] md:gap-6">
            <a href="#o-mne">O mně</a>
            <a href="#projekty">Projekty</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </header>

      <main className="shell mt-12 space-y-16 md:mt-16 md:space-y-24">
        <section
          id="hero"
          className="fade-up grid gap-8 rounded-3xl border border-[#1F2937]/12 bg-[#F5F5DC] px-6 py-9 text-[#1F2937] md:grid-cols-[1.35fr_1fr] md:gap-10 md:px-10 md:py-12"
        >
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[#1F2937]/20 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#1F2937]/70">
              Peter Tlučhoř
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-[#1F2937] md:text-[3.5rem]">
              Směr určuje obchod. Technologie ho umožňují.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#1F2937]/80 md:text-lg md:leading-8">
              Bez jasného směru jsou technologie jen zajímavá hračka.
              <br className="hidden md:block" />
              Smysl mají tehdy, když podporují růst a fungují v praxi.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-6 py-3 font-medium text-white transition hover:bg-[#de630d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F2937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5DC] md:px-7"
              >
                Probrat spolupráci
              </a>
              <a
                href="#projekty"
                className="inline-flex items-center justify-center rounded-full border border-[#1F2937]/25 px-6 py-3 font-medium text-[#1F2937]/85 transition hover:bg-[#1F2937]/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F2937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5DC]"
              >
                Moje projekty
              </a>
            </div>
          </div>
          <div className="fade-up relative overflow-hidden rounded-2xl border border-[#1F2937]/15 bg-[#e8e6cf] p-3 md:p-4">
            <Image
              src="/profile-photo.svg"
              alt="Portrét Petera Tlučhoře"
              width={900}
              height={720}
              className="h-full min-h-72 w-full rounded-xl object-cover saturate-75 contrast-90"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1F2937]/12 to-transparent"
              aria-hidden="true"
            />
          </div>
        </section>

        <section
          id="o-mne"
          className="fade-up rounded-3xl bg-[#1F2937] px-6 py-8 md:px-10 md:py-11"
        >
          <h2 className="text-2xl font-semibold text-[#F5F5DC] md:text-3xl">
            Jak přemýšlím o práci
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Obchodní logika",
                description:
                  "Každé rozhodnutí musí dávat ekonomický smysl.",
              },
              {
                title: "Praktické využití technologií",
                description:
                  "Technologie mají podporovat proces, ne ho komplikovat.",
              },
              {
                title: "Dlouhodobá udržitelnost",
                description:
                  "Růst musí být opakovatelný a říditelný.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#F5F5DC]/18 bg-[#F5F5DC]/4 p-5"
              >
                <span
                  className="mb-3 block h-1.5 w-9 rounded-full bg-[#F97316]"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-medium text-[#F5F5DC]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F5F5DC]/82">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projekty" className="fade-up space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Vybrané projekty</h2>
            <Link
              href="/projekty"
              className="text-sm text-[var(--fg-muted)] underline-offset-4 hover:underline"
            >
              Zobrazit vše
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Aplikace A", "Aplikace B", "Aplikace C"].map((project, index) => (
              <article
                key={project}
                className="glass-card rounded-2xl p-4 transition hover:-translate-y-1"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <Image
                  src={`/project-${index + 1}.svg`}
                  alt={`Náhled projektu ${project}`}
                  width={800}
                  height={520}
                  className="mb-4 h-44 w-full rounded-xl object-cover"
                />
                <h3 className="text-lg font-medium">{project}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  Detailní popis projektu doplníme později: problém, řešení,
                  technologie a výsledek.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="fade-up glass-card rounded-3xl p-7 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold md:text-3xl">Kontakt</h2>
              <p className="max-w-xl leading-relaxed text-[var(--fg-muted)]">
                Pokud tě zaujal můj styl práce nebo hledáš spolupráci na novém
                projektu, ozvi se. Rád proberu zadání a navrhnu vhodné řešení.
              </p>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p>
                E-mail:{" "}
                <a
                  className="text-[var(--accent)]"
                  href="mailto:tluchor.peter@outlook.com"
                >
                  tluchor.peter@outlook.com
                </a>
              </p>
              <p>Telefon: +420 724 222 014</p>
              <p>
                LinkedIn:{" "}
                <a
                  className="text-[var(--accent)]"
                  href="https://www.linkedin.com/in/peter-tluchor"
                >
                  www.linkedin.com/in/peter-tluchor
                </a>
              </p>
              <p>
                Více informací:{" "}
                <Link className="text-[var(--accent)]" href="/o-mne">
                  stránka O mně
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell mt-12 text-center text-xs text-[var(--fg-muted)]">
        <p>
          &copy; {new Date().getFullYear()} Peter Tlučhoř. Všechna práva
          vyhrazena.
        </p>
      </footer>
    </div>
  );
}
