// function hoclai () {
//     console.log("hoc test lại bài học");
// }

// function hooclaicallback () {
//     console.log("hoc lại lần2");
// }


// hoclai();
// hooclaicallback();

// ví dụ 2 F88
function onlai (value) {
    if (typeof value === "function") {
        value("nội dung là z");
    }
}

function onlai2 (value2) {
    console.log("ây da :", value2);
}

onlai(onlai2);
console.log('---------------------------------------------------------------------------------------');

// ví dụ 3 :
function onlailannua (valuekey) {
    setTimeout(() => {
        console.log("lấy tiền truoc");
        valuekey();
    }, 1000)
}

function onlailannua2 ( ) {
    console.log("rôi mua đồ");
}

onlailannua(onlailannua2);

