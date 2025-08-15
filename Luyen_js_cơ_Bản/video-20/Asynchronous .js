/**
 bài học về Bất đồng bộ trong Javascript (   https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing

Asynchronous,
callback(callback hell) , 
Promise(Promise Hell),
Async/Await,
Event Loop : giải thích js chạy như nào chjay như nào

 - Video 20 này sẽ tập trung vào khái niện Async : bất đồng bộ trong javascript
*/

// Bài toán đồng bộ là gì? : Synchronous ,// đây là đồng bộ chạy từ trên xuống dưới
console.log(" chay xong dong 1 ");
console.log(" chay tiep dong 2 sau khi chay xong dong 1 ");
console.log(" chay tiep dong 3 sau khi chay xong dong 2 ");
console.log('----------------------------------------------------------------');

// bài toán bất đồng bộ là gì? : Asynchronous,  Ví dụ : ta có 1 bài như sau : 
// đọc file dữ liệu và hiển thị dữ liệu của file ra ngoài . trong thực tế sẽ cần tốn thời gian để làm như tốn thời gian để đọc file và hiển thị thơi gian ra ngoài


//bước 1 : khởi tao biến để lưu trữ dlieu sau khi đọc file xongxong
let fileData = null  // khơi tạo file của mik là null
console.log("bắt đầu đọc file dữ liệu dữ kiến tốn khoảng 3s");

// bước 2 : khưởi tạo hàm và bắt đầu đọc file dữ liệu
console.log("B2:Giả lập đang đọc file dữ liệu, bắt đầu thực thi cái hàm readFileData ở trên....");


//bước 3 :  khởi tạo 1 hàm readFileData có nhiệm vụ là đọc file, giả lập rằng sẽ tốn 3s  để đọc
const readFileData = () => {
    setTimeout(() => {
        console.log("B3: sau khi đọc file dữ liệu xong , gán dữ liệu đã đọc vào fileData bên dưới");
        fileData =" lê nguyễn quốc huy"   // tức là mình đọc cái file đó trong đó có dòng là lê nguyênx quốc huy thì đem nó ra và gán nó cho fileData       
    },3000)
}

// thực thi hàm
readFileData(); // run ham

// B4 : in ra kết quả
console.log('kết thúc quá trình đọc file thành công với đata mình nhận được là : ', fileData);
// GIẢI THÍCH CÁCH HOẠT ĐỘNG NHƯ SAU :
// bắt dầu ta sẽ khơi tạo 1 fileData với dlieu null ( rỗng) và log ra câu đó
// tiếp tục nó đến bước 2 tiếp tục log ra câu đó
// xong đến bước nó thực thi hàm là hàm readFileData thì nó quay lên hàm ở bước 3 nhưng nó gặp settimeout nên nó phải đợii 3s 
// nhưng nó đợi nó vẫn chjay cái tiếp theo là ở bước 4 in ra kết quả mình nhân d dclaf null vì bước 3 nó đã đọc dc xong và gán cho fil đâu là sao nó có kết quả dc
// vậy nên dlieu ở fileData "Lê nguyễn quốc huy" mó ko cần có trong fileData cần đọc nó là dlieu cứng để gán có cx dc ko có cx dc khi nào mình muốn đọc dkieu có đungs tròn file 
// thì dùng fs.readFile reong nodejs


