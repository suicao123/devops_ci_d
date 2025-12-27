import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import hook useNavigate
import '../App.css'; 

const Home: React.FC = () => {
  const navigate = useNavigate(); // 2. Khởi tạo hook

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-wrapper">
          <div className="brand">DevStudio</div>
          
          <ul className="nav-links">
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#services">Dịch vụ</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>

          {/* 3. Thêm sự kiện onClick để chuyển hướng */}
          <button className="btn-login" onClick={() => navigate('/login')}>
            Đăng nhập
          </button>
        </div>
      </nav>

      {/* Hero Section giữ nguyên... */}
      <header className="hero">
        <div className="container hero-content">
          <h1>Chào mừng đến với <span className="highlight">React Router</span></h1>
          <p>Bấm nút bên dưới cũng sẽ chuyển qua trang Login nhé.</p>
          
          {/* Bạn có thể gắn sự kiện này cho bất kỳ nút nào */}
          <button className="btn-cta" onClick={() => navigate('/login')}>
            Bắt đầu ngay
          </button>
        </div>
      </header>

      {/* Footer... */}
      <footer className="footer">
        <p>© 2025 MyWebsite.</p>
      </footer>
    </div>
  );
};

export default Home;