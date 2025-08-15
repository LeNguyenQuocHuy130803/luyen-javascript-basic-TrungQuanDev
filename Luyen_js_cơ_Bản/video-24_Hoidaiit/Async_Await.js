const getNewTodo = async () => {
let response = await fetch('https://jsonplaceholder.typicode.com/todos/5');
let data = await response.json();
// console.log("in ra data", data);
return data;
}

// console.log(getNewTodo()); // nếu ko có () thì nó chỉ đang tham chiếu chư ko log ra
getNewTodo()
.then((datas) => {
    console.log("in ra data", datas);
})