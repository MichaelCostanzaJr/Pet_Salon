let students=[
    {
        //attr:value,
        firstName:"Michael",
        lastName:"Costanza",
        age:25,
        isActive:true,
    },
    {
        firstName:"John",
        lastName:"Doe",
        age:25,
        isActive:true,
    },
    {
        firstName:"Jane",
        lastName:"Doe",
        age:25,
        isActive:false,
        hobbies:["Listen Music", "Read", "Play Zelda"],
        address:{
            street:"Palm street",
            zip: "22769",
            number: "262-k",
    
    }
    }];

console.log(students[0].firstName);

for(let i=0;i<students.length;i++){
    tmp +=`<li>${studnets[i].firstName}</li>`;
    console.log(tmp);

    document.getElementById("students").innerHTML+=tmp;
}

displayStudent();
let p = document.createElement("p");


let div=document.getElementById("students");
div.appendChild(p);