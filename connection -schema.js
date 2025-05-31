const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  department: String
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

// Create
const createStudent = async () => {
  const student = new Student({ name: 'Subash Yadav', age: 21, department: 'CS' });
  await student.save();
  console.log('Student Created');
};

// Read
const readStudents = async () => {
  const students = await Student.find();
  console.log(students);
};

// Update
const updateStudent = async () => {
  await Student.updateOne({ name: 'Subash Yadav' }, { age: 22 });
  console.log('Student Updated');
};

// Delete
const deleteStudent = async () => {
  await Student.deleteOne({ name: 'Subash Yadav' });
  console.log('Student Deleted');
};

// Call functions as needed
createStudent();
