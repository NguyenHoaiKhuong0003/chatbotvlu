import robot_img from "../assets/robot_image.png";
import { Link } from "react-router-dom";
import './HomePage.css'; // Import file CSS đã tạo

function HomePage() {
  return (
    <div className="hero-container flex items-center justify-center">
      <div className="hero-content-container">
        <div className="max-w-md flex-1">
          <img
            className="robot-image"
            src={robot_img}
            alt="Robot"
          />
          <h1 className="hero-heading">Xin chào! Mình là</h1>
          <h1 className="chatbot-name">Chat with IT Syllabus</h1>
          <p className="hero-description">
          Chatbot hỗ trợ tra cứu môn học của Khoa CNTT, Trường ĐH Văn Lang
          </p>
          <Link to="/chat">
            <button className="chat-button">Chat ngay</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
