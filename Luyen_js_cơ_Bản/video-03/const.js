// ------------------------------const-----------------------------

//Hoisting:hoisting ở const có nghĩa là:  biến  khai báo bằng const  nó sẽ được hoisted (di chuyển lên đầu khối scope của nó,)
//  nhưng không dc khởi tạo với giá trị mặc định ban đầu nào cả 
// nên không thể sử dụng biến trước khi khai báo .

// console.log('nameConst:', nameConst);  - ta ko thể sdung cách sử dụng  biến trc dc như bên var nên phải comment lại


// khai báo biến
const nameConst = 'lê huy';
console.log('nameConst:', nameConst);

// tái khai báo : không thể tái khai báo cungf 1 biến const nhiều lần ( tái khai báo là nói về việc ta sdung biến có tên là nameConst một lần nữa)
// const nameConst = 'lê huy';
// console.log('nameConst:', nameConst);


// gán lại ko thể gán lại giá trị của biến const vì const là 1 biến hằng
// nameConst = 'lê huy đã gán lại';
// console.log('nameConst:', nameConst);