// students collection
{
  _id: 1,
  name: "Subash Yadav",
  age: 21,
  department: "CS",
  marks: 85,
  courseId: 101
}
{
  _id: 2,
  name: "Priya Sah",
  age: 22,
  department: "IT",
  marks: 92,
  courseId: 102
}
{
  _id: 3,
  name: "Ravi Kumar",
  age: 23,
  department: "CS",
  marks: 78,
  courseId: 101
}
{
  _id: 4,
  name: "Sneha Verma",
  age: 21,
  department: "IT",
  marks: 88,
  courseId: 102
}
{
  _id: 5,
  name: "Rajesh Singh",
  age: 22,
  department: "CS",
  marks: 95,
  courseId: 101
}
{
  _id: 6,
  name: "Anjali Gupta",
  age: 23,
  department: "IT",
  marks: 82,
  courseId: 102
}
{
  _id: 7,
  name: "Rahul Verma",
  age: 21,
  department: "CS",
  marks: 75,
  courseId: 101
}

// courses collection
{
  _id: 101,
  name: "Computer Science",
  duration: 4,
  fees: 10000
}
{
  _id: 102,
  name: "Information Technology",
  duration: 4,
  fees: 12000
}

// 1. Find the total number of students in each department.
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      totalStudents: { $sum: 1 }
    }
  }
]);

// 2. Find the average marks of students in each department.
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      averageMarks: { $avg: "$marks" }
    }
  }
]);

// 3. Find the highest marks scored by a student in each department.
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      highestMarks: { $max: "$marks" }
    }
  }
]);

// 4. Find the lowest marks scored by a student in each department.
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      lowestMarks: { $min: "$marks" }
    }
  }
]);

// 5. Find the total number of students in each course.
db.students.aggregate([
  {
    $group: {
      _id: "$courseId",
      totalStudents: { $sum: 1 }
    }
  }
]);

// 6. Find the average marks of students in each course.
db.students.aggregate([
  {
    $group: {
      _id: "$courseId",
      averageMarks: { $avg: "$marks" }
    }
  }
]);
    