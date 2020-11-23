#[WORK IN PROGRESS] Tracer - Private Virus Tracing

- für Restaurants, Bars, Kinos und Supermärkte o.ä.
- mithilfe von QR-Code oder NFC-Chip
- Privat / Datenschutz → nur mithilfe von nicht identifizierbaren eindeutigen Hash-Werten

## Funktionsweise:
Kunde betritt Supermarkt → scannt QR-Code → einzigartiger zufälliger Wert wird erzeugt → wird zusammen mit Zeit und Ort an Server (DB) übermittelt → Kunde kauft normal ein.
1. Fall kein Corona nach 14 Tagen → Daten werden gelöscht
2. Fall es gibt Corona → einzigartiger zufälliger Wert wird veröffentlicht → App prüft (täglich, stündlich, ...) ob ein von ihm erstellter Wert veröffentlicht wurde. 
