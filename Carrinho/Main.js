const tableBody = document.getElementById("tableBody")
const produto = document.getElementById("produto")
const quantidade = document.getElementById("quantidade")
const todoForm = document.getElementById("todoForm")
console.log(todoForm);
console.log(quantidade);

todoForm.addEventListener("submit", function (event) {
    event.preventDefault ();

    const { target } = event;
    addlista(produto.value , quantidade.value ) 
    
 })
    function addlista(produto, quantidade)
 {
     const list = {
         id: 1,
         product: produto,
         quant: quantidade
     }
 
     const lenght = getAllItems()
 
     lenght.forEach(element => {
         if(element.id > list.id)
         {
             list.id = element.id + 1
         }
         else{
             list.id += 1
         }
     });
 
 
     lenght.push(list)
 
     if(list) localStorage.setItem('lista2', JSON.stringify(lenght))
     acao()
 }
 function getAllItems()
{
    let todos = [];
    const todosStr = localStorage.getItem('lista2');
    if(todosStr) todos = JSON.parse(todosStr);
    return todos;
}
function acao()
{
    const lenght = getAllItems()

    tableBody.innerHTML = ""

    lenght.forEach(element => {
        tableBody.innerHTML +=`  
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.product}</td>
            <td>${element.quant}</td>
            <td><button onclick="deleteCell(${element.id})" class="btn btn-danger">Excluir</button></td>
            
        </tr>
        `
    });
}
function deleteCell(id)
{
    let list = getAllItems();
    list = list.filter(todos => todos.id != id);
    localStorage.setItem('lista2', JSON.stringify(list));
    f5Table()
}



window.onload = acao()