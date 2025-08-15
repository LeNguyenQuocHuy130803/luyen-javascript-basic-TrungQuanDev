//  Nhóm các kiểu dữ liệu  primitive type được gọi là kiểu dữ liệu nguyên thủy

/**
Javascript là ngôn ngữ được định kiểu dữ liệu linh hoạt (dynamic), điều này sẽ rất tiện lợi nhưng lại cũng đồng nghĩa với việc dễ xảy ra những bug phát sinh trong quá trình dev 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

 */

let x 
x =7
x ="hello"
x= null
console.log(x);
console.log('-------------------------------------------------------');

// cho 1 ví dụ nhanh hiểu dc sự khác nhau giữa reference types và primitive types

// primitive types
let username = "huyle";
let usernameCopy = username;
// nếu ta chỉ ghi 2 dòng này và ta log ra với cách log như bên dưới thì nó sẽ cho ra chung 1 tên là huyle
usernameCopy = "huyle change";
// nhưng khi ta thêm dòng ở trên này  và ta log ra với cách log như bên dưới thì nó sẽ cho ra 2 tên khác nhau nó ko làm thay đổi cái tên ở username trên

console.log("username is : ", username);
console.log("usernameCopy is : ", usernameCopy);
console.log('-------------------------------------------------------');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reference types
let objectA = { username: "huyle" };
let objectaCopy = objectA;
// nếu ta chỉ ghi 2 dòng này và ta log ra với cách log như bên dư��i thì nó s�� cho ra chung 1 tên là huyle
objectaCopy.username = "huyle đã change";
// nhưng khi ta thêm dòng ở trên này  và ta log ra với cách log như bên dư��i thì nó s�� cho ra tên giống  nhau như tên đã đặt ở objectaCopy nó làm thay đổi luôn cáu objectA

console.log("objectA is : ", objectA);
console.log("objectaCopy is : ", objectaCopy);
console.log('-------------------------------------------------------');

// khi cho 2 vd để phần biệt trên thì ta nhận thấy rằng:
// còn với primitive types thì khi thay đổi giá trị của biến , 1 bản sao độc lập của giá trị đó sẽ được tạo ra (nghĩa là ko liên quan đến giá trị trc đó nữa)
// đối với reference type khi gán đối tượng A cho B , thì cả A và B sẽ cùng tham chiếu đến cùng 1 đối tượng , chứ ko tạo ra bản sao độc lập riêng biệt

// có nghĩa là khi ta thay thế với tên khác thì ở thằng primitive types thì nó không làm thay đôie, còn thằng reference types thì làm thay đổi