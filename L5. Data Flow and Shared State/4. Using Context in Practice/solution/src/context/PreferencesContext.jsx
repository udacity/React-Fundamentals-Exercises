import { createContext, useContext, useState } from "react";

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [largeText, setLargeText] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);

  function toggleLargeText() {
    setLargeText((v) => !v);
  }

  function toggleLineNumbers() {
    setShowLineNumbers((v) => !v);
  }

  const value = {
    largeText,
    showLineNumbers,
    toggleLargeText,
    toggleLineNumbers,
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error(
      "usePreferences must be used inside <PreferencesProvider>.",
    );
  }
  return ctx;
}
