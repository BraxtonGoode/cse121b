/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples")
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement("img")
        imgElement.setAttribute("src",temple.imageUrl)
        imgElement.setAttribute("alt",temple.location)
        article.appendChild(h3Element)
        article.appendChild(imgElement)
        templesElement.appendChild(article)

    });

};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json()
    displayTemples(templeList)
};

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
    
}



/* filterTemples Function */
const filterTemples = (temples)=> {
    reset()
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")))
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950.0,1)))
            break;
        case "all":
            displayTemples(temples)
            break;
    
        default:
            temples;
    
    }
}


getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change",() => {filterTemples(Object.values(templeList))})
