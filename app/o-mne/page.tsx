import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O mně",
  description:
    "Ahoj, já jsem Peter. Obchod, technologie a rozhodnutí, která obstojí v reálném světě.",
  alternates: {
    canonical: "/o-mne",
  },
};

export default function AboutPage() {
  return (
    <main className="shell py-12 md:py-16">
      <section className="glass-card fade-up rounded-3xl p-7 md:p-10">
        <p className="mb-4 text-xs uppercase tracking-[0.14em] text-[var(--fg-muted)]">
          O mně
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Ahoj, já jsem <span className="text-[#F97316]">Peter</span>.
        </h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--fg-muted)]">
          Dlouhodobě se pohybuji v prostředí, kde se potkává odpovědnost,
          plánování a potřeba držet směr i ve chvílích, kdy věci nejsou úplně
          jednoduché. Práce s velkými čísly a odpovědnost za výsledek je pro mě
          každodenní realita už řadu let. Obchod je ale především partnerství.
          Proto mi záleží na důvěře, otevřenosti a schopnosti mluvit spolu
          narovinu.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--fg-muted)]">
          Miluju technologie, a tak se postupem času přirozeně staly součástí
          toho, jak přemýšlím o práci. Ne jako trend nebo buzzword, ale jako
          nástroj, který může věci zjednodušit a dát jim řád. Baví mě
          přemýšlet nad tím, jak procesy zjednodušit, automatizovat a dělat
          efektivněji - a rozumět tomu, co se děje pod povrchem.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--fg-muted)]">
          Dnes stojím někde mezi obchodem a technologiemi. Rozumím tomu, jak
          firmy fungují, kde se v praxi zasekávají procesy a proč některá
          rozhodnutí dávají smysl jen na papíře. Zároveň mě baví hledat
          jednodušší a efektivnější cesty k dosažení vytyčených cílů. Nehoním
          trendy. Místo toho mě zajímá, co obstojí v reálném světě.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#kontakt"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-medium text-[#111827] transition hover:brightness-110"
          >
            Napsat zprávu
          </Link>
          <Link
            href="/"
            className="text-[#F5F5DC] underline-offset-4 transition hover:underline"
          >
            Zpět na úvod
          </Link>
        </div>
      </section>
    </main>
  );
}
