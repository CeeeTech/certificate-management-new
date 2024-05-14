import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function ViewStudent() {
    const [students, setStudents] = useState([]);
    const [hoveredRowId, setHoveredRowId] = useState(null);
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/student');
                if (response.ok) {
                    const data = await response.json();
                    setStudents(data);
                } else {
                    throw new Error('Failed to fetch students');
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleDeleteStudent = async (id, name) => {
        if (window.confirm(`Are you sure you want to delete Student ${name}?`)) {
            try {
                const response = await fetch(`http://localhost:8000/api/student/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    setStudents(students.filter((student) => student._id !== id));
                } else {
                    throw new Error('Failed to delete student');
                }
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
    };

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'nic', headerName: 'NIC', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'contact_no', headerName: 'Phone Number', flex: 1 },
        { field: 'course', headerName: 'Course', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
                <IconButton
                onClick={() => handleDeleteStudent(params.row._id, params.row.name)}
                aria-label="delete"
                style={{ color: hoveredRowId === params.row._id ? '#7f0220' : 'inherit' }}
                onMouseEnter={() => setHoveredRowId(params.row._id)}
                onMouseLeave={() => setHoveredRowId(null)}
            >
                <DeleteIcon />
            </IconButton>
            )
        }
    ];

    const getRowId = (row) => row._id;

    return (
        <MainCard
            title="View Students"
            secondary={
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    component={Link}
                    to="/dashboard/studentform"
                    sx={{ ml: 1.5 }}
                >
                    Add New Student
                </Button>
            }
        >
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid rows={students} columns={columns} pageSize={5} pageSizeOptions={[5, 10]} getRowId={getRowId} />
            </div>
        </MainCard>
    );
}

export default ViewStudent;
