import { useDensity } from "../context/DensityContext";
import { useUnits } from "../context/UnitsContext";

export default function SettingsPanel() {
  const { density, toggleDensity } = useDensity();
  const { units, toggleUnits } = useUnits();

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <button onClick={toggleDensity}>
        Density: {density === "comfortable" ? "Comfortable" : "Compact"}
      </button>
      <button onClick={toggleUnits}>
        Units: {units === "metric" ? "Metric" : "Imperial"}
      </button>
    </div>
  );
}
