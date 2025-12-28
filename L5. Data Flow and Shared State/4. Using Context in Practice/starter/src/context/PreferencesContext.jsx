import { createContext, useContext, useState } from "react";

// TODO: Create the context. Decide what the default value should be.
const PreferencesContext = createContext(null);

// TODO: Export a PreferencesProvider component
export function PreferencesProvider({ children }) {
  // TODO: Create state:
  // - largeText (boolean, starts false)
  // - showLineNumbers (boolean, starts true)

  // TODO: Create toggle functions:
  // - toggleLargeText
  // - toggleLineNumbers

  // TODO: Build the value object:
  // { largeText, showLineNumbers, toggleLargeText, toggleLineNumbers }

  return (
    // TODO: Return the Provider that wraps children
    // <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
    children
  );
}

// TODO: Export a usePreferences hook
export function usePreferences() {
  // TODO: Read from context with useContext

  // TODO: If context is missing, throw a helpful error

  // TODO: Return the context value
  return {};
}
