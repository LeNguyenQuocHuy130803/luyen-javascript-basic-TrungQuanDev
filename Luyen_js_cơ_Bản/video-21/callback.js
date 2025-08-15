// /**
//  bài học về Bất đồng bộ trong Javascript (   https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing

// Asynchronous,
// callback(callback hell) , 
// Promise(Promise Hell),
// Async/Await,
// Event Loop : giải thích js chạy như nào chjay như nào

//  - Video 21 này sẽ tập trung vào khai niệm callback và vấn đề callback hell
//  1. Callback là một hàm được truyền dưới dạng tham số vào một hàm khác và được gọi sau khi hàm kia ( là cái hàm khác đã nhắc đến)  thực hiện xong.
//  2. Sử dụng Callback để giải quyết vấn đề bất đồng bộ ở buổi học video-20
//  3. Ví dụ thực tế dễ hiểu tròn việc gọi các APIs bất đồng bộ để lấy dữ liệu theo thứ tự mong muốn
//  4. Callback Hell nghĩa là khi các hàm callback lồng nhau quá nhiều , dẫn đến việc maintain bảo trì code về sau rất khó khăn.
// */

// // 1. Callback là một hàm được truyền dưới dạng tham số vào một hàm khác và được gọi sau khi hàm kia ( là cái hàm khác đã nhắc đến)  thực hiện xong.
// /**
//  *   // đây là dòng comment về kdl của tham số truyền vào bên dưới
//  * @param {string} name 
//  * @param {function} callback 
//  */
// const greet = (name, callback) => { // function là hàm truyền vào tham số greet
//     console.log(`hello${name}`);
//     callback();
// }
// greet("lehuy", () => {
//     console.log('đưa ra dòng này sau khi dòng hello trên được thực hiện xong'); 
// })
// console.log("------------------------------------------------------------------------");

// // 2. Sử dụng Callback để giải quyết vấn đề bất đồng bộ ở buổi học video-20
// let fileData = null  // khơi tạo file của mik là null
// console.log("B1:bắt đầu đọc file dữ liệu dữ kiến tốn khoảng 3s");

// // bước 2 : khưởi tạo hàm và bắt đầu đọc file dữ liệu
// console.log("B2:Giả lập đang đọc file dữ liệu, bắt đầu thực thi cái hàm readFileData ở trên....");


// //bước 3 :  khởi tạo 1 hàm readFileData có nhiệm vụ là đọc file, giả lập rằng sẽ tốn 3s  để đọc
// const readFileData = (callback) => { // callback nafy cx ở dạng function như vd trên
//     setTimeout(() => {
//         console.log("B3: sau khi đọc file dữ liệu xong , gán dữ liệu đã đọc vào fileData bên dưới");
//        letlet fileData =" lê nguyễn quốc huy"   // tức là mình đọc cái file đó trong đó có dòng là lê nguyênx quốc huy thì đem nó ra và gán nó cho fileData    
//         callback(fileData);   // đây là bước truyền file Dâta vào trong hàm callback, fileData này nó đã có dữ liệu là : lê nguyễn quốc huy sau khi đã đọc xong r
//     },3000)
// }

// // thực thi hàm
// readFileData((fileData) => { // // run ham
// // B4 : in ra kết quả
// console.log('B4:kết thúc quá trình đọc file thành công với đata mình nhận được là : ', fileData);

// }); 


// cách thức hoạt động như sau :
// bước 1 vfa bước 2 thì nó vẫn log ra thông báo như thường
// sau khi xong bước 2 thì nó đến bước : const readFileData = (callback) =>... nhưng đây chỉ là bước khai báo hàm nó ko có chạy dc
// nó đi xuống dưới và gặp bước : readFileData(() => ..... ở đây nó thấy nó đang dùng () => {} là nó đang gọi cái hàm ở trên để chạy tức là nó đang dùng biện pháp callback function
// và nó quay lên bước const readFileData = (callback) => để chạy nó sẽ log ra thông báo : sau khi đojc file dữ liệu xong.... , và gán fileData = lê nguyễn quốc huy, đến bước 
//   callback(fileData);   nó sẽ gọi lại bước readFileData(() => {  .... để log ra thông báo : B4 : kết thúc quá trình.... và gán fileData = lê nguyễn quốc huy


//  3. Ví dụ thực tế dễ hiểu tròn việc gọi các APIs bất đồng bộ để lấy dữ liệu theo thứ tự mong muốn
// ( dùng cái này để lấy dlieu về server backend về theo mô hình client- sever)
// https://pokeapi.co/
// sử dụng API cũ XMLHttpRequest để ví dụ với việc ta đang code thuần Callback, chỉ cần học để năm squa việc gọi API thôi ko cần nhớ cái XMLHttpRequest này
// lưu ý : XMLHttpRequest chỉ có thể test trên trình duyệt , không thể test trên Nodejs
// nhớ cho kĩ ko chạy trong terminal dc chỉ chạy dc trên trình duyệt
const getlistPokemon = (apiEndpoint, callback ) => {
    const  requestAPI = new XMLHttpRequest();  // để gọi và tương tác với sever https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    requestAPI.open('GET', apiEndpoint);  // open để gọi API, vì bên pokeapi truyền ra nên mình phải dùm get để lê chỗ pokeapi lấy dlieu về
    requestAPI.onload = () => {
        // if dưới là nếu gọi API thành công 
        if (requestAPI.status >= 200 && requestAPI.status <= 300) { // vào đây xem cái giá trị 200 là gì : https://www.npmjs.com/package/http-status-codes
            const responseData = JSON.parse(requestAPI.responseText)   // dlieu tra veef cuar XMLHttpRequest sex qua responseText sau ddos chuyeenr dlieu ddos qua dajng JSON        
            callback(  responseData);  // gọi callback với responseData là dữ liệu đã lấy được
        }
    }
    requestAPI.send();  // send để gọi API
}
getlistPokemon('https://pokeapi.co/api/v2/pokemon/', (responseData) =>{ // / ghi dlieu vào ô trong ngoặc để truyênf vaò tham số mình đã gọi ở trên apiEndpoin, callback
console.log('DỮ LIEU RESPONSE DATA LẤY DC LÀ :', responseData); // ddaay laf gọi API để lấy dc dlieu trong consolo.log rồi
// bây giờ dùng cách này để hiển thị dữ liệu đã lấy được ra ngoài màn hình chính
document.getElementById("listPokemon").innerHTML = responseData.results.map(pokeke =>
    {
        return `<li>${pokeke.name}</li>`;
        // nếu không dùng return ta có thể dùng như sau :
        // document.getElementById("listPokemon").innerHTML = responseData.results.map(pokeke => `<li>${pokeke.name}</li>`).join("");
    }).join("");

})    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. callback hell nghĩa là khi các hàm callback lồng nhau quá nhiều , dẫn đến việc maintain bảo trì code về sau rấ khó khăn
// vd nhé : ta lấy dc dsach 1 đống spham  và mỗi spham sẽ có 1 id riêng , muốn vào đúng cái spham thì phải dựa theo cái id của sp để vào để gọi API thì hơi rườm ra

// đây là vd để lấy thông tin cửa 1 pokemon cụ thể 
const getlistPokemon_Detail = ( apiEndpoint2, callback2 ) => {
    const requestProducts = new XMLHttpRequest();
    requestProducts.open('GET', apiEndpoint2);
    requestProducts.onload = () => {
        if (requestProducts.status >= 200 && requestProducts.status <= 300) {
            const responseData2 = JSON.parse(requestProducts.responseText);
            callback2(responseData2);
        }
        }
        requestProducts.send();
    }

    getlistPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (responseData) =>{ // / ghi dlieu vào ô trong ngoặc để truyênf vaò tham số mình đã gọi ở trên apiEndpoin, callback
        console.log('DỮ LIEU RESPONSE DATA LẤY DC LÀ :', responseData); // ddaay laf gọi API để lấy dc dlieu trong consolo.log rồi
        // bây giờ dùng cách này để hiển thị dữ liệu đã lấy được ra ngoài màn hình chính
        document.getElementById("listPokemon").innerHTML = responseData.results.map(pokeke =>
            {
                return `<li>${pokeke.name}</li>`;
                // nếu không dùng return ta có thể dùng như sau :
                // document.getElementById("listPokemon").innerHTML = responseData.results.map(pokeke => `<li>${pokeke.name}</li>`).join("");
            }).join("");
        
            // const charmander = responseData.results.find(pokeke => pokeke.name === 'Charmander');// đây là cách 1
            const charmander = responseData.results.find(pokeke => {
    
                return pokeke.name === 'charmander'});// đây là cách 2 dùng vs return
                console.log(charmander); // mình ktra trong console log thử đã lấy dc thg Charmander chưachưa

                if (charmander) {
                    getlistPokemon_Detail(charmander.url, (lay_thongtin_lizadonlizadon) =>{   // // cũng nhập vào tham số apiEndpoint2 nó sẽ bằng vs charmander
                        console.log("lay thông tin con lizadon", lay_thongtin_lizadonlizadon);
                        document.getElementById("pokemon_detaildetail").innerHTML = JSON.stringify(lay_thongtin_lizadonlizadon);

                        // ví dụ đến đây lại muốn tiếp tục lấy tìm xem pokemon này thg xuât hiện ở đâu thì lại phải tiếp tục lông nó tròn getlistPokemon_Detail đến charmander rời mơis đến việc tìm vị trí nó xuất hiện
                        if(lay_thongtin_lizadonlizadon.location_area_encounters) {
                            getPokemonLocation();
                            // vuêts hàm ở đây
                            getPokemonLocationDetail();
                            ///

                        }
                    } )  
                }

        })