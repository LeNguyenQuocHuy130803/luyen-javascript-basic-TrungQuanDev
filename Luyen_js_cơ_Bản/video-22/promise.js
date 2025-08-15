/**
 //  bài học về Bất đồng bộ trong Javascript (bây giờ học đến : Promise , Promise Hell, Async/Await, Event Loop)
Video số 22 này : sẽ tập trung vào khái niệm Promise và vấn đề Promise Hell
1. Promise ( lời hứa) : là 1 đối tượng Js đại diện cho 1 tác vụ bất đồng bộ cần thời gian chờ để hoàn thành
- Promise có 3 trạng thái : pending ( đang chờ), fulfilled (thanh công), rejected (thất bại)
- xử lí kết quả Promise bằng cách sử dụng .then()  .catch() và .finally().
2. Sử dụng promise để giải quyết vấn đề bất đồng bộ ở buổi học số 20, thay vì sử dụng call back đeer xửi lí ở video 21
3. ví dụ thực tế dễ hiểu trong việc sử dụng Promise để xử lú các APIs bất đồng bộ
4. Vấn đề promise Hell tương tự với CallBack Hell ở buổi học trước
 */

// 1. Promise ( lời hứa) : là 1 đối tượng Js đại diện cho 1 tác vụ bất đồng bộ cần thời gian chờ để hoàn thành
// let testPromise = new Promise((resolve, reject) => {  // resolve : thành công, reject : thất bại  cái này là dạng objectobject
//     // giả lập ở đây 1 tác vụ bất đôngg bộ như gọi API :
//     let callApiSucessfull = true;
//     setTimeout(() => {
//     if (callApiSucessfull) {
//         resolve("Sau 2s : da goi API thành công"); // resolve : thành công
//     }
//     else{
//         reject("Sau 2s : da goi API thất bại"); // reject : thất bại
//     }     
//     }, 2000);
// })

// console.log(testPromise); // cho ra Promise { <pending>  roi tawts

// // - Promise có 3 trạng thái : pending ( đang chờ), fulfilled (thanh công), rejected (thất bại)
// // - xử lí kết quả Promise bằng cách sử dụng .then()  .catch() và .finally().
// testPromise  // vì là dạn object nên nó không cần phải có () như hàmhàm
//     .then((result) =>{  // them la thanh công
//         console.log(result); // cho ra Sau 2s : da goi API thành công
//     })
//     .catch((error) => {  // xu li cho truong hop that bai
//         console.error(error); // cho ra Sau 2s : da goi API thất bại
//     })
//     .finally(() =>{ // ko nhan tham so
//         console.log("hoàn tất việc sử lí Promise"); // luôn chạy dù tác vụ có là thành công hay thất bại đi chăng nữa   
//     });

    // thì khi ta chạy nó sẽ cho ra là sau 2s: da goi API thành công vì cái callApiSucessfull ta để bằng true thì nó sẽ đi vào cái then ( thành công)
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

// 2. Sử dụng promise để giải quyết vấn đề bất đồng bộ ở buổi học số 20, thay vì sử dụng call back đeer xửi lí ở video 21

// let fileData = null  // khơi tạo file của mik là null
// console.log("B1: bắt đầu đọc file dữ liệu dữ kiến tốn khoảng 3s");

// // bước 2 : khưởi tạo hàm và bắt đầu đọc file dữ liệu
// console.log("B2:Giả lập đang đọc file dữ liệu, bắt đầu thực thi cái hàm readFileData ở trên....");
// // Quan trọng nhất ở bớc này : Hàm này sẽ return - trả về 1 Promise


// //bước 3 :  khởi tạo 1 hàm readFileData có nhiệm vụ là đọc file, giả lập rằng sẽ tốn 3s  để đọc
// const readFileData = () => {
//     return new Promise((resolve, reject) => {  // return để nó rrar về dạng promise là thành  công hay thất bại
//         setTimeout(() => {
//             console.log("B3: sau khi đọc file dữ liệu xong , gán dữ liệu đã đọc vào fileData bên dưới");
//             fileData =" lê nguyễn quốc huy"   // tức là mình đọc cái file đó trong đó có dòng là lê nguyênx quốc huy thì đem nó ra và gán nó cho fileData       
           
//             resolve(fileData)  // resolve để nó trả về dạng promise là thành công
//              //reject('lôi roi không lấy được lê nguyênx quốc huy') // chạy dòng này thif đóng dòng thành công lại và ngợc lại
//         },3000)
//     })

// }

// // console.log(readFileData());  //thử mở lại đoạn comment này là thấy  ở bước này vẫn chưa chạy nó chỉ đang ở trạng thái chờ nên khi log ra nó báo là pedding

// // thực thi hàm
// readFileData() // vì đây là hàm nên mới có dấu ()
//     .then((fileData_Lehuy) => {  // đây là bước thành công, không cần đặt giống cái tên filedata ở chỗ callback trên đoạn setTimeout ghi giống thì sẽ hay hơn
//         console.log("B4: kết thúc quá trình đọc file dữ liệu với Dâta nhận được là : ", fileData_Lehuy);
        
//     })
//     .catch((err) => {  // bước thất bạibại
//         console.log("B4: kết thúc quá trình đọc file dữ liệu với Dâta nhận được là : ", err);
//     })
//     .finally(() =>{  // luôn có
//         console.log("B5: ket thuc qua trinh doc file dữ liệu");
        
//     })

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 3. ví dụ thực tế dễ hiểu trong việc sử dụng Promise để xử lí các APIs bất đồng bộ, hôm nay sẽ dùng fetch chứ ko dùng cái cũ XMLHttpRequest nữa
    // https://pokeapi.co/
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const getlistPokemon = (limit = 10) => {
    // thg fetch API nó  sẽ trả về sẵn 1 Promise rồi, nên không cần phải return new Promise như ở trên nữa
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {method : 'GET'})  // khoong cần phải dùng return new Promise((resolve, reject) , vì trong fetch nó chưa sẵn cái resolve và reject rồi
    // trong cái fetch này truyền vào 1 cái string literal : `` hoac dau " "
        .then((rawResponse) => {
            console.log(' du lieu dau ra dang rawResponse', rawResponse);

            // ở bước này nó sẽ trả về dlieu ( respow cho người dùng đọc dạng raw = stream rất khí đọc ), muốn lấy dc data cho user dễ đọc hiểu hơn thì phải thông qua
            // rawResponse.json để chuyển nó từ dạng raw sang dạng json ( có trong chat có lưu trữ lại r ) 
            // mà rawResponse.json lại tiếp tục trả về dạng Promise nên chúng ta phải .then() một lần nữa để lấy dc dlieu ra. 
            // Đây là kiểu Primise Hell mà ta sẽ nhắc đến ở phần 4 bên dưới 
            return rawResponse.json()
            .then(pokemon => {
                console.log('danh sach pokemon', pokemon);
            })
            
        })
        .catch((error) => {
            onsole.log('co loi khi getlistPokemon :', error);
        })
        .finally(() => {
          
            console.log('ket thuc hanh dong getListPokemon ta la finally');
        })

}

// gọi ham để chạy
getlistPokemon(20); // nếu ta không truyền thMam số 20 vào thì nó sẽ mặc định là lấy cái limit = 10  ở trên để đổ 
// ra 10 con nhưng ghi 20 thì nó sẽ ghi đè lên 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Vấn đề promise Hell tương tự với CallBack Hell ở buổi học trước
// khi tác vụ sau phảu dựa vào kết quả của tác vụ trước nên phải lồng then như này => Promise Hell

// let testGetListPokemon = new Promise((resolve, reject) => {
//     let callApiSucessfull = true;
//     setTimeout(() => {
//         if (callApiSucessfull) {
//             resolve("Sau 2s: đã gọi API thành công");
//         } else {
//             reject("Sau 2s: đã gọi API thất bại");
//         }
//     }, 2000);
// });

// testGetListPokemon
//     .then((pokemon) => {
//         console.log("Danh sách pokemon lấy được là:", pokemon);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Gọi API lấy chi tiết Pokemon 1 thành công");
//             }, 1000);
//         });
//     })
//     .then((detail_01) => {
//         console.log(detail_01);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Gọi API lấy chi tiết Pokemon 2 thành công");
//             }, 1000);
//         });
//     })
//     .then((detail_02) => {
//         console.log(detail_02);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Gọi API lấy chi tiết Pokemon 3 thành công");
//             }, 1000);
//         });
//     })
//     .then((detail_03) => {
//         console.log(detail_03);
//         console.log("// Đây là Promise Hell 😈");
//     })
//     .catch((error) => {
//         console.log("Lỗi:", error);
//     })
//     .finally(() => {
//         console.log("Kết thúc quá trình gọi API.");
//     });



