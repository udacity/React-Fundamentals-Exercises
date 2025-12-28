import { useUnits } from "../context/UnitsContext";

// TODO: Format a distance differently depending on units preference

export default function StatsPanel() {
  const { units } = useUnits();

  const distanceKm = 12.4;

  // TODO: Convert/format based on units
  const distanceText =
    units === "metric"
      ? `${distanceKm.toFixed(1)} km`
      : `${} miles`;

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Stats</h3>
      <p style={{ margin: "6px 0" }}>
        Weekly study goal distance: <strong>{distanceText}</strong>
      </p>
      <p style={{ margin: "6px 0", color: "#666" }}>
        (This panel reads UnitsContext.)
      </p>
    </div>
  );
}
