//  for in : lặp qua các thuộc tính của 1 đối tượng object , nhơs cho kĩ for in là để lặp qua các đối tượng tức trong {}
// https://www.w3schools.com/js/js_iterables.asp

let developer = {
    name: "huyle",
    age: 25,
    hobby: ["eat", 'reading', "play game", 'sleep' ],  // trước dấu : người ta gọi là key sau dấu : gọi là value
    skill: "js"
};

// khi nào muốn thì mở 3 dòng dưới ra
// console.log(developer);
// console.log(`${developer.name}`);
// console.log('---------------------------------------------------------');

// ở dưới là dùng for in để lặp qua ( key ở đây là name , age, hobby...)
for (let keyHuyle in developer) { // trước chữ in dc đặt tên tự do
    console.log( `${keyHuyle} : ${developer[keyHuyle]}`);   // có developer đêr ta truy cập vào chỗ của key đó , nó nằm trong developer

    // hoặc nếu ta muốn lấy từng key thì có thể dùng cách như sau :
    // if (key === "name") {
    //     console.log( developer[key]);
    // }
    console.log("------------------------------------------------------------------------------------------------"); 
}

// ta dùng cái key.... tên chưa key để log ra ,  để ta khoie phải log từng dòng 1 như dưới đây
// console.log("name", developer.name);
// console.log("age", developer.age);
// console.log("hobby", developer.hobby);
// console.log("skill", developer.skill);

