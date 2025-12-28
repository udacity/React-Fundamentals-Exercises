import { useUnits } from "../context/UnitsContext";

function kmToMiles(km) {
  return km * 0.621371;
}

export default function StatsPanel() {
  const { units } = useUnits();

  const distanceKm = 12.4;

  const distanceText =
    units === "metric"
      ? `${distanceKm.toFixed(1)} km`
      : `${kmToMiles(distanceKm).toFixed(1)} miles`;

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Stats</h3>
      <p style={{ margin: "6px 0" }}>
        Weekly study goal distance: <strong>{distanceText}</strong>
      </p>
    </div>
  );
}
