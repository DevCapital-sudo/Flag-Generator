    const country = document.querySelector("#country")

   
    const left = document.querySelector("#left")
    const middle = document.querySelector("#middle")
    const right = document.querySelector("#right")



const nation = [
    {
        name: "nigeria",
        left: "green",
        middle: "white",
        right: "green",
        description: "A West African country known for its cultural diversity, oil production, Nollywood, and large population."
    },
    {
        name: "italy",
        left: "green",
        middle: "white",
        right: "red",
        description: "A European country famous for its history, Roman architecture, pizza, pasta, and fashion."
    },
    {
        name: "france",
        left: "blue",
        middle: "white",
        right: "red",
        description: "A European country known for the Eiffel Tower, art, fashion, and French cuisine."
    },
    {
        name: "ireland",
        left: "green",
        middle: "white",
        right: "orange",
        description: "A European island country known for its green landscapes, castles, literature, and Celtic heritage."
    },
    {
        name: "ivory coast",
        left: "orange",
        middle: "white",
        right: "green",
        description: "A West African country known for cocoa production, coffee, and its economic centre, Abidjan."
    },
    {
        name: "romania",
        left: "blue",
        middle: "yellow",
        right: "red",
        description: "A European country known for the Carpathian Mountains, medieval castles, and Transylvania."
    },
    {
        name: "belgium",
        left: "black",
        middle: "yellow",
        right: "red",
        description: "A European country famous for chocolate, waffles, and its capital, Brussels, which hosts major European Union institutions."
    },
    {
        name: "mali",
        left: "green",
        middle: "yellow",
        right: "red",
        description: "A landlocked West African country known for its historic trading cities, including Timbuktu."
    },
    {
        name: "guinea",
        left: "red",
        middle: "yellow",
        right: "green",
        description: "A West African country rich in mineral resources, especially bauxite, and known for its mountainous landscapes."
    },
    {
        name: "chad",
        left: "blue",
        middle: "yellow",
        right: "red",
        description: "A landlocked Central African country named after Lake Chad and known for its diverse landscapes, including the Sahara Desert."
    }
];


window.onload= () =>{
    changeColor();
}


const changeColor = () => {
    console.log("Color Changed!",country.value)
    let searchValue = country.value.trim()
    let result = nation.find(search=> search.name== searchValue)

    if(!result){
          left.style.backgroundColor= "green"
          middle.style.backgroundColor= "white"
          right.style.backgroundColor= "green"
    }
    else{
        left.style.backgroundColor= result.left
          middle.style.backgroundColor= result.middle
          right.style.backgroundColor= result.right
    }
    console.log(result)
    
  



 }






// if(country.value=="italy"){
//     left.style.backgroundColor = "green"
//     middle.style.backgroundColor = "white"
//     right.style.backgroundColor = "red"
// }

// else if(country.value == "belgium"){
//         left.style.backgroundColor= "black";
//         right.style.backgroundColor="red";
//         middle.style.backgroundColor= "yellow";
// }

// else if(country.value == "ireland"){
//         left.style.backgroundColor= "green";
//         right.style.backgroundColor= "orange";
//         middle.style.backgroundColor= "white";
// }

// else{
//      left.style.backgroundColor= "green";
//      right.style.backgroundColor= "green";
//      middle.style.backgroundColor= "white";
// }

//      switch (country.value){
//             case "italy":
//                 left.style.backgroundColor= "green";
//                 right.style.backgroundColor= "red";
//                 middle.style.backgroundColor= "white";
//                 break;
//             case "belgium":
//                 left.style.backgroundColor= "black";
//                 right.style.backgroundColor="red";
//                 middle.style.backgroundColor= "yellow";
//                 break;

//             case "ireland":
//                 left.style.backgroundColor= "green";
//                 right.style.backgroundColor= "orange";
//                 middle.style.backgroundColor= "white";
//                 break;

//             default:
//                 left.style.backgroundColor= "green";
//                 right.style.backgroundColor= "green";
//                 middle.style.backgroundColor= "white";
//                 break;

//     }
