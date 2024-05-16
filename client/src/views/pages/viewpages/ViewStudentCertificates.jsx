
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from 'axios';

const ViewStudentCertificates = () => {
    const [certificates, setCertificates] = useState([]);
   const  navigate = useNavigate()
    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/StudentCertificates');
                setCertificates(response.data);
            } catch (error) {
                console.error('Error fetching certificates:', error);
            }
        };

        fetchCertificates();
    }, []);

    const handleDeleteCertificate = async (id, _id) => {
        if (window.confirm(`Are you sure you want to delete Certificate ${_id}?`)) {
            try {
                await axios.delete(`http://localhost:8000/api/StudentCertificates/${id}`);
                setCertificates(certificates.filter((certificate) => certificate._id !== id));
            } catch (error) {
                console.error('Error deleting certificate:', error);
            }
        }
    };

    return (
        <MainCard
            title="View Studnet Certificates"
            secondary={
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    component={Link}
                    to="/certificates"
                    sx={{ ml: 1.5 }}
                >
                    Create New Certificate
                </Button>
            }
        >
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={certificates}
                    columns={[
                        { field: '_id', headerName: 'Certificate ID', flex: 1 },
                        { field: 'sName', headerName: 'Student Name', flex: 1 },
                        { field: 'markValue', headerName: 'Certificate Name', flex: 1 },
                        { field: 'result', headerName: 'Description', flex: 1 },
                        
                        {
                            field: 'action',
                            headerName: 'Action',
                            flex: 1,
                            renderCell: (params) => (
                                <IconButton
                                    onClick={() => handleDeleteCertificate(params.row._id, params.row._id)}
                                    aria-label="delete"
                                    style={{ color: '#7f0220' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            )
                        },
                      
                      
                    ]}
                    pageSize={5}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection={false}
                    disableSelectionOnClick
                    getRowId={(row) => row._id}
                />
            </div>
        </MainCard>
    );
};

export default ViewStudentCertificates;
