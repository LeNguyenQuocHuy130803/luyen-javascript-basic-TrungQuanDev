// constructor function ( hảm khởi tạo -hàm tạo) :sdung để tạo 1 đối tượng mới. thường được kết hợp với từ khóa (new),
// khi làm vs constructor function khi khai báo phải gán nó cho this, để nó sẽ  trở thành một phương thức của instance được tạo từ constructor đó.


function develop(username) {
    this.username = username;
    this.hobby = ['code' , 'sleep']
    this.greet = () => {
        console.log(`Hello! My name is ${this.username}`);
        console.log(`hobby ofof My  is ${this.hobby}`);
    }

    // sayHello: function () { 
    //     console.log(`Hello, I am ${this.username}`); 
    // }
}
// develop.greet('huyhuy');

// tạo 1 biểu thức  , với từ khóa new ta có thể khởi tạo 1 hoặc nhiều đôi tượng
const trungquandev = new develop("trungquan (real)");
trungquandev.greet();
console.log("--------------------------------------------------------------------------------");

// let trungquandev2 = new develop("trungquan (fake)");
// trungquandev2.greet();
// console.log("--------------------------------------------------------------------------------");
