// method function (hàm phương thức) : là hàm đươc định nghĩa / khai báo bên trong đối tượng , được coi là 1 pthuc của 1 đối tượng (object)
//  dã được từng sdung trong : reference type

// ✅ Khi bạn làm việc với object hoặc class và cần tạo function bên trong nó.
// ✅ Khi bạn cần this để truy cập vào các thuộc tính của object.
// ✅ Khi bạn làm việc với lập trình hướng đối tượng (OOP).

// method trong objectobject
let develop = { //  gọi là object
    name: "lê huy",
    age: 22,
    hobbies: ["coding", "eating"],
    sayHello: function () { // thg sayHello chính là 1 method function vì nó đươc khai báo bên trong 1 object ( 1 đối tượng) develop
        console.log(`Hello, I am ${this.name} the age is ${this.age} and I like ${this.hobbies}`); //cách 2: đây là cách log bằng pphap literal
    },
    
    sayHelloArrFn : () => { // dùng methon dạg arrow function
        console.log(`Hello, I am ${this.name} the age is ${this.age} and I like ${this.hobbies}`); // arrow function khồn được dùng this ( ở đây dòng này nó sẽ hoeejn Undefined)
    }
}
develop.sayHello();
develop.sayHelloArrFn();
console.log('-------------------------------------------------------');

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Method trong class
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log(`Car brand: ${this.brand}`);
    }
}
const myCar = new Car("Toyota");
myCar.showBrand();