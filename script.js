var blue = document.body.querySelector(".manner")
number= 0
var what= document.body.querySelector(".who")
var nice= [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];


for(var i=0;i<nice.length; i++){
    var person= document.createElement("div")
     if(nice[i].age > 40){
       nice[i].name = nice[i].name.fontcolor("red")
       nice[i].age 
        nice[i].age = nice[i].age.toString()
       nice[i].age = nice[i].age.fontcolor("red")
      }
    person.innerHTML=nice[i].name + " "+nice[i].age
   
    blue.appendChild(person)
    }
 function something(first){
   number = number + 1
   what.innerHTML = number
   document.body.appendChild(what)
 } document.body.querySelector(".button").addEventListener("click",function(){
    something(number)
  })