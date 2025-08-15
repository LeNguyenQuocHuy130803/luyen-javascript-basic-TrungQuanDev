// string operators : gọi là toán tử chuỗi

let username = "huy lê";
let address = "Hoa Phuoc";

console.log(username.length); // độ dài của username là 6
console.log(username.toUpperCase()); // chuyển các kí tự thành chữ hoa
console.log(username.toLowerCase()); // chuyển các kí tự thành chữ thường

console.log( "Tên 1 là : " + username + ' - ' + "Địa chỉ1 :" + address);// cách 1 đây là cách xuất ra dạng chuỗi ở dạng thông thường

console.log(`Tên 2 là : ${username} - địa chỉ2 là ${address}`); // cách 2: đây là cách log bằng pphap literal

