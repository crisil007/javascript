
// let str = "hello";
// let strLength = str.length;
// console.log('length : ', strLength)
// //array
// let a = 10;
// let arr=[10,20,30,40,50]
// console.log('arr : ',arr)
// console.log('typeof arr : ',typeof arr)

let obj = {
    firstname: "john",
    secondname: "pope",
    address:{
        city:'city',
        street:'street'
    },
    hobbies:['dance,gaming,']
}



console.log("obj :",obj)
console.log("firstname :",obj.firstname)
console.log("address :",obj.address)

obj.name="crisil"
console.log("obj.name :",obj.name)


for( let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}




function printHello(){
console.log("hello world");

}
printHello();



function func4(abc,wer){
    console.log("abc :", abc)
    console.log("wer:",wer)

}



func4(200,300);
const func3 = () => {
    console.log("anonymous")

}
func3();


// call by value
function update(a){
    a=30;
    console.log("updated value:",a);

}
let a=20;
console.log("initialvalue:",a)
update(a);
console.log("after:",a)

// 

// call by reference

function updatearr(arr){
    arr[2]=49;
    arr[1]=90;
    console.log("updated:",arr)

}
let arr=[2,4,5,7,8]
console.log("initial:",arr)

updatearr(arr)
console.log("final:",arr)









// function putZero(value) {
//     return value < 10 ? "0" + value:value;
// } 
// function show(){
//     let dt =new Date()
//     console.log("dt:",dt);


//     let hours=dt.getHours()
//     console.log("hours:",hours)

//     let ampm=hours<8? "am":"pm";
//     console.log("ampm:",ampm)

//     let time = document.getElementById("time")
//     console.log("time:",time)

//     time.innerHTML = putZero(hours) + ":" + putZero(dt.getMinutes())+ ":"+ putZero(dt.getSeconds());

// setTimeout(show,1000)
// }
// show();


// let btn = document.getElementById("btn")
// console.log("btn:",btn)


// spread operator
{
    let arr= [1,2,3,4,5];
    console.log("arr:",arr);
    

    let arr1=[...arr,6,7,8,9];
    console.log("arr1:",arr1)


    let obj={
        name:"crisil",
        place:"ernakulam",
    }
    console.log("obj:",obj);
    let obj1={...obj,adress:"my address"}
    console.log("obj1:",obj1)
}










