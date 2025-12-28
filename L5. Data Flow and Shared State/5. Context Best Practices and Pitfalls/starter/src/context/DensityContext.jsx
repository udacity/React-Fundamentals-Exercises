import { createContext, useContext, useState } from "react";

// TODO: Create a focused context for layout density

export function DensityProvider({ children }) {
  // TODO: Store the density preference and provide a way to toggle it

  function toggleDensity() {
    setDensity((d) => (d === "comfortable" ? "compact" : "comfortable"));
  }

  const value = { density, toggleDensity };

  return (
    <DensityContext.Provider value={value}>{children}</DensityContext.Provider>
  );
}

export function useDensity() {
  // TODO: Read the context, and give a helpful error if used outside the provider
}
