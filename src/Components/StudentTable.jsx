export default function StudentTable({
  students,
  onDelete,
  onEdit,
  editingId,
}) {
  return (
    <section className="table-section">
      <div className="section-header">
        <h2> Student Records</h2>
        <span className="badge">{students.length} Students</span>
      </div>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Subject</th>
              <th>Grade</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-row">
                  No students yet.
                </td>
              </tr>
            ) : (
              students.map((s, i) => (
                <tr
                  key={s.id}
                  className={editingId === s.id ? "editing-row" : ""}
                >
                  <td>{i + 1}</td>
                  <td className="name-cell">
                    <span className="avatar">{s.name.charAt(0)}</span>
                    {s.name}
                  </td>
                  <td>{s.age}</td>
                  <td>{s.subject}</td>
                  <td>
                    <span
                      className={`grade grade-${s.grade.replace("+", "plus").replace("-", "minus")}`}
                    >
                      {s.grade}
                    </span>
                  </td>
                  <td>{s.email}</td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => onEdit(s)}
                      title="Edit"
                    >
                      ✎
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onDelete(s.id)}
                      title="Delete"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
