import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaUser, FaCog } from 'react-icons/fa';
import './NavBar.css';
import './Settings.css';
import Settings from './Settings';
import Login from "./Login"; // thêm ở đầu file
import { useAuth } from "../context/AuthContext";
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // 👈 Hiển thị khung đăng nhập
  const { user } = useAuth();

  return (
    <>
      <div className="navbar bg-base-100 w-[95%]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/chat">Trò chuyện</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/issue">Góp ý</Link></li>
            </ul>
          </div>

          <a onClick={() => navigate("/")} className="btn btn-ghost p-2">
            <img src={logo} alt="VLU CHATBOT LOGO" className="logo" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="p-1">
              <button
                onClick={() => navigate("/")}
                className={location.pathname === "/" ? " btn-outline btn-primary" : ""}
              >
                Trang chủ
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={() => navigate("/chat")}
                className={location.pathname === "/chat" ? " btn-outline btn-primary" : ""}
              >
                Trò chuyện
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={() => navigate("/faq")}
                className={location.pathname === "/faq" ? " btn-outline btn-primary" : ""}
              >
                FAQs
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={() => navigate("/issue")}
                className={location.pathname === "/issue" ? " btn-outline btn-primary" : ""}
              >
                Góp ý
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-4">
            {user ? (
          <span>{user.displayName || user.email}</span>
        ) : (
          <FaUser
            size={24}
            className="cursor-pointer"
            onClick={() => navigate("/login")}
          />
        )}

          {/* Nút Cài đặt */}
          <FaCog
            size={24}
            className="cursor-pointer"
            onClick={() => setShowSettings(true)}
          />
        </div>
      </div>
      {/* Hiển thị form đăng nhập */}
      {showLogin && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded p-4 z-50">
          <Login />
          <button
            className="text-sm text-red-500 mt-2"
            onClick={() => setShowLogin(false)}
          >
            Đóng
          </button>
        </div>
      )}

      {/* Hiển thị cài đặt nếu được bật */}
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </>
  );
}

export default NavBar;
