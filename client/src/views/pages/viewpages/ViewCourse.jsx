import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

function ViewCourse() {
    const [courses, setCourses] = useState([]);
    const [hoveredRowId, setHoveredRowId] = useState(null);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/coures');
                if (response.ok) {
                    const json = await response.json();
                    setCourses(json);
                } else {
                    throw new Error('Failed to fetch courses');
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleDeleteCourse = async (id, courseName) => {
        if (window.confirm(`Are you sure you want to delete Course ${courseName}?`)) {
            try {
                const response = await fetch(`http://localhost:8000/api/coures/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setCourses(courses.filter((course) => course._id !== id));
                } else {
                    throw new Error('Failed to delete course');
                }
            } catch (error) {
                console.error('Error deleting course:', error);
            }
        }
    };

    const columns = [
        { field: 'courseId', headerName: 'Course ID', flex: 1 },
        { field: 'courseName', headerName: 'Course Name', flex: 1 },
        { field: 'duration', headerName: 'Duration', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
             <>
             
           
                <IconButton
                    onClick={() => handleDeleteCourse(params.row._id, params.row.courseName)}
                    aria-label="delete"
                    style={{ color: '#7f0220' }}
                >
                    <DeleteIcon />
                </IconButton>
            
            </>
            )
        }
    ];

    // Define a custom getRowId function
    const getRowId = (row) => row._id;

    return (
        <MainCard
            title="View Course"
            secondary={
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    component={Link}
                    to="/dashboard/courseform"
                    sx={{ ml: 1.5 }}
                >
                    Add New Course
                </Button>
            }
        >
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={courses}
                    columns={columns}
                    pageSize={5}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection={false}
                    disableSelectionOnClick
                    getRowId={getRowId}
                />
            </div>
        </MainCard>
    );
}

export default ViewCourse;
