let devlop = { // đối tượng A
    name: "Đối tượng A",
    age: 30,
    B: { // đối tượng B bên trong A
        name: "Đối tượng B",
        age: 20,
        sayHello () {
            console.log(`Xin chào từ ${this.name}, tuổi ${this.age}`);
        }
    },
    introduce () {
        console.log(`Xin chào từ ${this.name}, tuổi ${this.age}`);
    }
};

// Gọi phương thức introduce của A
devlop.introduce(); // Kết quả: Xin chào từ Đối tượng A, tuổi 30

// Gọi phương thức sayHello của B
devlop.B.sayHello(); // Kết quả: Xin chào từ Đối tượng B, tuổi 20

console.log("------------------------------------------------------------------------------------------------");

/////////////////////////////////////////////////////

let developer = {
    name: "huyle",
    age: 25,
    hobby: ["eat", 'reading', "play game", 'sleep' ],
    skill: "js"
};
console.log(`${developer.name}`);
console.log(`${developer.hobby}`); // literal nó sẽ chuyển đổi chuôiix log all về dạng string mặc dù đag ở đây là dạng mảng
console.log(`Tên là : ${developer.name}`);


