export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo-text">EduManager</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#students">Students</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="nav-btn">Get Started</button>
    </nav>
  );
}