import { useDensity } from "../context/DensityContext";
import { useUnits } from "../context/UnitsContext";

export default function SettingsPanel() {
  // TODO: Read values + toggle functions from both contexts

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {/* TODO: Show current value and toggle on click */}
      <button>Density:</button>

      {/* TODO: Show current value and toggle on click */}
      <button>Units:</button>
    </div>
  );
}
