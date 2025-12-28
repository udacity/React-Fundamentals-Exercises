import CourseList from "./CourseList";
import StatsPanel from "./StatsPanel";

export default function Dashboard() {
  return (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "2fr 1fr" }}>
      <CourseList />
      <StatsPanel />
    </div>
  );
}
