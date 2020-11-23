# [WORK IN PROGRESS] Tracer - Private Virus Tracing :de:

- für Restaurants, Bars, Kinos und Supermärkte o.ä.
- mithilfe von QR-Code oder NFC-Chip
- Privat / Datenschutz → nur mithilfe von nicht identifizierbaren eindeutigen Hash-Werten

## Funktionsweise:
Kunde betritt Supermarkt → scannt QR-Code → einzigartiger zufälliger Wert wird erzeugt → wird zusammen mit Zeit und Ort an Server (DB) übermittelt → Kunde kauft normal ein.
1. Fall kein Corona nach 14 Tagen → Daten werden gelöscht
2. Fall es gibt Corona → einzigartiger zufälliger Wert wird veröffentlicht → App prüft (täglich, stündlich, ...) ob ein von ihm erstellter Wert veröffentlicht wurde. 
___
# [WORK IN PROGRESS] Tracer - Private Virus Tracking :uk:

- for restaurants, bars, cinemas, supermarkets or the like
- track visits with QR-codes or NFC-chips
- privacy/ data protection ensured by non-identifiable unique hash-values

## Function:
Customer visits supermarket → scans QR-code → a unique hash-value (uid) is generated → uid is stored along with time and place on server/DB → customer proceeds as usual. 
1. No Covid cases after 14 days → Data is deleted
2. A Covid case is reported → unique hash-values (uid) are published → App periodically (e.g. hourly, daily, etc.) checks if published uids match with the generated uids in the app