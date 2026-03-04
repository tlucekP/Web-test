# Project Skills (Web-test)

Tento soubor je závazný pracovní postup pro tento projekt. Při dalších úpravách budu postupovat podle těchto pravidel.

## 1. Platforma a nasazení
- Primární hosting: Vercel (free tier), napojení na GitHub repo `tlucekP/Web-test`.
- Každý `push` do `main` je produkční release.
- Pokud bude vlastní doména, preferovaný kanonický tvar je bez `www` a druhá varianta bude mít 301 redirect.

## 2. Kvalita před každým releasem
- Povinné kontroly:
- `npm run lint`
- `npm run build`
- Mobilní kontrola layoutu minimálně pro šířky: 320, 375, 768, 1024, 1440 px.
- Při větších změnách provést i load/perf kontrolu:
- `npm run test:load`
- `npm run test:perf` (když je prostředí kompatibilní)

## 3. SEO a metadata standard
- Udržovat smysluplné `title` a `description`.
- Udržovat Open Graph a Twitter metadata.
- Udržovat `sitemap` a `robots` (po přidání do projektu).
- Nepublikovat stránky bez unikátního popisu.

## 4. Bezpečnostní minimum
- Udržovat security headers v `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` s omezením nepotřebných API.

## 5. UX a design zásady
- Styl: minimalistický, tmavší, nepřeplácaný.
- Barevná paleta:
- Charcoal `#1F2937`
- Warm Sand `#F5F5DC`
- Soft Orange `#F97316`
- Font: `Space Grotesk` (čeština).
- Jemné animace a moderní efekty používat střídmě.

## 6. Obsahové zásady
- Web je v češtině.
- Struktura: Hero, O mně, Projekty, Kontakt + podstránky.
- Projekty popisovat věcně: problém, řešení, výsledek.
- Kontaktní údaje musí být vždy aktuální.

## 7. Provozní pravidla změn
- Každou změnu zapisovat do `AGENT_CHANGES.md`.
- Zápis musí obsahovat:
- datum a čas
- co bylo změněno
- proč
- jak bylo ověřeno

## 8. Git workflow
- Menší, čitelné commity.
- Commit message stručně a věcně popsat změnu.
- Před push vždy proběhne lint a build (pokud to typ změny dává smysl).

## 9. Static export pravidlo
- Vsechny nove zmeny a features navrhovat tak, aby byly kompatibilni se statickym exportem Next.js (`output: "export"`).
- Pocitat s tim, ze produkcni nasazeni probiha uploadem obsahu slozky `out/` na FTP hosting.
- Export/build pro nasazeni (`npm run build`) NESPoustet automaticky po upravach.
- Export/build spoustet pouze po explicitnim prikazu uzivatele.
