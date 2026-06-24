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

## PHASE 1 – KONKURRENZANALYSE

### Direktkonkurrenten (Berlin / Vollservice wie raumton)

#### 1. WB Akustik GmbH — wb-akustik.de
- **Standort:** Schönwalde (Berlin/Brandenburg), seit 2017
- **Positionierung:** "Einzelquelle" – Produkt + Montage, Online-Shop
- **Produkte:** Deckensegel, Akustikdecken, Wandabsorber
- **Stärken:** Eigener Online-Shop mit direktem Bestellprozess, Berliner Marktpräsenz
- **Schwächen:** Junges Unternehmen (7 Jahre), deutlich weniger Referenzen, kein Showroom bekannt, begrenzte Produktvielfalt

#### 2. raumAKUSTIKS — raum-akustiks.de
- **Standort:** Berlin, Frankfurt am Main, Dachau – DACH-weit
- **Positionierung:** Vollservice (Messung → Planung → Fertigung → Montage)
- **Stärken:** Sehr breite regionale Abdeckung, professionelles Auftreten, Akustikmessung als USP
- **Schwächen:** Kein eigener Showroom kommuniziert, keine kommunizierten Zahlen (Kunden/Projekte), Design-Palette unklar

#### 3. Akustikbild-Manufaktur — akustikbild-manufaktur.de
- **Standort:** Berlin, 10+ Jahre Erfahrung
- **Positionierung:** Individuelle Akustikbilder + Paneele, Planung + Montage
- **Zielgruppe:** Büros, Kliniken, Praxen, Kitas, Gastronomie
- **Stärken:** Design-fokussiert, breite Zielgruppenansprache
- **Schwächen:** Keine kommunizierten Kundenzahlen, kein eigener Showroom erwähnt

#### 4. AGORAphil GmbH — agoraphil.de
- **Standort:** Berlin Oldenburger Str. (seit 2009/2010), eigene Produktion
- **Positionierung:** Nachhaltige, individuell angepasste Akustikelemente
- **Produkte:** Akustikpaneele, Formelemente, Raumteiler, Schreibtischtrennwände, Deckensegel
- **Stärken:** Eigene Berliner Produktion, Nachhaltigkeitsfokus, 15+ Jahre am Markt
- **Schwächen:** Geringere Online-Sichtbarkeit, kein klar kommunizierter Showroom

#### 5. psssst akustik — psssstakustik.de
- **Standort:** Berlin, handgefertigt
- **Positionierung:** Modulares Absorber-System, Onlinekonfigurator
- **Produkte:** Wandabsorber ab 210 €, Trennwände ab 320 €
- **Stärken:** Online-Konfigurator, direkt bestellbar, transparente Preise
- **Schwächen:** Kein Vollservice (kein Messung/Planung inklusive), kleineres Sortiment

---

### Nationale Vollservice-Konkurrenten

#### 6. SONATECH — sonatech.de
- **Positionierung:** "Alles aus einer Hand" deutschlandweit (Beratung + Messung + Produkte + Montage)
- **Stärken:** Klare Prozessdarstellung, breite Kundenansprache
- **Schwächen:** Kein Berliner Fokus/Showroom, weniger lokale Verankerung

#### 7. freiraum Akustik — freiraumakustik.de
- **Erfahrung:** 20+ Jahre, 1.600+ Projekte
- **Produkte:** Custom Design Absorber, Akustikbilder, Deckensegel, Tischtrennwände
- **Stärken:** Sehr starke Referenzzahlen, kostenloser Versand ab 1.500 €, 10% Rabatt ab 10 Stück
- **Schwächen:** Kein Showroom/Berlin-Fokus, wirkt wie Online-Shop statt persönlichem Service

#### 8. objectiv — objectiv.de
- **Standort:** Köln, 25+ Jahre, ausgezeichnet
- **Positionierung:** Nachhaltige Akustikpaneele + Akustikbilder, Made in Germany
- **Stärken:** Award-winning, hohe Designqualität, Nachhaltigkeitsstory
- **Schwächen:** Kein Berlin-Fokus, eher Produkt- als Serviceanbieter

---

### Online-/Produkt-Konkurrenten (anderes Segment, aber relevant)

| Anbieter | USP | Schwäche vs. raumton |
|---|---|---|
| **Silenti** (silenti.de) | Made in Germany, 300+ Designs, günstig | Kein Service, kein Vor-Ort-Termin |
| **aixFOAM** (aixfoam.de) | 65+ Jahre, Marktführer Schaumstoff | Industrie-/Studiofokus, kein Büro-Service |
| **EASY Noise Control** | Breites Sortiment, B2B | Kein Berliner Vollservice |

---

### Positionierungs-Matrix

**Was ALLE Konkurrenten machen:**
- Betonen Qualität und Erfahrung
- Zeigen Produkte und Anwendungsfälle
- Bieten Kontaktformular/Telefon

**Was KEINER so kommuniziert wie raumton:**
- Showroom in Berlin (physisch erlebbar) → **raumton's stärkstes Alleinstellungsmerkmal**
- 1.500+ Kunden **mit Namen/Logos belegt** (DAX40, Bundesministerien)
- Zweite Generation Familienunternehmen + Nachhaltigkeitsstory kombiniert
- Konkrete Lieferzeit (3 Wochen) als Versprechen

**Positionierungslücken – dort angreifen:**
1. **Showroom als Vertrauensanker** prominenter herausstellen als jeder Wettbewerber
2. **Nachhaltigkeitsnachweis** (keine Mineralfasern, 100% recycelbar) als eigenes Trust-Signal – kein Berliner Wettbewerber kommuniziert das so klar
3. **Familien-Story** (Ulli Müller → Leo Ripper, 2. Generation) als emotionalen Differenziator nutzen
4. **Konkrete Zahlen** (1.500+ Kunden, 15+ Jahre, 3 Wochen Lieferzeit, 300+ Farben) überall sichtbar machen

---

### Top 5 Empfehlungen für die neue raumton-Website

1. **Showroom-CTA in die Navigation** – "Showroom besuchen" als Hauptaktion neben "Anfrage stellen"
2. **Kundenlogo-Carousel sofort unter dem Hero** – Rolls-Royce, Auswärtiges Amt, Vattenfall, Deutsche Bahn sehen → Vertrauen sofort
3. **Nachhaltigkeit als eigene Sektion** – Keine Mineralfasern, 100% recycelbar, Berliner Produktion → Kein Konkurrent macht das so explizit
4. **Prozess-Timeline visuell** – 4 Schritte (Anfrage → Analyse → Angebot → Montage) prominent als "So einfach geht's"
5. **Zweite-Generation-Story** – Leo Ripper sichtbar machen. Menschen kaufen von Menschen. Kein Wettbewerber hat eine solche Story.

---

## PHASEN-ÜBERSICHT

Alle 5 Phasen aus der Master-Vorlage gelten unverändert.
Details: siehe `CLAUDE-Master-Website Kopie.md`

| Phase | Inhalt | Status |
|---|---|---|
| Phase 0 | Onboarding | ✅ abgeschlossen |
| Phase 1 | Recherche (Konkurrenz, Zielgruppe, Keywords) | ✅ abgeschlossen |
| Phase 2 | Struktur | ⬜ |
| Phase 3 | Build | ⬜ |
| Phase 4 | QA + DSGVO/Security | ⬜ |
| Phase 5 | Deployment | ⬜ |
