import { createContext, useContext, useState } from "react";

const UnitsContext = createContext(null);

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState("metric");

  function toggleUnits() {
    setUnits((u) => (u === "metric" ? "imperial" : "metric"));
  }

  const value = { units, toggleUnits };

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
}

export function useUnits() {
  const ctx = useContext(UnitsContext);
  if (!ctx) {
    throw new Error("useUnits must be used inside <UnitsProvider>.");
  }
  return ctx;
}
