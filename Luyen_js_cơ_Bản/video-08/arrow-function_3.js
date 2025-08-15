// arrow function (hàm mũi tên) : là 1 sự thay thế có cú pháp đơn gianr hơn so với hàm biểu thức function expression
// arrow function nó ko có thís nên ko dùng dc cú pháp này         console.log(`Hello, I am ${this.name} the age is ${this.age} and I like ${this.hobbies}`);
// arrow function thường được dùng cho : map(), filter(), forEach()
// bước 1 : khai báo
const sayhello = (name) => {
    console.log(`hello ${name}! I am huyle `);
}
//  Bước 2 : gọi hàm để chạy function
sayhello("Sang");
console.log("--------------------------------------------------------------------------------");