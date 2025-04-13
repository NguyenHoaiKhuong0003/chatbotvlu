const nodemailer = require("nodemailer");
require('dotenv').config();

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Vui lòng nhập email." });
  }

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
    html: `<p>Chào bạn,</p><p>Bạn đã yêu cầu đặt lại mật khẩu. Nhấn vào liên kết bên dưới để tiếp tục:</p><p><a href="#">Link đặt lại (giả lập)</a></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ message: "Đã gửi email thành công!" });
  } catch (error) {
    console.error("Lỗi gửi email:", error);
    return res.status(500).json({ error: "Không thể gửi email." });
  }
};
