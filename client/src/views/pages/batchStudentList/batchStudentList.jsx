import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
// import { makeStyles } from '@mui/styles';



// const useStyles = makeStyles({
//     tableContainer: {
//       marginTop: '20px',
//     },
//   });
  

// Mock student data 
const mockStudents = [
  { id: 1, name: 'John Doe', status: 'Pass', grade: 'A' },
  { id: 2, name: 'Jane Smith', status: 'Repeat', grade: 'B' },
  
];

const StudentListPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching student data from the backend
    // Replace this with actual API call to fetch student data
    setTimeout(() => {
      setStudents(mockStudents);
      setLoading(false);
    }, 1000);
  }, []);

  // Update student status
  const handleStatusChange = (event, studentId) => {
    const newStudents = students.map(student =>
      student.id === studentId ? { ...student, status: event.target.value } : student
    );
    setStudents(newStudents);
  };

  // Update student grade
  const handleGradeChange = (event, studentId) => {
    const newStudents = students.map(student =>
      student.id === studentId ? { ...student, grade: event.target.value } : student
    );
    setStudents(newStudents);
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Students List
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map(student => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    <Select
                      value={student.status}
                      onChange={e => handleStatusChange(e, student.id)}
                    >
                      <MenuItem value="Pass">Pass</MenuItem>
                      <MenuItem value="Repeat">Repeat</MenuItem>
                      <MenuItem value="Retake">Retake</MenuItem>
                      <MenuItem value="Drop">Drop</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={student.grade}
                      onChange={e => handleGradeChange(e, student.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button variant="contained" color="primary">
        Save Changes
      </Button>
    </div>
  );
};

export default StudentListPage;
