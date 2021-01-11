![Logo](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/business/data/Icon/Tracer_icon_vertical.png?raw=true)

# Dokumentation des Projektes "Tracer"

<!-- ## Überblick -->
<!-- <p align="center">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/html.svg" alt="Twitter" style="vertical-align:top; margin:4px">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/js.svg" alt="Twitter" style="vertical-align:top; margin:4px">
 <img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/services/npm.svg" alt="Twitter" style="vertical-align:top; margin:4px">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/tools/visualstudio_code.svg" alt="Twitter" style="vertical-align:top; margin:4px">
</p> -->

## Gruppenmitglieder
- [Marie Krieger](https://github.com/mk101101)
- [Ayman Madhour](https://github.com/Madhour)
- [Lukas Bach](https://github.com/lukasbach00)
- [Jorgo Paschaloglou](https://github.com/JorgoPascha)
- [Nico Heller](https://github.com/Pr0lin-cyber)
- [Lukas Benner](https://github.com/BennerLukas)

## Inhaltsverzeichnis

- [Einführung](#Einführung)
- [Idee](#Idee)
- [Business](#Business)
- [Technik](#Technik)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
  - [Datenbank](#Datenbank)

<br>
<br>
<br>

# Einführung
Mit Tracer möchten wir eine Alternative und Erweiterung bisheriger Systeme zur Infektionsketten Verfolgung, darstellen.

Die aktuelle Pandemie ist jedem bekannt. Die Öffentlichkeit erfährt dadurch einige (notwendige) Einschränkungen. Besonders für die Wirtschaft, im genaueren den Einzelhandel, schadet dies enorm. Wir schaffen mit Tracer dafür Abhilfe. Indem wir Infektionsketten automatisiert und einfach nachverfolgbar machen ohne dabei die Privatsphäre und Datenschutzbeschränkungen verletzen. Tracer kann vollständig anonym verwendet werden.

Wenn ein Kunde/in ein Restaurant betritt (vorausgesetzt es ist erlaubt), müssen seine/ihre Kontaktdaten aufgenommen werden. Tracer setzt genau hier an. Mithilfe der App soll nun ein QR-Code gescannt werden. Dadurch wird auf einer Datenbank ein Eintrag angelegt. In diesem wird der Ort und die Zeit sowie eine anonyme einzigartige ID abgespeichert. Die App speichert sich diese ID ebenfalls ab. Im Falle einer Infektion wird nun über die Datenbank alle betroffenen IDs veröffentlicht. Die App prüft nun, ob eine ihrer IDs betroffen ist und warnt gegebenenfalls den Kunden/in. 

![New Entry](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/business/data/Tracer-PitchDeck/Folie6.PNG?raw=true)

Die Datenbank hat keinerlei Auskunft über den Nutzer. Indirekt personenbezogene Daten wie der Ort können über verschiedene Techniken ebenfalls anonymisiert werden.
Unser Projekt ist Open Source und wird von unabhängigen Experten geprüft werden.

# Idee
Ziel der Tracer-App soll es sein dem Einzelhandel und anderen lokalen Geschäften ein geregelter und sicherer Betrieb zu ermöglichen. Unter den derzeit bestehenden Pandemiebedingungen ist dies nicht möglich. Das Nachvollziehen von Infektionsketten ist aufwendig und kompliziert und zudem scheitetet es bei vielen Bürgern an der Akzeptanz, da persönliche Daten erhoben werden müssen. Wir möchten mit unserer Technologie Abhilfe schaffen. Mit Tracer können Gewerbetreibende ohne Mehraufwand ihrem Tagesgeschäft, dem Verkaufen nachgehen. Behörden und Gesundheitsämter können zudem über einfache Schnittstellen unseren Nutzern über mögliche Infektionen schnell Bescheid geben. Für den Nutzer birgt unsere App auch einige Vorteile. Neben der einfachen und intuitiven Bedienung benötigen wir keine persönlichen oder Personen-identifizierbare Daten.
![Saved Data](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/business/data/Tracer-PitchDeck/Folie7.PNG?raw=true)
Dies möchten wir durch unabhängige Prüfer überprüfen lassen um so den höchsten Sicherheits- und Datenschutzstandards entsprechen zu können.
Unserer Vision ist es einen Beitrag zur Bekämpfung der Pandemie zu leisten, sodass die Menschen, die Wirtschaft und die gesamte Gesellschaft schnell wieder gesund wird und die Pandemie gemeistert werden kann.
Auch über die jetzige, durch den Sars-CoV2 Virus ausgelöste, Pandemie hinaus kann unsere App Einsatz finden. Die Technologie ist unabhängig von der Art der Pandemie und wir sehen es daher als wichtiges Tool für zukünftige Notfallpläne an. 


# Business
Für weitere Informationen rund um das Businessmodell und die Idee dahinter siehe folgende Materialien:
- [Pitchdeck](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/business/Tracer-PitchDeck.pdf)
- [Businessplan](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/business/Tracer-Businessplan.pdf)
- [Business Model Canvas](https://github.com/michael-spengler/Tracer-wwi19dsa/blob/main/business/Tracer-BusinessModelCanvas.pdf)
<br><br>
<br>


# Technik
Für das Frontend wird [Vue.js](https://vuejs.org/) verwendet.
## Frontend

## Backend
Für das Backend wird [Deno](https://deno.land/) verwendet.
Im Folgenden werden die einzelnen Prozesse des Backends aufgeführt und erläutert. Diese sind elementar um die Anonymität der Nutzer zu gewährleisten.

### Hinzufügen eines neuen Eintrags
![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/1_Log_New_Scan.png)

### Krankheitsfall melden
![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/2_Report_Case.png)

### Überprüfen ob Kontakt zu Infizierten bestanden hat
![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/3_Check_Risk.png)

### Neuer Ort bzw. QR-Code generieren
![Flowchart](https://raw.githubusercontent.com/BennerLukas/Tracer/main/server/ressources/flowcharts/4_Create_New_Loc-ID.png)

## Datenbank
