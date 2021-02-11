<template>
<div>
    <br>
    <img class="logo" src="@/assets/img/info-black-18dp.svg" height="80" alt="error picture not available"/>
    <p class=p_left>
      Tracer ermöglicht einfaches und anonymes nachverfolgen von Infektionsketten.
      <br>
      <br>
    Mit Tracer können Sie einfachy bequem und schnell Infektionsketten nachverfolgen. Einfach den QR-Code des Restaurants oder Geschäfts scannen.
    Dadurch können händische Zettel oder Listen abgeschafft werden. Es spart Zeit und keine sensiblen Daten werden veröffentlicht.
    </p>

  <h2 class="h2">Wie funktioniert Tracer?</h2>
  <img class="logo" src="@/assets/img/help-24px.svg" height="70" alt="error picture not available"/>

  <p class=p_left>
    Jeder Besucher scannt einen QR-Code mit der Tracer-App. Dadurch wird der Ort und der Zeitpunkt des Besuchs einer Datenbank übermittelt. Diese werden zusammen mit einer zufälligen aber eindeutigen Nummer versehen. Diese Nummer wird anschließend auch auf Ihrem Endgerät gespeichert.

    Meldet nun eine Person einen positiven Fall, können alle auf deren Endgerät gespeicherten Nummern der Datenbank übergeben werden. Daraus kann der Ort und der Zeitpunkt potentieller Infektionen herausgefunden werden. Alle Nummern, die für den selben Ort zu ungefähr dem selben Zeitraum angelegt worden, werden veröffentlicht. Die Tracer App überprüft ob eine auf dem eigenen Endgerät gespeicherten Nummer betroffen ist. Ist dies der Fall wird der Nutzer in Form einer roten Meldung informiert.

    Weitere Informationen finden Sie <a href="https://github.com/michael-spengler/Tracer-wwi19dsa">hier</a>
  </p>
  <h2 class="h2">Welche Daten werden erhoben und ist es wirklich anonym?</h2>
  <img class="logo" src="@/assets/img/storage-24px.svg" height="70" alt="error picture not available"/>

  <p class=p_left>
    Die Tracer App braucht lediglich eine Kamera und Speicherplatz für die auf dem Engerät gespeicherten Nummern.
    Im Vergleich zu passiven Tracking-Apps werden keine Sensoren wie Bluetooth benötigt. Jedoch wird auch nur getrackt, wenn ein QR-Code aktiv getrackt wird.
    In der zugrundeliegenden App werden lediglich der Ort (als zufälliger eindeutiger Wert), ein Zeitpunkt und eine zufällige eindeutige Nummer gespeichert (User ID).
    Es gibt keine Möglichkeit einen Eintrag eines Nutzers mit einem weiteren Eintrag des Selben Nutzers zu verknüpfen. Die einzigartigen Nummern werden immer zentral von der Datenbank generiert und dem Endgerät übertragen.
    Nicht mehr benötigte Daten werden ebenfalls gelöscht.
    Tracer schützt jedoch nicht vor komprimierten Internetverbindungen oder ähnlichem.

    Weitere Informationen finden Sie <a href="https://github.com/michael-spengler/Tracer-wwi19dsa">hier</a>
  </p>
  <h2 class="h2">Wie kann ich eigene QR-Codes erstellen?</h2>
  <img class="logo" src="@/assets/img/qr_code-24px.svg" height="70" alt="error picture not available"/>

  <p class=p_left>
    Wenn Sie einen eigenes Geschäft haben oder im Rahmen einer Veranstaltung Infektionsketten nachverfolgen wollen können Sie mithilfe der Tracer-App ebenfalls einen eigenen QR-Code erstellen. Dafür müssen Sie nur eine übliche Verweildauer angeben (z.B. Supermarkt 30 Minuten) und anschließend wird auf dem Server eine zufällige eindeutige Nummer erzeugt und für Sie in Form eines QR-Codes bereitgestellt. Anschließend können Sie mit dem Teilen beginnen. Beachten Sie, dass Sie diesen QR-Code sichern müssen. Tracer speichert diesen nicht.
  </p>
  <h2 class="h2">Wer steckt hinter Tracer?</h2>
  <img class="logo" src="@/assets/img/groups-24px.svg" height="70" alt="error picture not available"/>

  <p class=punten>
    Tracer ist ein studentisches Projekt von 6 dualen Wirtschaftsinformatik Studenten der DHBW Mannheim. Das Projekt ist OpenSource und unterliegt der MIT Lizenz. Für weitere Informationen schauen Sie <a href="https://github.com/michael-spengler/Tracer-wwi19dsa">hier</a>
  </p>
  <tab_bar></tab_bar>
  </div>
</template>

<script>
import tab_bar from "@/components/tab_bar";

export default {
  components: {tab_bar},
  name: "app_information"
}
</script>

<style scoped src="@/assets/Stylesheet.css">

</style>