import { useState, useEffect } from "react";

const emptyForm = { name: "", age: "", subject: "", grade: "", email: "" };

export default function StudentForm({
  onAdd,
  onUpdate,
  editingStudent,
  onCancel,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingStudent) {
      setForm({ ...editingStudent, age: String(editingStudent.age) });
    } else {
      setForm(emptyForm);
    }
  }, [editingStudent]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.subject || !form.grade || !form.email)
      return;

    const payload = { ...form, age: Number(form.age) };
    if (editingStudent) {
      onUpdate({ ...payload, id: editingStudent.id });
    } else {
      onAdd(payload);
    }
    setForm(emptyForm);
  };

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>{editingStudent ? "✎ Edit Student" : "➕ Add New Student"}</h2>
        {editingStudent && (
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
      <form className="student-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Ali Rezaei"
          />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            placeholder="e.g. 20"
          />
        </div>
        <div className="input-group">
          <label>Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="e.g. Mathematics"
          />
        </div>
        <div className="input-group">
          <label>Grade</label>
          <select name="grade" value={form.grade} onChange={handleChange}>
            <option value="">Select Grade</option>
            {["A+", "A", "A-", "B+", "B", "B-", "C"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. ali@mail.com"
          />
        </div>
        <button type="submit" className="submit-btn">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </form>
    </section>
  );
}
