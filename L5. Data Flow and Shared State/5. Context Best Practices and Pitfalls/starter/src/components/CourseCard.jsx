import { useDensity } from "../context/DensityContext";

export default function CourseCard({ course, selected, onSelect }) {
  // TODO: Use the density preference to adjust layout spacing

  return (
    <button
      onClick={onSelect}
      style={{
        textAlign: "left",
        padding,
        borderRadius: 8,
        border: "1px solid #ddd",
        background: selected ? "#f3f4f6" : "white",
        cursor: "pointer",
      }}
    >
      <div style={{ fontWeight: 600 }}>{course.title}</div>
      <div style={{ color: "#666", fontSize: 14 }}>
        {course.lessons} lessons
      </div>
    </button>
  );
}
