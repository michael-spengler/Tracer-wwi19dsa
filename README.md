![Logo](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/data/Icon/Tracer_icon_vertical.svg)

<br><br>
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/michael-spengler/tracer-wwi19dsa?include_prereleases)
[![GitHub issues](https://img.shields.io/github/issues/michael-spengler/Tracer-wwi19dsa)](https://github.com/michael-spengler/Tracer-wwi19dsa/issues)
[![GitHub license](https://img.shields.io/github/license/michael-spengler/Tracer-wwi19dsa)](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/michael-spengler/Tracer-wwi19dsa)](https://github.com/michael-spengler/Tracer-wwi19dsa/network)
[![GitHub stars](https://img.shields.io/github/stars/michael-spengler/Tracer-wwi19dsa)](https://github.com/michael-spengler/Tracer-wwi19dsa/stargazers)
![GitHub all releases](https://img.shields.io/github/downloads/michael-spengler/Tracer-wwi19dsa/total)

## Benutzung

Um den Server selber zu benutzen muss Deno und View installiert sein. Anstatt eines Docker-Containers für die DB kann auch eine nativ auf dem PC laufende MySQL verwendet werden.

```bash
docker container run --rm -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true docker.io/mariadb:latest

deno run --allow-net --allow-read --allow-write --allow-env --unstable ./server/src/api.ts

cd .\client\

npm run serve
```

Sollte `npm run serve` nicht funktionieren muss ggf. vorher `npm i` ausgeführt werden.

## Technologien

![Deno](https://img.shields.io/badge/Backend-Deno-blue?style=flat&logo=deno)
![Vue](https://img.shields.io/badge/Frontend-Vue.js-blue?style=flat&logo=Vue.js)
![NPM](https://img.shields.io/badge/Packages-NPM-blue?style=flat&logo=npm)
![TS](https://img.shields.io/badge/Language-TypeScript-blue?style=flat&logo=Typescript)
![JS](https://img.shields.io/badge/Language-JavaScript-blue?style=flat&logo=JavaScript)
![DB](https://img.shields.io/badge/Database-MySQL-blue?style=flat&logo=mysql)

<br><br>

# Dokumentation des Projektes "Tracer"

<div>
<img src="https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/data/Screenshots/iphone_gruen.png?raw=true" alt="iPhone" width="200"/>
<img src="https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/data/Screenshots/iphone_orange.png?raw=true" alt="iPhone" width="200"/>
<img src="https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/data/Screenshots/iphone-rot.png?raw=true" alt="iPhone" width="200"/>
</div>

## Inhaltsverzeichnis

- [Einführung](#Einführung)
- [Idee](#Idee)
- [Business](#Business)
- [Team](#Team)
- [Technik](#Technik)
  - [Backend](#Backend)
  - [Frontend](#Frontend)
- [Projekt](#Projekt)
- [Learnings](#Learnings)

## Einführung

Mit Tracer möchten wir eine Alternative und Erweiterung bisheriger Systeme zur Infektionsketten Verfolgung, darstellen.

Die aktuelle Pandemie ist jedem bekannt. Die Öffentlichkeit erfährt dadurch einige (notwendige) Einschränkungen. Besonders für die Wirtschaft, im genaueren den Einzelhandel, schadet dies enorm. Wir schaffen mit Tracer dafür Abhilfe. Indem wir Infektionsketten automatisiert und einfach nachverfolgbar machen ohne dabei die Privatsphäre und Datenschutzbeschränkungen verletzen. Tracer kann vollständig anonym verwendet werden.

Wenn ein Kunde/in ein Restaurant betritt (vorausgesetzt es ist erlaubt), müssen seine/ihre Kontaktdaten aufgenommen werden. Tracer setzt genau hier an. Mithilfe der App soll nun ein QR-Code gescannt werden. Dadurch wird auf einer Datenbank ein Eintrag angelegt. In diesem wird der Ort und die Zeit sowie eine anonyme einzigartige ID abgespeichert. Die App speichert sich diese ID ebenfalls ab. Im Falle einer Infektion wird nun über die Datenbank alle betroffenen IDs veröffentlicht. Die App prüft nun, ob eine ihrer IDs betroffen ist und warnt gegebenenfalls die Kunden.

![New Entry](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/data/Tracer-PitchDeck/Folie6.PNG?raw=true)

Die Datenbank hat keinerlei Auskunft über den Nutzer. Indirekt personenbezogene Daten wie der Ort können über verschiedene Techniken ebenfalls anonymisiert werden.
Unser Projekt ist Open Source und wird von unabhängigen Experten geprüft werden.

## Idee

Ziel der Tracer-App soll es sein dem Einzelhandel und anderen lokalen Geschäften ein geregelter und sicherer Betrieb zu ermöglichen. Unter den derzeit bestehenden Pandemiebedingungen ist dies nicht möglich. Das Nachvollziehen von Infektionsketten ist aufwendig und kompliziert und zudem mangelt es bei vielen Bürgern an der Akzeptanz, da persönliche Daten erhoben werden müssen. Wir möchten mit unserer Technologie Abhilfe schaffen. Mit Tracer können Gewerbetreibende ohne Mehraufwand ihrem Tagesgeschäft, dem Verkaufen nachgehen. Behörden und Gesundheitsämter können zudem über einfache Schnittstellen unseren Nutzern über mögliche Infektionen schnell Bescheid geben. Für den Nutzer birgt unsere App auch einige Vorteile. Neben der einfachen und intuitiven Bedienung benötigen wir keine persönlichen oder Personen-identifizierbare Daten.
![Saved Data](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/data/Tracer-PitchDeck/Folie7.PNG?raw=true)
Dies möchten wir durch unabhängige Prüfer überprüfen lassen um so den höchsten Sicherheits- und Datenschutzstandards entsprechen zu können.
Unserer Vision ist es einen Beitrag zur Bekämpfung der Pandemie zu leisten, sodass die Menschen, die Wirtschaft und die gesamte Gesellschaft schnell wieder gesund wird und die Pandemie gemeistert werden kann.
Auch über die jetzige, durch den Sars-CoV2 Virus ausgelöste, Pandemie hinaus kann unsere App Einsatz finden. Die Technologie ist unabhängig von der Art der Pandemie und wir sehen es daher als wichtiges Tool für zukünftige Notfallpläne an.

## Business

Für weitere Informationen rund um das Businessmodell und die Idee dahinter siehe folgende Materialien:

- [Pitchdeck](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/Tracer-PitchDeck.pdf)
- [Businessplan](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/Tracer-Businessplan.pdf)
- [Business Model Canvas](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/Tracer-BusinessModelCanvas.pdf)
- [Value Proposition Canvas](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/Tracer-ValuePropositionCanvas.pdf)

## Team

- [Ayman Madhour](https://github.com/Madhour)
- [Lukas Bach](https://github.com/lukasbach00)
- [Jorgo Paschaloglou](https://github.com/JorgoPascha)
- [Nico Heller](https://github.com/Pr0lin-cyber)
- [Lukas Benner](https://github.com/BennerLukas)

## Technik

Im Laufe des Projekts haben wir einiges lernen können. Wichtige Dinge haben wir in [Learnings](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/learnings.md) festgehalten.

### Backend

Für das Backend wird [Deno](https://deno.land/) verwendet.
Im Folgenden werden die einzelnen Prozesse des Backends aufgeführt und erläutert. Diese sind elementar um die Anonymität der Nutzer zu gewährleisten.

#### Hinzufügen eines neuen Eintrags

![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/1_Log_New_Scan.png)

#### Krankheitsfall melden

![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/2_Report_Case.png)

#### Überprüfen ob Kontakt zu Infizierten bestanden hat

![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/3_Check_Risk.png)

#### Neuer Ort bzw. QR-Code generieren

![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/4_Create_New_Loc-ID.png)

#### Datenbank

#### API & JavaScript

### Frontend

Für das Frontend wird [Vue.js](https://vuejs.org/) verwendet.

#### Vue

<!-- Warum Vue und nicht angular; Vorgehensweise, Komponenten, Screens, etc -->

#### Vuetify

<!-- Warum? was ist das? Vorteile/Nachteil; warum nicht mehr ionic? -->

#### PWA & Design

<!-- Designguide, Mockup, Wireframe, reponsive/ PWA ; UX Gedanken -->

## Projekt

Unser Projekt haben wir folgendermaßen umgesetzt. [Ayman Madhour](https://github.com/Madhour) und [Jorgo Paschaloglou](https://github.com/JorgoPascha) haben sich um das Backend (Deno, JS, TS) und die API/ Schnittstelle zum Frontend, sowie die Logik des Programms gekümmert. [Lukas Bach](https://github.com/lukasbach00) und [Nico Heller](https://github.com/Pr0lin-cyber) hatten den Bereich des Frontends (Vue, Vuetify) unter sich. [Lukas Benner](https://github.com/BennerLukas) kümmerte sich um alle Businessaspekte (Businessplan, Video) und war zudem als Springer in den anderen Bereichen tätig.

In der Regel haben wir uns einmal die Woche zu unserem "Weekly" getroffen. Dort haben wir die erledigten Aufgaben besprochen, Ideen ausgetauscht und neue Aufgaben für die kommende Zeit verteilt. Wir haben im Rahmen unseres Projektes eng mit den Features von GitHub gearbeitet. Besonders mit Issues und den Projekt-Boards (KANBAN-Boards). Darüber wurden Ideen, Bugs und fehlende Features erfasst. Diese wurden einer Person und einem Bereich zugeteilt. Diese Person konnte dann die Aufgaben aufnehmen, abarbeiten und als erledigt abhaken. Dies beschleunigte Prozesse enorm, da jeder den Überblick über den aktuellen Stand behalten konnte und enges zusammenarbeiten einfach möglich war.
Zudem haben wir mit verschiedenen "Branches" für verschiedene Bereiche gearbeitet um neue Dinge auszuprobieren zu können. Siehe [learnings](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/learnings.md).

In den letzten Wochen unseres Projekts hat sich unsere Arbeitszeit daran noch deutlich erhöht. Nun haben wir uns meist täglich getroffen um Bugs zu besprechen, Designfragen zu klären oder einfach effizienter im Pairprogramming voran zu kommen.

## Learnings

Für ausführlichere Informationen zu unseren Learnings siehe [hier](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/doc/learnings.md).
