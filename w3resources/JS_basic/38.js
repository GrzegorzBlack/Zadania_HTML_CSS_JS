// 38. Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam." the student will get A+ grade and total marks must
// be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

function marks(marks, exam) {
  let grade = "A+";
  if (exam === "Final-exam") {
    if (marks >= 90) {
      return grade;
    } else {
      return false;
    }
  } else if (marks >= 89 && marks <= 100) {
    return grade;
  } else {
    return false;
  }
}

console.log(marks(92, "Exam"));
