let petSalon ={
    name:"The Fashion Pet",
    address:{
        street: "Ave University",
        number: "787",
        zip: "23456"
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[]
}

function Pet(name,age,gender,breed,service,ownername,contactphone){
    this.dogName=name;
    this.dogAge=age;
    this.dogGender=gender;
    this.dogBreed=breed;
    this.typeService=service;
    this.ownerName=ownername;
    this.contactPhone=contactphone;

}

// get the info from the inputs and store the information
let inputName=document.getElementById("dogName");
let inputAge=document.getElementById("dogAge");
let inputGender=document.getElementById("dogGender");
let inputBreed=document.getElementById("dogBreed");
let inputService=document.getElementById("dogService");
let inputownerName=document.getElementById("ownerName");
let inputcontactPhone=document.getElementById("contactPhone");
function register(){
    //create the pet
    let thePet = new Pet(inputName.value,inputAge.value, inputGender.value,);
    console.log(thePet);
    //push the pet into the array
    petSalon.push(thePet);
    //clear the inputs
    clearInputs();
}

function clearInputs(){
    inputName.value="";
}



let example1= new Pet("Jack",1,"male","german shepard","haircut","Michael","911");

let example2= new Pet("Thor",12,"male","german shepard","haircut","Michael","911");

let example3= new Pet("Sheba",14,"female","collie","nail trim","Michael","911");

console.log(example1,example2,example3);
