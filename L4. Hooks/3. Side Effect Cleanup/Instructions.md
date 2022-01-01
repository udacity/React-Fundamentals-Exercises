# Side Effect Cleanup

When trying to updating state on an unmounted component, React will raise a warning in the console. This is true in the case of many asynchronous operations. In this exercise, you'll practice using the `useEffect` hook with cleanup. To begin:

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.
3. Visit `http://localhost:3000/` and demo the application. Be sure than the console is open (i.e., in Chrome DevTools if using Chrome). The text at the bottom will automatically change from "red" to "green" in 3000 milliseconds. If "Toggle" is clicked before the bottom text changes from "red" to "green", you will see a warning in the console:

"Warning: Can’t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."

Note: If the text is already "green", refresh the page to try again.

4. Open `./src/App.js` and examine how it works (you won't need to modify anything in this file).
5. Open `./src/ChildComponent.js` and examine how it works (\*see answer below).
6. Update the logic in the `useEffect` hook in `./src/ChildComponent.js` to include side effect cleanup. That is, even with `setTimeout` delay of 3000 milliseconds, clicking "Toggle" at any time would _not_ cause React to raise the warning.

# Explanation for Step 5 (Above)

When the user clicks "Toggle" before 3000 milliseconds is up, the component is unmounted from the DOM. Because `setTimeout` is asynchronous in nature, the `setColor()` function will try to set state on an unmounted component. This will prompt React to show a warning in the console.

# Documentation

For more on side effects with cleanup, check out the article in the official React documentation:

https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
