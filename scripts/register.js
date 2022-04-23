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
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("services");
let inputownerName=document.getElementById("txtOwner");
let inputcontactPhone=document.getElementById("txtOwnerPhone");

function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    if(aPet.dogName.length==0){
        //if we get here it means that the name is not valid
        valid=false;
        console.error("Invalid name");
        
    }
    if(aPet.typeService.length==0){
        valid=false;
        console.error("Invalid name");
    }
    if(aPet.contactPhone.length==0){
        valid=false;
        console.error("Invalid name");

    }
    return valid; // it could be true or false

}


function register(){
    //create the pet
    let thePet = new Pet(inputName.value,inputAge.value, inputGender.value,inputBreed.value,inputService.value,inputownerName.value,inputcontactPhone.value);
    if(isValid(thePet)){

    //push the pet into the array
    petSalon.pets.push(thePet);
    displayCards();
    
    //clear the inputs
    clearInputs();
    }
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputownerName.value="";
    inputownerPhone.value="";
}



let example1= new Pet("Jack",1,"male","german shepard","haircut","Michael","911");

let example2= new Pet("Thor",12,"male","german shepard","haircut","Michael","911");

let example3= new Pet("Sheba",14,"female","collie","nail trim","Michael","911");
petSalon.pets.push(example1,example2,example3);
displayCards();
