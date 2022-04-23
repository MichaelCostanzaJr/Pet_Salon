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
let c=0;//this is a counter var

function Pet(name,age,gender,breed,service,ownername,contactphone){
    this.dogName=name;
    this.dogAge=age;
    this.dogGender=gender;
    this.dogBreed=breed;
    this.typeService=service;
    this.ownerName=ownername;
    this.contactPhone=contactphone;
    this.id=c++;// increase the var 1 everytime that is used

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

function deletePet(petId){
    console.log("Deleting" + petId);
    let deleteIndex;
    //in this function--------
    //travel the array (for loop)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet =  petSalon.pets[i];
        if(petId==pet.id){
            //find the id (if)
            //get the position in the array (store in a var)
            let deleteIndex=i;
            console.log("I found it in position:" + i)
        }
    //find the id (if)
    //get the position in the array (store in a var)

    }
    
    //remove from the array (splice())
    petSalon.pets.splice(deleteIndex,1);
    //remove from the html (remove())
    document.getElementById(petId).remove();
    //
}

function searchPet(petId){
    console.log("Search" + petId);
    let searchIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(petId==pet.id){
            let searchIndex=i;
        }
    }
    //previous actions
        //add an inputSearch on the html
        //add a search button on the html
        //get the string
    let searchString =  document.getElementById("txtSearch").value; console.log("Searching" + searchString);
    // in this function-----
        // travel the array (for loop)
        for(let i=0;i<petSalon.pets.length;i++){
            let pet = petSalon.pets[i];
        }
        // find the id (if)
        if(searchString === pet.name){
            //highlight the result
            alert("I found it");
        }
        // highlight the result
}



let example1= new Pet("Jack",1,"male","german shepard","haircut","Michael","911");

let example2= new Pet("Thor",12,"male","german shepard","haircut","Michael","911");

let example3= new Pet("Sheba",14,"female","collie","nail trim","Michael","911");
petSalon.pets.push(example1,example2,example3);
displayCards();
