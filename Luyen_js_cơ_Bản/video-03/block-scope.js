//  sự khác nhau về scope = phạm vi giữa let và const và var ( thg thì phần let và const nó sẽ gần
//  giống nhau vê scope còn var sẽ khác nhau )
// scope dc xác định bởi dấu ngoặc {} , code dc viết ở trong {} sẽ được gọi là scope

//  bây giờ ta sẽ vd tạo scope bằng 1 arrow function

const testScope = () => { 
    {
        var scopeVar = 'lê huy -var';
        let scopeLet = 'lê huy -let';
        const scopeConst = 'lê huy -const';
        console.log('scopeVar:', scopeVar);
        console.log('scopeLet:', scopeLet);
        console.log('scopeConst:', scopeConst);
    }
}
testScope(); // đây là cách để ta chạy cái function trên 

////////////////////////////////////// với dòng code trên khi ta chạy : node block-scope.js thì nos vẫn chạy cho ta như bình thường /////////////////////////////////////////////


//  ví dụ 2 : như trên nhưng đổi 1 tí

// const testScope2 = () => { 
//     {
//         var scopeVar = 'lê huy -var';
//         let scopeLet = 'lê huy -let';
//         const scopeConst = 'lê huy -const';
        
//     }
//     console.log('scopeVar:', scopeVar);
//         console.log('scopeLet:', scopeLet);
//         console.log('scopeConst:', scopeConst);
// }
// testScope2();

////////////////////////////////////// với dòng bị comment trên khi ta chạy : node block-scope.js thì nó chỉ chạy được ở var vì var nos ko nghiệm ngoặc về cái vẫn để scope này
// còn let và const thì khác nó phải cùng dc log trong cùng 1 {}, ngoài phạm vi của block scope thì nó ngỏm /////////////////////////////////////////////
