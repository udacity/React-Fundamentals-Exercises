# Exercise: Context Best Practices in Practice (Multiple Focused Contexts)

In this exercise, you’ll practice using Context _well_ — in a way that avoids the “giant global context” pitfall.

You will build a small dashboard that uses **two focused contexts**:

- **DensityContext**: controls whether the UI is `"comfortable"` or `"compact"`
- **UnitsContext**: controls whether distances display as `"metric"` or `"imperial"`

These values are app-level preferences (good candidates for Context), and they affect multiple components deep in the tree.

## Files You’ll Work In

- `src/App.jsx`
- `src/context/DensityContext.jsx`
- `src/context/UnitsContext.jsx`
- `src/components/SettingsPanel.jsx`
- `src/components/Dashboard.jsx`
- `src/components/CourseList.jsx`
- `src/components/CourseCard.jsx`
- `src/components/StatsPanel.jsx`

## Requirements

### 1) Create two focused contexts

#### `DensityContext.jsx`

- Create a `DensityContext`
- Export `DensityProvider`
  - Holds `density` state (starts `"comfortable"`)
  - Exposes `toggleDensity()` to switch between `"comfortable"` and `"compact"`
- Export `useDensity()` hook
  - Uses `useContext`
  - Throws an error if used outside the provider

#### `UnitsContext.jsx`

- Create a `UnitsContext`
- Export `UnitsProvider`
  - Holds `units` state (starts `"metric"`)
  - Exposes `toggleUnits()` to switch between `"metric"` and `"imperial"`
- Export `useUnits()` hook (same rules as above)

### 2) Wrap your app with BOTH providers

In `App.jsx`, wrap your UI with:

- `<DensityProvider>`
- `<UnitsProvider>`

### 3) Build a SettingsPanel that updates context

In `SettingsPanel.jsx`:

- Use `useDensity()` and `useUnits()`
- Render two buttons:
  - `Density: Comfortable/Compact` (click toggles density)
  - `Units: Metric/Imperial` (click toggles units)

### 4) Consume context values deep in the tree

#### Density usage

In `CourseCard.jsx`:

- Use `useDensity()`
- Render a card with smaller padding in `"compact"` mode and larger padding in `"comfortable"` mode.

#### Units usage

In `StatsPanel.jsx`:

- Use `useUnits()`
- Given a distance in kilometers, display:
  - Metric: `X km`
  - Imperial: `Y miles` (miles = km \* 0.621371)

### 5) Keep local UI state local

In `CourseList.jsx`:

- Keep `selectedCourseId` as **local state** (NOT in context)
- Clicking a card selects it, highlighting the selected card

This is intentional: selection is a local UI interaction, not an app-wide preference.

## Rules

- Do NOT combine density + units into one giant context.
- Do NOT pass density or units through props.
- Local selection state should stay local.

## Success Criteria

1. Toggling Density changes spacing/padding in CourseCard.
2. Toggling Units changes StatsPanel formatting (km vs miles).
3. Selecting a course highlights only that course.
4. No prop drilling of density or units.
5. Two contexts exist, each with a clear responsibility.
