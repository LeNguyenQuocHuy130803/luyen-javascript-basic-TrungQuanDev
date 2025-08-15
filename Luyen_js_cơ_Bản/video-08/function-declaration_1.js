//  function declaration (khai báo hàm) : là cách khai báo phổ biến nhất trong js
// phải có 2 bước 1 là khởi tạo , hai là gọi để chạychạy
//  Bươc 1 : khởi tạo function 
function sayhello () {  // function đến "tên functionfunction"
    console.log(`hello huy! `);
}
//  Bước 2 : gọi hàm để chạy function
sayhello();
console.log("--------------------------------------------------------------------------------");



// ví dụ 2 : nâng cao hơn là ta cần truyền vào 1 tham số trong ngoặc
function sayhello (name) {
    console.log(`hello ${name}! I am huyle `);
}
//  Bước 2 : gọi hàm để chạy function
sayhello("Sang");
console.log("--------------------------------------------------------------------------------");