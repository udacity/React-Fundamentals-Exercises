import { PreferencesProvider } from "./context/PreferencesContext";
import PreferencesPanel from "./components/PreferencesPanel";
import Reader from "./components/Reader";

export default function App() {
  return (
    <PreferencesProvider>
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          padding: 24,
          maxWidth: 720,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Using Context in Practice</h2>
        <PreferencesPanel />
        <div style={{ marginTop: 16 }}>
          <Reader />
        </div>
      </div>
    </PreferencesProvider>
  );
}
