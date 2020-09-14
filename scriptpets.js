//Create an Object literal for the pet salon(Name, adress, Hours)

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Las golondrinas, Mexicali BC",
        number: "346"
    },
    hours:{
        open: "7 am",
        close: "5 pm"
    },
    pets:[
        {   //Object 1
            namepet:"Kaiser",
            Age:6,
            breed:"Aleman",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 2
            namepet:"Elma",
            Age:2,
            breed:"Rapida",
            gender: "Femela",
            type:"Liebre"
        },
        {   //Object 3
            namepet:"Sabu",
            Age:7,
            breed:"Aleman",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 4
            namepet:"Guardian",
            Age:4,
            breed:"Aleman",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 5
            namepet:"Rocky",
            Age:22,
            breed:"Desert lizard",
            gender: "Male",
            type:"Lizard"
        },
        {   //Object 6
            namepet:"Sam",
            Age:7,
            breed:"Chihuahua",
            gender: "Male",
            type:"Dog"
        },
    ]
}


//EXTRA HOMEWORK
//CSS
//DISPLAY DE OLDES AND YOUNGEST PET (CREATE A FUNCTION)

//Function to display on the console the names of the pets

function DisplayNumberPets(Array)
{
    console.log("Number of records: "+Array.pets.length);
}

function DisplayName(Array)
{
    for(var x=0; x<Array.pets.length; x++){
        console.log(Array.pets[x].namepet);
    }
}



console.log("------Display Name--------");
DisplayName(ObjSalon);

console.log("------Display Number of Pets--------");
DisplayNumberPets(ObjSalon);

//function to display on console the number of registered pets/

class Pet{
    constructor(name,age,type,breed,gender,services,owner,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;

    }
}


var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Las golondrinas, Mexicali BC",
        number: "346"
    },
    hours:{
        open: "7 am",
        close: "5 pm"
    },
    pets:[

    ]
}

var Kaiser = new Pet("Kaiser",5,"Dog","Aleman", "Male", "Full services", "Roberto");
var Elma = new Pet("Elma",5,"Dog","Aleman", "Female", "Full services", "Roberto");
var Sabu = new Pet("Sabu",5,"Aleman", "Male", "Full services", "Roberto");
var Guardian = new Pet("Guardian",5,"Dog","Aleman", "Male", "Full services", "Roberto");
var Rocky = new Pet("Rocky",5,"Aleman", "Male", "Full services", "Roberto");

ObjSalon.pets.push(Kaiser);
ObjSalon.pets.push(Elma);
ObjSalon.pets.push(Sabu);
ObjSalon.pets.push(Guardian);
ObjSalon.pets.push(Rocky);

console.log(ObjSalon.pets);