/* project */

/* Declare and initialize global variables */
const marsPhotoElement = document.getElementById("rover");
let marsPhotosList = [];

/* async fetchMarsPhotos Function using fetch()*/
async function fetchMarsPhotos(rover, sol) {
    const apiKey = 'qMjIOIgucUtNCiizesMC5a1m9tirPvq42c6LVcqJ';
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;

    // Construct the URL with the API key and query parameters
    const url = new URL(apiUrl);
    url.searchParams.append('api_key', apiKey);
    url.searchParams.append('sol', sol);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const marsPhotos = await response.json();
        console.log("check 1");
        return marsPhotos.photos; // Return the photos array directly
    } catch (error) {
        console.error('Error fetching Mars photos:', error);
        return [];
    }
}

// Displaying each photo
const marsPhotos = (photos) => {
    photos.forEach(photo => {
        const article = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = `${photo.rover.name}: ${photo.camera.full_name} on sol ${photo.sol}`; // Display camera full name
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", photo.img_src); // Set the image source
        imgElement.setAttribute("alt", "Mars Photo"); // Set alt attribute for accessibility
        article.appendChild(h3Element);
        article.appendChild(imgElement);
        marsPhotoElement.appendChild(article);
    });
};

// Fetch photos for all camera angles
async function fetchPhotosForAllCameras(rover, sol) {
    try {
        const photosList = await fetchMarsPhotos(rover, sol);
        return photosList;
    } catch (error) {
        console.error('Error fetching photos for all cameras:', error);
        return [];
    }
}





/* reset Function */
function reset() {
    marsPhotoElement.innerHTML = "";
    
}



// /* filterPhotos Function */
const filterPhotos = (photos, selectedFilter) => {
    reset(); // Clear the existing photos using reset function
    switch (selectedFilter) {
        case "spirit":
            rover = 'spirit';            
            break;

        case "curiosity":
            rover = 'curiosity';            
            break;
    }

let sol = document.getElementById("sol-day").value;

console.log(sol)
    // Fetch and display photos based on the updated rover and sol
fetchPhotosForAllCameras(rover, sol)
    .then(photosList => {
        console.log('Mars photos:', photosList);
        marsPhotosList = photosList; // Store photos for filtering
        marsPhotos(photosList); // Display photos based on the filter
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Usage of filterPhotos function
document.getElementById("filtered").addEventListener("change", () => {
    const selectedFilter = document.getElementById("filtered").value;
    filterPhotos(marsPhotosList, selectedFilter); // Pass the selected filter option
});