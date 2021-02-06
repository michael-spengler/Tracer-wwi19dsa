# Information Text

Tracer ermöglicht einfaches und anonymes nachverfolgen von Infektionsketten.

Mit Tracer können Sie einfachy bequem und schnell Infektionsketten nachverfolgen. Einfach den QR-Code des Restaurants oder Geschäfts scannen.

Dadurch können händische Zettel oder Listen abgeschafft werden. Es spart Zeit und keine sensiblen Daten werden veröffentlicht.

## FAQ:

### Wie funktioniert Tracer?

Jeder Besucher scannt einen QR-Code mit der Tracer-App. Dadurch wird der Ort und der Zeitpunkt des Besuchs einer Datenbank übermittelt. Diese werden zusammen mit einer zufälligen aber eindeutigen Nummer versehen. Diese Nummer wird anschließend auch auf dem Endgerät gespeichert.

Wird nun ein positiver Fall gemeldet, können alle auf diesem Endgerät gespeicherten Nummern der Datenbank übergeben werden. Daraus kann der Ort und der Zeitpunkt potentieller Infektionen herausgefunden werden. Alle Nummern, die für den selben Ort zu ungefähr dem selben Zeitraum angelegt worden, werden veröffentlicht. Die Tracer App überprüft ob eine auf dem eigenen Endgerät gespeicherten Nummer betroffen ist. Ist dies der Fall wird der Nutzer in Form einer roten Meldung informiert.

Weitere Informationen finden Sie [hier](https://github.com/michael-spengler/Tracer-wwi19dsa)

### Welche Daten werden erhoben und ist es wirklich anonym?

Die Tracer App braucht lediglich eine Kamera und Speicherplatz für die auf dem Engerät gespeicherten Nummern.
Im Vergleich zu passiven Tracking-Apps werden keine Sensoren wie Bluetooth benötigt. Jedoch wird auch nur getrackt, wenn ein QR-Code aktiv getrackt wird.
In der zugrundeliegenden App werden lediglich der Ort (als zufälliger eindeutiger Wert), ein Zeitpunkt und eine zufällige eindeutige Nummer gespeichert (User ID).
Es gibt keine Möglichkeit einen Eintrag eines Nutzers mit einem weiteren Eintrag des Selben Nutzers zu verknüpfen. Die einzigartigen Nummern werden immer zentral von der Datenbank generiert und dem Endgerät übertragen.
Nicht mehr benötigte Daten werden ebenfalls gelöscht.
Tracer schützt jedoch nicht vor komprimierten Internetverbindungen oder ähnlichem.

Weitere Informationen finden Sie [hier](https://github.com/michael-spengler/Tracer-wwi19dsa)

### Wer steckt hinter Tracer?

Tracer ist ein studentisches Projekt von 6 dualen Wirtschaftsinformatik Studenten der DHBW Mannheim. Das Projekt ist OpenSource und unterliegt der MIT Lizenz. Für weitere Informationen schauen Sie [hier](https://github.com/michael-spengler/Tracer-wwi19dsa)-
