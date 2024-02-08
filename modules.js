// //modules.js
// const aCourse = {
//     code: "CSE121b",
//     name: "Javascript Language",
//     sections: [
//       {
//         sectionNum: 1,
//         roomNum: "STC 353",
//         enrolled: 26,
//         days: "TTh",
//         instructor: "Bro T",
//       },
//       {
//         sectionNum: 2,
//         roomNum: "STC 347",
//         enrolled: 25,
//         days: "TTh",
//         instructor: "Sis A",
//       },
//     ],
//     changeEnrollment: function (sectionNum, add = true) {
//       // find the right section...Array.findIndex will work here
//       const sectionIndex = this.sections.findIndex(
//         (section) => section.sectionNum == sectionNum
//       );
//       if (sectionIndex >= 0) {
//         if (add) {
//           this.sections[sectionIndex].enrolled++;
//         } else {
//           this.sections[sectionIndex].enrolled--;
//         }
//         renderSections(this.sections);
//       }
//     },
//   };
  
//   function setCourseInfo(course) {
//     const courseName = document.querySelector("#courseName");
//     const coursecode = document.querySelector("#courseCode");
//     courseName.textContent = course.name;
//     coursecode.textContent = course.code;
//   }
  
//   function renderSections(sections) {
//     const html = sections.map(
//       (section) => `<tr>
//       <td>${section.sectionNum}</td>
//       <td>${section.roomNum}</td>
//       <td>${section.enrolled}</td>
//       <td>${section.days}</td>
//       <td>${section.instructor}</td></tr>`
//     );
//     document.querySelector("#sections").innerHTML = html.join("");
//   }
  
import aCourse from './course.js'

aCourse.init()
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });


  
//   const url = "https://pokeapi.co/api/v2/pokemon/ditto";
//   let results = null;
//   async function getPokemon(url) {
//     const response = await fetch(url);
//     //check to see if the fetch was successful
//     if (response.ok) {
//       // the API will send us JSON...but we have to convert the response before we can use it
//       // .json() also returns a promise...so we await it as well.
//       const data = await response.json();
//       doStuff(data);
//     }
//   }
//   function doStuff(data) {
//     results = data;
//     console.log("first: ", results);
//   }
//   getPokemon(url);
//   console.log("second: ", results);