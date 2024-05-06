import React, { useState, useEffect } from 'react';
import {
    IconButton,
    Typography,
    Grid,
       Box,
 

   
    TableCell,

    Button,
    Paper,
    Container,

} from '@mui/material';

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { alpha, styled } from '@mui/material/styles';

import RevenueCard from 'ui-component/cards/RevenueCard';

import MainCard from 'ui-component/cards/MainCard';
import AddIcon from '@mui/icons-material/Add';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import SchoolIcon from '@mui/icons-material/School';
import SignalCellularAltTwoToneIcon from '@mui/icons-material/SignalCellularAltTwoTone';

import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';

//import { Typography, TextField, InputAdornment } from '@mui/material';

//import { Search as SearchIcon } from '@mui/icons-material';
import { styled as myStyled } from '@mui/material/styles'; // Import with alias


const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    ['& .${gridClasses.row}.even']: {
        // Corrected syntax
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
                ),
                '@media (hover: none)': {
                    backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity)
                }
            }
        }
    }
}));
// const HeaderPaper = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius,
//   marginBottom: theme.spacing(3),
// }));

const HeaderPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary[800],
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3)
}));

const StudentBoxPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    backgroundColor: '#F5F5F5'
}));

const StudentItemBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#E0E0E0',
    marginBottom: theme.spacing(2)
}));

const ActionButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius
}));

const SearchBoxPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F5F5F5',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#C0C0C0',
    color: theme.palette.common.black
}));

function SamplePage() {
    const [registrationCount, setRegistrationCount] = useState(0);
    const [batchCount, setBatchCount] = useState(0);
    useEffect(() => {
        fetchRegistrationCount();
    }, []);

    const fetchRegistrationCount = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/student/count');
            const data = await response.json();
            setRegistrationCount(data.count);

            const batchResponse = await fetch('http://localhost:8000/api/batch/count');
            const batchData = await batchResponse.json();
            setBatchCount(batchData.count);
        } catch (error) {
            console.error('Error fetching registration count:', error);
        }
    };
    return (
        <MainCard
            title="Dashboard"
            secondary={
             
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SchoolIcon />}
                    component={Link}
                    to="/certificates"
                    sx={{ ml: 1.5 }}
                >
                    Certificates
                </Button>
               
            }
        >
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                 
                    <Grid container spacing={2}>
                        {/* Secondary ={ */}
                        <Grid item xs={12} md={4}>
                            <Link to="/dashboard/studentform">
                                <ActionButton variant="contained" endIcon={<AddIcon style={{ fontSize: '23px' }} />} fullWidth>
                                    Register New Student
                                </ActionButton>
                            </Link>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Link to="/dashboard/batchform">
                                <ActionButton variant="contained" endIcon={<AddIcon style={{ fontSize: '23px' }} />} fullWidth>
                                    Create New Batch
                                </ActionButton>
                            </Link>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Link to="/dashboard/courseform">
                                <ActionButton variant="contained" endIcon={<AddIcon style={{ fontSize: '23px' }} />} fullWidth>
                                    Create New Course
                                </ActionButton>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <StudentBoxPaper>
                            <Typography variant="h6"></Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <RevenueCard
                                        primary="Registration"
                                        secondary={registrationCount.toString()}
                                        iconPrimary={HowToRegTwoToneIcon}
                                        color="#66001a"
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <RevenueCard
                                        primary="OnGoing Batches"
                                        secondary={batchCount.toString()}
                                        iconPrimary={SignalCellularAltTwoToneIcon}
                                        color="#32000c"
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <RevenueCard
                                        primary=" Pending Certificates"
                                        secondary="0"
                                        iconPrimary={InsertDriveFileTwoToneIcon}
                                        color="#4c0113 "
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <RevenueCard
                                        primary=" Certificate Issued"
                                        secondary="0"
                                        iconPrimary={CreditScoreTwoToneIcon}
                                        color="#98344c "
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}></Grid>
                            </Grid>
                        </StudentBoxPaper>
                    </Grid>

                    <Grid item xs={12}>
       
                    </Grid>
             
                </Grid>
            </Container>
        </MainCard>
    );
}

export default SamplePage;
