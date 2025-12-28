# Exercise: Using Context in Practice (User Preferences)

In this exercise, you’ll use the Context API to share a **user preference** across multiple components **without prop drilling**.

You’ll build a small “Reading Preferences” UI:

- The user can toggle **Large Text** (on/off)
- The user can toggle **Show Line Numbers** (on/off)
- A nested `Article` view updates its display based on these preferences

## What You’ll Build

- A `PreferencesProvider` that stores preferences in state
- A `usePreferences()` hook that reads the context
- Components that read preferences from context:
  - `PreferencesPanel` (toggles)
  - `Article` (uses preferences)
  - `Line` (uses preferences)

## Files You’ll Work In

- `src/App.jsx`
- `src/context/preferences.js`
- `src/components/PreferencesPanel.jsx`
- `src/components/Reader.jsx`
- `src/components/Article.jsx`
- `src/components/Line.jsx`

## Requirements

### 1) Create the context and provider

In `src/context/preferences.js`:

- Create `PreferencesContext` with `createContext(...)`
- Export a `PreferencesProvider` component that holds state:
  - `largeText` (boolean, starts `false`)
  - `showLineNumbers` (boolean, starts `true`)
- The provider should supply a `value` object that includes:
  - `largeText`
  - `showLineNumbers`
  - `toggleLargeText()` (flips largeText)
  - `toggleLineNumbers()` (flips showLineNumbers)

### 2) Create a custom hook

In the same file:

- Export a `usePreferences()` hook that uses `useContext(PreferencesContext)`
- If the hook is used outside the provider, throw a helpful error.

### 3) Wrap your app with the provider

In `src/App.jsx`:

- Wrap the UI in `<PreferencesProvider>`

### 4) Use context in components

- `PreferencesPanel` should show two buttons:
  - "Large Text: ON/OFF"
  - "Line Numbers: ON/OFF"
    Clicking them should call the toggle functions from context.

- `Article` should render a few lines of text using the `Line` component.

- `Line` should read preferences from context:
  - If `showLineNumbers` is true, show `1.`, `2.`, etc.
  - If `largeText` is true, render the line in a larger font

## Rules

- Do NOT pass `largeText` or `showLineNumbers` through props.
- Use Context + `usePreferences()` instead.

## Success Criteria

1. Buttons toggle the preference values.
2. Article updates immediately when toggles change.
3. No prop drilling of preferences through `Reader`, `Article`, or `Line`.
