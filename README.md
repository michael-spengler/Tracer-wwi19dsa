![Logo](https://raw.githubusercontent.com/BennerLukas/Tracer/5c2a9aca34dce7fbeb0db8acc52927b57f071b0d/business/data/Icon/Tracer_icon_vertical.svg)

# Dokumentation des Projektes "Tracer"

## Überblick
<p align="center">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/html.svg" alt="Twitter" style="vertical-align:top; margin:4px">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/js.svg" alt="Twitter" style="vertical-align:top; margin:4px">
 <img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/services/npm.svg" alt="Twitter" style="vertical-align:top; margin:4px">
 <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/tools/visualstudio_code.svg" alt="Twitter" style="vertical-align:top; margin:4px">

</p>
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

# Idee
für Restaurants, Bars, Kinos und Supermärkte o.ä.
mithilfe von QR-Code oder NFC-Chip
Privat / Datenschutz → nur mithilfe von nicht identifizierbaren eindeutigen Hash-Werten
Funktionsweise:
Kunde betritt Supermarkt → scannt QR-Code → einzigartiger zufälliger Wert wird erzeugt → wird zusammen mit Zeit und Ort an Server (DB) übermittelt → Kunde kauft normal ein.

Fall kein Corona nach 14 Tagen → Daten werden gelöscht
Fall es gibt Corona → einzigartiger zufälliger Wert wird veröffentlicht → App prüft (täglich, stündlich, ...) ob ein von ihm erstellter Wert veröffentlicht wurde.

# Business

<br>

# Technik
Für das Frontend wird [Vue.js](https://vuejs.org/) verwendet.
## Frontend

## Backend
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