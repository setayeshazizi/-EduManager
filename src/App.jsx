import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import "./App.css";

const initialStudents = [
  {
    id: 1,
    name: "Ahmad Karimi",
    age: 20,
    grade: "A",
    email: "ahmad.k@mail.com",
    subject: "Mathematics",
  },
  {
    id: 2,
    name: "Sara Ahmadi",
    age: 19,
    grade: "B+",
    email: "sara.a@mail.com",
    subject: "Physics",
  },
  {
    id: 3,
    name: "Reza Mohammadi",
    age: 21,
    grade: "A-",
    email: "reza.m@mail.com",
    subject: "Computer Science",
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [editingStudent, setEditingStudent] = useState(null); // 👈 جدید

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (updated) => {
    setStudents(students.map((s) => (s.id === updated.id ? updated : s)));
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="hero">
          <h1>Student Management System</h1>
          <p>Manage, track, and organize student records elegantly.</p>
        </div>

        <StudentTable
          students={students}
          onDelete={deleteStudent}
          onEdit={setEditingStudent}
          editingId={editingStudent?.id}
        />

        <StudentForm
          onAdd={addStudent}
          onUpdate={updateStudent}
          editingStudent={editingStudent}
          onCancel={() => setEditingStudent(null)}
        />
      </main>
      <Footer />
    </div>
  );
}
