// tròn js vòng lặp (loop) LÀ 1 CẤU TRÚC ĐIỀU khiển dùng để lắp lại một đoạn mã nhiều lần .
//  thường được sử dụng dể thực hiện 1 hành động nhiều lần cho đến khi 1 điều kiện nào đó được thỏa mãn .

// for...of : dùng để lặp qua các giá trị của 1 iterable object ( nhưngx đối tượng có thể lặp) , phổ biến như Arrat, String...vv
 
// for được dùng khi biết trước được số vòn lặp
for (let i = 0; i <= 10; i++) { // chạy từ 0 -10 đến > 10 thì dừng
    console.log(`Count: ${i}`); // log ra biến i nó sẽ chạy 11 lần từ 0-10
}
console.log("--------------------------------------------------------------------------------");

//  dùng for để đơn giản hơn tối ưu hơn dòng code thay vì ta phải code như này để log ra i từ 0-10:
// console.log(`Count: 0`);
// console.log(`Count: 1`);
// console.log(`Count: 2`);
// console.log(`Count: 3`);
// console.log(`Count: 4`);
// ...................
for (i=0; i<=5 ; i++){
    if (i == 5) {
        console.log(`Count: ${i} đã dến 5`);
    }else if (i == 4) {
        console.log(`Count: ${i} - đây là số 4`);
    }
}

