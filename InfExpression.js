function calculate(expression) {
    // Loại bỏ tất cả khoảng trắng trong biểu thức
    expression = expression.replace(/\s+/g, "");
    console.log("Expression sau khi loại bỏ khoảng trắng:", expression); 
  
    // Hàm để đánh giá biểu thức
    const evaluate = (expr) => {
      const values = []; // Ngăn xếp để lưu trữ các giá trị số hạng
      const operators = []; // Ngăn xếp để lưu trữ các toán tử
  
      // Hàm để xác định độ ưu tiên của toán tử
      const precedence = (op) => {
        if (op === "+" || op === "-") return 1; // Cộng và trừ có độ ưu tiên 1
        if (op === "*" || op === "/") return 2; // Nhân và chia có độ ưu tiên 2
        return 0; // Nếu không phải toán tử, trả về 0
      };
  
      // Hàm để thực hiện phép toán giữa hai số hạng trên cùng
      const applyOperation = (op) => {
        const b = values.pop(); // Lấy giá trị trên cùng của ngăn xếp
        const a = values.pop(); // Lấy giá trị tiếp theo
        console.log(`Thực hiện ${a} ${op} ${b}`); 
        switch (op) {
          case "+":
            values.push(a + b); // Cộng
            break;
          case "-":
            values.push(a - b); // Trừ
            break;
          case "*":
            values.push(a * b); // Nhân
            break;
          case "/":
            values.push(a / b); // Chia
            break;
        }
        console.log("Ngăn xếp giá trị sau khi tính toán:", values); 
      };
  
      // Duyệt qua từng ký tự trong biểu thức
      for (let i = 0; i < expr.length; i++) {
        const char = expr[i]; // Lấy ký tự hiện tại
        console.log("Ký tự hiện tại:", char); 
  
        // Nếu ký tự là một số, tiếp tục phân tích
        if (!isNaN(char)) {
          let num = ""; // Biến để lưu trữ số
          while (i < expr.length && !isNaN(expr[i])) {
            // Lặp để lấy nhiều chữ số
            num += expr[i]; // Thêm chữ số vào biến số
            i++; // Tăng chỉ số để tiếp tục duyệt
          }
          values.push(parseFloat(num)); // Chuyển đổi chuỗi thành số và thêm vào ngăn xếp
          console.log("Ngăn xếp giá trị sau khi thêm số:", values); 
          i--; // Giảm chỉ số i để bù cho vòng lặp while
        } else if (char === "(") {
          operators.push(char); // Nếu gặp dấu ngoặc mở, thêm vào ngăn xếp toán tử
          console.log("Ngăn xếp toán tử sau khi thêm ngoặc mở:", operators); 
        } else if (char === ")") {
          // Nếu gặp dấu ngoặc đóng, thực hiện phép toán cho đến khi gặp ngoặc mở
          while (operators.length && operators[operators.length - 1] !== "(") {
            applyOperation(operators.pop()); // Gọi hàm applyOperation để thực hiện phép toán
          }
          operators.pop(); // Xóa dấu ngoặc mở khỏi ngăn xếp
          console.log("Ngăn xếp toán tử sau khi đóng ngoặc:", operators); 
        } else {
          // Nếu là một toán tử
          // Thực hiện phép toán trong trường hợp ưu tiên cao hơn hoặc bằng
          while (
            operators.length &&
            precedence(operators[operators.length - 1]) >= precedence(char)
          ) {
            applyOperation(operators.pop()); // Gọi hàm applyOperation
          }
          operators.push(char); // Thêm toán tử vào ngăn xếp
          console.log("Ngăn xếp toán tử sau khi thêm toán tử:", operators);
        }
      }
  
      // Thực hiện các phép toán còn lại trong ngăn xếp
      while (operators.length) {
        applyOperation(operators.pop()); // Gọi hàm applyOperation cho các toán tử còn lại
      }
  
      return values.pop(); // Trả về giá trị cuối cùng trong ngăn xếp
    };
  
    return evaluate(expression); // Gọi hàm evaluate và trả về kết quả
  }
  
  // Ví dụ sử dụng
  let userInput = "1 + (3 + 4) * 2 + 3 "; // Biểu thức toán học mà người dùng nhập vào
  let result = calculate(userInput); // Tính toán kết quả của biểu thức
  console.log(`Kết quả của biểu thức "${userInput}" là: ${result}`); // In ra kết quả tính toán
  