// src/components/Login.jsx
import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGmailLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/chat");
    } catch (error) {
      alert("Lỗi đăng nhập: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (err) {
      // Bắt lỗi sai tài khoản hoặc mật khẩu
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        alert("Tài khoản hoặc mật khẩu không chính xác.");
      } else {
        alert("Lỗi: " + err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md space-y-4 w-[300px]">
        <h2 className="text-xl font-bold text-center">Đăng nhập</h2>
        <form onSubmit={handleEmailLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">Đăng nhập</button>
        </form>

        <button onClick={handleGmailLogin} className="btn btn-outline w-full">
          Đăng nhập bằng Gmail
        </button>
        <p className="text-sm text-center">
          Chưa có tài khoản? <a className="text-blue-500" href="/register">Đăng ký</a>
         <br></br>
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
  Quên mật khẩu?
</a> 


        </p>
      </div>
    </div>
  );
}

export default Login;
