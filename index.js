#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.courseEnrolled = courseEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let students = [];
let continueEnrollment = true;
(async function main() {
    do {
        let action = await inquirer.prompt({
            type: "list",
            name: "ans",
            message: "Please select an action:\n",
            choices: ["Enroll a student", "Show Student Status"]
        });
        if (action.ans === "Enroll a student") {
            let studentName = await inquirer.prompt({
                type: "input",
                name: "ans",
                message: "Please Enter Your Name:"
            });
            let trimmedStudentName = studentName.ans.trim().toLowerCase();
            let studentNameCheck = students.map(student => student.name);
            if (!studentNameCheck.includes(trimmedStudentName)) {
                if (trimmedStudentName !== "") {
                    baseId++;
                    studentId = "STID" + baseId;
                    console.log("\n\tYour Account Has Been Created");
                    console.log(`Welcome, ${trimmedStudentName}!`);
                    let course = await inquirer.prompt({
                        type: "list",
                        name: "ans",
                        message: "Select Your Course",
                        choices: ["IT", "English", "Cooking"]
                    });
                    let courseFees = 0;
                    switch (course.ans) {
                        case "IT":
                        case "English":
                            courseFees = 500;
                            break;
                        case "Cooking":
                            courseFees = 200;
                            break;
                    }
                    let courseConfirm = await inquirer.prompt({
                        type: "confirm",
                        name: "ans",
                        message: "Do You Want To Enroll in this Course?"
                    });
                    if (courseConfirm.ans) {
                        let student = new Student(studentId, trimmedStudentName, [course.ans], courseFees);
                        students.push(student);
                        console.log("You Have Enrolled in this Course.");
                    }
                }
                else {
                    console.log("Invalid Name.");
                }
            }
            else {
                console.log("Student with this name already exists.");
            }
        }
        else if (action.ans === "Show Student Status") {
            if (students.length !== 0) {
                let studentNameCheck = students.map(e => e.name);
                let selectStudent = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please Select a Name",
                    choices: studentNameCheck
                });
                let foundStudent = students.find(student => student.name === selectStudent.ans);
                if (foundStudent) {
                    console.log("Student Information:");
                    console.log(foundStudent);
                    console.log("\n");
                }
                else {
                    console.log("Student not found.");
                }
            }
            else {
                console.log("Record is Empty.");
            }
        }
        let userConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do You Want to Continue?"
        });
        continueEnrollment = userConfirm.ans;
    } while (continueEnrollment);
})();
// import inquirer from "inquirer";
// class student {
//     id: string;
//     name: string;
//     courseEnrolled: string[];
//     feesAmount: number;
//     constructor(id: string, name: string, courseEnrolled: string[], feesAmount: number) {
//         this.id = id
//         this.name = name
//         this.courseEnrolled = courseEnrolled
//         this.feesAmount = feesAmount
//     }
// }
// let baseId = 10000
// let studentId: string = "";
// let courseEnrolled = true;
// let students: string[] = []
// do {
//     let action = await inquirer.prompt({
//         type: "list",
//         name: "ans",
//         message: "Please select an object:\n",
//         choices: ["Enroll a student ", "Show Student Status"]
//     })
//     if (action.ans === "Enroll a student") {
//         let studentName = await inquirer.prompt({
//             type: "input",
//             name: "ans",
//             message: "Please Enter Your Name :"
//         })
//         let trimedStudentName = (studentName.ans).trim().toLowerCase()
//         let studentNameCheck = students.map(obj  => obj.name)
//         if(studentNameCheck.includes(trimedStudentName)===false){
//             if (trimedStudentName!==""){
//                 baseId++
//                 studentId="STID"+baseId
//                 console.log("\n\t Your Account Has Been Created");
//                 console.log(`Welcome,${trimedStudentName}!`);
//                 let course = await inquirer.prompt({
//                     type:"list",
//                     name:"ans",
//                     message:"Select Your Course",
//                     choices:["IT","English","Cooking"]
//                 })
//                 let courseFees=0;
//                 switch(course.ans){
//                     case "IT":
//                     courseFees=500;
//                     break;
//                     case "English":
//                     courseFees=500;
//                     break;
//                     case "Cooking":
//                     courseFees=200;
//                     break;
//                 }
//                 let courseConfrim = await inquirer.prompt({
//                     type:"confirm",
//                     name:"ans",
//                     message:"Do You Want To Enroll this Course"
//                 })
//                 if(courseConfrim.ans===true){
//                     let Student:any = new student(studentId,trimedStudentName,[course.ans],courseFees)
//                     students.push(Student)
//                     console.log("You Have Enrolled this Course");
//                 }
//             }else{
//                 console.log("Invalid Name");
//             }
//         }
//     }
//     else if(action.ans==="Show Student Status"){
//         if (students.length!==0){
//             let studentNameCheck = students.map(e=> e.name)
//             let selectStudent= await  inquirer.prompt({
//                 type:"list",
//                 name:"ans",
//                 message:"Please Select Name ",
//                 choices:studentNameCheck
//             })
//             let foundStudent =students.find(Student=>Student.name===selectStudent.ans)
//             console.log("Student Information");
//             console.log(foundStudent);
//             console.log("\n");
//         }else{
//             console.log("Record is  Empty");
//         }
//         let userConfrim = await inquirer.prompt({
//             type:"confirm",
//             name:"ans",
//             message:"Do You Want to Continue?"
//         })
//         if (userConfrim.ans===false){
//             continueEnrollment=false
//         }
//     }
// }while(continueEnrollment)
