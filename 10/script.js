let cars = [
    "Bmw" , "Mersedes", "Opel"
];

let model = [
    ["X6", "X7" , 'X5'],
    ["190", "4 goz" , "ceska"],
    ["astra", "vectro" , "zafira"]
]







let masim= `<option selected disabled> Masin sec </option>`;
let carsSelekt=document.getElementById("cars");
for(let i = 0;i<cars.length;i++){
    masim+=`<option value="${i}"> ${cars[i]}</option>`;
}


carsSelekt.innerHTML=masim;


carsSelekt.onchange = function(){
 let value = carsSelekt.value;

 console.log(value);
}