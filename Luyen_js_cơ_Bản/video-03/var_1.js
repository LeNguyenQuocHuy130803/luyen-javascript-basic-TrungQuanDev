//  có 3 cách khai báo biêns trong js là let-var-const

// ------------------------------var----------------------------- var nó khá lỏng lẻo ko bảo mật nên hạn chês và hậu như ko dùng ở đi làm

//Hoisting:hoisting ở var có nghĩa là :  biến  khai báo bằng var  nó sẽ được hoisted (di chuyển lên đầu khối scope của nó,) và đồng thời biến đó dc khởi tạo với giá trị mặc định ban đầu là undefined.. 
// cho nên we có thể sử dụng biến trước khi khai báo nó mà không gặp lỗi

console.log('nameVar:', nameVar); // đây được gọi là sử dụng biến trc r mới khai báo bên dưới
console.log("----------------------------------------------------------------");

// gthich : ở đây với dòng log thì ta cái trong ngaowjc chính là cái dc ta in ra = cái sẽ được ta log ra
// còn cái dưới sau giấu = chính là giá trị sẽ được in ra , vd nếu dòng var... nằm ở trên thì cái ta in ra sẽ là nameVae : lê huy , 
// nhưng nếu dòng var... nằm ở dưới thì lúc đó cái hoisting dc định nghĩa ở trên xuất hiện nó sẽ duy chuyển lên đầu và cái ta in ra sẽ là nameVar : undefined vì đó là cơ chế của var

// 1.khai báo
var nameVar = 'lê huy1';
console.log('nameVar:', nameVar);
console.log("----------------------------------------------------------------");

// 2.tái khai báo : có thể tái khai báo cungf 1 biến var nhiều lần trong cùng 1 phạm vi mà không gặo lỗi ( dùng chung 1 tên khai báo là nameVar )
// ( tái khai báo là nói về việc ta sdung biến có tên là nameVar một lần nữa)
var nameVar = 'lê huy2- đã tái khai báo';
console.log('nameVar:', nameVar);
console.log("----------------------------------------------------------------");

// 3.gán lại : có thể gán lại giá trị của biến var mà không gặp lỗi
nameVar = 'lê huy3- đã tái khai báo lần nữa-nó khá giống với cái tái khai báo';
console.log('nameVar:', nameVar);
console.log("----------------------------------------------------------------");
// vd: gán lại 2 : như dưới nó sẽ gặp lỗi trừ khi ta khai báo r mới gán lai dc
// nameVarNN = 'lê huy- đã tái khai báo lần nữa-nó khá giống với cái tái khai báo';
// log('nameVarNN:', nameVarNN);

// ------------------------------node var.js-----------------------------

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  làm thêm ví dụ về var : vd 1
var x = 1;

if (x === 1) {
    var x = 2;
    console.log( x);
}

console.log(x); // output: 2
console.log("----------------------------------------------------------------");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  làm thêm ví dụ về var : vd 2

function testvar ( ) {
    let result;
    var x = 1;
    var y = 3;

    if ( x+ y === 3) {
        result = "x la 1 va y la 2"
}else{
    result = "x khong phai 1 va y 2"
}   
console.log(result); // output: undefined
}
testvar();
console.log("----------------------------------------------------------------");