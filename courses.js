// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
  };

const secondCourse= {
    code: "wdd130",
    name: "Web Development",
    sections: {
        sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T',
        sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'

    }
}
function courseInfo (course){
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.innerHTML = course.name;
    courseCode.innerHTML = course.code;
}

function sectionOutput(section) {
    let html = section.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.sectionNum}
        
        `
    );

}