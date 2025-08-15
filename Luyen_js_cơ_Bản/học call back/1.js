function mycallback (param) {
    if ( typeof param === 'function') {
      param('học lập trìnhtrình')
    }
  }
  
  function callback(value) {
      console.log('value:', value);
      
  }
  mycallback(callback);
  // cách thức hoạt động như sau khi ta run :  mycallback(callback); thì hàm callback dc truyền vào mycallback mà mycallback lại có tham số là param
  // suy ra callback = param ( là 1 hàm), 
  // tiếp theo nó ktra câu lệnh if thì nos thấy callback đúng là 1 function nên nó sẽ gọi  param('học lập trìnhtrình') mà param = callback suy ra callback =  học lập trìnhtrình
  // tiếp theo nó thực hiện hàm callback ('học lập trìnhtrình) mà ở đây ta truyền đối số value suy ra value = học lập trìnhtrình, 
  // từ đó kết quả dc là : value " học lập trìnhtrình"
  console.log("--------------------------------------------------------------------------------------");
  // vd 2 : hàm callback được sdung chủ yếu để xử lí bất đôngf bộ

  // ở bước 1 này ta đang xử lí bị bất đồng bộ đáng lẽ là phải lấy tiền trước rồi mới mua đồ , nhưng khi ta setTimeout bị delay thì nó lại mua đồ trc trong khi chưa lấy tiền
//   // bây giờ ta dùng call back để xử lí bất đôngf bộ 
//   function program1 (callback) {
//     setTimeout(() => {
//         console.log("lấy tiền");
//     }, 1000)
//   } 

//   function program2 () {
//     console.log("rôi mua đồ");
//   } 
//  program1();
//  program2();
//  console.log("--------------------------------------------------------------------------------------");
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ở bước 2 này ta sẽ sử lí bất đồng bộ để ta lấy dc tiền r mới đi mua đồ

function program1 (callback) {
    setTimeout(() => {
        console.log("lấy tiền");
        callback();
    }, 1000)
  } 

  function program2 () {
    console.log("rôi mua đồ");
  } 
 program1(program2); // giải thích như sau : khi ta chạy dòng này thì nó sẽ chạy hàm program1 trước và nó bị delay 2s sau khi delay nó sẽ gọi hàm dc callback(); mà hàm 
 // callback ta truyền vào là hàm program2 như thế ta đã giải quyết dc chờ lấy tiền xog mới đi mua đồ

 console.log("--------------------------------------------------------------------------------------");

 // khi ta goji  program1(program2); maf trong program1 lại truyền vào callback suy ra program2 = callback
 // đến bước nó sét setTimeout sau 2 dây nó log ra chữ lấy tiền r thực hiện hàm callback mà callback lại bằng program2 nên:
 // nó sẽ gọi hàm program2 bên dưới ra và log ra rôi mua đồ