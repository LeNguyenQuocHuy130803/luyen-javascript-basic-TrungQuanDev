// có khá nhiều method - Phuong thức khi xử lý dữ liệu string trong javascript
// dưới đây ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế (phần 1)
// part 2: toLowerCase(), toUpperCase(), trim(),, replace(), match(regex), search(regex), startWith(), endWith()
//  nois thêm 1 tí biểu thức dạng chính quy thì nó sẽ có dạng như sau : /..../, còn biểu thức dạng chuỗi thì nó sẽ có dạng : '...'


// toLowerCase() - chuyển chuỗi con sang chữ thường, ko làm thay đổi chuỗi gốc ban đầu
const str10 = 'HELLO';
console.log(str10.toLowerCase()); // hello
console.log(typeof str10.toLowerCase()); // string
console.log('----------------------------------------------------------------');

// toUpperCase() - chuyển chuỗi con sang chữ hoa, ko làm thay đổi chuỗi gốc ban đầu
const str11 = 'hello';
console.log(str11.toUpperCase()); // HELLO
console.log(typeof str11.toUpperCase()); // string
console.log('----------------------------------------------------------------');

// trim() - loại bỏ các khoảng trắng ở đầu và cuối, ko làm thay đổi chuỗi gốc ban đầu
const str12 = '  hello  ';
console.log(str12.trim()); // hello
console.log(typeof str12.trim()); // string
console.log('----------------------------------------------------------------');

// replace() - thay thế chuỗi con trong chuỗi gốc ban đầu thành 1 chuỗi khác.nó chỉ thay thế lần 
// xuất hiện đầu tiền , muốn thay thế toàn bộ thì phải dùng biểu thức chính quy flag g (global), ko làm thay đổi chuỗi gốc ban đầu

// const str13 = 'hello world';
// console.log(str13.replace('hello', 'Hello')); // Hello world
// console.log(str13.replace('world', 'World')); // hello World
// console.log(str13.replace('hello', 'Hello').replace('world', 'World')); // Hello World
const str4 = 'Hello World World World World World';
console.log('ReplaceResult:', str4.replace('World', 'leehuy'));
//  với trường hợp muốn thay thế toàn bộ chữ world thì làm như sau:
console.log('Thay thế toanf bộbộ:', str4.replace(/World/g, 'lee huy'));
console.log('----------------------------------------------------------------');

// match() - tìm kiếm và tra về 1 mảng chứa kết quả khớp với biểu thức chính quy (regex) trong chuỗi  nếu không tìm thấy nó trả về null, chỉ trả về kết quả của lần xuất hiện đầu tiên ,
//  muốn thay thế toàn bộ thì phải dùng biểu thức chính quy flag g (global)
const str5 = ' lee nguyeenx quochuy huy huy huy';
console.log('log ra biểu thức dạng chuỗi', str5.match('huy'));  // trả về vị trí index của chữ huy đầu tiên kèm theo.... xem chạy là thấy
// còn dòng dưới này nó sẽ trả về biểu thức dạng chính quyquy
console.log('log ra biểu thưsc dạng chính quy', str5.match(/huy/)); 
// dùng thêm global
console.log('log ra biểu thưsc dạng global', str5.match(/huy/g));
console.log(str5.match(/huy/g).length); // 44
console.log(str5.match(/huy/g)[0]); // huy
console.log('----------------------------------------------------------------');

// search () - tìm kiếm theo đầu vào là 1 biểu thức chính quy ( regex) trong chuỗi  và trả về index tại ví trí lần xuất hiện đầu tiên của chuỗi trong regex. nếu khôngtìm thhaays trả về -1
const str6 = 'le nguyen quochuy huy huy huy';
const ResultSearch = str6.search('huy');
console.log('ket qua khi dung Search', ResultSearch); // trả về vị trí index của chữ huy đầu tiên
console.log('khong tim thay', str6.search('hoang')); // trả về -1

//  làm theo kiểu dạng biểu thức chính quy thì như sau :
const ResultSearch2 = str6.search(/huy/);
console.log('ket qua khi dung bieu thuc chinh quy', ResultSearch2); 
console.log('----------------------------------------------------------------');

// startWith() -kiểm trả xem chuỗi có bắt đầu bằng 1 chuỗi con cụ thể hay không, trả về True/False, có tính cả khoảng trống đầu và cuối nên phải lưu ý, nó không cần phải ghi đúng toàn bộ
// chỉ cần có chữ đúng là dc vd nhưu chữ leee bên dưới chỉ cần tìm ghi vs chữ le là đủ
const str7 = 'leeeee nguyen quoc huy ';
console.log('startsWith:',str7.startsWith('le')); // true
console.log('startsWith:',str7.startsWith('nguyen')); // false
console.log('----------------------------------------------------------------');

// endWith() - kiểm trả xem chuỗi có kết thức bằng 1 chuỗi con cụ thể hay không, trả về True/False. có tính cả khoảng trống đầu và cuối nên phải lưu ý
const str8 = 'le nguyen quoc huy ';
console.log('endWith :',str8.endsWith('huy')); // falsefalse
console.log('endWith :',str8.endsWith(' ')); // true
console.log('endWith :',str8.endsWith('nguyen')); // false
console.log('----------------------------------------------------------------');

