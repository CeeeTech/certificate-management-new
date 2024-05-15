import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

function ViewBatch() {
    const [batches, setBatches] = useState([]);
    const [hoveredRowId, setHoveredRowId] = useState(null);
    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/batch');
                if (response.ok) {
                    const json = await response.json();
                    setBatches(json);
                } else {
                    throw new Error('Failed to fetch batches');
                }
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        };

        fetchBatches();
    }, []);

    const handleDeleteBatch = async (id, batchId) => {
        if (window.confirm(`Are you sure you want to delete batch ${batchId}?`)) {
            try {
                const response = await fetch(`http://localhost:8000/api/batch/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setBatches(batches.filter((batch) => batch._id !== id));
                } else {
                    throw new Error('Failed to delete batch');
                }
            } catch (error) {
                console.error('Error deleting batch:', error);
            }
        }
    };

    const columns = [
        { field: 'batch_id', headerName: 'Course ID', flex: 1 },
        { field: 'duration', headerName: 'Duration', flex: 1 },
        { field: 'numberOfStudents', headerName: 'Number of Students', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
                <IconButton
                    onClick={() => handleDeleteBatch(params.row._id, params.row.batch_id)}
                    aria-label="delete"
                    style={{ color: '#7f0220' }}
                >
                    <DeleteIcon />
                </IconButton>
            )
        }
    ];

    // Define a custom getRowId function
    const getRowId = (row) => row._id;

    return (
        <MainCard
            title="View Batch"
            secondary={
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    component={Link}
                    to="/dashboard/batchform"
                    sx={{ ml: 1.5 }}
                >
                    Add New Batch
                </Button>
            }
        >
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={batches}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection={false}
                    disableSelectionOnClick
                    getRowId={getRowId}
                />
            </div>
        </MainCard>
    );
}

export default ViewBatch;
