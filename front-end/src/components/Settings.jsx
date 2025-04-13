import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Settings.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Settings = ({ onClose }) => {
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false); // 👈 Trạng thái popup xác nhận
  const boxRef = useRef(null);
  const { logout } = useAuth();
  const navigate = useNavigate(); // 👈

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("selectedTheme", newTheme);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleLogoutClick = () => {
    setShowConfirmLogout(true);
  };

  const confirmLogout = async () => {
    await logout(); // Đăng xuất hoàn toàn
    setShowConfirmLogout(false);
    onClose?.();
    // navigate("/login"); ❌ KHÔNG CẦN VÌ document.location.href đã xử lý
  };
  
  
  

  const cancelLogout = () => {
    setShowConfirmLogout(false);
  };

  return (
    <div className="settings-overlay">
      <div className="settings-box" ref={boxRef}>
        <div className="settings-header">
          Cài đặt
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="settings-content">
          <div className="settings-sidebar">
            <button className="sidebar-btn active">Chung</button>
          </div>

          <div className="settings-main">
            <div className="settings-row">
              <span className="settings-label">Giao diện</span>
              <div className="dropdown">
                <button className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  {theme === "light" ? "Sáng" : "Tối"} <FaChevronDown />
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => handleThemeChange("light")}>
                      Sáng
                    </div>
                    <div className="dropdown-item" onClick={() => handleThemeChange("dark")}>
                      Tối
                    </div>
                  </div>
                )}
</div>
            </div>

            <div className="settings-row">
              <span className="settings-label">Xoá tất cả đoạn chat</span>
              <button className="btn-fixed btn-delete">Xóa tất cả</button>
            </div>

            <div className="settings-row">
              <span className="settings-label">Lịch sử đoạn chat</span>
              <button className="btn-fixed btn-manage">Quản lý</button>
            </div>

            <div className="settings-row">
              <span className="settings-label">Quản lý đăng nhập</span>
              <button className="btn-fixed btn-logout" onClick={handleLogoutClick}>
    Đăng xuất
    
  </button>
  {showConfirmLogout && (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 bg-white border border-gray-200 shadow-lg p-3 rounded-xl">
    <span>Bạn chắc chắn muốn đăng xuất?</span>
        <button className="btn btn-error btn-sm" onClick={confirmLogout}>Đăng xuất</button>
        <button className="btn btn-outline btn-sm" onClick={cancelLogout}>Huỷ</button>
        </div>
)}
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Settings;