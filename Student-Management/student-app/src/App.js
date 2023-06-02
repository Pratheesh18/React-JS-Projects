import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/students');
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createStudent = async () => {
    try {
      await axios.post('http://localhost:4000/students', { name, class: studentClass, age });
      fetchStudents();
      setName('');
      setStudentClass('');
      setAge('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <h2>Student Details</h2>
        <Box my={2}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Class"
            variant="outlined"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            fullWidth
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
        </Box>
        <Button variant="contained" onClick={createStudent} color="primary">
          Create Student
        </Button>

        <h3>Student List</h3>
        {students.map((student) => (
          <Card key={student._id} sx={{ my: 2 }}>
            <CardContent>
              <h4>{student.name}</h4>
              <p>Class: {student.class}</p>
              <p>Age: {student.age}</p>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default App;
