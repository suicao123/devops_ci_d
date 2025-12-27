import './App.css'; // Import file CSS thuần

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyBrand</div>
        <ul className="nav-links">
          <li>Trang chủ</li>
          <li>Dịch vụ</li>
          <li>Liên hệ</li>
        </ul>
        <button className="btn-primary">Bắt đầu</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Chào mừng đến với <span className="highlight">React App</span></h1>
          <p>Trang web này được xây dựng bằng React và CSS thuần (Plain CSS).</p>
          <div className="button-group">
            <button className="btn-main">Khám phá</button>
            <button className="btn-outline">Tìm hiểu thêm</button>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 MyBrand. Built with Pure CSS.</p>
      </footer>
    </div>
  );
}

export default App;