const changeStyle = ( ) => {
    document.getElementById('id01').style.color = "green";
    document.getElementById('id01').style.backgroundColor = "pink";
    document.getElementById('id01').style.fontSize = '60px';
}

// change đổi bóng đèn bật tắt
const setupBongDen = (action) => { // action là nhận vào 1 hành động bật hay tắt
    console.log(`Đã gọi setupBongDen với action: ${action}`);  // ghi dòng này để log ra xem khi mình bấm nút thì đèn nó đag ở trạng thái nàonào
    let imgBongDen = '../img/buld-off.png'; // mặc định laf bóng đèn đag tăts
    if (action === 'on') {
        imgBongDen= '../img/buld-on.png'
    }
    document.getElementById('bong-den').src = imgBongDen; // thay đổi hienhf ảnh trong HTML
}
