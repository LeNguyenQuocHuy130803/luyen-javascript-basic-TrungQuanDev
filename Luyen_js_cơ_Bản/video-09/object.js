// trong js , đối tượng (object) là 1 cấu trúc dữ liệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lí các dữ liệu phức tạp. 
// Đối tượng bao gồm các cặp key-value ( khóa - giá trị). Mỗi key là 1 chuỗi string và giá trị (value) có thể là bất kì loại dữ liệu nào : string , number, object... , 
// bao gồm các đối tượng khác ( nested object), có nghĩa là 1 đối tượng ben trong 1 đối tượng khác

// 2 CÁCH để tạo 1 object với cú pháp object literal và từ khóa new


// 1. object literal
let developer = { // vd về value dạng string
    name: "lê nguyen quoc huy từ sayhellosayhello",
    age : 22,
    hobby : ["coding", "testing", "eating", "sleeping with say hellohello"],
    sayhellouser : function () {
        console.log(`chào mừng bạn đến với khóa học ${this.name}`);   
        console.log(developer.hobby);
    },
    skill : ["coding", "testing"],  // vd về value dạng mảng
    // bh code 1 đối tượng bên trong 1 đối tượng khác dạng dạng object literal nó nằm bên trong thg develop ( lồng nhau) dc gọi là nested object
    position : {  // vd về value dạng ọbject khai báo theo kiểu object literal
        FE : ['htmm css',  'javascript', 'reactjs'],
        BE : ['java', 'php', 'c++'],
        FULLSTACK : false
    }
}
console.log(developer); // nó sẽ ra full cái trên
developer.sayhellouser();
console.log("--------------------------------------------------------------------------------");
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // cách 2: từ khóa new object
 let developer2 = new Object();
 developer2.name = "lê nguyen quoc huy 22";
 developer2.age = 22;
 developer2.hobby = ["coding", "testing", "eating", "sleeping 22"];
 developer2.sayhellouser = function () {
     console.log(`chào mừng bạn đến với khóa học 2 ${this.name}`);   
     console.log(developer2.hobby);
 }
 developer2.skill = ["coding", "testing"];
 developer2.position = {
     FE : ['htmm css',  'javascript', 'reactjs'],
     BE : ['java', 'php', 'c++'],
     FULLSTACK : false
 }
 console.log(developer2);
 console.log("--------------------------------------------------------------------------------");

//  vd 2 :
function develop(username) {
    this.username = username;
    this.age = 22;
    this.greet = () => {
        console.log(`Hello! My name is ${this.username}`);
    }
}

// tạo 1 biểu thức  , với từ khóa new ta có thể khởi tạo 1 hoặc nhiều đôi tượng
const trungquandev = new develop("trungquan (real)");
trungquandev.greet();


let trungquandev2 = new develop("trungquan (fake)");
trungquandev2.greet();
console.log("--------------------------------------------------------------------------------");

// có 2 cách để truy cậo đến thuộc tính của object
console.log(developer.name);
console.log(developer["name"]);
console.log("--------------------------------------------------------------------------------");

// thêm / sửa / xóa thuốc tính trong object
developer.gender = "female"; // thêm
developer.age = 23; // sửa
delete developer.position; // xóa
console.log(developer);

// xem lại lặp qia các đối tườn của thuộc tính : video-07/for-in.js
// xem lại method function : video-08/method-function_5.js

