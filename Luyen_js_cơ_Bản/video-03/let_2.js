// hoisting: biến khai báo bằng let sẽ được hoisted (di chuyển lên đầu khối scope của nó,) 
// nhuwng lại không được khởi tạo với giá trị mặc định ban đầu nào cả. nên không thể sử dụng
// biến trước khi khai báo 
// console.log('nameLet:', nameLet);

// khoong khai bao là sai 
// console.log('nameLet:', nameLet);
// console.log("----------------------------------------------------------------");

// khai báo
let nameLet = 'lê huy';
console.log('nameLet:', nameLet);
console.log("----------------------------------------------------------------");

// tái khai báo : không thể tái khai báo cungf 1 biến let nhiều lần
// let nameLet = 'lê huy';
// console.log('nameLet:', nameLet);
// console.log("----------------------------------------------------------------");


// gán lại có thể gán lại giá trị của biến let 
// let nameLet = 'lê huy';
// console.log('nameLet:', nameLet);

// gán lại : có thể gán lại giá trị của biến let mà không gặp lỗi
nameLet = 'lê huy đã gán lại';
console.log('nameLet:', nameLet);

