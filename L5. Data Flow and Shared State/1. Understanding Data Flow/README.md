# Exercise: Understanding Data Flow (Props Down, Events Up)

In this exercise, you’ll reinforce React’s default data flow:

- The **parent owns state**
- **Props flow down** into children
- **Events flow up** through callback props

You’ll build a small counter UI where the user can:

- Adjust a **step** value (e.g. 1, 2, 5)
- Increment/decrement the count by that step
- Reset the count

## Files You’ll Work In

- `src/App.jsx`
- `src/components/CounterDisplay.jsx`
- `src/components/CounterControls.jsx`
- `src/components/StepInput.jsx`

## Requirements

### 1) App owns the state

In `src/App.jsx`, create state for:

- `count` (number, starts at `0`)
- `step` (number, starts at `1`)

Do **not** store derived values in state.

### 2) Props go down

- Pass `count` to `<CounterDisplay />`
- Pass `step` and `onStepChange` to `<StepInput />`
- Pass callback props to `<CounterControls />`:
  - `onIncrement`
  - `onDecrement`
  - `onReset`

### 3) Events go up (callbacks)

Implement these behaviors in `App` and pass them down:

- **Increment**: add `step` to `count`
- **Decrement**: subtract `step` from `count`, but never let `count` go below `0`
- **Reset**: set `count` back to `0`
- **Step change**: update `step` from the StepInput field

### 4) Derived UI (computed, not stored)

In `App.jsx`, display a line of text that says:

- `Next value: X`

Where `X` is computed as `count + step`.

This should be computed during render (not saved in state).

## Success Criteria (Quick Manual Tests)

1. Page loads with:
   - `Count: 0`
   - `Step: 1`
   - `Next value: 1`

2. Clicking **+ Step** increases count by the current step.

3. Changing step to `5` then clicking **+ Step** increases count by `5`.

4. Clicking **- Step** decreases count by the step, but never goes below `0`.

5. Clicking **Reset** returns count to `0`.

That’s it—keep it small and let the data flow do the teaching.
