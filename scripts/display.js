// display the pets in list items
function displayPet(){

    let tmp="";//clear the field
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];//get each pet
        tmp+=`<li>${pet.name} --- ${pet.age}</li>`;//concatenation
        console.log(tmp);

    }
    document.getElementById("pets").innerHTML=tmp;
}   
// dispay the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div id="${pet.id}" class="pet">
            <div class="pet-header">
                <h4>${pet.dogName}</h4>
                <label>${pet.dogAge}</label>
                <button onclick="deletePet(${pet.id});">🗑️</button>
            </div>
            <label>${pet.dogGender}</label>
            <label>${pet.dogBreed}</label>
            <label>${pet.typeService}</label>
            <label>${pet.ownerName}</label>
            <label>${pet.contactPhone}</label>
        </div>
        `;
        console.log(tmp)
    }
    document.getElementById("pets").innerHTML=tmp;
}

// display the pets in table