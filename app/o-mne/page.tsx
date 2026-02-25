import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="shell py-12 md:py-16">
      <section className="glass-card fade-up rounded-3xl p-7 md:p-10">
        <p className="mb-4 text-xs uppercase tracking-[0.14em] text-[var(--fg-muted)]">
          O mne
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Vytvarim digitalni produkty, ktere jsou jednoduche, rychle a citelne.
        </h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--fg-muted)]">
          Dlouhodobe me bavi spojeni technicke kvality s dobrym uzivatelskym
          dojmem. U kazde aplikace hledam rovnovahu mezi funkcnosti, cistotou
          rozhrani a realnym dopadem na uzivatele.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--fg-muted)]">
          Preferuji moderni frontend stack, postupne iterace a mereni vykonu.
          Pokud davas prednost profesionalnimu, ale pritom lidskemu stylu
          spoluprace, rad se pobavim o tvem projektu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-[var(--border-soft)] px-5 py-2.5 transition hover:bg-[var(--accent-soft)]"
          >
            Zpet na uvod
          </Link>
          <Link
            href="/#kontakt"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-medium text-[#111827] transition hover:brightness-110"
          >
            Napsat zpravu
          </Link>
        </div>
      </section>
    </main>
  );
}
