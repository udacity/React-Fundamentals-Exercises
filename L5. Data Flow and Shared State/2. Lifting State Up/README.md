# Exercise: Lifting State Up (Single Source of Truth)

In this exercise, you’ll practice **lifting state up**.

When two sibling components need the same data, you should:

1. Move the state to their **closest common parent**
2. Pass the state down as **props**
3. Pass update functions down as **callback props**

You’ll build a tiny “composer” UI:

- A `TextInput` where the user types a message
- A `MessagePreview` that displays the message
- A `MessageStats` panel that shows:
  - Character count
  - Whether the message is valid (must be 5–50 characters)

All three parts must stay in sync.

## Files You’ll Work In

- `src/App.jsx`
- `src/components/TextInput.jsx`
- `src/components/MessagePreview.jsx`
- `src/components/MessageStats.jsx`

## Requirements

### 1) Lift state up into `App`

In `App.jsx`, create state:

- `message` (string, starts as an empty string)

This will be the **single source of truth** for the typed message.

### 2) Make `TextInput` a controlled component

In `TextInput.jsx`:

- Accept `value` and `onChange` props
- Display `value` in the `<textarea>`
- Call `onChange(newValue)` when the user types

`TextInput` should **not** store its own message state.

### 3) Use the same message in two sibling components

- `MessagePreview` should receive the `message` prop and display it.
- `MessageStats` should receive the `message` prop and compute:
  - `count` = number of characters
  - A message is **valid** if length is between **5 and 50** (inclusive)

### 4) Add a reset button (still owned by App)

In `App.jsx`, add a button labeled **Clear** that sets `message` back to `""`.

## Success Criteria (Manual Tests)

1. Typing updates:
   - the textarea
   - the preview
   - the stats
     all at the same time (single source of truth).

2. Character count updates as you type.

3. Validity changes:
   - less than 5 characters → invalid
   - 5 to 50 characters → valid
   - more than 50 characters → invalid

4. Clicking **Clear** resets everything.
