import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pb-16">
      <header className="shell sticky top-4 z-10 pt-4">
        <nav className="glass-card fade-up flex items-center justify-between rounded-full px-5 py-3 text-sm md:px-7">
          <a className="font-semibold tracking-[0.08em]" href="#hero">
            TVE JMENO
          </a>
          <div className="flex items-center gap-4 text-[0.92rem] text-[var(--fg-muted)] md:gap-6">
            <a href="#o-mne">O mne</a>
            <a href="#projekty">Projekty</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </header>

      <main className="shell mt-12 space-y-16 md:mt-16 md:space-y-24">
        <section
          id="hero"
          className="glass-card fade-up grid gap-8 rounded-3xl px-6 py-9 md:grid-cols-[1.3fr_1fr] md:px-10 md:py-12"
        >
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--fg-muted)]">
              Osobni portfolio
            </p>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
              Tvorim moderni webove aplikace s durazem na jednoduchost a vykon.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
              Jsem vyvojar zamereny na ciste reseni, citelny kod a efektivni
              uzivatelsky zazitek. Tento web slouzi jako moje prezentacni
              stranka a rozcestnik projektu.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projekty"
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-medium text-[#111827] transition hover:brightness-110"
              >
                Moje projekty
              </a>
              <a
                href="#kontakt"
                className="rounded-full border border-[var(--border-soft)] px-5 py-2.5 font-medium transition hover:bg-[var(--accent-soft)]"
              >
                Kontaktujte me
              </a>
            </div>
          </div>
          <div className="fade-up rounded-2xl border border-[var(--border-soft)] bg-[rgba(245,245,220,0.05)] p-4">
            <Image
              src="/profile-photo.svg"
              alt="Profilova fotografie autora"
              width={900}
              height={720}
              className="h-full min-h-60 w-full rounded-xl object-cover"
            />
          </div>
        </section>

        <section id="o-mne" className="fade-up space-y-5">
          <h2 className="text-2xl font-semibold md:text-3xl">O mne</h2>
          <p className="max-w-3xl leading-relaxed text-[var(--fg-muted)]">
            Venuji se vyvoji webovych aplikaci, kde kombinuji technickou
            preciznost s prehlednym designem. Preferuji minimalisticky vizual,
            ktery nepusobi preplacane a nechava vyniknout obsah i funkcnost.
          </p>
          <p className="max-w-3xl leading-relaxed text-[var(--fg-muted)]">
            Zajimaji me projekty, ktere prinaseji praktickou hodnotu: od
            prezentacnich webu pres interni nastroje az po aplikace s vyssim
            narokem na spolehlivost a vykon.
          </p>
        </section>

        <section id="projekty" className="fade-up space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Vybrane projekty</h2>
            <Link
              href="/projekty"
              className="text-sm text-[var(--fg-muted)] underline-offset-4 hover:underline"
            >
              Zobrazit vse
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
                  alt={`Nahled projektu ${project}`}
                  width={800}
                  height={520}
                  className="mb-4 h-44 w-full rounded-xl object-cover"
                />
                <h3 className="text-lg font-medium">{project}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  Kratky popis projektu. Sem muzes doplnit ucel, technologie a
                  dosazeny vysledek.
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
                Pokud te zaujal muj styl prace nebo hledas spolupraci na novem
                projektu, ozvi se. Rad proberu zadani a navrhnu vhodne reseni.
              </p>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p>
                E-mail:{" "}
                <a className="text-[var(--accent)]" href="mailto:ahoj@domena.cz">
                  ahoj@domena.cz
                </a>
              </p>
              <p>Telefon: +420 000 000 000</p>
              <p>
                LinkedIn:{" "}
                <a className="text-[var(--accent)]" href="https://linkedin.com">
                  linkedin.com/in/tvoje-jmeno
                </a>
              </p>
              <p>
                Vice informaci:{" "}
                <Link className="text-[var(--accent)]" href="/o-mne">
                  stranka O mne
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell mt-12 text-center text-xs text-[var(--fg-muted)]">
        <p>&copy; {new Date().getFullYear()} Tve jmeno. Vsechna prava vyhrazena.</p>
      </footer>
    </div>
  );
}
