
const dataFAQs = [["Cách sử dụng Chatbot tra cứu môn học?","Để sử dụng chatbot tra cứu môn học hiệu quả, bạn chỉ cần nhấn vào Chat Ngay và đặt câu hỏi rõ ràng, đầy đủ như Môn an ninh mạng có yêu cầu điều kiện tiên quyết gì không? hoặc Môn Lập trình web có bao nhiêu tín chỉ? Điều này giúp chatbot đưa ra câu trả lời chính xác. Tuy nhiên, trong một số trường hợp, câu trả lời có thể không hoàn toàn chính xác, vì vậy bạn nên kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần thiết."],
["Chatbot lấy thông tin môn học như thế nào?"],
["Hỗ trợ & Liên hệ"],
["Tại sao Chatbot không trả lời đúng câu hỏi của tôi?"],]
function FAQPage() {
  return (
    <div className="flex justify-center min-h-[85vh] h-auto bg-gradient-to-br from-[#D1CECE]">
      <div className="md:w-[50%]">
        <h1 className="text-3xl text-center font-bold p-5 text-black">Những câu hỏi thường gặp</h1>
        {
          dataFAQs.map((item,i)=><div key={i} className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
            {item[0]}
          </div>
          <div className="collapse-content">
            <p>{item[1]}</p>
          </div>
        </div>
          )
        }

        
      </div>
    </div>
  );
}
export default FAQPage;
