const thaydoi = () => {
    document.querySelector('.huyle').style.color = "green";
    document.querySelector('.huyle').style.backgroundColor = "pink";
}

const changeColor = () => {
    document.querySelectorAll('.item').forEach(huythaydoi => {
        huythaydoi.style.color = "red";
        huythaydoi.style.backgroundColor = "yellow";
    })
}

const setupBongDen = (action) => {
    const bongdennn = document.querySelector('.bong-den'); // Lấy phần tử <img> có class "bong-den"
    let bongden = '../img/bulb-off.png'; // Đường dẫn mặc định là bóng đèn tắt

    if (action === 'on') {
        bongden = '../img/bulb-on.png'; // Đổi đường dẫn khi action là "on"
    }
    
    bongdennn.src = bongden; // Cập nhật thuộc tính src của <img>

    // phải cập nhật vì Khi nhấn nút "Turn On Light", muốn hiển thị hình ảnh bóng đèn bật  cần thay đổi thuộc tính src của thẻ <img> sang đường dẫn img/bulb-on.png.
};
