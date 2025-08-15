// Bitwise operators : là toán tử dùng để thực hiện các phép toán bit trong hệ nhị phân
// https://vi.wikipedia.org/wiki/Ph%C3%A9p_to%C3%A1n_thao_t%C3%A1c_bit

let x = 5; // 0101 hê nhị phân
let y = 3; // 0011 hệ nhị phân

console.log(x & y); // AND : 0001 ( nhị phân) và 1 (thập phân)
console.log(x | y); // OR : 0111 (7)
console.log(x ^ y); // XOR : 0110 (6)
console.log(~x); //NOT : 1010 (-6)
console.log(x << 1);
console.log(x >> 1); 

