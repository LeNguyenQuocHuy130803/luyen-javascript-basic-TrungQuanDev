//  rẩt hay
/**
 có khá nhiều Methods - Phương thức khí xử lí dữ liệu Object trong Jvascript
 dưới đây we sẽ tập trung vào những phương thức quan trong và được dùng nhiều trong thực TẾ.
 Phần 1 : create(), assign(), defineProperty(), defineProperties(),key(), values(), entries(), fromEntries(), getOwnPropertyDescriptor(),
 */

 // create() - tạo một object ( đối tượng) mới dựa trên 1 đối tượng cho trước làm nguyên mẫu - prototype
 // dưới đây person là đối tượng nguyên mẫu
 const person =  {
    greet() {
        console.log('Hello World');
    }
 };
 // bắt đầu tạo 1 đối tượng mới trungquandev dựa trên nguyên mẫu person ở trên
 const trungquandev = Object.create(person);// tạo ra 1 đối tượng trungquandev với person làm prototype. vì
 // vậy trungquandev sẽ kế thừa phương thức greet() từ person
 trungquandev.name = "TRUNGQUANDEV mot lap trinh vien"

 trungquandev.greet(); // Hello World
 console.log(trungquandev.name); // TRUNGQUANDEV mot lap trinh vien
 console.log('----------------------------------------------------------------');

 // Object.assign() - sao chép tất cả các thuộc tính của 1 hoac nhiều đối tượng nguồn ban đầu vào đối tượng đích.
 // kết quả trả về 1 đối tượng đích
 // - Nếu một thuộc tính của đối tượng đích đã tồn tại trong đối tượng đích thì nó sẽ được ghi đè lên ( cái sau ghi đề lên cái trc )
 // -Phương thức này sẽ làm thay đổi đối tượng đích ( nó sẽ thay đổi luôn cái gốc), không làm thay đổi đối tượng nguồn
 const object1 = {  // đây là đối tượng đích
    name: 'Trung Quang',
    age: 30,
    city: 'Ho Chi Minh',
    a : 10,
 };

 const object2 = { // đây là đối tượng nguồn
    age: 25,
    city: 'ba ri vung tau',
    adress : 'Ho Chi Minh',
 };

 const object0 = Object.assign(object1, object2);
 console.log('sau khi hợp thể ta được :',object0); // {name: 'Trung Quang', age: 25, city: 'ba ri vung tau', adress: 'Ho Chi Minh', a: 10}
 console.log('đối tượng đích đã bị thay đổi', object1); // đối tượng đích object1 đã bị thay đổi
 console.log('đối tượng nguồn không bị thay đổi:', object2); // nhưng đối tượng nguồn ko bị thay đổi
 console.log('kiếu dữ liệu là: ', typeof object0); // kiếu dữ liệu là: object
 console.log('----------------------------------------------------------------');

 // Object.defineProperty() - thêm hoặc sửa đổi 'MỘT' thuộc tính trên một đối tượng , và có thể kiểm soát chính xác hành vi của thuộc tính đó
 // dùng để đi làm là đưa cái property vào trong object để có dc thay đổi hay không....
 const obj1 = {};
 Object.defineProperty(obj1, 'name', { // thường thì ta sẽ yajo cũ như này : object1.name = Trung Quan nhưng bh ta làm qua defineProperty để ta quản lí nó
    value: 'Trung Quan',
    writable: false,  // false là ko cho phép chỉnh sửa hay thay đổi nếu đổi về true thì dc
 });
 console.log('log ra casi value owr treen:', obj1.name); // : Trung Quan
 obj1.name = 'Trung Quandev mot lap trinh vien'; // ko có tác dụng gì ko thể thay đổi dc vì ở trên ta đang ở false
 console.log('log ra value o treen:', obj1.name); // : Trung Quandev mot lap trinh vien
 console.log('----------------------------------------------------------------');
 
 // Object.defineProperties() - thêm hoặc sửa nhiều thuộc tính trên một đối tượng cùng 1 lúc , và có thể kiểm soát chính xác hành vi của thuộc tính đó.
 // dùng để đi làm là đưa cái property vào trong object để có dc thay đổi hay không, có cho phép liệt kê ( thể hiện trong vòng lặp ) hay không, có thể xóa hay không...
 const obj2 = {};
 Object.defineProperties(obj2, {
    firstName: {
        value: 'Le',
        writable: false, // // có thể thay đổi giá trị sau khi gán true
        enumerable: true, // Có thể liệt kê (hiện trong vòng lặp)
        configurable: false // Không thể xóa hoặc thay đổi thuộc tính
    },
    lastName: {
      value: 'huy',
      writable: true, // // có thể thay đổi giá trị sau khi gán true
      enumerable: true, // Có thể liệt kê (hiện trong vòng lặp)
      configurable: false // Không thể xóa hoặc thay đổi thuộc tính
  },
    age: {
        value: 23,
        writable: true,
        enumerable: true,
    },
    city: {
        value: 'Ho Chi Minh',
        writable: true,
        enumerable: true,
    },

 });

console.log('Log ra firstName:', obj2.firstName); // : Le
console.log('Log ra lastName:', obj2.lastName); // : huy
obj2.firstName = 'Le Nguyen Quoc Huy'; // ta gán cho cái value của first từ le thanh Le Nguyen Quoc Huy, nó ko thể gán dc vì writable ta đang để false
obj2.lastName = 'một lập trinhf viên quènquèn'; // ta gán cho cái value của lastName từ huy thành 1 lập trình viên quèn, có thể gán dc vì writable ta đang để true
console.log('Log ra firstName sau gán:', obj2.firstName); // : Le Nguyen Quoc Huy
console.log('Log ra lastName sau gán :', obj2.lastName); // : một lập trinhf viên quènquèn
console.log('----------------------------------------------------------------'); 

//** rất phổ biến, */ Object.keys() - trả về một mảng (array), chứa toàn bộ "tên" thuộc tính của một đối tượng
const obj3 = {
    firstName: 'Le',
    lastName: 'huy',
   a : 13,
   b : 8
};
console.log('Log ra keys của obj3:', Object.keys(obj3)); // ["firstName", "lastName", "age", "city", "a", "b"] // nó trả về ở dạng mảng
console.log('----------------------------------------------------------------');

// Object.values() - trả về một mảng (array), chứa toàn bộ "giá trị" thuộc tính của một đối tượng
const obj4 = {
   firstName: 'Le',
   lastName: 'huy',
   age: 23,
   city: 'Ho Chi Minh',
};
console.log('log ra value của object trên là :', Object.values(obj4)); // ["Le", "huy", 23, "Ho Chi Minh"] // nó trả về ở dạng mảng
console.log('----------------------------------------------------------------');

// Object.entries() - trả về một mảng (array), gồm các cặp [ley, value] của các thuộc tính, của một đối tượng
const obj5 = {
    firstName: 'Le',
    lastName: 'huy',
    age: 23,
    city: 'Ho Chi Minh',
};
console.log('log ra entries của object trên là :', Object.entries(obj5)); // [["firstName", "Le"], ["lastName", "huy"], ["age", 23], ["city", "Ho Chi Minh"]] // nó trả về ở dạng mảng cả key , value
 console.log('----------------------------------------------------------------');

 // Object.fromEntries() - chuyển đổi một "mảng" các cặp [key, value] thành đối tượng. ( ngược lại của Object.entries() )
 const obj6 = Object.fromEntries([
    ['firstName', 'Le'],
    ['lastName', 'huy'],
   ['a',13],
   ['b',8],
]);
console.log('log ra fromEntries của object trên là :', obj6); // {firstName: "Le", lastName: "huy", age: 23, city: "Ho Chi Minh"} // trả về dạng object
console.log('----------------------------------------------------------------'); 






