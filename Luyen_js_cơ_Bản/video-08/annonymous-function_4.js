// anonymous function (hàm ẩn danh) : là hamf không tên . 
// Thường đươjc sử dụng làm đối số cho các hàm khác, ví dụ như trong các hàm xử lí sự kiện hoặc các hàm gọi lại (callback)

// hàm không tên suẻ dụng function, nó ko có tên khai bào như file 1, 2 là sayhello
setTimeout( function(){ // delay 1 đoạn code nào đó trước khi ta chạy
    console.log("Sau 3s thì xuất hiện");
},3000) // 3000ms = 3s
 console.log("--------------------------------------------------------------------------------------");

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// vd2: cx như vd1 thôi
// hàm không tên sử dụng dụng arrowfunction 
setTimeout( () =>{ // delay 1 đoạn code nào đó trước khi ta chạy
    console.log("Sau 3s thì xuất hiện");
},3000) // 3000ms = 3s 
 
// Gán function vào một biến và truyền vào hàm khác 
const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};
// Truyền function vào một hàm khác
function greet(callback) {
    callback("Alice");
}
greet(sayHello); // Output: "Hello, Alice!"
