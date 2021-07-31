// Given an array of objects of student's marks:

const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

// Q1. Print the name and total marks of each student.

const funOne = arr => {
	let resultArr = [];
	for (obj of arr) {
		const studentName = obj.name;
		const totalMarks = obj.english + obj.maths + obj.science + obj.computer;
		resultArr.push({studentName, totalMarks});
	}
	return resultArr;
}

// console.table(funOne(studentDetails))

// Q2. Print the name of student whose total marks is highest.

const funTwo = arr => {
	let maxTotalMarks = 0;
	let name;
	for (obj of arr) {
		const totalMarks = obj.english + obj.maths + obj.science + obj.computer;
		if (totalMarks > maxTotalMarks) {
			maxTotalMarks = totalMarks;
			name = obj.name;
		}
	}
	return name;
}

// Q3. Print the name of student whose total marks is lowest.

const funThree = arr => {
	let minTotalMarks = Infinity;
	let name;
	for (obj of arr) {
		const totalMarks = obj.english + obj.maths + obj.science + obj.computer;
		if (totalMarks < minTotalMarks) {
			minTotalMarks = totalMarks;
			name = obj.name;
		}
	}
	return name;
}

console.log(funThree(studentDetails))