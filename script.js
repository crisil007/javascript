
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
for(let i=1;i<4;i++){
box=box+`

<div class="boxes pt-3">
<div class="p-3">${(data[i].title).slice(0,30)+"..."}</div>
<img src=${data[i].image} class="pt-5">
<div class="p-3 text-center">${(data[i].description).slice(0,30)+"..."}</div>
<div class="pt-3 text-center">${"$"+(data[i].price)}</div>
<button id="btn" onclick=loadData(${data[i].id})> hello</button>
</div>




`
}
for(let i=4;i<7;i++){
    box=box+`
    
    <div class="boxes pt-3">
    <div class="p-3">${(data[i].title).slice(0,30)+"..."}</div>
    <img src=${data[i].image} class="pt-5">
    <div class="p-3 text-center">${(data[i].description).slice(0,30)+"..."}</div>
    <div class="pt-3 text-center">${"$"+(data[i].price)}</div>
    <button id="btn" onclick=loadData(${data[i].id})> hello</button>
    </div>
    
    
    
    
    `
    }
    for(let i=9;i<14;i++){
        box=box+`
        
        <div class="boxes pt-3">
        <div class="p-3">${(data[i].title).slice(0,30)+"..."}</div>
        <img src=${data[i].image} class="pt-5">
        <div class="p-3 text-center">${(data[i].description).slice(0,30)+"..."}</div>
        <div class="text-center">${"$"+(data[i].price)}</div>
        <button id="btn" onclick=loadData(${data[i].id})> View More</button>
        </div>
        
        
        
        
        `
        }
console.log("box:",box)
products.innerHTML=box;
   
}
}
}
function loadData(id){
    console.log("button clicked")
    console.log(id)
}