// let fileData = null;
// console.log(`B1:bat dau doc du lieu tuq file`);

// console.log(`B2:bat dau doc du lieu tuq file cost 3s`);

// const readFile = () => {
//     setTimeout(() => {
//         console.log(`B3: doc du lieu tuq file cost 3s va  gan`);
//         fileData = " the first javascript file";
//         // callbackhell(fileData);
//     },3000)
// }
// readFile();

// console.log(`B4:doc xong dlieu va gan vao day`, fileData);

// khac phuc bang cach goi callback đã hoàn thành oke rr
// let fileData = null;
// console.log(`B1:bat dau doc du lieu tuq file`);

// console.log(`B2:bat dau doc du lieu tuq file cost 3s`);

// const readFile = (callback_hell) => {
//     setTimeout(() => {
//         console.log(`B3: doc du lieu tuq file cost 3s va  gan`);
//         fileData = " the first javascript file";
//         callback_hell(fileData);
//     },3000)
// }
// readFile( ()=> {

//     console.log(`B4:doc xong dlieu va gan vao day :`, fileData);
// });

// vd 2 : callback f8
const greet1 = (param) => {
    if ( typeof param === 'function') {
        param(`hello le nguyen quoc huy`)
    }
}

const callback = (value) => {
    console.log('succesful thu duoc laf : ', value);  
}

greet1(callback);

// vd3:
// const greet = () => {
//     setTimeout(() => {
//         console.log(`chnage moy before callback`);
        
//     },2000)
// }

// function callback () {
//     console.log(`after callback successfull`);
    
// }

// greet();
// callback();

// sử dụng call back để sử lí vd3 :
// const greet = (param) => {
//     setTimeout(() => {
//         console.log(`chnage moy before callback`);
//         param ();
//     },2000)
// }

// function callback1 () {
//     console.log(`after callback successfull`);
    
// }

// greet(callback1);
