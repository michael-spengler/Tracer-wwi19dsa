# Projektprozess

Für Learnings im Bereich Businessmodell & Konzeption siehe im Bereich Business.

## Untersuchte, Evaluierte Technologien

- Typescript / JavaScript
  - Entwickeln mit TypeScript (TS) und JavaScript (JS)


- Datenbank auf Blockchain
  - Zu kostspielig für ein nicht finanziertes OS-Projekt
  - Krypto und Anwendung für Developer -> leider unpassend für Tracer.


- Frontend:
Anfangs war der Plan das Frontend von Tracer mit Vue aufzubauen. Nachdem wir uns etwas über Vue informiert hatten und das erste Projekt aufgesetzt hatten, probierten wir zuerst ein paar kleinere Anpassungen am normalen Vue Template. 
Das Icon war schnell gewechselt, jedoch verstanden wir nicht die grundsätzliche Struktur von Vue, wie man die Position von Komponenten ändert, oder grundsätzlich erstmal erstellt.
Daher wechselten wir auf Angular, da ich wusste, dass in meinem Unternehmen grundsätzlich Angular für Frontend Anwendungen verwendet wird. Hier probierten wir auch etwas an einem vorgefertigtem Template herum. 
Schnell wurde klar, dass uns Vue doch etwas besser zugesagt hat, obwohl wir es nicht ganz verstanden haben.
Nachdem die endgültige Entscheidung auf Vue gefallen war, suchten wir uns zuerst den schnellsten weg eine schöne Frontend-Anwendung zu bauen. 
Ein Template eines Plugins für Vue. Das Ionic Tabs Template sah sehr gut aus und sagte uns vom Grundaufbau mit drei Tabs sehr gut zu, jedoch hatten wir immense Probleme das Projekt auf mehreren Clients zum Laufen zu bekommen, wodurch die Zusammenarbeit sehr eingeschränkt war. 
Eine lange Zeit probierten wir am Template herum, bis wir den Entschluss gefasst hatten ein Vue Projekt von Grund auf selbst aufzubauen. 
Das war unser nächster Schritt.
Es dauerte etwas, bis der Grundaufbau, das Routing und die main.js so aufgebaut waren, dass die App an sich funktionierte und auf allen Systemen aus unserer Gruppe ausführbar war. 
Dann bauten wir unsere Components auf. Zuerst ein Standard Buttondesign aus unserem Mockup, dann ein „Confirmation Button“ und so weiter. 
Nach und nach kamen die ersten Plugins dazu, wie der QR-Scanner und der QR Generator. 
Ab einem gewissen Zeitpunkt waren wir nicht mehr zufrieden mit dem Aussehen der App und beschlossen uns auf ein Framework zu einigen. 
Die Wahl viel auf Vuetify, da sie viele Components vorgefertigt anbietet, die wir benötigt haben. Schnell setzten wir unsere Homepage mit der Risikobewertung als „v-card“. 
Das Tab Konzept aus der Ionic Vorlage haben wir ebenfalls als v-buttom-navigation umgesetzt. 
Als die meisten Components und Seiten fertig waren. Versuchten wir erst händisch das Projekt zu einer PWA zu konvertieren. Nachdem bei diesem Schritt sehr viele Probleme entstanden sind suchten wir nach einer einfacheren Lösung und wurden auch fündig. 
Vue stellt in der neusten Version eine UI zur Verfügung, die man durch die CLI aufrufen kann. In dieser UI können neben vielen anderen Funktionen auch die Plugins eines Vue Projekts verwaltet werden. Als wir hier das PWA Plugin installierten funktionierte es und die App war installierbar auf dem Handy.
- Angular
  - simple Tests / get started -> Vue hat uns aber besser gefallen.
- Vue
  - gewählt wurde Vue da simple und moderne App gewünscht.
  - Vue UI
  - vuetify
  - ionic (getestet aber nicht verwendet)
  - Analysieren anderer Projekte und Templates
  - tiefergehendes Verständnis für HTML und CSS
- Progressive Web App (PWA)
  - Sinn und Funktionsweise
  - Umsetztung mit Vue


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
