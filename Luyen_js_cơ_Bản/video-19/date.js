// làm rất nhiều
/**
 js cung cấp cho ta 1 đối tượng build-in ( tích hợp sẵn ) là Date để làm việc với ngày tháng và thời gian
 Đối tượng Date này có thể thao tác rất nhiều với thời gian , vd : tạo , định dạng ngày tháng năm , thực hiện các phép toán với thời gian...
 */

 // học phần 1 : có khá nhiều cách để khởi tạo 1 đối tượng Date trong JS với những sự khác nhau như sau :
 // cách 1 :  khởi tạo Date không có tham số : Tạo đối tượng Date với ngày và thời gian tại thời điểm hiện tại.
 const now = new Date();  // cái này là lấy tại thời điểm hiện tại ta ko truywwnf vào
 console.log(`thoi diem code bai nay la : `, now);// sử dụng để thao tác lưu vào csdl , thao tác với APiAPi
 console.log('dua cai thoi gian nay ve dạng chuỗi cho dễ nhìn : ', now.toLocaleString()); // sử dụng cách này để hiển thị cho người dùng web họ xem
 console.log("kdl cua dang Date laf :", typeof now);
 console.log('-----------------------------------------------------------------------------');
 
 // cách 2 : với chuỗi ngày tháng (JSO hoặc cách định dạng khác)
  const specialDate = new Date ("2025-02-11 11:44:00") // cái này là lấy cái ta truyền vào yy-MM-ĐĐ
  console.log("casi ta truyen vao :", specialDate.toLocaleString());
  console.log('kdl cua dang Date laf :', typeof specialDate);
  console.log('-----------------------------------------------------------------------------');

  // cách 3 : với năm, tháng, ngày , giờ, phút, giây 
  const specialDate2 = new Date (2025, 2, 11, 11, 44, 0) // ta thì có 12 tháng từ 1 đến 12 nhưng trong lâp trình này nó chạy theo từ 0-11 tức là 0 = tháng 1...Lưu ý 
  console.log('cai ta truyen vao :', specialDate2.toLocaleString());
  console.log('kdl cua dang Date laf :', typeof specialDate2);
  console.log('-----------------------------------------------------------------------------');

  // cách 4 : dùng dấu thời gian ( timestamp) :số mili-giây kể từ ngày 1/1/1970 00:00:00 UTC
const stime = new Date(1641013200000); 
console.log("'time stamp", stime.toLocaleString());
console.log('kdl cua dang Date laf :', typeof stime);
console.log('-----------------------------------------------------------------------------');

// -----------------------------
// Học phần 2 : cách lấy từng phần dữ liệu cụ thể từ 1 đối tượng Date
const currentDate = new Date();
console.log('currentdate FullYear:', currentDate.getFullYear()); // lấy năm
console.log('currentdate Month:', currentDate.getMonth()); // lấy tháng ( 0-11)
console.log('currentdate Date:', currentDate.getDate());// lấy ngày (1-31)

console.log('currentdate Hours:', currentDate.getHours()); // lấy giờ (0-23)
console.log('currentdate Minutes:', currentDate.getMinutes()); // lấy phút (0-59)
console.log('currentdate Seconds:', currentDate.getSeconds()); // lấy giây (0-59)

console.log('currentdate DayOfWeek:', currentDate.getDay()); // lấy ngày trong tuần (0-6 từ cnhat đến thứ 7)
console.log("Before update currenDate: ", currentDate.toLocaleString());
console.log('-----------------------------------------------------------------------------');

// Học phần 3 : cập nhật lại các thành phần của 1 đối tượng Date ( đổi lại theo ngày, tháng , năm ta mong muốn)
currentDate.setFullYear(2003); // đổi lại theo ý ta muốn, cũng như ngày tháng....
currentDate.setMonth(2);
currentDate.setDate(15); // đổi ngày
currentDate.setHours(12);
currentDate.setMinutes(30);
currentDate.setSeconds(45);
  
console.log("After update currenDate: ", currentDate.toLocaleString());
console.log('-----------------------------------------------------------------------------');


// Học phần 4 : tính toasn cơ bản ngày tháng với Date
// ví dụ 1 : tính toán khoảng cách giữa hai ngày
const date = new Date ("2015-02-11 "); // tạo 1 đối tượng Date
const date2 = new Date ("2015-02-16 "); // tạo 1 đối tượng Date
console.log('date - date2:', date2 - date); // trừ nó sẽ ra kết quả dạng milisecond
const diffdate = Math.ceil( date2 -date) / (1000 *60 *60 * 24); // 86400000 mili-giaay tương đương 1 ngày ( đổi từ milisecond ra nên nhân như z ra dc 5)
console.log('diffdate la :', diffdate);
console.log('----------------------------------------------------------------');

// ví dụ 2 : thêm hoặc bớt khoảng thời gian
const date3 = new Date (); 
date3.setDate(date3.getDate() + 5); // thêm 1 ngày
console.log('date3 cong them la:', date3.toLocaleString());

// học phần 5 : định dạng dữ liệu Object Date thành chuỗi String
const formatDate = new Date()
// toISOString() : chuỗi định dạng ISO ( định dạng này phổ biến khi làm việc với API Back-end)
console.log('nó đang ở dạng object :', formatDate);
console.log('luc ban dau:', typeof formatDate);
 const format = formatDate.toISOString(); // phải chuyển đổi vì nếu muốn lưu vào DB thì phải là ở dạng String nhưng ở trên là dạng Object thì phải convert sang như này
 console.log('luc sau :',typeof format);
 console.log('----------------------------------------------------------------');


// toLocaleDateString() và toLocaleTimeString() : định dạng riêng ngày tháng hoặc thời gian theo ngôn ngữ người dùng ( tức là ta muốn lấy ngày thôi thì dùng toLocaleDateString còn giừo không thì toLocaleTimeString)
console.log('cái này là lấy cả 2 ngày và giờ: ', formatDate.toLocaleString()); // lấy ngày tháng
console.log('cái này là lấy ngày : ', formatDate.toLocaleDateString()); // lấy ngàyngày
console.log('cái này là lấy  giờ: ', formatDate.toLocaleTimeString()); // lấy giờ
console.log('----------------------------------------------------------------');

// toDateString() vaf toTimeString() : trả về ngày hoặc thời gian theo định dạng ngắn gọn cho người dùng đọcđọc
console.log('cái này ngắn gọn: ', formatDate.toDateString()); 
console.log('cái này lấy ngắn gọn : ', formatDate.toTimeString()); 

