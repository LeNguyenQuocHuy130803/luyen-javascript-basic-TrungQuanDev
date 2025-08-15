//1. hàm đơn giản declaration không có tham số truyền vào
function ham_declaration () {
    console.log(' 1 ham khong co tham so truyen vao ');
}
ham_declaration();

console.log('--------------------------------------------------------------------------------');

//1.1  hàm đơn giản declaration có tham số truyền vào

function ham_declaration_2 (name_ham) {
    console.log(` 2 ham declaration co tham so truyen vao ${name_ham}`);    
}
ham_declaration_2("ham_declaration_cothamso");
console.log('--------------------------------------------------------------------------------');

// 2. hàm  biểu thức ( gán biên) không truyền tham số
const ham_co_bieu_thuc = () => {
    console.log('3 ham co bieu thuc');
}
ham_co_bieu_thuc();
console.log('--------------------------------------------------------------------------------');

// 2.1 // 3. hàm  biểu thức ( gán biên) có truyền tham số

const ham_co_bieu_thuc_2 =function (name_ham) {
    console.log(`4 ham co bieu thuc ${name_ham}`);
}

ham_co_bieu_thuc_2(" tham_co_bieu_thuc_cothamso");

console.log('--------------------------------------------------------------------------------');

// 3. hàm arrow function ko có tham số truyền vào 
const arrow_function_1 = () => {
    console.log('5 arrow function ko co tham so truyen vao');    
}
// arrow_function_1();

console.log('--------------------------------------------------------------------------------');

// 4. hàm arrow function có tham số truyền vào 
const arrow_function_2 = (name_arrow_fuction) => {
    console.log(`6 arrow function  co tham so truyen vao ${name_arrow_fuction}`);    
}
arrow_function_2('arrow_function_cothamso');

console.log('--------------------------------------------------------------------------------');


// 4. hàm ẩn danh : là hàm ko có biến 
setTimeout(() => {
    console.log("delay 2s");
    },100)
 console.log("--------------------------------------------------------------------------------");

 // vd22
 const pan2 = (name) => {
     console.log(`Hello, ${name}!`);
 }

 function greet(callback) {
    callback('lehuy')
 }

 greet(pan2); // Output: "Hello, lehuy!"
console.log('--------------------------------------------------------------------------------');


 // method_function
 const method_function = {
    name:'lehuy',
    age:21,
    hobbies:['video game','movie','music'],

    hyy_sayHello : function(){
        console.log(`hello, I am ${this.name}  me did ${this.age} hobby ${this.hobbies} `);  
    }


}

method_function.hyy_sayHello();
console.log('--------------------------------------------------------------------------------');

// constructor -method

function constructor (name,hobbi) {
    this.name =name;
    this.hobbi =hobbi
    this.greet = () => {
        console.log(`Hello, My name is ${this.name}`);
        console.log(`hobby of My  is ${this.hobbi}`);
    }
}

lehuyngu = new constructor('lehuy','video game');
lehuyngu.greet();
console.log('--------------------------------------------------------------------------------');