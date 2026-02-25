# Agent Change Log

## 2026-02-25 16:45 (local)
- Změna: Vytvořen soubor `skills.md` s pravidly pro vývoj, kvalitu, SEO, bezpečnost, UX a release proces.
- Důvod: Ustanovit jednotný, opakovatelný postup pro tento projekt.
- Ověření: Soubor byl vytvořen v kořeni projektu a je připraven jako referenční standard.

## 2026-02-25 16:45 (local)
- Změna: Vytvořen tento logovací soubor `AGENT_CHANGES.md`.
- Důvod: Trvalý audit změn prováděných agentem.
- Ověření: Soubor je dostupný v kořeni projektu a obsahuje první záznamy.

## 2026-02-25 17:05 (local)
- Změna: Do `app/layout.tsx` byly přidány komponenty `<Analytics />` a `<SpeedInsights />` včetně importů.
- Důvod: Aktivace sběru Vercel Analytics a Vercel Speed Insights přímo v aplikaci.
- Ověření: Kontrola kódu v layoutu + následné spuštění `npm run lint` a `npm run build`.

## 2026-02-25 18:30 (local)
- Zmena: Rozsirena SEO metadata v app/layout.tsx (metadataBase, title template, canonical, Open Graph, Twitter card) a doplnena page-level metadata pro /, /o-mne, /projekty.
- Duvod: Lepsi indexace a konzistentni nahledy pri sdileni na LinkedIn/Twitter.
- Overeni: Kontrola metadat v kodu + lint/build.

## 2026-02-25 18:30 (local)
- Zmena: Pridany soubory app/robots.ts a app/sitemap.ts.
- Duvod: Poskytnout crawlerum jasna pravidla indexace a seznam indexovanych URL.
- Overeni: Vygenerovani routes /robots.txt a /sitemap.xml pri buildu.


## 2026-02-25 18:45 (local)
- Zmena: Pridany security headers do next.config.ts (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy).
- Duvod: Zakladni hardening produkcniho webu proti beznym webovym rizikum.
- Overeni: Kontrola konfigurace + nasledne npm run lint a npm run build.


## 2026-02-25 19:05 (local)
- Zmena: Aktualizovana identita webu (Peter Tluchor), hero obsah, kontaktni udaje a hlavni SEO texty v app/page.tsx a app/layout.tsx.
- Duvod: Nasazeni prvnich realnych udaju podle zadani uzivatele, ponechani sekci O mne/Projekty pripravenych pro pozdejsi doplneni.
- Overeni: Kontrola obsahu v kodu + nasledne npm run lint a npm run build.


## 2026-02-25 19:12 (local)
- Zmena: Opravene kodovani souboru app/layout.tsx a app/page.tsx na validni UTF-8 po doplneni diakritiky.
- Duvod: Build selhal na invalid UTF-8 sekvence; bylo nutne sjednotit kodovani souboru.
- Overeni: npm run lint a npm run build uspesne.


## 2026-02-25 19:18 (local)
- Zmena: Odstranena Twitter metadata z app/layout.tsx na zaklade pozadavku uzivatele.
- Duvod: Priorita pouze pro LinkedIn/Open Graph sdileni.
- Overeni: Kontrola metadat + nasledne npm run lint a npm run build.

