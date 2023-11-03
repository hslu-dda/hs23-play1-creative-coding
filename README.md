# HS23 Play 1: Creative Coding

Repository für den «Creative Coding» Kurs im Modul Play 1 mit Gordan Savičić & Max Frischknecht, 6.-8. November 2023, HSLU Data Design + Art

Im Kurs «Creative Coding» schreibt ihr eure ersten kleinen Programme um einen visuellen Output zu generieren. Ihr nutzt dazu P5js, eine Javascript-Library für Creative Coding, mit dem Schwerpunkt, das Programmieren für Künstler, Designer, Pädagogen, Anfänger und alle anderen zugänglich zu machen. Für mehr Info's zu P5js, schau dir die [Webseite](https://p5js.org/) an.

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
- Grundstruktur eines Programmes mit `setup` und `draw`)
- Zeichnen mit Formen (`rect`, `ellipse`, u.a.)
- Umgang mit Farben und Konturen (`fill`, `stroke`, `strokeWeight`, `noFill`, `noStroke`)
- Verwenden von Variablen für Zahlen- und Farbwerte (`let x = 10;`)
- Verwenden von Kommentaren mit `// dein Kommentar`

Geht alles etwas schnell? Wir können euch die Youtube-Tutorials von Dan Shiffmann ans Herz legen. [Hier](https://www.youtube.com/watch?v=c3TeLi6Ns1E&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s) gibts eines zu Formen, Farben und Zeichnen in P5.

### Übung 2: 10Print

![goto10](img/goto10.gif)

10 Print ist ein bekanntes [Buch](https://10print.org/) in der Creative Coding Community welches die Möglichkeiten einer einzelnen Zeile Code aus künstlerischer Perspektive zeigt. Eure Aufgabe ist es nun, eine neue Version des Klassikers “10 PRINT” zu coden. Ihr braucht dazu `line()`, Variablen, `random()` sowie die für die Programmierung sehr wichtigen **if/else Statements**.

#### Variablen

Variablen sind ein zentraler Bestandteil jeder Programmiersprache. Mittels einer Variable kann man den Wert 1x festlegen um in dann an verschiedenen Orten im Programm zu verwenden. Dadurch wird es einfacher diesen Wert nachträglich zu verändern. Hier ein Beispiel wie man eine Variable definiert.

```
let meineVariable; // definiere eine "leere" Variable mit dem namen "meineVariable" (bis auf ein paar Ausnahmen frei wählbar)
meineVariable = 10 // den Wert 10 der Variable zuweisen

let neueVariable = 20 // Variable definieren und direkt einen Wert zuweisen
```

Hier ist ein einfaches Beispiel wie eine Variable verwendet werden kann um ein Rechteck an Position `10`, `10` mit einer Breite und Höhe von `100` Pixel zu zeichnen.

```
let size = 100;
let x = 10;
let y = 10;

rect(x, y size, size)
```

##### Opertoren

Handelt es sich bei der gespeicherten Variable um eine Zahl kann man einfache mathematische Operationen vornehmen mit `+`, `-`, `*` und `/`. Hier ist ein Beispiel: 

```
let size = 100 // initialer Wert
size = size + 100 // nun ist size 200
size = size - 50 // nun ist size 150
size = size * 2 // nun ist size 300
size = size / 2 // nun ist size wieder 150
```

##### Vorgegebene Variablen

Es gibt einige Variablen welche P5 euch automatisch zur Verfügung stellt:

- `mouseX` und `mouseY` beinhalten die Position eurer Maus. Versuche einmal eine Form zu zeichnen und ersetze `x` und `y` durch diese Variablen, cool oder?
- `width` und `height` beinhalten die Dimensionen eures Sketches, also die Zahlen welche ihr im Befehl `createCanvas()` festlegt. Diese Variablen sind sehr nützlich um bspw. mit einem Grid zu arbeiten oder Objekte bspw. in der Mitte zu positionieren. 
- Für weitere Info's zu Variablen sieh dir [dieses Dokument]((https://github.com/fleshgordo/LaboCreativeCoding/blob/main/02_variables.md)) sowie [dieses Video](https://tube.switch.ch/videos/8c793d97) von Gordan an.

#### Random

Normalerweise braucht man ein bisschen Zufall, damit die Resultate eurer Programme 🔥 werden. Dafür gibt es u.a. den Befehl `random()` welcher euch eine zufällige Zahl innerhalb eines von euch festgelegten Rahmens erzeugt. 

```
// zufällige Zahl zwischen 1 und 100
let xRan = random(0, 100)

// zufällige Zahl zwischen 1 und der Höhe eures Sketches
let yRan = random(0, height)
```

#### If/Else Statements

If/Else Statements kommen in den meisten Programmiersprachen vor und sind ein zentrales Konzept. Im Kern geht es darum einen Teil des Codes nur auszuführen wenn eine Bedingung erfüllt ist, und, je nach dem ob Gewünscht, wenn die Bedingung nicht erfüllt ist, anderen Code ausführen.


```
let maximum = 100;

if(maximum == 100) {
  // wenn maximum 100 ist, wird dieser code ausgefüht
  ellipse(10, 10, 20, 20)
} else {
  // falls nicht, dieser hier
  rect(10, 10, 20, 20)
}
```

## Day 2

### Übung 3: Generatives Muster

![muster](img/loop.png)

Aufbauend auf den Funktionen der Schlaufe (`for`, `while`) erstellt ihr ein generatives Musters welches ihr anschliessend mittels `save()` exportiert.

#### For Loop 

Wenn du viele ähnliche Opertationen auf einmal erledigen wollen, ist die "for-Schleife" das Mittel der Wahl. `let i` ist ein Zähler, der normalerweise bei 0 beginnt. Solange `i` kleiner als 100 ist, wird der Code innerhalb der `{}` ausgeführt. `i = i + 1` gibt an, wie groß die Zählschritte sind:

```
for (let i = 0; i < 100; i = i + 1) {
  rect(0, 0, 100, 100);
}
```

Von Dan Shiffman gibt es dazu ebenfalls ein [Youtube Tutorial](https://www.youtube.com/watch?v=cnRD9o6odjk)

#### While Loop

Eine while-Schleife ist eine Art von Schleife, die einen Codeblock wiederholt, solange eine bestimmte Bedingung erfüllt ist. While-Schleifen sind ideal, wenn wir Code eine unbekannte Anzahl von Malen wiederholen wollen. 

```
while(boolean expression){
    // code to execute while the condition is true
}
```

Wenn der boolesche Ausdruck als wahr bewertet wird, wird der Code innerhalb der Schleife ausgeführt. Sobald der boolesche Ausdruck als falsch bewertet wird, verlässt der Computer die while-Schleife und fährt mit dem Programm fort. 


#### Save & Export

Es gibt verschiedene Wege um die Bilder welche ihr in P5js kreiert zu exportieren, einer davon ist die Funktion `save()` mit welcher ihr den gesammten Canvas / Sketch als Bild exportieren könnt. 

```
let cnv = createCanvas(300, 300);
save(cnv, 'myCanvas.jpg');
```

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