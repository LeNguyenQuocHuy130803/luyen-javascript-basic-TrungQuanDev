// trong js . mảng (array) là 1 kdl dùng để lưu trữ danh sách các giá trị .
// các giá trị trong mảng có thể là bất kì kdl nào : number , string, object... , thậm chí có thể là các mảng khác
// mảng trong js có các chỉ số - Index bắt đầu từ số 0 , , nghĩa là các phần tử đầu tiên của mảng có index là o
// phần từ thứ 2 có index là 1 , phần tử thứ 3 có index là 2 ..và ttuc tăng dần


// vd 1;
let numbers = [1, 2, 3, 4, 5];
console.log('Độ dài cuar mảng ', numbers.length);
console.log("------------------------------------------------");

// truy cập phần tử thứ 2 của mảng theo index bằng 1
console.log(numbers[1]);


// truy cập phần tử cuối cùng của mảng theo index = array.length - 1
console.log(numbers[numbers.length - 1]);
console.log("----------------------------------------------------------------------------");

//  mảng có thể chưa bất kig kdl nào 
const fullArry = [1, "huyle", true, null, undefined, {username: "huyleđaen"}];
console.log(fullArry);


// vd : 2
function develop() {
 develop.favorites = ["coding", "eating", "sleeping"];
}
develop();
console.log(develop.favorites[2]);
