/**
 có khá nhiều methods- phương thức khi xử lí dữ liệu Number trong Jvascript
 dưới đây we sẽ tập trung vào những phương thức quan trong và được dùng nhiều trong thực TẾ.
 * part 1: toString(radix), toFixed(), toExponential(), toPrecision(), toFinite(), Number.isInteger(),Number.isSafeInteger(), Number.isFinite(), Number.isNaN(), isNaN()
 */

 // toFixed ()- làm tròn 1 số theo số lượng chữ số thập phân được chỉ đinh trước. Kết quả trả về sẽ ở dạng String và sẽ làm tròn lên như trong toán học
 const num1 = 3.125476789;
 // log voiws casi 1 
 console.log('ResulttoFixed1:', num1.toFixed(4));// giữ lại 2 chữ số thập phân sau dấu phẩy và làm tròn nó lênlên
 

 // log với cách thứ 2
 const fixedNum = num1.toFixed(2);
 console.log('ResulttoFixed2:', fixedNum); // giữ lại 2 chữ số thập phân sau dấu phẩy và làm tròn nó lênlên
 console.log('kdl: ', typeof fixedNum);
 console.log('--------------------------------------------------------------------------------');
 
 // toPrecision() - làm tròn số dựa theo số lượng chữ số chỉ định trước ( bao gồm cả phần số nguyên và thập phân)
 const num2 =  123.456;
 const precisionNum = num2.toPrecision(4);// lam tròn 123.456 thành 123.4 với chỉ định 4 chữ số
 console.log('chữ số sau khi làm tròn là: ', precisionNum);
 console.log('kdl: ', typeof precisionNum);
 console.log('--------------------------------------------------------------------------------');
 
// toString(radix) - chuyển đổi 1 số thành chuỗi với cơ số (radix) được chỉ định trước
// danh sách hệ đếm cơ số trong toán học https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_h%E1%BB%87_%C4%91%E1%BA%BFm

const num3 = 255;
const binary = num3.toString(2); // chuyển đổi sang nhị phân
const hexStr = num3.toString(16); // chuyển đổi sang hệ thập lục phân
const TPStr = num3.toString(10); // chuyển đổi sang hệ thập  phân
console.log('binary là: ', binary);
console.log('hexStr là: ', hexStr);
console.log('thap phan :' , TPStr);
console.log('kdl: ', typeof binary);
console.log('kdl: ', typeof hexStr);
console.log('--------------------------------------------------------------------------------');

// toFinite() - kiểm tra xem giá trị có phải là 1 số hữu hạn hay không ( trả về kết quả dạng boolen True/False), method này thường dc dùng để ktra trong những trường hợp sau :
// ktra xem số chia kết cho 0 ...., ktra xem số đó nhân lên hoặc chia ra nó có ra vô cực hay không
// Infinity : gọi là vô cực ( dương /âm)
// số hữu hạn : số dương ,amm , số thực, số 0 , null vì null chuyển đổi sẽ về số 00
console.log('isFinite(123):', isFinite(123)); // isFinite(123): true, có nghĩa là thằng này  là số hữu hạn nên đúng 
console.log('isFinite(Infinity):', isFinite(Infinity)); // isFinite(Infinity): false, nghiax là thằng InFinity : "dương vô cực ",  không phải là số vô cực nó là 1 số vô hạn nên là sai
console.log('isFinite(-Infinity):', isFinite(-Infinity)); // isFinite(-Infinity): false , ( âm vô cực)
console.log('isFinite(123):', isFinite("123")); //true bới vì chuỗi "123" được chuyển về thành 123 khi dùng method isFinite thì 123 là số hữu hạn nên là đúng
console.log(isFinite(undefined));   // false (undefined không thể chuyển thành số)
console.log(isFinite(null));        // true (null được chuyển thành 0)
console.log(isFinite("456abc"));    // false (không thể chuyển thành số)
console.log('--------------------------------------------------------------------------------');

//Number.isInteger() - kiểm tra xem giá trị có phải là 1 số nguyên hay không ( tra về kết quả dạng boolean), phải có chữ Number. mới không bị lỗilỗi
console.log('Number.isInteger(123):', Number.isInteger(123)); // Number.isInteger(123): true
console.log('Number.isInteger(123.456):', Number.isInteger(123.456)); // Number.isInteger(123.456): false
console.log('Number.isInteger(Infinity):', Number.isInteger(Infinity)); // Number.isInteger(Infinity): false
console.log('Number.isInteger(-Infinity):', Number.isInteger(-Infinity)); // Number.isInteger(-Infinity): false
console.log('Number.isInteger(123):', Number.isInteger("123")); // Number.isInteger("123"): false , nó là dạng string nó ko tự chuyển thành số như trên isFinite
console.log('chuyển đôi từ chuỗi về số (123):', Number.isInteger(Number("123")));
console.log('chuyển đôi từ chuỗi về số (cách 2):', Number.isInteger(parseInt("123")));
console.log('Number.isInteger(undefined):', Number.isInteger(undefined)); // Number.isInteger(undefined): false
console.log('Number.isInteger(null):', Number.isInteger(null)); // Number.isInteger(null): false
console.log('Number.isInteger(456abc):', Number.isInteger("456abc")); // Number.isInteger("456abc"): false
console.log('--------------------------------------------------------------------------------');

//Number.isSafeInteger() - Kiểm tra xem giá trị có phải là một số nguyên (integer) an toàn hay không
// một số nguyên (integer) an toàn là số nguyên nằm trong khoảng từ -(2^53 - 1) đến 2^53 - 1 (hoặc -(2^53) đến 2^53 
console.log('Number.isSafeInteger(123):', Number.isSafeInteger(123)); // Number.isSafeInteger(123): true
console.log('Number.isSafeInteger(123.456):', Number.isSafeInteger(123.456)); //  false, la so thuc
console.log('Math.pow là hàm số mũ lên: là 2 mũ 53 vượt quá',  Number.isSafeInteger(Math.pow(2, 53))); // Number.isSafeInteger(Math.pow(2, 53)): true
console.log('isSafeInteger(Math(2, 53)):', Number.isSafeInteger(900719925470991)); // true, số nguyên lớn nhất = 2^53-1
console.log('Number.isSafeInteger(Infinity):', Number.isSafeInteger(900719925470992)); //  false vì vượt quá 2^53-1
console.log('---------------------------------------------------------------------------------------------');

//NaN : not a Number () - đại diện cho 1 giá trị "Not-a-Number" trong js, thường xuất hiện khi 1 phép toán số học không thể thực hiện được
// ko thể xác định dc hay ko thể làm dc thì báo về NaNNaN
console.log("Number.NaN: ", Number.NaN); //  NaN
console.log('0 / 0:', 0 / 0); // NaN ( 0 chia cho 0 sẽ không xác đinh dc)
console.log('parseInt("abc"):', parseInt("abc")); // NaN chuỗi "abc" không thể chuyển đổi thành số
console.log('parseFloat("abc"):', parseFloat("abc")); // NaN chuỗi "abc" không thể phân tích số từ 1 chuỗi bắt đầu bằng chữ
console.log('Number.NaN === NaN:', Number.NaN === NaN); // False (NaN không bằng chính nó không thể so sánh được)
console.log('Number.NaN === NaN:', NaN === NaN); // False (NaN không bằng chính nó không thể so sánh được)
console.log('--------------------------------------------------------------------------------');

// isNaN() - kiểm tra xem giá trị có phải là NaN (not a number) hay không ( trả về kết quả dạng boolean)
// thường được dùng nhiều để ktra dlieu đầu vào ktra xe họ có nhập đúng định dạng là số hoặc chữ hay ko
console.log('is NaN(NaN):', isNaN(NaN)); // isNaN(NaN): true
console.log('is NaN(123):', isNaN(123)); // false,vì nó là số hợp lệ chứ ko phả là NaN NÊN nó trả về falsefalse
console.log('is NaN(abc):', isNaN("abc")); // true, vì chuỗi "abc" không thể chuyển thành số nên là NaN, nó ko phải là số hợp lệ
console.log('is NaN(123):', isNaN("123")); // false, vì nó sẽ chuyển "123" thành 123 là 1 số hợp lệ mà mik ghi nó là NaN nên sai


