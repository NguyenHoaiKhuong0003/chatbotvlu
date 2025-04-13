const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Vui lòng nhập email." });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Sylla Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Đặt lại mật khẩu",
    html: `
      <p>Chào bạn,</p>
      <p>Bạn đã yêu cầu đặt lại mật khẩu.</p>
      <p>Nhấn vào link sau để tiếp tục: 
      <a href="http://localhost:5173/reset-password">Đặt lại mật khẩu</a></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Đã gửi email thành công!" });
  } catch (err) {
    console.error("Lỗi gửi email:", err);
    res.status(500).json({ error: "Không thể gửi email." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
