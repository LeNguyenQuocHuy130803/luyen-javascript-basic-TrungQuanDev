// API -> aplication programing interface : hiểu đơn giản nó là 1 cổng giao tiếp giữa các phần mêm
// vs ông be ổng viết phần mềmm của ổng băng php hay nodejs... ổng mang theo csdl và để ông khác giao tiếp dc vs ông be này thì ông be sẽ mở ra các API đơn giản chỉ là các URL 
// url có thể là cái trang gì đó .com và từ trang đố trả dlieu về cho mình và hiển thị ra gd cho user

// back-end - cho ra một API(URL) - Dùng fetch để gọi lên và lấy dlieu - sẽ nhận dc dlieu dạng JSON /XML - dùng JSON.parse - để lấy dlieu trả về qua này trở thanh dạng Js types - 
// sau đó mình lọc qua hay làm cái gì đó - rồi render ra gdien người dùng với HTMLL 

// var apipost = ('https://jsonplaceholder.typicode.com/comments');

// fetch (apipost)
//     .then((rawResponse) => {
//         return rawResponse.json();  // đến đây dlieu đang ở dạng steam và qua câu lệnh .JSON này nó sẽ trở thành dạng json object
//     })

//     .then((post_api) => {  // sau đó tiếp tục tự dạng đó then này 1 lần nưac để lấy dâta
//         // console.log(post_api);
//         // vd ở đây sau khi then lần 2 ta thu dc dlieu như sau :
//         // [
//         //     { "name": "Leanne Graham", "body": "Lorem ipsum dolor sit amet." },
//         //     { "name": "Ervin Howell", "body": "Consectetur adipiscing elit." }
//         //   ]

//         var html = post_api.map((post_huylam) => {  // ở trên dlieu đang fetch ra ở dạng array mà để làm việc vs array ta dùng map để đi qua hết lần lượt các pthu trong mảng , và biển đổi nó thành dlieu HTML thì chỉ có thể dùng .map
//             return `<li>
//             <h2>${post_huylam.name}</h2>
//             <p>${post_huylam.body}</p>
//             </li>`;
//             // sau khi dùng h2 và P ta sẽ thu dc dlieu giả sử như sau :
//             // [
//             //     "<li><h2>Leanne Graham</h2><p>Lorem ipsum dolor sit amet.</p></li>",
//             //     "<li><h2>Ervin Howell</h2><p>Consectetur adipiscing elit.</p></li>"
//             //   ]

//         })
// console.log(html);// thử xem log để bt đến đây nó ra gì rồirồi

//         var htmls = html.join(''); // gộp all phtu thành 1 chuỗi html vì  trình duyệt không thể hiển thị một mảng HTML, nó chỉ hiểu một chuỗi  [li,li,li.....] nên phải dùng jion
//         // console.log(htmls);
        
//         // vì dùng hàm map nên ta nhận về lại một mảng tương ứng với số phần tử bằng vs số phtu của thg apipost nhưng nó lại
//         // trả về nhưbg phần tử đó dạng chuỗi trong h2 và p nên phải dùng .join('') để map thành một chuỗi
//         document.getElementById('post_html').innerHTML = htmls;  // khi dùng innerHTML ghi đè nội dùng rỗng đã tạo vs id post_html bên file html

//     })
//     .catch(error => { // nếu muốn udngf trg hợp này thì thử để link sai hoặc trang cung cấp đó bị sập...
//         console.log('đã có lỗi sai hay gì đó',error);
        
//     })
//     .finally(() => {
//         console.log('kết thuc qua trinh than cacth finnallyfinnally');
        
//     })


// var getListPokemon =('https://pokeapi.co/api/v2/pokemon?')
//     // thg fetch API nó  sẽ trả về sẵn 1 Promise rồi, nên không cần phải return new Promise như ở trên nữa
//     fetch(getListPokemon)  // khoong cần phải dùng return new Promise((resolve, reject) , vì trong fetch nó chưa sẵn cái resolve và reject rồi
//     // trong cái fetch này truyền vào 1 cái string literal : `` hoac dau " "
//         .then((rawResponse) => {
//             console.log(' du lieu dau ra dang rawResponse', rawResponse);

//             // ở bước này nó sẽ trả về dlieu ( respow cho người dùng đọc dạng raw = stream rất khí đọc ), muốn lấy dc data cho user dễ đọc hiểu hơn thì phải thông qua
//             // rawResponse.json để chuyển nó từ dạng raw sang dạng json ( có trong chat có lưu trữ lại r ) 
//             // mà rawResponse.json lại tiếp tục trả về dạng Promise nên chúng ta phải .then() một lần nữa để lấy dc dlieu ra. 
//             // Đây là kiểu Primise Hell mà ta sẽ nhắc đến ở phần 4 bên dưới 
//             return rawResponse.json()
//             .then(pokemon => {
//                 console.log('danh sach pokemon', pokemon);
//             })
            
//         })
//         .catch((error) => {
//             onsole.log('co loi khi getlistPokemon :', error);
//         })
//         .finally(() => {
          
//             console.log('ket thuc hanh dong getListPokemon ta la finally');
//         })

/////////////////////////////////////////////////////////////////////////////////////////////////////
const  api_point = async () => {
    let call_api = await fetch('https://jsonplaceholder.typicode.com/comments');
    let full_data = await call_api.json();
    return full_data;
}
api_point()
.then((api_huyle) => {
    console.log('lay dlieu duoc la:', api_huyle);
    
})


