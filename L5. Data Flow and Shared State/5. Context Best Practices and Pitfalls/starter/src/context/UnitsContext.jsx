import { createContext, useContext, useState } from "react";

// TODO: Create a focused context for units (metric/imperial)

export function UnitsProvider({ children }) {
  // TODO: Store the units preference and provide a way to toggle it

  function toggleUnits() {
    setUnits((u) => (u === "metric" ? "imperial" : "metric"));
  }

  const value = { units, toggleUnits };

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
}

export function useUnits() {
  // TODO: Read the context, and give a helpful error if used outside the provider
}
