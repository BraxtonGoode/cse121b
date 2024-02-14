// /* project */

// /* Declare and initialize global variables */
// const marsPhotoElement = document.getElementById("temples")
// let marsPhotosList = []


// /* async fetchMarsPhotos Function using fetch()*/
// async function fetchMarsPhotos(rover, camera, sol) {
//     const apiKey = 'qMjIOIgucUtNCiizesMC5a1m9tirPvq42c6LVcqJ';
//     const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;

//     // Construct the URL with the API key and query parameters
//     const url = new URL(apiUrl);
//     url.searchParams.append('api_key', apiKey);
//     url.searchParams.append('camera', camera);
//     url.searchParams.append('sol', sol);

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const marsPhotosList = await response.json();
//         console.log("check 1")
//         return marsPhotosList;
//     } catch (error) {
//         console.error('Error fetching Mars photos:', error);
//         return null;
//     }
// }

// // displaying each photo
// const marsPhotos = (photos) => {
//     photos.forEach(photo => {
//         const article = document.createElement("article");
//         const h3Element = document.createElement("h3");
//         h3Element.textContent = photo.rover.name; // Assuming 'img_src' contains the URL of the image
//         const imgElement = document.createElement("img");
//         imgElement.setAttribute("src", photo.img_src); // Set the image source
//         imgElement.setAttribute("alt", "Mars Photo"); // Set alt attribute for accessibility
//         article.appendChild(h3Element);
//         article.appendChild(imgElement);
//         marsPhotoElement.appendChild(article);
//     });
// };





// fetchMarsPhotos('curiosity', 'RHAZ', 900)
//     .then(data => {
//         if (data) {
//             marsPhotosList = data.photos; // Assuming the photos array is directly accessible
//             console.log(marsPhotosList);            
//             console.log('Mars photos:', data);
//             marsPhotos(marsPhotosList);
//             // Process data as needed
//         } else {
//             console.log('No data received');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// async function fetchAllCameraAngles(rover, sol) {
//     const apiKey = 'qMjIOIgucUtNCiizesMC5a1m9tirPvq42c6LVcqJ';
//     const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;

//     const url = new URL(apiUrl);
//     url.searchParams.append('api_key', apiKey);
//     url.searchParams.append('sol', sol);

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Failed to fetch camera angles');
//         }
//         const data = await response.json();
//         const cameras = new Set(data.photos.map(photo => photo.camera.name)); // Extract unique camera names
//         return Array.from(cameras);
//     } catch (error) {
//         console.error('Error fetching camera angles:', error);
//         return [];
//     }
// }

// async function fetchPhotosForAllCameras(rover, sol) {
//     const cameras = await fetchAllCameraAngles(rover, sol);

//     // Fetch photos for each camera angle
//     const photoPromises = cameras.map(camera => fetchMarsPhotos(rover, camera, sol));

//     try {
//         const photosList = await Promise.all(photoPromises);
//         return photosList;
//     } catch (error) {
//         console.error('Error fetching photos for all cameras:', error);
//         return [];
//     }
// }

// // Usage
// const rover = 'curiosity';
// const sol = 1000; // Your desired Martian day

// fetchPhotosForAllCameras(rover, sol)
//     .then(photosList => {
//         photosList.forEach((photos, index) => {
//             console.log(`Photos from camera ${index + 1}:`, photos);
//             // Display photos on HTML page
//             marsPhotos(photos);
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// // /* filterPhotos Function */
// const filterPhotos = (photos)=> {
//     reset()
//     const filter = document.getElementById("filtered").value;
//     switch (filter) {
//         case "spirit":
//             marsPhotos(photos.filter(photo => photo.rover.name.includes("Spirit")));
            
//             break;
//         // case "spirit":
//         //     displayTemples(photos.filter(temple => !temple.location.includes("Utah")))
//         //     break;
//         // case "older":
//         //     displayTemples(photos.filter(temple => new Date(temple.dedicated) < new Date(1950.0,1)))
//         //     break;
//         // case "all":
//         //     displayTemples(photos)
//         //     break;
    
//         default:
//             photos;
    
//     }
// }



// // /* Event Listener */
// document.getElementById("filtered").addEventListener("change",() => {filterPhotos(Object.values(marsPhotosList))})

// /* filterPhotos Function */
// const filterPhotos = (photos)=> {
//     reset(); // Clear the existing photos
//     const filter = document.getElementById("filtered").value;
//     switch (filter) {
//         case "curiosity":
//             marsPhotos(photos.filter(photo => photo.rover.name.toLowerCase() === "spirit"));
//             break;
//         case "opportunity":
//             marsPhotos(photos.filter(photo => photo.rover.name.toLowerCase() === "opportunity"));
//             break;
//         case "spirit":
//             marsPhotos(photos.filter(photo => photo.rover.name.toLowerCase() === "curiosity"));
//             break;
//         default:
//             marsPhotos(photos); // Display all photos if no filter is selected
//             break;
//     }
// }





// // Usage of filterPhotos function
// document.getElementById("filtered").addEventListener("change", () => {
//     filterPhotos(marsPhotosList); // Pass the marsPhotosList to the filter function
// });


// // Usage
// const rover = 'spirit';
// const sol = 100; // Your desired Martian day

// fetchPhotosForAllCameras(rover, sol)
//     .then(photosList => {
//         console.log('Mars photos:', photosList);
//         marsPhotosList = photosList; // Store photos for filtering
//         marsPhotos(photosList); // Display initial photos
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });