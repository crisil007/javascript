
function loadDatas(){
let xhr = new XMLHttpRequest()
console.log("req :",xhr);
xhr.open('get',"https://fakestoreapi.com/products");
xhr.send();

xhr.onreadystatechange = function () {
    console.log("readystate :", xhr.readyState);
    if (xhr.readyState === 4) {
        console.log("status :",xhr.status);
    }
    if (xhr.status === 200) {
        let response = xhr.response;
        console.log("response :", response);
        
        console.log("typeof(response:",typeof(response))


        let data =JSON.parse(response);
        console.log(data);

        let products=document.getElementById("products")
        console.log("products:",products)

let box=''
for(let i=0;i<data.length;i++){
box=box+`

<div class="boxes">
<div>${data[i].title}</div>

</div>




`
}
console.log("box:",box)
products.innerHTML=box;
   
}
}
}