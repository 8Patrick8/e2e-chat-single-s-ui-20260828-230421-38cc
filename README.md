# Trinkgeld-Rechner

Eine kleine statische Single-Page-Web-App, die aus Betrag, Trinkgeld-Prozent und
Personenzahl live Trinkgeld, Gesamtbetrag und Betrag pro Person berechnet. Die
Berechnung läuft vollständig im Browser — ohne Server, ohne Framework, ohne
Seiten-Reload.

## Tech-Stack

- **Markup:** HTML5 (semantisches Formular mit `<label>` und `<output>`)
- **Styling:** CSS3 (Design-Tokens, responsiv, tastaturbedienbar)
- **Logik:** JavaScript (ES6), keine externen Abhängigkeiten

## Installation

Keine Installation nötig. Es werden nur die drei Dateien `index.html`,
`styles.css` und `script.js` benötigt.

## Ausführen

Da die App rein statisch ist, gibt es zwei Wege:

1. **Direkt öffnen:** `index.html` einfach im Browser öffnen (Doppelklick).
2. **Lokaler HTTP-Server (empfohlen):** im Projektverzeichnis

   ```bash
   python -m http.server 8000
   ```

   Danach im Browser `http://localhost:8000` öffnen.

## Bedienung

1. **Betrag in €** eingeben (Standardwert: 0).
2. **Trinkgeld-Prozent** eingeben (Standardwert: 15).
3. **Personenzahl** eingeben (Standardwert: 1).

Die Ergebnisse — Trinkgeld, Gesamtbetrag und Betrag pro Person — aktualisieren
sich bei jeder Eingabe sofort, ohne dass die Seite neu geladen wird. Bei einer
Personenzahl unter 1 erscheint statt des Betrags pro Person ein kurzer Hinweis.

Beispiel: Betrag 80 €, 15 % und 4 Personen ergibt **12,00 €** Trinkgeld,
**92,00 €** Gesamtbetrag und **23,00 €** pro Person.

## Features

- Live-Berechnung ohne Seiten-Reload
- Drei Eingabefelder (Betrag, Trinkgeld-Prozent, Personenzahl) mit Standardwerten
- Drei Ausgabefelder (Trinkgeld, Gesamtbetrag, Betrag pro Person)
- Geldwerte stets mit genau zwei Nachkommastellen und €-Symbol
- Robuste Eingabebehandlung: nicht-numerische Zeichen werden verworfen bzw. als 0 interpretiert
- Kurzer Hinweis bei einer Personenzahl unter 1 (kein Konsolenfehler)
- Responsives, per Tastatur bedienbares Layout mit sichtbaren Fokus-Zuständen
- Sicher: Ergebnisse werden ausschließlich über `textContent` geschrieben (kein `innerHTML`, kein `eval`)
