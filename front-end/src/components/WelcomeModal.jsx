// src/components/WelcomeModal.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomeModal() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    setShowModal(false);
    setTimeout(() => {
      navigate(path);
    }, 300); // Delay nhẹ cho cảm giác mượt
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm text-center space-y-4">
        <h2 className="text-xl font-bold">Chào mừng trở lại</h2>
        <p className="text-sm text-gray-600">
          Đăng nhập hoặc đăng ký để nhận phản hồi thông minh hơn, tải lên tệp và nhiều lợi ích khác.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleRedirect("/login")}
            className="px-6 py-2 rounded-full bg-black text-white font-semibold border-2 border-black"
          >
            Đăng nhập
          </button>
          <button
            onClick={() => handleRedirect("/register")}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold border-2 border-black"
          >
            Đăng ký
          </button>
        </div>

        <button
          onClick={() => handleRedirect("/chat")}
          className="text-sm text-blue-600 underline mt-2"
        >
          Tiếp tục trạng thái đăng xuất
        </button>
      </div>
    </div>
  );
}

export default WelcomeModal;
