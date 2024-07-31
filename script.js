
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




//array methhods


{
    let a=[1,2,3,4,5]
    let result = a.forEach((item)=>{
        console.log("item:",item)
        return item > 30

    });
    console.log("result:",result)


    let resul1=a.find((item)=>{
        return item > 4
       
    })
    console.log("result1:",resul1)
}




//constructor functions


function person(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    this.greeting= function() {
        console.log(`Hai,${this.name},age is ${this.age},placeis ${this.place}`);
    }
}
let person1=new person("crisil",20,"ernakulam");
console.log("person1:",person1);
person1.greeting();


// updating individual objects

person1.address="my address";
console.log("person1:",person1)



// 

class Animal{
    animal;
    gender;


    constructor(animal,gender){
        this.animal=animal;
    this.gender=gender;
    }
      greeting(){
        console.log(`it is a ${this.animal} and it is ${this.gender}`)
    }
    
}
let animal2= new Animal("tiger","male")
console.log("animal2:",animal2)
animal2.greeting();


// ->>>>>>>>>>>>>>>
//Inheritance

class dog extends Animal{
    name;

constructor(animal,name,color){
    super(animal);//Calls parents constructor
this.name=name;
this.color=color;
}

// Method overidding

greeting() {
    console.log(`${this.animal},name is ${this.name} and he is ${this.color}`);
}
}

let dog1=new dog("lab","Ivar","black");
console.log("dog1:",dog1)
dog1.greeting()





