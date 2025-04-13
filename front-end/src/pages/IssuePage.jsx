import emailjs from "@emailjs/browser";
import { useRef } from "react";

function IssuePage() {
  const form = useRef();

  let templateParams = {
    from_name: "",
    message: "",
    email: "",
    phone: ""
  };

  function sendMail(e) {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "<YOUR_SERVICE_ID>",
        "<YOUR_TEMPLATE_ID>",
        form.current,
        "<YOUR_PUBLIC_KEY>"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("my-modal").checked = true;
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div className="flex justify-center min-h-[85vh] h-auto bg-gradient-to-br bg-gradient-to-br from-[#D1CECE]">
      {/* Success Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Gửi thành công 🥳</h3>
          <p className="py-4">
            Cảm ơn bạn đã gửi góp ý. Chúng tôi sẽ xem xét những ý
            kiến của người dùng để ngày càng hoàn thiện sản phẩm hơn nhé!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-success">
              Đóng
            </label>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl text-center font-bold mb-6 text-black">
          Góp ý với chúng tôi
        </h1>
        <p className="text-center mb-6">
          Nhập nội dung ý kiến phản hồi của bạn tại đây để chúng tôi có thể cải thiện chất lượng sản phẩm hơn.
        </p>

        <form ref={form} onSubmit={sendMail} className="space-y-4">
          <textarea
            name="message"
            placeholder="Nhập ý kiến của bạn tại đây..."
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
          
          <input 
            type="email" 
            name="email"
            placeholder="Email của bạn" 
            className="input input-bordered w-full" 
            required
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Số điện thoại của bạn" 
            className="input input-bordered w-full" 
          />
          <hr className="my-6 border-gray-300" />
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            GÓP Ý
          </button>
        </form>
      </div>
    </div>
  );
}

export default IssuePage;