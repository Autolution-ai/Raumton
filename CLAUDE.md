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

---

### Nationale Wettbewerber (Website-Analyse)

#### EASY Noise Control — easy-noisecontrol.de
- **Hero:** "Ihr Spezialist für Raumakustik" / #wirsindakustik
- **Stärken:** 1.207 verifizierte Bewertungen (Score 9.2/10), 500+ Projekte/Jahr, Online-Shop, eigene Messsoftware "Acoustic Advisor", Webshop mit Direktkauf
- **Schwächen:** Keine Berliner Verankerung, sehr breit (wirkt generisch), kein Eigenfertigungsnachweis, keine emotionale Markenstory

#### WILSON Akustik — wilson-akustik.de
- **Hero:** Projektreferenzen im Slider, kein klarer Claim
- **Stärken:** Authentische Expertenstory seit 1986 (brit. Musikszene), technische Tiefe, DIN-Normen-Kompetenz, Denkmalschutz-Nische
- **Schwächen:** Website veraltet, keine Bewertungen, sehr wenige Referenzprojekte sichtbar, keine Preisinfo

#### aixFOAM — aixfoam.de
- **Hero:** "Schallabsorber gegen Lärm und Hall – seit über 65 Jahren!"
- **Stärken:** 65 Jahre Marktpräsenz, breiteste Produktpalette, günstigste Preise, Online-Shop, 3D-Raumplaner-Tool, echte Kundenbewertungen (Trusted Shops), 7 Länder-Shops
- **Schwächen:** Kein Installations-Service, Schaumstoff-Ästhetik wirkt im Premiumbereich limitierend, kaum emotionale Differenzierung

#### TEXAA — texaa.de
- **Hero:** "Schallwirksame Paneele und akustische Lösungen"
- **Stärken:** Ästhetisch führend, klare Architekten-Nische, eigenes Textil "Aeria" als Differenzierungsmerkmal, Büro Frankfurt
- **Schwächen:** Null Preistransparenz, kein Online-Kauf, ausschließlich Architekten-Vertrieb, kein Social Proof in Zahlen

#### acousticpearls — acousticpearls.de
- **Hero:** "Das Gefühl von Raum" / "Hocheffektive Akustiklösungen mit maximaler Designvielfalt"
- **Stärken:** Made in Germany, Greenguard-zertifiziert, eigene Planungsapp (DIN 18041), Händlernetz
- **Schwächen:** Website teilweise 404, kein Direktvertrieb, sehr schmaler Vertriebskanal, Website technisch instabil

---

### Positionierungs-Matrix

**Was machen ALLE gleich — davon abheben:**

| Gemeinsamkeit | Differenzierungschance für raumton |
|---|---|
| Kein Self-Service / nur Kontakt-Formular | Online-Anfrage-Tool mit Raumtyp + m²-Eingabe |
| Keine/kaum verifizierte Kundenbewertungen mit Zitaten | Google-Widget + Testimonials mit Name/Firma/Logo |
| Kein Educational Content | Akustik-Ratgeber, Guides, Rechner → SEO + Vertrauen |
| Ergebnisse in Zahlen kaum kommuniziert | "Nachhall von X auf Y Sek." als Ergebnisversprechen |
| Kaum Video-Content | Vorher/Nachher-Demo, Showroom-Tour, Montage-Zeitraffer |

**Was macht KEINER — dort angreifen:**

| Lücke im Markt | Opportunity |
|---|---|
| Keiner zeigt Vorher/Nachher-Messungen (RT60) systematisch | Case Studies mit Dezibel-Zahlen → nachprüfbarer Beweis |
| Keiner hat klar kommunizierte Garantie/Nachbesserung | "raumton-Versprechen": Kostenlose Nachmessung 4 Wochen nach Montage |
| Keiner bietet transparentes Einstiegspaket | "Starter-Paket Konferenzraum ab X €" |
| Keiner zeigt Mitarbeiter/Manufaktur von innen | "Gefertigt von [Name] in Berlin-Schöneberg" |
| Kein Berliner Lokalstolz als Markenbestandteil | "Berliner Manufaktur seit 2006" — EASY/WILSON kommen aus NRW |
| Kein Nachhaltigkeit-Nachweis der eigenen Produktion | Materialien, kurze Lieferwege, Recycling als eigene Story |

---

### Top 5 Empfehlungen für die neue raumton-Website

**1. Verifizierten Social Proof skalieren**
EASY Noise Control hat 1.207 Bewertungen Score 9.2 — raumton hat keine einzige öffentliche Kundenstimme, obwohl die Referenzliste beeindruckender ist. Sofortmaßnahme: Google-Bewertungswidget auf der Startseite + 10 Testimonials mit Name/Position/Logo aktiv einsammeln.

**2. Digitalen Erstkontakt radikal vereinfachen**
4-Felder-Online-Anfrage-Formular: Raumtyp → Fläche (m²) → Herausforderung → Kontakt. Automatische Bestätigung: "Wir melden uns innerhalb von 1 Werktag." Kein einziger Wettbewerber bietet das — echter Marktweißraum.

**3. Ergebnisse statt Produkte kommunizieren — mit Messzahlen**
Niemand kommuniziert konsequent messbare Ergebnisse. Hero-Versprechen: "raumton reduziert Ihren Nachhall messbar — durchschnittlich von X auf Y Sekunden." Jede Case Study mit RT60-Vorher/Nachher → nachprüfbar und einzigartig.

**4. Berliner Lokalbindung als Markenstärke aktiv ausspielen**
EASY kommt aus Mönchengladbach, WILSON aus Westmünsterland, aixFOAM aus NRW. Raumton ist die einzige Berliner Fertigung. "Gefertigt in Berlin-Schöneberg" als permanenter Badge. Sektion "Unsere Werkstatt" mit echten Mitarbeitern und Maschinen.

**5. Content-Hub aufbauen — SEO + Vertrauen + passive Leads**
raumton.com hat null Content. aixFOAM dominiert Google mit FAQ-Seiten, EASY rankt über Raumtyp-Guides. Quartalsweise 4 Ratgeber-Seiten: "Wie laut ist Ihr Büro wirklich?", "Konferenzraum akustisch optimieren", "Schallabsorber vs. Akustiksegel", "Raumakustik für Restaurants". Passiver Lead-Strom ohne Kaltakquise.

---

## PHASEN-ÜBERSICHT

Alle 5 Phasen aus der Master-Vorlage gelten unverändert.
Details: siehe `CLAUDE-Master-Website Kopie.md`

| Phase | Inhalt | Status |
|---|---|---|
| Phase 0 | Onboarding | ✅ abgeschlossen |
| Phase 1 | Recherche (Konkurrenz, Zielgruppe, Keywords) | ✅ abgeschlossen |
| Phase 2 | Struktur | ✅ abgeschlossen |
| Phase 3 | Build | ✅ abgeschlossen |
| Phase 4 | QA + DSGVO/Security | ⬜ |
| Phase 5 | Deployment | ⬜ |

---

## PHASE 2 – SEITENSTRUKTUR

### URL-Architektur

```
/                    → Startseite (Hauptkonversionsseite)
/leistungen          → Leistungsübersicht + Einzelseiten
/leistungen/buero    → Akustik für Büros / Großraumbuero
/leistungen/gastro   → Akustik für Gastronomie / Restaurants
/leistungen/bildung  → Akustik für Bildungseinrichtungen
/referenzen          → Referenzprojekte (Case Studies)
/showroom            → Showroom Berlin Schöneberg
/ueber-uns           → Über raumton / Team / Manufaktur
/faq                 → Häufige Fragen (NEU, user-bestätigt)
/kontakt             → Kontakt + Anfrage-Formular
/impressum           → Pflichtseite
/datenschutz         → Pflichtseite
```

---

### Startseite — Sektionen (in dieser Reihenfolge)

#### 1. Navigation (sticky, transparent → solid on scroll)
- Logo links
- Links: Leistungen | Referenzen | Showroom | Über uns | FAQ
- CTA rechts: „Kostenlos beraten lassen“ (Primär-Button, filled)
- Mobile: Hamburger → Fullscreen Overlay
- **Animation:** Fade-in on load, background blur transition on scroll

#### 2. Hero — Hauptversprechen
- **Headline:** „Berlin hört besser. Seit 2006.“
  *(Alternativ: „Wir machen Räume angenehm leise.“)*
- **Subheadline:** „Individuelle Schallabsorber – geplant, gefertigt und montiert von raumton in Berlin-Schöneberg.“
- **CTA (primär):** „Jetzt kostenlose Beratung anfragen“ → scrollt zu Anfrageformular
- **CTA (sekundär):** „Referenzen ansehen“ → /referenzen
- **Visual:** Fullscreen-Video (Higgsfield) oder hochwertige Fotografie Showroom/Montage
- **Trust-Badge:** „1.500+ Projekte · 15+ Jahre · Made in Berlin“
- **Animation:** GSAP ScrollTrigger — Headline-Wörter per SplitText einblenden, Video parallax

#### 3. Social Proof Strip (direkt unter Hero)
- Logos der bekanntesten Kunden: BVG, Deutsche Bahn, HelloFresh, Berliner Philharmoniker, Commerzbank, Sparkasse, Fraunhofer
- Laufband (infinite horizontal marquee)
- **Text oben:** „Vertrauen von über 1.500 Kunden – darunter:“

#### 4. Problem / Pain (Warum Akustik wichtig ist)
- **Headline:** „Lärm kostet Konzentration. Hall kostet Aufträge.“
- 3 Kacheln mit Icon + kurzer Copy:
  - Großraumbüro: Mitarbeiterproduktivität sinkt bei >55 dB
  - Restaurant: Gäste bleiben kürzer, wenn es zu laut ist
  - Konferenzraum: Schlechte Sprachverständlichkeit = verlorene Deals
- **Animation:** Staggered fade-in on scroll

#### 5. Leistungen (Services)
- **Headline:** „Alles aus einer Hand — von der Messung bis zur Montage“
- **Prozess-Visualisierung (4 Schritte):**
  1. Kostenlose Beratung & Messung
  2. Individuelle Planung & Design
  3. Fertigung in Berlin-Schöneberg
  4. Professionelle Montage
- **Leistungskarten (3–4):** Büro · Gastronomie · Bildung · Wohnen
- Jede Karte: Icon, Headline, 2–3 Zeilen Copy, Link → /leistungen/[slug]
- **Animation:** Cards staggered on scroll

#### 6. Referenzen / Case Studies Preview
- **Headline:** „Was raumton messbar verändert“
- 3 Featured Projects als große Cards:
  - Bild | Kundenname | Branche | RT60 Vorher → Nachher (wenn vorhanden)
  - Kurze Beschreibung (1 Satz)
- **CTA:** „Alle Referenzen ansehen“ → /referenzen
- **Animation:** Horizontal scroll / parallax cards on scroll

#### 7. Über uns / Vertrauen (Manufaktur-Sektion)
- **Headline:** „Berliner Handwerk. Seit 2006.“
- Foto: Werkstatt / Leo Ripper + Ulli Müller / Team
- Copy: Gründungsgeschichte, Generationsbergabe, Made in Schöneberg
- **Keydata:** 20 Jahre Erfahrung · 2. Generation · Eigene Fertigung · 300+ Farben & Texturen
- Link: „Unser Team kennenlernen“ → /ueber-uns
- **Animation:** Image parallax + counter animation (Zahlen zählen hoch)

#### 8. Testimonials
- **Headline:** „Was unsere Kunden sagen“
- 5–8 Testimonials als Slider/Karten:
  - Format: Zitat + Name + Position + Unternehmen + Foto (wenn möglich)
- Google Bewertungs-Badge (falls Widget vorhanden)
- **Animation:** Auto-sliding carousel, Framer Motion

#### 9. Online-Anfrage-Formular (Haupt-CTA-Sektion)
- **Headline:** „Kostenlose Erstberatung — wir melden uns innerhalb von 1 Werktag“
- **4-Schritt-Formular:**
  1. Raumtyp (Büro · Gastronomie · Konferenz · Wohnen · Sonstiges) — Button-Select
  2. Raumgröße (m²) — Slider oder Eingabe
  3. Herausforderung (Freitext oder Checkboxen: Nachhall · Sprachverständlichkeit · Lautstärke)
  4. Kontaktdaten (Name · E-Mail · Tel · Adresse optional)
- **Bestätigung:** Inline-Success-Message „Danke! Wir melden uns innerhalb von 1 Werktag.“
- **Animation:** Progress-Bar zwischen Steps, smooth transitions

#### 10. FAQ Preview (NEU)
- **Headline:** „Häufige Fragen“
- 5 wichtigste FAQs als Accordion (expandierbar)
- Link: „Alle Fragen ansehen“ → /faq
- **FAQ-Inhalte (erste 5):**
  1. Wie lange dauert ein Projekt von Beratung bis Montage?
  2. Was kostet eine Raumakustik-Lösung ungefähr?
  3. Kommen Sie auch außerhalb von Berlin?
  4. Sind Ihre Materialien nachhaltig?
  5. Kann ich Muster vor dem Kauf bestellen?

#### 11. Showroom CTA
- **Headline:** „Erleben Sie Akustik live — im Showroom Berlin-Schöneberg“
- Adresse + Öffnungszeiten + Google Maps Embed
- CTA: „Termin vereinbaren“ (mailto / Formular)
- **Animation:** Map fade-in on scroll

#### 12. Footer
- Logo + Slogan „einfach schön leise“
- Navigation: Leistungen · Referenzen · Showroom · Über uns · FAQ · Kontakt
- Rechtliches: Impressum · Datenschutz
- Kontaktdaten: Tel 030 / 70 50 95 11 · info@raumton.com
- Social Media (wenn vorhanden)
- Copyright © raumton GmbH

---

### /faq — FAQ-Seite (vollständig)

- **Headline:** „Häufige Fragen zu raumton & Raumakustik“
- Kategorisierte Accordions:
  - **Über raumton:** Geschichte, Team, Showroom, Liefergebiet
  - **Produkte & Materialien:** Absorber-Typen, Farben, Nachhaltigkeit, Muster
  - **Preise & Ablauf:** Kosten, Angebotsprozess, Lieferzeit, Montage
  - **Technik & Ergebnisse:** Was ist RT60, welche Verbesserungen sind realistisch
- Schema Markup: `FAQPage` structured data (Pflicht für Google Featured Snippets)

---

### /referenzen — Referenzseite

- Grid aller Referenzprojekte (Foto + Branche + Ort)
- Filter nach Branche: Büro · Gastronomie · Bildung · Öffentlich
- Featured Case Studies (3 ausführlich): Vorher/Nachher-Fotos, RT60-Messung, Kundenzitat
- CTA: Anfrage-Formular am Ende

---

### /ueber-uns — Über uns

- **Gründungsgeschichte:** Ulli Müller → Audiotechnik → Studiobau → raumton 2006
- **2. Generation:** Leo Ripper seit 2022
- **Team-Fotos** (wenn vorhanden)
- **Manufaktur:** Fertigung in Berlin-Schöneberg (Fotos Werkstatt, Maschinen, Material)
- **Nachhaltigkeit:** Keine Mineralfasern, 100% recycelbar, kurze Lieferwege
- **Zahlen:** 15+ Jahre · 1.500+ Kunden · 300+ Farben · ~3 Wochen Lieferzeit

---

### Design-Prinzipien (Style Guide)

```
Farben:
  Primär:    Aus bestehender CI (aus Website extrahieren)
  Hintergrund: Sehr dunkel (near-black, z.B. #0A0A0A oder #111)
  Akzent:    CI-Farbe für CTAs
  Text:      #F5F5F5 (auf dunkel), #1A1A1A (auf hell)

Typografie:
  Headlines:  Serif oder Premium Sans (Playfair Display / Cormorant / Inter)
  Body:       Inter oder DM Sans
  Größen:     Fluid Typography mit clamp()

Spacing:
  Sektionsabstand: 120px–200px (viel Weißramm)
  Max-Width Content: 1200px
  Max-Width Hero: Full-bleed

Animationen:
  Standardeinblend: opacity 0→1, translateY 30px→0, 0.6s ease
  Stagger-Delay: 0.15s zwischen Elementen
  GSAP ScrollTrigger: trigger start="top 80%"
  Kein autoplay ohne user-gesture (außer muted video)
```

---

### Konversions-Hierarchie

```
Primär-CTA:  „Kostenlos beraten lassen“ → Anfrageformular (Sektion 9)
Sekundär-CTA: „Referenzen ansehen“ → /referenzen
Tertiär-CTA:  „Showroom besuchen“ → Sektion 11 / Termin
```

---

### SEO-Struktur (Page-Level)

| Seite | Primäres Keyword | Meta Title |
|---|---|---|
| / | Raumakustik Berlin | raumton – Schallabsorber & Raumakustik Berlin \| Seit 2006 |
| /leistungen/buero | Büroakustik Berlin | Büroakustik Berlin – Großraumbüro & Konferenzraum \| raumton |
| /leistungen/gastro | Restaurantakustik Berlin | Akustik für Restaurants & Gastronomie Berlin \| raumton |
| /referenzen | Akustik Referenzprojekte | Referenzprojekte Raumakustik Berlin \| raumton |
| /faq | Raumakustik Fragen | FAQ – Alles zu Schallabsorber & Akustik \| raumton |
| /ueber-uns | raumton GmbH Berlin | Über raumton – Berliner Manufaktur seit 2006 |
