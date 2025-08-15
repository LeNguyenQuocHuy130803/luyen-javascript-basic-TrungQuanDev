// for off : dùng để lặp qua các giá trị của 1 iterable object ( tức là những đối tượng mà ta có thể lặp), phổ biến như Array, String...vv
// nhớ cho kĩ for of chỉ để lặp qua mảng vs chuỗi
// https://www.w3schools.com/js/js_iterables.asp


// 1. lặp qua mảng
let colors = ["red", "green", "blue" , "yellow" , "pink"   ];
for (let MauSac of colors) {
    console.log(` Màu sắc được log ra là : ${MauSac}`);
}

console.log("--------------------------------------------------------------------------------");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// vd 2 : lặp qua chuỗi
let usernames = "Huy  le"
for (let  tencuacauayla of usernames) {
    console.log(` Username : ${tencuacauayla}`);
}
console.log("--------------------------------------------------------------------------------");

// for-of nó khác vs for-in ở chỗ nó ko thể duyêt qua đối tượng ( ={ } ) đc :

let developer = {
    name: "huyle",
    age: 25,
    hobby: ["eat", 'reading', "play game", 'sleep' ],  
    skill: "js"
};

for (let key of developer) { // nếu để ở đây là for of thì nó sai nó ko thể duyệt qua đối tượng object dc
    console.log( `${key} : ${developer[key]}`); 

    console.log("------------------------------------------------------------------------------------------------"); 
}