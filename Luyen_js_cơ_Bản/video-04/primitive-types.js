//  Nhóm các kiểu dữ liệu  primitive type được gọi là kiểu dữ liệu nguyên thủy

/**
 * các giá trị nguyên thủy được lưu trữ trực tiếp trong ngăn xếp (Stack)
 * khi 1 giá trị nguyên thủy được gán cho 1 biến, giá trị này không thể thay đổi 
 * khi thay đổi giá trị của biến , 1 bản sao độc lập của giá trị đó sẽ được tạo ra (nghĩa là ko liên quan đến giá trị trc đó nữa)
 * primitive types bao gồm các kdl phổ biến như number, string, boolean, null, undefined
 */

// number : đại diện cho các số bao gồm cả số nguyên và số thập phân
let number1 = 10;
let number2 = 10.5;
console.log('số thứ nhất:' , number1);
console.log('kiểu dữ liêu số thứ nhất:' , typeof number1);
console.log('số thứ hai:' , number2);
console.log('kiểu dữ liêu số thứ hai:' , typeof number2);
console.log('-------------------------------------------------------');

// vd 2:
x =1 ;
y =2;

console.log('kdl của x là ', typeof x);
console.log('kdl của y là ', typeof y);
console.log('-------------------------------------------------------');


// string : đại diện cho các chuỗi kí tự
let string1 = 'Hello World';
console.log('chuỗi thứ nhất:' , string1);
console.log('kiểu dữ liêu chuỗi thứ nhất:' , typeof string1);
console.log('-------------------------------------------------------');

// boolean : đại diện cho các giá trị true ( đúng) và false (sai)
let boolean1 = true;
console.log('giá trị thứ nhất:' , boolean1);
console.log('kiểu dữ liêu giá trị thứ nhất:' , typeof boolean1);

let boolean2 = false;
console.log('giá trị thứ hai:' , boolean2);
console.log('kiểu dữ liêu giá trị thứ hai:' , typeof boolean2);
console.log('-------------------------------------------------------');

// null : đại diện cho giá trị kiểu "rỗng" hoặc "không có gì" . ở đây đặc biệt kdl của null ko phải là null như mấy vd trên mà kdl của null là object

let nullVar = null;

console.log('biến null:' , nullVar);
console.log('kiểu dữ liệu biến null - return dc kqua là object:' , typeof nullVar);
console.log('ktra xem kiểu dữ liệu biến null đc khai báo ở trên có bằng object không - return dc kqua là true:' , typeof nullVar === 'object');
console.log('kiêm tra xem kiểu dữ liệu biến null dc khia báo trên có bằng kiểu null không - return dc kqua là false:' , typeof nullVar === null);
console.log('-------------------------------------------------------');

// ví dụ 2:
let a = null;
let b = null;
console.log( a === b);
console.log(typeof a );
console.log('-------------------------------------------------------');


// undefined : đại diện cho 1 biến chưa được gán giá trị
let undefinedValue
console.log('biến undefined:' , undefinedValue);
console.log('kiểu dữ liệu biến undefined ' , typeof undefinedValue);
console.log('-------------------------------------------------------');

// symbol : đại diện cho 1 giá trị Unique : độc nhất và bất biến thường có nghĩa laf ko có giá trị thứ 2 giống nó , đc sử dụng làm khóa hoặc id cho các đối tượng - Object. vd như cái số định danh trên cccd của t là số duy nhất ko có số thứ 2 gọi là unique
let So_cccd = Symbol('048203003537') // là số duy nhất
console.log('số cccd : ', So_cccd);
console.log('kiểu dữ liệu của số cccd trên : ', typeof So_cccd);
console.log('-------------------------------------------------------');

// BigInt : đại diện cho các số nguyên  có giá trị rất lớn , lớn hơn kiểu number ở trên
let so_cuc_lon = BigInt(989898989898989898989); // cách khai báo 1
let so_cuc_lon2 = 989898989898989898989n    // cách khai báo 2
console.log('số đầu tiên là : ', so_cuc_lon);
console.log('kiểu dữ liệu của số thứ nhất là : ', typeof so_cuc_lon);
console.log('số thứ 2 là : ', so_cuc_lon2);
console.log('kiểu dữ liệu của số thứ 2là : ', typeof so_cuc_lon2);

console.log('-------------------------------------------------------');