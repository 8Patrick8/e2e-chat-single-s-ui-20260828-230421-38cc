# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Ruhige, warme und klare Optik im Geist von Stripe/Linear: cremefarbener Hintergrund, weiße Karten, ein sattes Grün als Geld-Akzent und eine Systemschrift ohne externe Abhängigkeiten.

## Colors

- `--color-bg`: **#FAF8F4**
- `--color-surface`: **#FFFFFF**
- `--color-fg`: **#1E293B**
- `--color-accent`: **#167A46**
- `--color-border`: **#E5E0D8**
- `--color-muted`: **#6B7280**
- `--color-danger`: **#B91C1C**

## Typography

- `font_family`: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- `heading_weight`: 600
- `body_weight`: 400

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 48px

## Border-Radii

- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 16px
- `--radius-pill`: 999px

## Components

### Button

padding 12px 24px, radius md, bg=accent #167A46, text #FFFFFF, font-weight 600, font-size 16px, min-height 44px (mobiles Tap-Ziel), border none; hover bg #1B8A52 (+8% Helligkeit); active bg #115C35 (-15% Helligkeit) und transform translateY(1px); disabled opacity 0.5, cursor not-allowed; focus-visible outline 2px #167A46, outline-offset 2px.

### Formular-Karte

bg surface #FFFFFF, border 1px solid border #E5E0D8, radius lg 16px, padding 16px (mobil) / 24px (ab 768px), optional shadow 0 1px 3px rgba(30,41,59,0.06); enthält die drei Eingabefelder mit je 16px vertikalem Abstand.

### Eingabefeld

Label über dem Feld, font-size 14px, font-weight 600, color fg #1E293B, margin-bottom 8px; input: width 100%, padding 10px 12px, radius md 8px, border 1px solid border #E5E0D8, bg surface #FFFFFF, color fg #1E293B, font-size 16px (verhindert iOS-Zoom), min-height 44px; focus: border-color accent #167A46, box-shadow 0 0 0 3px rgba(22,122,70,0.15); invalid/Fehler: border-color danger #B91C1C.

### Ergebnis-Karte

bg surface #FFFFFF, border 1px solid border #E5E0D8, radius lg 16px, padding 16px, shadow 0 1px 3px rgba(30,41,59,0.06); innen je Zeile: Label font-size 14px, color muted #6B7280, Wert font-size 24px, font-weight 600, color fg #1E293B, Zeile mit display flex und justify-content space-between, vertikaler Zeilenabstand 12px.

### Hinweis

bei Personenzahl < 1 sichtbar: bg #FEF2F2, border 1px solid #FECACA, color danger #B91C1C, radius md 8px, padding 8px 12px, font-size 14px; kurzer, klarer Text ohne Konsolenfehler.

## Layout Principles

- Container max-width: 480px, zentriert mit margin auto; Seitenabstand 16px mobil, 24px ab 768px.
- Einspaltiges Layout bei allen Größen — die kurze Form bleibt auch mobil übersichtlich; keine Mehrspaltigkeit.
- Vertikaler Abstand zwischen Sektionen/Blöcken: 24px (Spacing-Skala).
- Basis-Schriftgröße 16px, Zeilenhöhe 1.5; Auszeichnung der Ergebniswerte mit 24px und font-weight 600.
- Breakpoints: 480px (klein) und 768px (mittel); ab 768px großzügigere Abstände und Karten-Padding.
