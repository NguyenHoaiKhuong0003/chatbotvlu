import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Đã gửi email khôi phục mật khẩu. Vui lòng kiểm tra hộp thư.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("Không tìm thấy người dùng với email này.");
      } else {
        setError("Lỗi: " + err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md space-y-4 w-[350px]">
        <h2 className="text-xl font-bold text-center">Quên mật khẩu</h2>
        <form onSubmit={handleReset} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Gửi email khôi phục
          </button>
        </form>
        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
