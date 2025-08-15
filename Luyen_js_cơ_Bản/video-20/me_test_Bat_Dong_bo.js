// // thỏa dkien tức là ko xảy ra bất đồng bộ
// function dongbo () {
//     console.log("tra tien");
    
// }

// function dongbo2 () {
//     console.log("mua do");
    
// }
// dongbo();
// dongbo2();

// xảy ra việc bất đồng bộ khi có setTimeout

// setTimeout(function () {
//     console.log("tra tien");
// },2000)

// function dongbo2 () {
//     console.log("mua do");
    
// }
// dongbo2();

// xử lí cái bất đồng bộ như sau : dùng callback

const settime = (param) => {
    setTimeout(function () {
        console.log("tra tien");
        param();
    },2000)
}

function dongbo2 () {
    console.log(`mua do `); 
}

settime(dongbo2);
