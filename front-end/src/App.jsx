// 2.50.0
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ChatBot from "./components/ChatBot";
import FAQPage from "./pages/FAQPage"
import IssuePage from "./pages/IssuePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from './components/ForgotPassword';
import WelcomeModal from "./components/WelcomeModal";


import SettingsButton from "./components/Settings";



// import ImgGen from "./components/ImgGen";
import ScaleLoader from "react-spinners/ScaleLoader";
// import { decode as atob, encode as btoa } from "js-base64";
// import { themeChange } from 'theme-change'
function App() {
  useEffect(() => {}, []);
  const [currentPage, SetCurrentPage] = useState("Home");
  return (
    <AuthProvider>

    <BrowserRouter>
      <div className="overflow-hidden">
      <WelcomeModal />

        <NavBar />
        <Routes>
          
        <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<HomePage />} />
          <Route path="chat" element={<ChatBot />} />
          <Route path="issue" element={<IssuePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="/settings" element={<SettingsButton  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


        </Routes>
      </div>
    </BrowserRouter>
    </AuthProvider>

    
  );
}

export default App;
