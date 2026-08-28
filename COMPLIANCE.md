VERDICT: CHANGES_REQUESTED

# Prüfbericht – Trinkgeld-Rechner (statische Web-App)

## 1. DSGVO / Datenschutz

**Keine Befunde.**

- Die Anwendung verarbeitet nach dem sichtbaren Code **keine personenbezogenen Daten** im Sinne von Art. 4 Nr. 1 DSGVO. Betrag, Trinkgeld-Prozent und Personenzahl sind keine personenbezogenen Daten.
- Es gibt **keine Cookies, kein Tracking, keine externen Requests, keine Speicherung** (localStorage, sessionStorage, IndexedDB) und keine Server-Übertragung.
- `autocomplete="off"` an den Eingabefeldern minimiert eine unbeabsichtigte Browser-Speicherung zusätzlich.

Damit besteht weder eine Einwilligungspflicht noch eine Datenschutzerklärungspflicht aus der Anwendung selbst. (Die IP-Adresse des Nutzers würde nur durch den Hosting-Server verarbeitet; das ist außerhalb des geprüften Codes.)

## 2. EU Cyber Resilience Act (CRA)

**Befund: low**

- **Positiv:** Die sichtbare Implementierung setzt Security-by-Design/Default um: Ausgaben ausschließlich über `textContent`, keine dynamische Codeausführung (`eval`, `new Function`, `setTimeout` mit String), keine HTML-Injektion.
- **Lücke:** Für ein Produkt mit digitalen Elementen fehlt im sichtbaren Umfang eine dokumentierte Sicherheits- und Aktualisierungsstrategie (SBOM, Aktualisierungsweg, Sicherheitsmerkmale). Eine statische Seite kann zwar durch erneutes Deployment aktualisiert werden, dieser Prozess ist jedoch **nicht dokumentiert**.
- **Konkrete Abhilfe:** `README.md` um einen Abschnitt „Sicherheit & Update-Prozess“ ergänzen, z. B.:
  - Sicherheitsmerkmale: keine externen Abhängigkeiten, kein Serverzustand, Ausgaben über `textContent`.
  - Aktualisierung: Bereitstellung durch erneutes Deployment der statischen Dateien; beabsichtigter Patch-Weg.
  - SBOM-Hinweis: keine Fremdbibliotheken, kein Build; ausschließlich HTML/CSS/JS.

Dies ist kein Blocker, aber für die Marktreife zu dokumentieren.

## 3. EU AI Act

**Nicht anwendbar.**

Die Anwendung enthält **keine KI-Funktion** im Sinne des AI Acts. Es gibt kein Modell, keine automatisierten Entscheidungen und keine persönliche Profilbildung. Daher bestehen keine Transparenz- oder Risikoklassen-Pflichten nach dem AI Act.

## 4. Pflichttexte & UI

**Befund: medium**

- **Fehlender Rechtshinweis / Impressum:** Die Seite ist als öffentliche Web-UI angelegt. Es gibt **kein Impressum, keine Anbieterkennzeichnung und keine Rechtsseiten**. Ob eine Impressumspflicht besteht, hängt vom Anbieter/Marktauftritt ab; für eine öffentlich zugängliche, möglicherweise geschäftsmäßig angebotene Web-App ist das Fehlen ein marktrelevanter Mangel.
- **Cookies/Einwilligung:** **Kein Cookie-Banner erforderlich**, da keine Cookies oder vergleichbaren Technologien gesetzt werden.
- **Konkrete Abhilfe:**  
  - Neue Datei `impressum.html` mit den nach § 5 DDG erforderlichen Anbieterangaben anlegen (Name, Anschrift, Kontakt, ggf. Vertretungsberechtigter).  
  - In `index.html` im Footer einen Link auf `impressum.html` ergänzen.  
  - Falls später Daten verarbeitet werden (z. B. Hosting-Server-Logs mit IP-Adressen, Analyse, Speicherung), zusätzlich eine `datenschutz.html` verlinken.

## 5. Barrierefreiheit (WCAG / BITV / EAA)

**Befund 1: medium – Fehlerhinweis nicht programmatisch verknüpft und nicht live angekündigt**

- Aktuell wird der Hinweis „Bitte eine Personenzahl von mindestens 1 eingeben.“ nur per `hidden` ein-/ausgeblendet. Er ist nicht mit dem Eingabefeld verknüpft und wird für Screenreader nicht zuverlässig als Änderung angekündigt.
- **Konkrete Abhilfe in `index.html`:**
  - Am Input `id="personen"` ergänzen: `aria-describedby="personen-hint"`.
  - Am Hinweis `id="personen-hint"` ergänzen: `role="alert"` oder `aria-live="polite"`. Beispiel:
    ```html
    <input type="number" id="personen" name="personen" value="1" min="1" step="1"
           inputmode="numeric" autocomplete="off" aria-describedby="personen-hint">
    <p class="hint" id="personen-hint" role="alert" hidden>…</p>
    ```

**Befund 2: medium – Ergebnisaktualisierung nicht als Live-Region gekennzeichnet**

- Die Ergebnisse ändern sich bei jeder Eingabe, aber Screenreader erhalten keine programmatische Mitteilung über die neuen Werte.
- **Konkrete Abhilfe in `index.html`:**
  - Den Ergebnis-Container mit `aria-live="polite"` versehen, z. B.:
    ```html
    <section class="card" aria-labelledby="result-heading" aria-live="polite">
    ```
  - So werden Aktualisierungen von Trinkgeld, Gesamtbetrag und Betrag pro Person für assistive Technologien angekündigt, ohne die Funktion einzuschränken.

**Positiv vermerkt:**
- Semantisch passende `<label>`-Elemente, sichtbarer Fokus (`:focus-visible`), ausreichende Zielgrößen (`min-height: 44px`), `inputmode` für mobile Eingaben und klare Farbkontraste sind vorhanden.

## Fazit

Die Kernfunktion und die Sicherheitsarchitektur sind sauber umgesetzt: keine personenbezogenen Daten, keine Cookies, keine dynamische HTML-Injektion, keine dynamische Codeausführung. Blockierende Rechtsverstöße liegen nicht vor.

Es bestehen jedoch behebbare Lücken im Bereich Pflichttexte (Impressum) und Barrierefreiheit (ARIA-Verknüpfung und Live-Regionen) sowie eine Dokumentationslücke für den CRA. Daher: **CHANGES_REQUESTED**.