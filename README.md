# HS23 Play 1: Creative Coding

Repository für den Creative Coding Kurs im Modul Play 1 mit Gordan Savičić & Max Frischknecht
6.-8. November 2023

Im Kurs Creative Coding schreibt ihr eure ersten kleinen Programme um einen visuellen Output zu generieren. Ihr nutzt dazu P5js, Javascript-Library für Creative Coding, mit dem Schwerpunkt, das Programmieren für Künstler, Designer, Pädagogen, Anfänger und alle anderen zugänglich zu machen. Für mehr Info's zu P5js, schau dir die [Webseite](https://p5js.org/) an.

## Day 1

### Kickoff

  - Um gleich loslegen zu können nutzen wir den von P5 zur Verfügung gestellten Online-Editor. Erstelle dazu [hier](https://editor.p5js.org/) einen Account.
  - Schreibe deine erste Zeile Code: Ergänze ```line(0,0,100,100);``` in Zeile 7 vor dem ```}```
  - Was beschreiben die vier Parameter von `line` innherhalb der Klammern? Seht euch dazu auch die [Online-Referenz](https://p5js.org/reference/#/p5/line) an. Eine solche Referenz existiert für jede Funktion die P5 bietet.
  - Kannst du den Code ergänzen, damit ein X angezeigt wird?
  - Könnt ihr einen Kreis in die Mitte der Zeichenfläche setzen? Färbt den Kreis in einer anderen Farbe ein. 

### Übung 1: Selbstporträt

![Selbstporträt](img/selfportrait.png)

Zeichnet euch selbst in P5js! Don’t go for realistic, konzentriert euch auf ein markantes Detail. Alles ist erlaubt. Dadurch lernt ihr die folgenden grundlegenden Techniken von P5: 

- Umgang mit dem Koordinaten System
- (ev hier oder schon oben?: Grundstruktur eines Programmes mit `setup` und `draw`)
- Zeichnen mit Formen (`rect`, `ellipse`, u.a.)
- Umgang mit Farben und Konturen (`fill`, `stroke`, `strokeWeight`, `noFill`, `noStroke`)
- Verwenden von Variablen für Zahlen- und Farbwerte

Geht alles etwas schnell? Wir können euch die Youtube-Tutorials von Dan Shiffmann ans Herz legen. [Hier gibts eines zu Formen, Farben und Zeichnen in P5.](https://www.youtube.com/watch?v=c3TeLi6Ns1E&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s))

### Übung 2: 10Print
![goto10](img/goto10.png)
  - Aufgabe: Versucht eine Version von “10 PRINT” zu coden. Ihr braucht dazu line(), die random() Funktion sowie ein oder mehrere if-statements. Versucht die einzelnen Parameter zu verändern und probiert neue gestalterische Formen aus.
  - [Variablen](https://github.com/fleshgordo/LaboCreativeCoding/blob/main/02_variables.md) (width, height, random, mouseX, etc..) -> x += 1 und if's
  - Input: Video [if-statements](https://tube.switch.ch/videos/8c793d97)

## Day 2

### Übung 3: Generatives Muster
![muster](img/loop.png)
  - Aufgabe: Aufbauend auf den Funktionen der Schlaufen probiert ein generatives Muster zu erstellen. Export dieses mittels der Funktion save()
  - Input: [Loops](https://www.youtube.com/watch?v=cnRD9o6odjk)

### Übung 4: Datensatz Array
![schweiz](img/schweiz.jpg)
  - Aufgabe: Erstellt zwei Arrays/Listen (mit Nummern oder Text) und visualisiert diese. Probiert andere Visualisierungsformen aus (ellipse, line, point, arc, etc.) bzw. Gegenüberstellungen wie hier im Bild (Schweiz in Bild und Zahl)
  - Input [Arrays Teil 1](https://tube.switch.ch/videos/52a76917), [Arrays Teil 2](https://tube.switch.ch/videos/f3d6bdb1), [Arrays Teil 3](https://tube.switch.ch/videos/dfebe960)
  - [Code](XXX)

### Übung 5: Datensatz CSV
![csv](img/csv.png)
  - Aufgabe: Ausgehend vom Beispiel “Daten CSV” versucht einen der beiden Parameter (oder beide, km/ feeling) zu visualisieren. Ihr könnt den Datensatz erweitern, verändern oder auf euren eigenen Datensatz anpassen. Exportiert euren Sketch als SVG oder PNG.
  - [Starter-Code](https://editor.p5js.org/ritzdank/sketches/wd1YuitBP)
  - Andere Beispiele: [Average Temperature CH](https://editor.p5js.org/ritzdank/sketches/gshTXPNA9), [Export als SVG](https://editor.p5js.org/ritzdank/sketches/Qs7CHQnJV)
  
## Day 3

  - Individuelle Projektbetreuung

## Final project Deliverable

Eine Visualisierung mit p5js und einem Datensatz welchen ihr im “Analogen Algorithmen” Teil mit Alain ausgearbeitet habt.
- p5js Code + Screenshots (Final + Prozess)
- Falls animiert - Screencast (30sec. mp4, 1080p)

## References

- [Creative Coding Intro](https://github.com/fleshgordo/LaboCreativeCoding) by Gordan 
- [Creative Coding class](https://creative-coding.decontextualize.com/) by A. Parish 
- [p5 learn](https://p5js.org/learn/)
- [p5 reference](https://p5js.org/reference/)
- [Coding Train 🚂](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)