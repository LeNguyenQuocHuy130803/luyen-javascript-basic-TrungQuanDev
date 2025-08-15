// ham co ban ko tham so :
function ham1 () {
    console.log('HAM1 successfull');
    
}
ham1();
console.log('--------------------------------------------------------------------------------');

/// ham don gian co tham so truyen vao

function ham (name) {
    console.log(`ham 1.1: ${name}`);
    
}
ham('cothamso');
console.log('--------------------------------------------------------------------------------');

// ham bieu thuc 
const ham2 = () => {
    console.log('ham 2 successfull');
}
ham2();

console.log('--------------------------------------------------------------------------------');

// ham arrow function

let ham3 = () => {
    console.log('ham 3 arrowfunction successfull');
}
ham3();

console.log('--------------------------------------------------------------------------------');

// ham an danh
setTimeout(() => {
    console.log('ham 4 delay 2 s');
},20)


function hammoi (name) {
    console.log(`ten ${name}`);
    
}

function hammoi2 (alo) {
    alo('huyngu')
}
hammoi2(hammoi);

console.log('--------------------------------------------------------------------------------');

//method-function

let method_function = {
    name:'lehuy',
    age:21,
    hobbies:['video game','movie','music'],

    greet1 : function () {
        console.log(`hello, I am ${this.name} and I'm ${this.age} and hobbi ${this.hobbies} `);
    }
}
method_function.greet1();
console.log('--------------------------------------------------------------------------------');


//constructor
function constructor (name,age) {
    this.name = "huyle13";
    this.age = age;

    this.gree = () => {
        console.log(` i ${this.age}`,this.name);
        
    }
}
lehuyquangu = new constructor(21);
lehuyquangu.gree();

console.log('--------------------------------------------------------------------------------');