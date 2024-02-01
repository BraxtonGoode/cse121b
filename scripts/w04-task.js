/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Braxton Goode",
    photo: "images/IMG_2676.PNG",
    favoriteFoods: ["Orange Chicken", "Pizza", "Lasagna"],
    hobbies: ["Reading", "Games", "3D printing"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        places: "Gilbert , AZ",
        length: "18 years",
    }
)
myProfile.placesLived.push(
    {
        places: "Tucson , AZ",
        length: "4 years",
    }
)

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;


/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile["photo"])
document.getElementById("photo").setAttribute("alt", myProfile["name"])

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(foodItem => {
    let li = document.createElement("li")
    li.textContent = foodItem
    document.querySelector("#favorite-foods").appendChild(li)
})


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li")
    li.textContent = hobby
    document.querySelector("#hobbies").appendChild(li)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(house => {
    let dt = document.createElement("dt")
    dt.textContent = house.places
    let dd = document.createElement("dd")
    dd.textContent = house.length
    document.querySelector("#places-lived").appendChild(dt)
    document.querySelector("#places-lived").appendChild(dd)
})



