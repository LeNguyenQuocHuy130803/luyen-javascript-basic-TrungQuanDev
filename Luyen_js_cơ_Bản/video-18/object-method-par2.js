//  rẩt hay
/**
 có khá nhiều Methods - Phương thức khí xử lí dữ liệu Object trong Jvascript
 dưới đây we sẽ tập trung vào những phương thức quan trong và được dùng nhiều trong thực TẾ.
 Phần 2: freze(), isFrozen(), isSealed(), seal(), is(), hasOwn(), groupBy() 
 */

 // Object.freeze() đóng băng 1 đối tượng : nghiã là không cho phép thêm sửa xóa các thuộc tính của đối tượng đó
 const obj1 = {a:1, b:2};
 Object.freeze(obj1);
 // 3 trường hợp thêm sửa xóa dưới đây đều không có tác dụng
 obj1.c = 4; // thêm
 obj1.a = 5; // sửa
 delete obj1.b; // xóa
 console.log("sau khi dùng freeze() :", obj1);
 console.log("----------------------------------------------------------------");

 // Object.isFrozen() kiểm tra 1 đối tượng đã được đóng băng ( freeze ) hay chưa trả về True/False
 console.log("kiem tra xem nos cos dc freeze hay chua:", Object.isFrozen(obj1)); // true
 console.log("----------------------------------------------------------------");

 //Object.seal() niêm phong 1 đối tượng , không cho phép thêm hoặc xóa các thuộc tính, nhưng vân cho phép sửa đổi.
 const obj2 = {a:1, b:2};
 Object.seal(obj2);
 obj2.c=4; // thêm khong duoc
 obj2.a=10// sửa duoc
 delete obj2.b; // xóa ko dc
 console.log('sau khi dung phuong thuc seal() :', obj2);
 console.log("----------------------------------------------");

 // Object.isSealed() kiểm tra 1 đối tượng đã niêm phong ( seal ) hay chưa trả về True/False
 console.log("kiem tra xem da dc seal() hay chua: ", Object.isSealed(obj2));
 console.log("----------------------------------------------------------------");

 // Object.is() - so sánh xem hai giá trị có giống nhau hay không.
 // tương tự như toán tử ===, tuy nhiên sẽ có điểm khác là : việc so sánh (NaN) và (-0 với +0)
 console.log('so sanh 17 vs 17 co giong nhau khong:', Object.is(17, 17));
 console.log('so sanh 2 cai nay', Object.is("lehuy", "LEhuy")); // false
 console.log("so sanh null vs undefined", Object.is(null, undefined));

 console.log("so sanh NaN vs NaN", Object.is(NaN, NaN)); //true
 console.log("so sanh NaN === NaN", NaN === NaN); //false

 console.log("so sanh 0 vs -0", Object.is(0, -0)); //false
 console.log("so sanh === giua 0 vs -0", 0 === -0); //true
 console.log("----------------------------------------------------------------");

 // Object.hasOwn() kiểm tra xem đối tượng có chứa 1 thuộc tính cụ thể hay không ( trc dấu : gọi là key = thuộc tính ( property))
 const obj3 = {a:1, b:2};
 console.log("kiem tra xem da co thuoc tinh a trong obj3 hay chua: ", Object.hasOwn(obj3, 'a')); // true
 console.log("kiem tra xem da co thuoc tinh x trong obj3 hay chua: ", Object.hasOwn(obj3, 'x')); // false
 console.log("----------------------------------------------------------------");

 // Object.groupBy() - sử dụng để nhóm các giá trị trong một đối tượng dựa trên 1 tiêu chí cụ thể nào đó
 // - Lưu ý quan trọng : Object.groupBy() mới xuất hiện cụ thể trong tháng 3/2024 nó chỉ mới hoạt động trên 1 số trình
 // duyệt phổ biến đã update phiên bản mới nhất . hoặc môi trường NodeJS version từ v22.x.x trở lên
 // chi tiết về groupBy : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
// Destructuring : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 const inventories = [  // hàng tồn kho
    { name: 'iPhone 12',  type: "apple", quantity: 2 },
    { name: 'iPhone 12 Mini', type: "robot" , quantity: 1 },
    { name: 'iPhone 14', type: "sinicon" , quantity: 3 },
    { name: 'iPhone 14 Pro', type: "robot" ,  quantity: 1 },
    { name: 'iPhone 14 Pro Max', type: "sinicon", quantity: 1 },
 ]

 // Test thử trên trình duyệt mới nhất theo hướng dẫn trong video . Hoặc nodeJS version 22.x.x
const groupByResult = Object.groupBy(inventories, ({type}) => type);  // đây là dạng Destructuring xem link trêntrên
//  const groupByResult = Object.groupBy(inventories, (huyne) => huyne.type);
// lưu ý một tí ở dòng 68, 69 thì sau dấu => đó là dạng viết tắt của return nếu ghi rõ ra nó sẽ như sau :
// const groupByResult = Object.groupBy(inventories, ({type}) => {
//     return type
// });
console.log('Object.groupBy(inventory, ({type}) => type', groupByResult);
 

 
 
 
 
 
 
 
 

 
 
 



 