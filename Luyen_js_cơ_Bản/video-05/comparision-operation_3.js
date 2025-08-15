//  comparision operation : gọi là toán tử so sánh

let a = 10;
let b = 2;
console.log(a == b); // kết quar là : false, ko bằng nhau. đây là kiểu so sánh về mặt số học
console.log("1.----------------------------------------------------------");


let x = 5
let y = '5'
console.log(x === y); // kết quar là : false , vì === là so sánh tuyệt đối về mặt số học và mặt kdl tuy cả 2 đều bằng nhau đều = 5
// nhưng x là kiểu number còn y là kiểu string , nên kqua là false
console.log("2.----------------------------------------------------------");

var m = 10;
var n = '5';
console.log(m != n);  // GỌI LÀ TOÁN TỬ PHỦ ĐỊNH , ĐỌC DC LÀ M KHÔNG BẰNG N , là đúng 
console.log(m !== n);  // tức là m không băngf n và phải cùng kiểu dữ liệu
console.log(m > n);  // tức là m lớn hơn n
console.log(m < n);  // tức là m nhỏ hơn n

console.log(m >= n);  // tức là m lon hơn hoặc bang n : true
console.log(m <= n);  // tức là m nhỏ hơn hoặc bằng n : false
// phải nhớ 2 trg hợp cuối là hoặc tức là lớn hơn hoặc bằng chứ ko phải chir lớn hơn hay chỉ bằng
console.log("3.----------------------------------------------------------");