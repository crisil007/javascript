
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
        <button id="btn" onclick=handleClick(${data[i].id})> View More</button>
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



function  handleClick(id){
    console.log("button clicked");
    console.log("button clicked id :",id)
    window.location.href =`view.html?id=${id}`
    return;
}

function loadedproducts() {
    console.log("loading....")

    let location = window.location;
    console.log("location", location);

    let querystring = location.search;
    console.log("querystring", querystring);


    let urlParams = new URLSearchParams(querystring);
    console.log("url", urlParams);

    let id = urlParams.get("id");
    console.log("id ", id);


    let xhr = new XMLHttpRequest();

    xhr.open("get", `https://fakestoreapi.com/products/${id} `)

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log("status:", xhr.status);

            if (xhr.status === 200) {
                console.log("success");

                let userData = xhr.response;
                console.log("userData:",userData);

                let parsed_userData = JSON.parse (userData);
                console.log("parsed_userData",parsed_userData);


                let load = document.getElementById('loadeditems-title');
                console.log("load",load);
                let load1 = document.getElementById('loadeditems-description');
                let load2 = document.getElementById('loadeditems-image');
                let load3 = document.getElementById('loadeditems-price');
                let load4 = document.getElementById('loadeditems-catogory');
                let load5 = document.getElementById('loadeditems-rating-rate');
                let load6 = document.getElementById('loadeditems-rating-count');
                // let load6 = document.getElementById('loadeditems1');
                


                // load.value =.title;
                
                    load.innerHTML = parsed_userData.title; 
                    load1.innerHTML = parsed_userData.description; 
                    load2.innerHTML =`<img src="${parsed_userData.image}" style="width:400px; height:400px;">`
                    load3.innerHTML =`$ ${parsed_userData.price}  `;
                    load4.innerHTML=parsed_userData.category;
                    load5.innerHTML=` ${parsed_userData.rating.rate} rating`;
                    load6.innerHTML=` ${parsed_userData.rating.count} count`;

                
                    console.log("Element with id 'loadeditems' not found");
                

            }else{
                alert("failed to load")
            }
            
            
        }
    }
}
