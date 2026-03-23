//  Nhóm các kiểu dữ liệu  reference type được gọi là kiểu dữ liệu tham chiếu

/**
 * các giá trị tham chiếu ko được lưu trữ trực tiếp trong ngăn xếp (Stack) mà sẽ tham chiếu đến địa chỉ của đối tượng trong heap memory
 * các giá trị tham chiếu có thể dc thay đổi sau khi chúng dc tạo ra 
 * khi gán đối tượng A cho B , thì cả A và B sẽ cùng tham chiếu đến cùng 1 đối tượng , chứ ko tạo ra bản sao độc lập riêng biệt
 * reference types bao gồm các loại phổ biến như object, array, function
 */

// Object ( đối tượng) : đại diện cho một tập hợp các thuộc tính và phương thức , đối tượng thì dc đặt trong dấu {}
let develop = { //  gọi là object
    name: "lê huy",   // dạng key : value còn gọi là là thuộc tính ( property)
    age: 22,
    hobbies: ["coding", "eating"],
    sayHello () {   // đang định nghĩa một method trong object develop ( đaang khai báo dạng anonymous function )
     // ở đây có thể ko cần viết hàm anonymous có thể viết bằng khai báo thông thường hoặc khai báo expresstion ( có tên khai báo )
     // sayHello() {}
     // hoặc sayyHello : function huylene (){}
        console.log("Hello, I am "  + this.name + " the age is " + this.age + " and I like " + this.hobbies); //cách 1: đây là cách log khi trỏ đến cái name trong cùng 1 object thì phải this.
        console.log(`Hello, I am ${this.name} the age is ${this.age} and I like ${this.hobbies}`); //cách 2: đây là cách log bằng pphap literal
        console.log(` ${this.name} ++++  ${this.age}`);    
    }
};
develop.sayHello();
// hoặc viêtd theo kiểu mình đã học trước đến nay 
console.log("username is : ", develop.name , typeof develop.name);
console.log("age is : ", develop.age, typeof develop.age);
console.log('-------------------------------------------------------');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ví dụ 2:
const a = 5;
const b = 10;

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
console.log('-------------------------------------------------------');

// Array ( mảng ) : một loại đối tượng đặc biệt để lưu trữ danhh sách các giá trị (mảng cũng là 1 object nhưng thuộc vào loại đặc biệt)

let colors = ["red", "green", "blue", "yellow", "orange"];
console.log("colors is : ", colors , typeof colors) ;
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log('-------------------------------------------------------');

// Function ( hàm ) : đại diện cho các hàm xử lí , cx dc coi là loại đối tượng đặc biệt (hdong 1 hành động nào đó bên trong 1 cái hàm)

function weather(city) {
    console.log("The weather in1 " + city + " is sunny"); // cách 1
    
    console.log(`The weather in2 ${city} is sunny`);  // cách 2
    
}
weather("Hoa Phuoc");
