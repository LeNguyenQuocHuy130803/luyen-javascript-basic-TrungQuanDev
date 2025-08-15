// có nhiều method = phương thức xử lí dữ liệu mảng trong js
//  dưới đây we sẽ tập trung vào những phương thức quan trong và được dùng nhiều trong thực TẾ.
// phần 2 : concat(), slice(), splice(), every(), findIndex(), toString(), join(), includes()

// concat() - dùng để nối 2 hoặc nhiều mảng lại với nhau. không lamf thay đổi mảng gốc mà trả về 1 mảng mới chứa tất cả
// các phần tử của các mảng được nối
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log('sau khi dung Concat',arr3); // keets qua la [1, 2, 3, 4, 5, 6]
// hoặc có cách loag thứ 2
console.log('sau khi dung Concat với cách log thứ 22',arr1.concat(arr2)); 

console.log('--------------------------------------------------------------------------------');


// slice() - trả về 1 mảng con của mảng đầu, từ vị trí startIndex đến endIndex ( không bao gồm endIndex) không làm thay đổi mảng gốc ban đầu
const arr4 = [1, 2, 3, 4, 5, 6];
const arr5 = arr4.slice(1, 4);
console.log('sau khi dung Slice',arr5); // keets qua la [2, 3, 4]
console.log('--------------------------------------------------------------------------------');

// splice() - dùng để thay đổi nội dung của mảng bằng cách  xóa,  thay thế hoặc thêm phần tử mới. nó làm thay đổi mảng gốc ban đầu. 
// (startIndex, deleteCount, item1, item2, ...), startIndex: Vị trí bắt đầu trong mảng (chỉ số index)./deleteCount: Số phần tử cần xóa từ startIndex./item1, item2, ... (tùy chọn): Các phần tử mới cần chèn vào vị trí đó.
const arr6 = [1, 2, 3, 4, 5, 6];
const spliceResult = arr6.splice(1, 3, 7, 'a', 'b'); // bắt đầu từ index số 1 , xóa 3 phần tử , thay vào 3 phần tử xóa đó là 7,8,9
console.log('spliceResult là:',spliceResult); // kết quả là [ 2, 3, 4 ], tức là xóa đi 3 phần tử tính từ index 1 : xóa đi 2,3,4
console.log('sau khi dung Splice',arr6); // keets qua la [1, 7, 'a', 'b', 5, 6] , đây là sau khi thay 2,3,4 thành 7, 'a', 'b'


// every() - dùng để kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện của hàm callback function hay không. Trả về true nếu tất cả đều thỏa  mãn ngược lại trả về false

const arr7 = [ 2,  4, 6];
// cách viết 1:
const kq = arr7.every(num => num % 2 === 0); // Kiểm tra xem tất cả có phải số chẵn không
console.log("test:", kq); // Kết quả: true

// cách viết thứ 22
const everyResult = arr7.every((somongmuon) => {
  return somongmuon % 2 === 0 && somongmuon <= 6;
});

// // hoặc ta có cách viết thứ 2 để ko cần phải thêm dấu ()
// const everyResult = arr7.every(somongmuon =>  somongmuon % 2 === 0 && somongmuon <= 6);
console.log('Tất cả phần tử đều chia hết cho 2 là', everyResult); 

// findIndex() - trả về chỉ số index của phần tử đầu tiên trong mãn thỏa mãn điều kiện trong hàm callback .Nếu không có phần tử nào thỏa mãn sẽ trả về -1
const arr8 = [1,2,3,4,5,6]
const findIndexResult = arr8.findIndex(num => num > 3);
console.log('findIndexResult là:',findIndexResult); // findIndexResult là: 3 vì số 4 là ở vị trí index số 3 mà 4 thỏa dki > 3 nên nó cho ra luôn

// toString() nối tất cả phần tử trong mảng thành 1 chuỗi string
const arr9 = [1,2,3,4,5,6]
const toStringResult = arr9.toString();
console.log('toStringResult là:', toStringResult); // toStringResult là: 1,2,3,4,5,6
console.log('kiểu dữ liệu là:', typeof toStringResult); // kiểu dữ liệu là: string
console.log('--------------------------------------------------------------------------------');

// join() - nối tất cả phần tử trong mảng thành 1 chuỗi String ( khác vs toString () ) ở điểm có thêr chỉ định thêm đầu phân cách )
const arr10 = [1,2,3,4,5,6]
const joinResult = arr10.join(' - ');
console.log('joinResult là:', joinResult); // joinResult là: 1-2-3-4-5-6
console.log('kiểu dữ liệu là:', typeof joinResult); // kiểu dữ liệu là: string  
console.log('--------------------------------------------------------------------------------');

// includes() - kiểm tra xem mảng có chứa phần tử nào hay không. Trả về true nếu tìm thấy, ngược lại trả về false
let arr13 = [1,2,3,4,5,6]
let includesResult = arr13.includes(3);
console.log('includesResult là:', includesResult); // includesResult là: true
// cách 2:
console.log(arr13.includes(7)); // includesResult là: false
console.log('--------------------------------------------------------------------------------');

