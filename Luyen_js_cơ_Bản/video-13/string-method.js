// có khá nhiều method - Phuong thức khi xử lý dữ liệu string trong javascript
// dưới đây ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế (phần 1)
// charAt(), concat(), includes(), indexOf(), slice(), split(), substring()

// charAt() - trả về kí tự tại 1 vị trí cụ thể trong chuỗi . Vị trí bắt đầu từ 0 , trả về string rỗng nếu vị trí không tôgn tại
const str1 = 'hello world';
console.log(str1.charAt(0)); // h
console.log(str1.charAt(5)); // 
console.log(str1.charAt(10)); // undefined
console.log(str1.charAt(-1)); // undefined
console.log(str1.charAt(11)); // undefined
console.log('kdl cuar string1 laf:', typeof str1)
console.log(typeof str1.charAt(2));
console.log('----------------------------------------------------------------');


// concat() - dc sử dụng để nối hau hoặc nhiều chuỗi lại vs nhau và trả về 1 chuỗi mới, không làm thay đổi chuỗi gốc ban đầuđầu
let str2 = "Hello";
let khoangtrong = ' - '
let str3 = " World";
let str4 = str2.concat(khoangtrong).concat(str3);
console.log(str4); // Hello World
console.log(str2); // Hello , nó không làm thay đổi chuỗi str2 ban đầu
console.log('----------------------------------------------------------------');

// includes() - kiểm trả xem chuỗi có chứa 1 chuỗi con cụ thể hay không. trả về true nếu chuỗi con được tìm thấy , ngược lại trả về false.Có phân biệt cả chữ hoa , chữ thgthg
let str5 = 'Hello World';
console.log(str5.includes('hello')); // false vì chữ h không có ghi thườngthường
console.log(str5.includes('World')); // true
// 2 cách để log
let includesRéulst = str5.includes('Hello');
console.log('kết quả :', includesRéulst);
console.log('----------------------------------------------------------------');

// indexOf() - trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi. nếu chuỗi con không dc tìm thấy nó trả về -1, có phân biệt chữ hoa chữ thường
const str6 = 'HelloWorld';
console.log(str6.indexOf('Hello')); // 0
console.log(str6.indexOf('H')); // 00
console.log(str6.indexOf('World')); // 55
console.log(str6.indexOf('Hello World')); // -1
// cách 2 để loglog
const AfterResultIndexOf = str6.indexOf('hello'); // -1
console.log('kết quả là :', AfterResultIndexOf);


console.log('----------------------------------------------------------------');

// split() - chia chuỗi thành 1 mảng các chuỗi con dựa trên 1 kí tự nhận diện , không làm thay đổi chuỗi gốc ban đầu
const str7 = 'JS, TS, Apollo,  lehuylehuy';
// cách log thứ 1
console.log(str7.split(', '));

//cách log thứ 2 :
const splitResult = str7.split(', ')
console.log('kết quả split là: ', splitResult);
console.log('----------------------------------------------------------------');

//splice() - trả về 1 chuỗi con từ 1 chuỗi gốc ban đầu , từ vị trí startIndex đến EndIndex 
// ( không bao gồm endIndex), không làm thay đổi chuỗi gốc ban đầu, Nếu chúng ta cố tình để start > end thì slice sẽ trả về chuỗi rỗng
const str8 = 'LeNguyenQuocHuy is so bad so he is a badboy ';
const sliceResult_1 = str8.slice(0, 5);
const sliceResult_2 = str8.slice(0, 10);
const sliceResult_3 = str8.slice(10, 0);
console.log('kết quả slice là 1 :', sliceResult_1);
console.log('kết quả slice là 2:', sliceResult_2);
console.log('kết quả slice là 3:', sliceResult_3); // kết quả trả về chu��i r��ng vì start > end
console.log('----------------------------------------------------------------');

// substring() - nó khá giống với splice(); NÓ CŨNG TRẢ  về 1 chuỗi con từ 1 chuỗi gốc ban đầu , từ chỉ số startIndex đến endIndex 
// ( không bao gồm endIndex), . tuy nhiên khác vs splice ở chỗ : substring() sẽ hoán đổi startIndex và endIndex để trả về chuỗi con từ startIndex đến endIndex
// nếu chúng ta vô tình để start > end.
const str9 = 'LeNguyenQuocHuy is so bad so he is a goodboygoodboy ';
const substringResult_1 = str9.substring(0, 5);
const substringResult_2 = str9.substring(0, 10);
const substringResult_3 = str9.substring(10, 0);
console.log('kết quả substring là 1 :', substringResult_1);
console.log('kết quả substring là 2:', substringResult_2);
console.log('kết quả substring là 3:', substringResult_3); // kết quả trả về chuỗi rỗng vì start > end