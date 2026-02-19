# JA-DOM

A small DOM practice project with a simple Tailwind-styled layout.

## What This Project Is

- `index.html`: page structure and Tailwind utility classes.
- `js-dom.js`: educational DOM manipulation and traversal examples.
- `src/input.css`: Tailwind entry file.
- `dist/output.css`: generated Tailwind output.

## `js-dom.js` Comment Guide

The JavaScript file is intentionally heavily commented so each example explains:

1. What DOM method/property is being used.
2. Why each safety check exists.
3. What happens when the target element is missing.
4. What side effects the example causes in the document.

Key sections in `js-dom.js`:

- Utility helpers:
  - `getById(id)`: wraps ID lookup.
  - `warnMissing(...)`: logs a clear "skipped" message.
  - `runExample(...)`: isolates each example and catches errors.
- Section A: basic DOM manipulation.
- Section B: DOM traversal (parents, children, siblings).

## Run Tailwind

Use these commands from the project root:

```bash
npm.cmd run watch:css
```

```bash
npm.cmd run build:css
```

## Should This Project Have a README?

Yes. Even for small projects, a README helps you (and others) quickly understand:

1. What the project is for.
2. How to run/build it.
3. Where key logic lives.
4. Any intentional learning/demo patterns in the code.
