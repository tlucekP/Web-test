# Redesign Log

## 2026-02-25
- Scope: Uprava pouze Hero sekce a prvni sekce pod Hero na homepage (`app/page.tsx`).
- Hero:
  - Layout 2 sloupce na desktopu (text vlevo, foto vpravo) se zachovanim whitespace.
  - H1 nastaven jako dominantni element s nejvyssim kontrastem.
  - Podnadpis upraven na presne zadane 2 vety.
  - Primarni CTA zmeneno na `Probrat spolupraci` se stylem `#F97316`, bilym textem, hover tmavsi oranzova a zretelnym focus stavem.
  - Sekundarni CTA ponechano vizualne slabsi (outline varianta).
  - Hero pozadi zmeneno na `#F5F5DC`, text na `#1F2937`.
  - Fotka upravena pro hero (jemne potlaceni dominance bez oranzoveho overlaye).
- Prvni sekce pod Hero:
  - Vlozena sekce `Jak premyslim o praci` na tmavem bloku `#1F2937`.
  - Pridany 3 karty: Obchodni logika, Prakticke vyuziti technologii, Dlouhodoba udrzitelnost.
  - Pouzity pouze jemne oranzove akcenty.
- Ostatni sekce/layout mimo homepage Hero + prvni blok pod Hero nebyly meneny.
- Verifikace:
  - `npm run lint`
  - `npm run build`
- Doplneni: Nasazena realna profilova fotografie public/profile-photo.jpeg (Hero + OG metadata).

- Fix anchor scrollu: pridan scroll-mt offset pro sekce #o-mne, #projekty a #kontakt, aby sticky top panel neprekryval nadpisy po kliknuti v navigaci (desktop + mobil).

- Hero name hierarchy adjustment: zvetsena typografie jmena v Hero (silnejsi osobni branding), H1 ponechan jako hlavni message; header brand vizualne zjemnen pro snizeni pocitu duplicity.

- O me page split: navigace O mne ve sticky headeru prepnuta na samostatnou podstranku /o-mne; homepage doplnena o vycentrovany volny text mezi Hero a sekci Jak premyslim o praci.
