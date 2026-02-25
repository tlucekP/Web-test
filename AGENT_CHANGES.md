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
