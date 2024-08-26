async function Datas() {
    try {
        let datas = await fetch('http://localhost:3000/datas')

        let parsed_datas = await datas.json();
        console.log("datas :", parsed_datas);

        let data = document.getElementById('datacontainer');

        let row = '';
        for (let i = 0; i < parsed_datas.length; i++) {
            row = row + `
             <div id="boxes">
                <div class="pb-3"><img src="${parsed_datas[i].image}"></div>
                <div>${(parsed_datas[i].title).slice(0,15)+"...."}</div>
                <div>${(parsed_datas[i].description).slice(0,15)+"...."}</div>
                <div class="link-danger pt-2">$${parsed_datas[i].price}</div>
             </div>`
        }
        data.innerHTML = row;
        console.log("datacontainer :",data);

    }
    catch(error){
        console.log("error",error)
    }
    
} Datas();