import { createContext, useContext, useState } from "react";

const DensityContext = createContext(null);

export function DensityProvider({ children }) {
  const [density, setDensity] = useState("comfortable");

  function toggleDensity() {
    setDensity((d) => (d === "comfortable" ? "compact" : "comfortable"));
  }

  const value = { density, toggleDensity };

  return (
    <DensityContext.Provider value={value}>{children}</DensityContext.Provider>
  );
}

export function useDensity() {
  const ctx = useContext(DensityContext);
  if (!ctx) {
    throw new Error("useDensity must be used inside <DensityProvider>.");
  }
  return ctx;
}
