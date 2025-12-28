import { useState } from "react";
import CourseCard from "./CourseCard";

const courses = [
  { id: "c1", title: "React Data Flow", lessons: 6 },
  { id: "c2", title: "Lifting State Up", lessons: 5 },
  { id: "c3", title: "Context in Practice", lessons: 7 },
];

export default function CourseList() {
  const [selectedCourseId, setSelectedCourseId] = useState("c1");

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Courses</h3>
      <div style={{ display: "grid", gap: 8 }}>
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            course={c}
            selected={c.id === selectedCourseId}
            onSelect={() => setSelectedCourseId(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
