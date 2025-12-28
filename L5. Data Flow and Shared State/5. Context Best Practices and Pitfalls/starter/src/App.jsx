import { DensityProvider } from "./context/DensityContext";
import { UnitsProvider } from "./context/UnitsContext";
import SettingsPanel from "./components/SettingsPanel";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    // TODO: Wrap the UI with both providers (focused contexts)
    <DensityProvider>
      <UnitsProvider>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            padding: 24,
            maxWidth: 820,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Dashboard</h2>
          <SettingsPanel />
          <div style={{ marginTop: 16 }}>
            <Dashboard />
          </div>
        </div>
      </UnitsProvider>
    </DensityProvider>
  );
}
