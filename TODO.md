1. The borders classes have a lot of issues that prevent them from being intuitive:
    * Lots of the class categories lack responsive versions,  
    notably the border-style classes, and the zero-border classes.
2. The height and width classes also have a lot of inconsistencies  
that make them difficult to intuit:
    1. The classes that use the `em` unit are prefixed with `s` for some reason  
    e.g., `sh1`. Presumably this is "screen-height 1"?  
    I'd like to come up with a different convention `em` unit classes.
    2. The min-height classes are prefixed with `n`. This should probably be `mnh` ?
    3. the max-height classes are prefixed with `x`. This hsould probably be `mxh` ?
    4. The `em` unit classes only go up to 7??
    5. the min-width class prefix is `mw`, but the min-height prefix is `nh` ?????
3. Add flex classes
4. Add margin 0 auto class (or just margin-side: auto classes)
5. Add additional top/bottom classes through to f
6. Differentiate out the grid system from css grids
7. Box shadows can be set on the 'horizontal' sides via `bslr` or 'vertical' sides via `bstb`, but the margin and padding classes do this via `mv*` or `mh*` (for 'vertical' and 'horizontal'). Need to standardize.
8. Convert colors and perhaps other reused values into variables.
9. Some classes append `a` to the name to designate 'all sides', like `ba` for "border all sides", or `bsia` for "box shadow inset all sides". However, other classes imply all sides, like `m4` or `p4`, which apply margins or padding to all sides. We should standardize on this.
10. There are a few classes in the `macian.display.css` file that are not really display styles; one is a table style, and several are opacity levels.
11. Create table-specific file and add more styles for tables.
12. The grid file has several issues:
    1. There are several display classes that should live in the `Display` file, as well as match the convention for the display classes.
    2. It contains the classes for both the 'floating div' style of columns (a la old bootstrap), as well as the utilities for CSS grids. These should live in separate files.
    3. The CSS grid support could use a lot of additional helper classes to aid in setting up the grid template rows and columns (maybe one set of classes from 1-f for setting row templates, and another set of classes for column templates)
    4. Support for grid templates? Could be cool for rapid html layouts?
13. The layout file is kind of ambiguously defined; it might could be named more specifically to fit a group of CSS classes
14. The `float` classes in the layout file are named `rf` and `lf` and should be `fr` and `fl`
15. Clean up the misc file. Some things genuinely belong here, but there is a lot that doesn't:
    1. Backgrounds could get their own file
    2. The margin auto classes are in here, and belong in the margin file with a standardized name
    3. The vertical align classes should be expanded to include all options and then included in both the typography AND the table docs
16. Add helper class to be used with the `r` class that sets a 'gutter' for the columns, all except the last child
17. The `rl` class is broken on tables out of the box, because it doesn't properly set the border of the rest of the cells to 0, just the table rows.
18. Many of the typography styles break the property-value format of the classes, like `sc` class, which should probably be `fvsc` etc.
19. There are some `max-width` styles in the typography file that are meant to define optimum paragraph widths, but they probably belong more in the `widths` file and documentation.
20. Flesh out the `column-count` classes to add more than just the 1 column count class, as well as `column-width` classes, for nice, multi-column layouts.
