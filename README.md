[![Screenshot](screenshot.png)](https://avanier.studio/macian)

**Macian** is a [Tachyons](https://tachyons.io/)-inspired CSS framework. The goal with Macian is to create a lightweight yet versatile CSS framework to simplify the process of creating things for the web and to unify my creations under a set of standards.

## Philosophy
Macian (much like Tachyons and other atomic-type CSS frameworks) tries to bridge the gap between HTML and the underlying styles by creating CSS classes that have a 1:1 correlation to the style attributes. For example, instead of having a `heading` class that applies a font size, font weight, and margins above and below, Macian provides the `f1`, `fw4`, and `mb3` classes, which set those three styles separately. The benefit is more fine-grain control, less ambiguity as to what class is applying what styles, and less priority conflict between styles.

In addition, class names should be easy to intuit by thinking about the underlying style. If the style has a unit associated with it, like `em`s or percentages, a number is appended to the class name. Macian uses a hexadecimal numbering system, which has "numbers" from 0 through f, where a = 10, b = 11, c = 12 and so on, with `f` being the max value. If the style has a string value, like `dashes` or `absolute`, then the first letter of that value is appended to the class name.

For example, applying a medium amount of padding to an element is accomplished with the `p4` class. Applying the same amount of padding only to the top of an element is accomplished with the `pt4` class (`padding-top`). To apply a border to all sides of an element, apply the `ba` class. To set the border style to `dashed`, also apply the `bsd` class.

## Features
+ Mobile-first architecture
+ Golden ditonic typographic scale
+ Small utility classes

## Usage
```html
<link rel="stylesheet" href="https://unpkg.com/macian/macian.min.css">
```

---

**By [Avanier](https://avanier.studio/macian) and [Jake](https://jakofranko.github.io). Licensed under [MIT](LICENSE).**

## Note

This is a fork of [Josh's GitLab repo](https://gitlab.com/joshavanier/macian/-/tree/master). I have decided to improve this a bit and maintain an npm version as I find it very useful in my own projects especially for rapid prototyping.
