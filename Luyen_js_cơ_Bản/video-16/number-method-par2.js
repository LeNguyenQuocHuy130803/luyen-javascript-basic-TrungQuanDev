/**
 có khá nhiều methods- phương thức khi xử lí dữ liệu Number trong Jvascript
 dưới đây we sẽ tập trung vào những phương thức quan trong và được dùng nhiều trong thực TẾ.
 * part 2: parseFloat(), parseInt(), Number.prototype.valueOf(), Number.MAX_VALUE, Number.MIN_VALUE, 
//  Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
 */

 // parseFloat() - phân tích 1 chuỗi và trả về 1 số thực (float) . Nó sẽ đọc từ trái sang phải cho đến khi gặp 1 kí tự không thể phân tích thành số thì dừng lại.

console.log('parseFloat("12.456"):', parseFloat("12.456")); // parseFloat("12.456"): 12.456
console.log('parseFloat("abc"):', parseFloat("abc")); // parseFloat("abc"): NaN
console.log('parseFloat("123abc"):', parseFloat("123abc")); // parseFloat("123abc"): 123
console.log('parseFloat("12.3abc"):', parseFloat("12.3abc")); // parseFloat("12.3abc"): 12.33
console.log('parseFloat(123):', parseFloat(123)); // parseFloat(123): 123
console.log('parseFloat(abc123):', parseFloat('abc123')); // parseFloat(abc): NaN (chuỗi abc không thể chuyển thành số vì đây là chuỗi bắt đầu từ chữ cái)
console.log('----------------------------------------------------------------');

// parseInt() - phân tích 1 chuỗi và trả về 1 số nguyên (integer) . Nó sẽ đọc từ trái sang phải cho đến khi gặp 1 kí tự không thể phân tích thành số thì dừng lại.Ngoaif ra nó còn có thể chỉ định cơ số (radix) để chuyển đổi từ 1 hệ cơ số khác
// nó sẽ mặc định chuyển đổi sang hệ thập phân
console.log('parseInt("12.456"):', parseInt("12.456")); // parseInt("12.456"): 12
console.log('parseInt("abc"):', parseInt("abc")); // parseInt("abc"): NaN
console.log('parseInt("123abc"):', parseInt("123abc")); // parseInt("123abc"): 123
console.log('parseInt("12.3abc"):', parseInt("12.3abc")); // parseInt("12.3abc"): 12
console.log('parseInt(123):', parseInt(123)); // parseInt(123): 123
console.log('parseInt(abc123):', parseInt('abc123')); // parseInt(abc123): NaN (chuỗi abc không thể chuyển thành số vì đây là chuỗi bắt đầu từ chữ cái)
console.log('parseInt("1010", 2):', parseInt("1010", 2)); // parseInt("1010", 2): 10 ,vì 1010 là số dạng nhị phân sẽ đổi thành 10 trong hệ thập phân
// giải thích kĩ hơn số 2 ở sau là để định nghĩa : nó định nghĩa rằng số 1010 là số dạng nhị phân sẽ đổi từ nhị phân sang thập phân
console.log('parseInt("1010", 16):', parseInt("1010", 16)); 
// còn ở ví dụ này nó sẽ  hiều là số 1010  đc ở dạng thập lục phân ( 16) sẽ đổi từ hệ thập lục phân sang hệ thập phân
console.log('----------------------------------------------------------------');

//valueOf() - trả về giá trị gốc của đối tượng Number. Thường dc sdung để trích xuất giá trị số từ 1 đối tượng Number.
// hoặc phổ biến 1 trường hợp nữa là lấy giá trị TimeStamp của 1 đối tượng Date

const numObj = new Number(123); // đây là dạng object Number , cú pháp là new....
console.log(numObj); // [Number: 123] vì nó đang là đối tượg Number
console.log('kieu du lieu của numObj la :', typeof numObj); // nó đang ở kiẻu object

// cách chuyển số 1 : Number dạng Object ở trên về dạng Number để dùng
console.log('valueOf(numObj):', numObj.valueOf()); // valueOf(numObj): 123

// cách chuyển đổi số 2:  Number dạng Object ở trên về dạng Number để dùng
const value = numObj.valueOf(); // vì số 123 ở trên nó đang ở dạng object Number nên ta ko thể dùng nó để tính toán ( cộng, trừ... dc) vì vậy dùng valueOf() để đưa nó về dàn number để dùngdùng
console.log(value);  // number
console.log('kieu du lieu cua value la :', typeof value);

console.log('new Data().valueOf():', new Date().valueOf()); // trả về TimeStamp tại thời điểm bạn chạy chương trình
console.log("thời điểm học code bài nay là:", new Date("2025-02-16").valueOf()); 
console.log('----------------------------------------------------------------');

// Number.MAX_VALUE - giá trị số lớn nhất mà JavaScript có thể đại diện , giá trị này gần bằng 1.7976931348623157e+308 ,nếu một số lớn hơn giá trị này sẽ dc coi là Infinity - số vô cực.
const max = Number.MAX_VALUE;
console.log('Number.MAX_VALUE:', max); // : 1.7976931348623157e+308
console.log('Number.MAX_VALUE:', max * max); // Number.MAX_VALUE: 1.7976931348623157e+308
console.log(' 2* Number.MAX_VALUE:', 2 * max); // 2* Number.MAX_VALUE: 3.5976931348623157e+308
console.log(max -1 === max); // true ( do sự chính xác cuar số quá lớn ko  care)
console.log(max -max === max);  // thì tất nhiên sai 0 sao bằng max dc
console.log(max / max); // 1
console.log(max % max); // 0
console.log(max ** max); // Infinity
console.log('----------------------------------------------------------------');

// Number.MIN_VALUE là giá trị số dương nhot nhất lớn hơn 0 mà js có thể đại diện . Giá trị này khoảng 5e-324 
// nếu một số nhỏ hơn giá trị này , nó sẽ dc làm tròn về 0
 const min = Number.MIN_VALUE;
 console.log('Number.MIN_VALUE:', min); // : 5e-324
 console.log('Number.MIN_VALUE:', min * min); // Number.MIN_VALUE: 5e-324
 console.log('Number.MIN_VALUE /2 :', min /2); // 0 vì nó nhỏ hơn giá trị số nhỏ nhất đại diệndiện
console.log('----------------------------------------------------------------');

// Number.POSITIVE_INFINITY () - đại diện cho giá trị dương vô hạn ( Infinity) trong JS
const posInf = Number.POSITIVE_INFINITY;
console.log('Number.POSITIVE_INFINITY:', posInf); // Number.POSITIVE_INFINITY: Infinity
console.log('Number.POSITIVE_INFINITY:', posInf * posInf); // Number.POSITIVE_INFINITY: Infinity
console.log('1 / 0:', 1/0); // Infinity ( trong toán học không có phép chia cho 0)
console.log('positiINf + 1: ', posInf +1); // Infinity (cộng thêm vào Infinity vẫn là Infinity)
console.log('----------------------------------------------------------------');

// Number.NEGATIVE_INFINITY () - đại diện cho giá trị dương âm ( -Infinity) trong JS
const negInf = Number.NEGATIVE_INFINITY;
console.log('Number.NEGATIVE_INFINITY:', negInf); // Number.NEGATIVE_INFINITY: -Infinity
console.log('Number.NEGATIVE_INFINITY:', negInf * negInf); // Number.NEGATIVE_INFINITY: -Infinity
console.log('1 / 0:', 1/0); // Infinity ( trong toán học không có phép chia cho 0) nó luôn ra Infinity
console.log('-1 / 0:', -1/0); // -Infinity
console.log('negInf + 1: ', negInf +1); // Infinity (cộng thêm vào -Infinity vẫn là -Infinity)
console.log('negInf - 1: ', negInf -1); // Infinity (trừ  vào -Infinity thì nó càng ra -Infinity)
console.log('----------------------------------------------------------------');


// Math.ceil () - làm tròn số
console.log('làm tròn số :', Math.ceil(1.7)); 
console.log('làm tròn số :', Math.ceil(2.00)); 





