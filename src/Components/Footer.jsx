export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>🎓 EduManager</h4>
          <p>Modern solution for student management.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#students">Students</a>
          <a href="#about">About</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📧 info@edumanager.com</p>
          <p>📞 +93 700 000 000</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} EduManager. All rights reserved.
      </div>
    </footer>
  );
}