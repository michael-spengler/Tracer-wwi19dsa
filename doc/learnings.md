# Projektprozess

Für Learnings im Bereich Businessmodell & Konzeption siehe im Bereich Business.

## Untersuchte, Evaluierte Technologien

- Typescript / JavaScript
  - Entwickeln mit TypeScript (TS) und JavaScript (JS)


- Datenbank auf Blockchain
  - Zu kostspielig für ein nicht finanziertes OS-Projekt
  - Krypto und Anwendung für Developer -> leider unpassend für Tracer.


- Frontend:

- Angular
  - simple Tests / get started -> Vue hat uns aber besser gefallen.
  - Anfangs Frontend von Tracer mit Vue -> kleinere Anpassungen am normalen Vue Template
  - Wir verstanden nicht die grundsätzliche Struktur von Vue z.B. Position von Komponenten ändern etc. 
  - Daher wechsel auf Angular -> probieren mit vorgefertigtem Template 

- Vue
  - Vue hat doch etwas besser zugesagt, obwohl wir es nicht ganz verstanden haben
  - Endgültige Entscheidung auf Vue  -> suchten zuerst den schnellsten weg eine schöne Frontend-Anwendung zu bauen
  - Ionic Tabs Template -> sah sehr gut aus und sagte vom Grundaufbau mit drei Tabs sehr gut zu
  - Jedoch Probleme das Projekt auf mehreren Clients zum Laufen zu bekommen 
  - Lange Zeit probierten wir am Template herum -> Entschluss Vue Projekt von Grund auf selbst aufbauen 
  - Aufbau Components -> Zuerst Standard Buttondesign aus Mockup
		      -> dann „Confirmation Button“ usw.
  - Nach und nach ersten Plugins: z.B. QR-Scanner und QR Generator
  - Ab gewissem Zeitpunkt nicht mehr zufrieden mit dem Aussehen der App -> auf ein Framework einigen
  - Die Wahl viel auf Vuetify -> viele Components vorgefertigt -> Risikobewertung als „v-card“
  - Tab Konzept aus Ionic Vorlage -> ebenfalls als v-buttom-navigation umgesetzt
  - gewählt wurde Vue da simple und moderne App gewünscht.
  - Vue UI
  - vuetify
  - ionic (getestet aber nicht verwendet)
  - Analysieren anderer Projekte und Templates
  - tiefergehendes Verständnis für HTML und CSS

- Progressive Web App (PWA)
  - damit auch in erster Linie Mobile User die App verwenden können
  - Umsetztung mit Vue
  - Als Components und Seiten fertig waren -> Versuch händisch das Projekt zu einer PWA zu konvertieren -> sehr viele Probleme -> einfachere Lösung: Vue UI
  - In Vue UI: Plugins des Vue Projekts verwalten -> PWA Plugin installieren -> funktionierte


- Deno als Backend (oder Node.js)
  - TypeScript und Javascript überschneiden sich stark, typesafety erspart aber auf langer sicht Kopfschmerzen 
  - JavaScript packages funktionieren ebenfalls in Deno
  - da Deno ziemlich neu ist, sind viele Probleme noch undokumentiert
    - Errors müssen händisch gefixt werden, keine copy&paste quickfixes aus StackOverflow 


- Projektorganisation
  - Git (auch tiefergehende Möglichkeiten)
    - Github (KANBAN-Board, Issues, Aufgabenverteilung, License)
    - README und Markdown
    - Branches für paralleles Arbeiten
    - gitignore
  - flüssiges Zusammenarbeiten (wichtiges Learning für ggf. spätere (OpenSource) Projekte)
  - Projektstruktur (Ordnerstruktur)


- Datenbanken und Datenspeicher
  - Für das gesamte Projekt waren zunächst nur einige JSON Files vorgesehen
    - Es stellte sich heraus, dass man als Client nicht auf .JSON Files zugreifen kann
    - Zudem wäre ein solcher Speicher nur bei bestehender Internetverbindung funktionsfähig
  - Im Backend wurde für eine kurze Zeit ein .JSON File zum Speichern benutzt, das Abfragen erwies sich jedoch als unnötig kompliziert
  - Cookies sind nicht persistent und somit nicht zuverlässig
  - Nach langer Recherche erwies sich Localbase als best performer:
    - Es erfüllt alle Anforderungen: Persistent, leicht zu bedienen und abzufragen, offline funktionalität

- Pseudonymisierung
 - Zunächst war geplant, allen usern einen zufälligen Hash als ID zu geben
  - Zwei Probleme: Kollisionen sind möglich & so gibt es keine binäre Suche
 - Mit der Bibliothek CUID konnten beide Probleme gelöst werden

- Docker
  - Dockerize und Dockerfile
  - Dockercontainer -> Evaluierung der Umsetzung


- Business
  - Schreiben von Businessplans
  - Erstellen Pitch-Decks
  - Erstellen Businessmodel Canvas und Value Proposition Canvas
  - Logodesign
  - Mockups & Wireframes erstellen
