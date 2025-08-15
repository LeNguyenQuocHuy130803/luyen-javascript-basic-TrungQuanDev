/**
 * Video 23 này sẽ tập trung vào khái niệm Async/Await và áp dụng vào thực tế.
 * 1. Async/Await là cú pháp giúp làm việc với Promise dễ dàng hơn , thay vì dùng .then() và .catch() hoặc .finally()
 * . lưu ý , Async/Await không thay thế Promise
 * - Async dùng để khai báo với Javascript rặng một hàm là bất đồng bộ. Một Async function sẽ luôn trả về một Promise.
 * 
 * -Await chỉ có thể dùng được trong scope của các hàm Async , giúp đợi cho đến khi Promise hoàn thành.
 * 2. Sử dụng Async/Await để giải quyết các vấn đề bất đồng bộ ở buổi học số 20 thay vì sử dụng callback hoặc Promise.
 * 3. Ví dụ thực tế dễ hiểu và ngắn gọn trong việc sử dụng Async/Await để xử lí các Apis bất đồng bộ.
 * 4. vấn đề Async/Await Hell là gì? Có giống CallBack hell hay Promise hell? hay không
 */

//  * 1. Async/Await là cú pháp giúp làm việc với Promise dễ dàng hơn , thay vì dùng .then() và .catch() . finally()
/** code tự làm 
const gestList = async (pokemonNameOrId) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        if (!response.ok) {
            throw new Error('Không tìm thấy Pokemon');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

gestList('charmander')
    .then((list) => {
        console.log(list);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('finally');
    })
*/
// 1. Async/Await khái niệm và Ví dụ đơn giản.
// bước 1 : ta cx xem lại đoạn code cũ : giữ nguyên hàm testPromise như buổi trước
// let testPromise = new Promise((resolve, reject) => {  
//     let callApiSucessfull = true;  // phải để true nha chớ để false là nó rơi dô nhánh else á 
//     setTimeout(() => {
//     if (callApiSucessfull) {
//         resolve("Sau 2s : da goi API thành công"); // resolve : thành công
//     }
//     else{
//         reject("Sau 2s : da goi API thất bại"); // reject : thất bại
//     }     
//     }, 2000);
// })
// //  xử lí kết quả của Promise phía trên bằng try catch finally thay vì sử dụng .then() .catch () .finally()
// // lưu ý try catch finally phải được bọc trong mộn async function thì mới dùng được await
// // khở tạo hàm handleAsyncfunction
// const handleAsyncfunction = async() => {
//     try {  // ở đây là trg hợp đúng
//         const result = await testPromise;  // await sẽ chờ kết quả của Promise ở ởddoajn này 
//         console.log(result);  // khi thành công 
        
//     } catch (error) {
//         console.error(error);  // khi thất bại
   
//     }finally{
//         console.log("hoàn tất việc sử lí Promise");
//     }
// }
// // ở trên là đã khởi tạo thành công bh sẽ thực thi hàm
// handleAsyncfunction();
 // kết quả : khi gọi hàm chjay nó sẽ đi đến chỗ khai báo hàm handleAsyncfunction và chạy cái try catch nó sẽ await ( đợi) cái testPromise khi testPromise làm xong sau 2s thì làm tiếp/.....

// còn với cách viết hàm thông thường thì async viết như sau :
// async  function handleAsyncfunction() {

// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('------------------------------------------------------------------------------------------------');

//  * 2. Sử dụng Async/Await để giải quyết các vấn đề bất đồng bộ ở buổi học số 20 thay vì sử dụng callback hoặc Promise.

// let fileData = null  
// console.log("B1: bắt đầu đọc file dữ liệu dữ kiến tốn khoảng 3s");

// console.log("B2:Giả lập đang đọc file dữ liệu, bắt đầu thực thi cái hàm readFileData ở trên....");


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

// // hướng dẫn về IIFE ( immediately Invoked function Expression)
// // Lưuu ý khi dùng IIFE thì phải có dấu chấm phẩy ở đầu và kết thúc của IiFE để tránh việc nó bị coi là tham số của một hàm khác
// // https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// // IIFE là gì nó là: ta không cần phải khai báo , khai báo xong r gọi hàm để chjay nữa mà ta khai báo vs chạy luôn
// console.log('huyle'); // neeus ta khoong cos daaus ; ở đây là nó sai liền , xóa đi là thấy , nó sẽ hiểu cái đoạn ở dưới là tham số của cái khác

// (async() => {
//      try {
//         const filedata = await readFileData();
//         console.log('B4: kết thúc quá trình đọc file dữ liệu với Dâta nhận được là : ', fileData);
        
//      } catch (error) {
//         console.error("B4: kết thúc quá trình đọc file dữ liệu với Dâta nhận được là : ", error);
        
//      }finally{
//         console.log("B5: ket thuc qua trinh doc file dữ liệu");
//      }
// })();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  * 3. Ví dụ thực tế dễ hiểu và ngắn gọn trong việc sử dụng Async/Await để xử lí các Apis bất đồng bộ.
// const getlistPokemon = async(limit = 10) => {
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {method : 'GET'});
//         const data_pokemon = await response.json(); // đa phần các dự án thực tế đã chuyển qua dùng Axios để ko cần phải gọi 2 bước kiểu await này nữa    
//         console.log('dữ liêu pokemon thu được là :', data_pokemon);
        
//     } catch (error) {
//         console.error('Error:', error);
        
//     }finally{
//         console.log('đã hoàn thành bước lấy ra danh sách pokemon dưới dạng async/await');
//     }

// }
// // thực thi hàm 
// getlistPokemon(2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('------------------------------------------------------------------------------------------------');
// dùng Axios 
const axios = require('axios');

const getlistPokemon2 = async (limit = 10) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        console.log('Danh sách Pokemon thu được khi dùng axiosaxios là: ', response.data);  
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Đã hoàn thành bước lấy ra danh sách pokemon dưới dạng async/await');
    }
};

// Thực thi hàm 
getlistPokemon2(2);

//  * 4. vấn đề Async/Await Hell là gì? Có giống CallBack hell hay Promise hell? hay không
// Ví dụ đơn giản như trong vòng try catch dưới đây ( gọi là await tuần tự), có 5 cái công việc, giải sử chúng nó có nhiệm vụ riêng biệt không hề liên quan đến nhau , mà theo cách gọi như trên học thì nó sẽ gây ảnh hưởng về hiệu suất
// bởi vì chung nó phải chờ nhau chứ không chạy cùng lúc , => Async/Await hell là cách giải quyết
try {
    await CongViec1();  // Job 1 này chạy
    await CongViec2(); // Job 2 phải chờ job 1 hoàn thành
    await CongViec3();  // job 3 phải chờ job2 và 1 hoàn thành
    await CongViec4();   // job 4 phải chờ job 3,2,1 hoàn thành
    await CongViec5();  // job 5 phải chờ job 4,3,2,1 hoàn thành
} catch (error) {
    console.log('Error:', error);
    
}

// cách khắc phục là : => chỉ nên dùng await tuần tự nếu tác vụ sau bị phụ thuộc vào kết quả của tác vụ trước
// => Nếu không thì nên dùng Promise.all để chạy song song khi các tác vụ không phụ thuộc nhau 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
