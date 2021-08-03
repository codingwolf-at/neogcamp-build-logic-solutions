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

// Q4. Print the average marks of the class in computer subject.

const funFour = arr => {
	let computerMarks = 0;
	for (obj of arr) {
		computerMarks += obj.computer
	}
	return computerMarks/arr.length
}

// Q5. Print the grades of all students:
// -> Grade A if total marks is higher than or equal to 75%,
// -> Grade B if higher than or equal to 60%,
// -> Grade C if higher than or equal to 35%,
// -> Grade D if lower than 35%.

const funFive = arr => {
	const resultArr = [];
	for (student of studentDetails) {
	const totalMarks = student.english + student.maths + student.science + student.computer;
		const name = student.name;
		const studentPercentage = (totalMarks/400)*100;
		if (studentPercentage >= 75) {
			resultArr.push({name, Grade: "A"})
		} else if (studentPercentage >= 60) {
			resultArr.push({name, Grade: "B"})
		} else if (studentPercentage >= 35) {
			resultArr.push({name, Grade: "C"})
		} else {
			resultArr.push({name, Grade: "D"})
		}
	}
	return resultArr;
}

// console.table(funFive(studentDetails))