const createStudent = (nameValue) => {
    return {
        name: nameValue,
        grades: {
            
        }
    }
};

const addMathGrade = (student) => {
    student.grades.math = "B"
    return student
};

const addHistoryGrade = (student) => {
    student.grades.history = "C"
    return student
};

const addScienceGrade = (student) => {
    student.grades.science = "A"
    return student
};

const reportCard = (student) => {
    let studentsCard = addMathGrade(student); addHistoryGrade(student);
    addScienceGrade(student)
    return console.log(studentsCard); 
}

let studentLuke = createStudent("Luke")
reportCard(studentLuke)