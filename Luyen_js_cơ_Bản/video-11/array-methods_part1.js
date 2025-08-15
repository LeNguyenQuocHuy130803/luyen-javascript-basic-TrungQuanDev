// có nhiều method = phương thức xử lí dữ liệu mảng trong js
//  dưới đây we sẽ tập trung vào những phương thức quan trong và được dùng nhiều trong thực TẾ.

let numbers = [1, 2, 3, 4, 5];

console.log('Độ dài cuar mảng ', numbers.length); // kết quả là 5
console.log("------------------------------------------------");

// push () - Thêm phần tử vào cuối cùng của mảng
numbers.push(6);
console.log("after push", numbers);
console.log('Độ dài cuar mảng ', numbers.length); // kết quả là6 
console.log("------------------------------------------------");

// pop () - Loại bỏ phần tử cuối cùng của mảng
numbers.pop();
console.log(" delete after pop", numbers);
console.log('Độ dài cuar mảng ', numbers.length); // kết quả là [1, 2, 3, 4, 5]
console.log("------------------------------------------------");

// shift () - Loại bỏ (xóa) phần tử đầu tiên của mảng
numbers.shift();
console.log("delete after shift", numbers);
console.log('Độ dài cuar mảng ', numbers.length); // kết quả là [2, 3, 4, 5]
console.log("------------------------------------------------");

// unshift () - Thêm phần tử vào đầu tiên của mảng
numbers.unshift(1);
console.log("thêm phần tử đầu tiên bằng unshift", numbers);
console.log('Độ dài cuar mảng ', numbers.length); // kết quả là 6
console.log("------------------------------------------------");

//forEach () - Lặp qua từng phần tử của mảng dc dùng rất nhiều
numbers.forEach(function ( index, number) { // truyên vào bnh giá trị tùy thích
// numbers.forEach( (number, index) => {  đây là cách viết số 2 thay functon thành =>
  console.log(`Index : ${index} - value : ${number} `);  // đây là cách viết của string literal
});

// map() - tạo 1 mảng mới vs các phần tử dc biến đổi từ mảng gốc ,  vd bình phương của từng phần tưt
let binhphuongcacsotrongMang = numbers.map(function(somoinemoine) {
  return somoinemoine * somoinemoine
})
console.log('Mảng mới sau khi tính binh phương', binhphuongcacsotrongMang); // kết quả là : [1,4,9,16,25]
// ta có cách log thứ 2
console.log('Mảng mới sau khi tính binh phương thứ 2', numbers.map(num => num * num)); // kết quả là : [1,4,9,16,25]
console.log('-------------------------------------------------------------------------------------------');

// filter() - tạo 1 mảng mới vs các  phần tử thỏa mãn vơis điều kiện đưa ra, vd lấy các số chẵn
let sochan = numbers.filter((somuonduara) => {
  return somuonduara % 2 === 0;
})
console.log('Mảng mới sau khi lấy các số chẵn', sochan); // kết quả là : [2,4]


// find() = tìm phần tử đầu tiên thỏa mãn vơis điều kiện đưa ra , có nghĩa là nó chạy đến số 4 đầu tiên nó in ra 4 à nó dừng luônluôn
let find = numbers.find((somuonduara) => {
  return somuonduara > 3;
})
console.log('Phần tử đầu tiên th��a điều kiện', find); // kết quả là 4

// reduce() - tính toán 1 giá trị duy nhất từ mảng , vd ta muốn tính tổng các số trong mảng
let sum = numbers.reduce((giatrithunhat, giatrithu2) => {
  return giatrithunhat + giatrithu2;
}, 1)  // 1 này tức là giá trị bắt đầu của thg giatrithunhat nó lấy 1 để cộng,còn cái giatrithu2 là nó lấy theo các số
// ở mảng đã cho theo thứ tự từ trái sang phải là nó tính như sau : 0 + 1 = 1 , dến 1+2 =3 , đến 3 + 3 =6, đến 6+ 4 =10.....
console.log('Tổng các số trong mảng', sum); // kết quả là 15

// some() - kiểm tra xem mảng có ít nhất 1 phần tử thỏa mãn  với  điều kiện đưa ra hay không, nếu có thì trả về dạng boolean:  true, nếu không thì trả về false
let some = numbers.some((somuonduara) => {
  console.log(somuonduara);
  return somuonduara % 2 === 0;
})
console.log('Có ít nhất 1 phần tử th��a điều kiện', some); // kết quả là true , vì trong mảng mik đưa ra có phần tử chia hết cho 2
// cái some này nó chỉ sét đến phần tưr nó tìm ra đầu tiên là nó cho ra kq luôn vd trong mảng của mik có 100 phần tử thì nó chạy đến phần tử số 2 
// ó thầy à nó chia hết cho 2 thì nó kết luận trả về true luôn chứ ko xét đến 98 phần tử còn lại nữanữa
