/*
Question 1
let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];
Write a function that takes the above array as a parameter and function to calculate the total of the
marks of each student, and returns the student name with the highest marks. Note: If you want you
can add values to the objects of these arrays.
YOU HAVE TO USE ES6 FUNCTIONS (HOF’s) only.
Your function should look like
function studentWithHighestMarks(array) {
// return student name
}
*/

let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

function studentWithHighestMarks(array) {

    let highMark = 0;
    let highStudent = "";
    
    array.forEach((student) => {
        let sumMark = student.marks.reduce ((acc, val) => acc + val , 0);
        if (sumMark > highMark){
            highMark = sumMark;
            highStudent = student.name;
        }
        
    });

    return highStudent;
}

console.log(studentWithHighestMarks(student));

/*
Question 2
Write a function which finds the minimum value in an array using HOF’s.
For example , array = [20, -2, 4, -11, 0, 25]
It should return // -11
Your function should look like
function minimumValue(array) {
// return a number
}
*/
function minimumValue(array) {

    let minimumValue = array.reduce(function(acc, cV) {
        return acc < cV ? acc : cV;
    }, Infinity);
    
    return (minimumValue);
}
minimumValue([20, -2, 4, -11, 0, 25])

/*
Question 3
Write a function that counts the number of letters inside a string using HOF’s.
For example, string name = “helloworld”
It should return // 10
Your function should look like
function lengthOfString(string) {
// return a number
}
*/

function lengthOfString(string) {

    let stringCount = string.length;
    return n; 

 }
 lengthOfString("helloworld")