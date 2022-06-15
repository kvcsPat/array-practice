//----------students fetch----------
async function getStudents () {
    const response = await fetch("/students");
    const responseJson = await response.json();

    return responseJson
};

//----------insert students to HTML----------
async function init () {
    const students = await getStudents();
    document.body.innerHTML = getStudentListHTML(students)
};

//----------creeate new array for students to insert to HTML----------
function getStudentListHTML (students) {
    console.log(students);
    const studentListHTMLs = students.map(studentComponent);
    console.log(studentListHTMLs);
    return studentListHTMLs.join('')
};

//----------student component----------
function studentComponent (student) {
    return `
        <div class="student">
        <p>${student.name}</p>
        <p>${student.status}</p>
        </div>
    `
};

init();