import React, { useState } from "react";
import "./AdminCourses.css";

function CourseForm({ open, onClose, onSave }) {
  const [name, setName] = useState("");

  if (!open) return null;

  const submit = () => {
    if (!name) return alert("Enter course name");

    onSave({
      id: name,
      sub: name,
      img: "/course-default.jpg"
    });

    setName("");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <h3>Add Course</h3>
        <input
          placeholder="Course Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="save" onClick={submit}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CourseForm;
