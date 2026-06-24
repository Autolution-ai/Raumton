# CLAUDE.md – Projekt: raumton GmbH Website-Relaunch
# Basiert auf: CLAUDE-Master-Website Kopie.md (Version 2.3)

---

## AUTOMATISCH GELADENE SKILLS (beim Projektstart aktiv)

@~/.claude/skills/ogilvy/SKILL.md
@~/.claude/skills/stop-slop/SKILL.md
@~/.claude/skills/frontend-design/SKILL.md
@~/.claude/skills/seo-audit/SKILL.md
@~/.claude/skills/schema-markup/SKILL.md
@~/.claude/skills/gsap-scrolltrigger/SKILL.md
@~/.claude/skills/gsap-core/SKILL.md

---

## PROJEKTBRIEF – raumton GmbH

### Firmenname & Kontakt
- **Firma:** raumton GmbH
- **Slogan:** "einfach schön leise"
- **Standort:** Berlin Schöneberg (Showroom + Produktion)
- **Tel:** 030 / 70 50 95 11
- **E-Mail:** info@raumton.com
- **Bestehende Website:** https://www.raumton.com

### Branche
Professionelle Raumakustik und individuelle Schallabsorber

### Geschichte & Team
- **Gegründet:** 2006 von Ulli Müller (Audiotechniker, Studiobauer)
- **Seit 2022:** Leo Ripper (2. Generation, Geschäftsführung)
- Berliner Mittelstand, eigene Produktion in Berlin

### USPs (aus bestehender Website)
- 15+ Jahre Erfahrung in der Raumakustik
- 1.500+ zufriedene Kunden
- Kostenlose Beratung vor Ort (außerhalb Berlins ggf. Anfahrtkosten)
- Alles aus einer Hand: individuelle Planung → Fertigung → Montage
- Showroom in Berlin Schöneberg (Produktqualität selbst erleben)
- Über 300 Farben und Texturen
- Lieferzeit: ca. 3 Wochen nach Auftragseingang
- Kein Einsatz mineralfaserbelasteter Materialien
- 100% rezyklierbare / recyclingfähige Materialien (Nachhaltigkeitsversprechen)
- Namhafte DAX40-Unternehmen und Bundesministerien als Kunden

### Zielgruppe (aus bestehender Website)
- Office Manager
- Büroplaner
- Alle, die ihre Arbeitsatmosphäre spürbar verbessern möchten
- Kunden aller Branchen und Größen

### Produkte
1. Deckenabsorber
2. Wandabsorber
3. Trennwand-Absorber
4. Tischtrennwand-Absorber
5. Schrankaufsatz-Absorber
6. Standabsorber
7. Akustik-Vorhänge

### Zielräume
- Großraumbüro
- Kleines Büro
- Konferenzraum
- Präsentationsraum
- Spiel- und Lernraum (Kita)
- Begegnungs- und Gasträume (Gastro)

### Service-Prozess (4 Schritte)
1. Anfrage per E-Mail oder Telefon → Terminvereinbarung
2. Problemanalyse & Einschätzung (persönlicher Vor-Ort-Termin, Raumaufmaß)
3. Angebotserstellung inkl. Ausführungsdarstellung
4. Lieferung & Montage (flexibel, ca. 3 Wochen)

### Referenzen / Kunden (Auswahl)
**Detaillierte Referenzen:**
Rolls-Royce Power Systems AG, RepRisk Germany GmbH, S-Kreditpartner GmbH,
Brasserie Colette Tim Raue, Engelbecken Restaurant, Marvin Wildhage,
Auswärtiges Amt, Kita Jeverstraße, Vattenfall GmbH

**Logos (Kundenlogos-Carousel):**
Sparkasse, HelloFresh, BVG, Commerzbank, Deutsche Bahn, Lieferando,
Berliner Philharmoniker, UNESCO, ENERTRAG, Diakonie, Clark, DENA,
ISTA, Fraunhofer, Hella Aglaia, Lekker, Securitas, Spreewaldhof

---

## PROJEKTENTSCHEIDUNGEN – BESTÄTIGT

| # | Frage | Antwort |
|---|---|---|
| 1 | **Hauptziel** des Relaunches | **Mehr Anfragen** – Website als Lead-Maschine |
| 2 | **Briefing-Dokument** | Keines – CLAUDE.md ist das Briefing |
| 3 | **CI / Farben** | **CI bleibt gleich** – bestehende Farben und Logo übernehmen |
| 4 | **Stil** | **Premium / Luxuriös** – dunkel, hochwertig, viel Weißraum |
| 5 | **Neue Sektionen** | **FAQ** hinzufügen |
| 6 | **Mitbewerber** | Claude recherchiert eigenständig – Stärken nutzen, Schwächen besser machen |
| 7 | **Sprache** | **Nur Deutsch** |
| 8 | **Domain** | Selbe URL: raumton.com |

---

## TECH STACK

- **Framework:** Next.js 15 + TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion (Pflicht) | GSAP + ScrollTrigger (Premium)
- **3D Motion / Video:** Higgsfield AI MCP
- **Icons:** Lucide React
- **Komponenten:** 21st.dev (erste Anlaufstelle für Premium-Komponenten)
- **Bilder:** Lizenzfreie Quellen (Unsplash, Pexels, CC0) + eigene Kundenfotos
- **Deployment:** Vercel via GitHub Push

---

## SEO – ERSTE ERKENNTNISSE

**Primäre Keywords (Hypothese – vor Recherche zu validieren):**
- "Raumakustik Berlin"
- "Schallabsorber Berlin"
- "Akustik Büro Berlin"
- "Deckenabsorber kaufen"
- "Raumakustik Großraumbüro"

**Lokaler Fokus:** Berlin / deutschlandweit

**Strukturierte Daten:** `LocalBusiness` + `Organization` + `Service` (Pflicht)

---

## PHASEN-ÜBERSICHT

Alle 5 Phasen aus der Master-Vorlage gelten unverändert.
Details: siehe `CLAUDE-Master-Website Kopie.md`

| Phase | Inhalt | Status |
|---|---|---|
| Phase 0 | Onboarding | ✅ abgeschlossen |
| Phase 1 | Recherche (Crawl alt, Konkurrenz, Zielgruppe, Keywords) | 🔄 in Arbeit |
| Phase 2 | Struktur | ⬜ |
| Phase 3 | Build | ⬜ |
| Phase 4 | QA + DSGVO/Security | ⬜ |
| Phase 5 | Deployment | ⬜ |
