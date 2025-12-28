# Exercise: Identifying Prop Drilling (Without Context)

In this exercise, you’ll practice **spotting prop drilling** and reducing it using a tool you already know: **component composition**.

Prop drilling happens when you pass a prop through components that don’t need it, just so a deeper child can use it.

You are NOT allowed to use Context in this exercise.

## Files You’ll Work In

- `src/App.jsx`
- `src/components/Section.jsx`
- `src/components/Card.jsx`
- `src/components/DeepButton.jsx`

## Starting Behavior

- `App` owns `theme` state (`"light"` / `"dark"`)
- Clicking "Toggle theme" switches the theme
- `DeepButton` needs `theme` to style itself

Right now, `theme` is passed through `Section` and `Card`, even though they don’t use it.

## Your Goal

Refactor so that:

✅ Only `DeepButton` receives the `theme` prop  
✅ `Section` and `Card` do NOT accept or pass `theme` anymore  
✅ No Context API

## Hint (composition)

Instead of passing `theme` through `Section` and `Card`, you can pass **a React element** (like `<DeepButton theme={theme} />`) as a prop or as children.

This keeps `theme` close to where it’s used.

## Success Criteria

1. `Section` and `Card` no longer have `theme` props.
2. `DeepButton` still updates correctly when theme changes.
3. The UI looks the same: you still see the nested boxes and a themed button.
4. You did not use Context.
