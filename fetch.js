// // fetch.js
// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// let results = null;
// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }
// function doStuff(data) {
//   const output = document.getElementById("output");
//   results = data;
//   const html = `<h1> ${results.name}</h1> 
//                 <img src="${results.sprites.front_default}" alt="image of ${results.name}">`

//   output.innerHTML = html
//   console.log(output)

//   console.log("first: ", results);

// }
// getPokemon(url);
// console.log("second: ", results);



// const urlList = "https://pokeapi.co/api/v2/pokemon";

// async function getPokemonList(url) {
//     const listResponse = await fetch(url)
//     if (listResponse.ok) {
//         const Data = await listResponse.json();
//         doStuffList(Data)
//     }
// }

// function doStuffList(data) {
//     console.log(data)
//     const pokeListElement = document.getElementById("outputList")
//     const pokeList = data.results
//     pokeList.forEach(item => {
//         const html = `<li> ${pokeList.name}<li>`        
//         pokeListElement.innerHTML +=html 
//     });
    
// }
// getPokemonList(urlList)

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    // execute the callback
    doThis(data);
  }
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  //console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li data-url="${currentItem.url}">${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
  });
}
//getPokemon(url, doStuff);
console.log("second: ", results);
// Notice that by just passing a different callback function in
// we can totally change what happens when the data comes back.
// It's like we gave the getPokemon function superpowers!
//getPokemon(urlList, doStuffList);

function sortPokemon(list) {
    if (list[0] < list [1]) {
        return -1;
    }
    if (list[0] > list[1]){
        return 1
    }    
    return 0
    
};

sortPokemon(getPokemon(urlList, doStuffList))