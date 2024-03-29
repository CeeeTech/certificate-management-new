
import React from 'react';
import { 
  IconButton, 
  Typography, 
  Grid, 
  Table, 
  Box, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  Button,
  Paper,
  Container,
  InputBase,
  Divider,
  TextField,
  InputAdornment 

} from '@mui/material';

import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { alpha, styled } from '@mui/material/styles';
import { gridSpacing } from 'store/constant';
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

import { styled as mysysstyle } from '@mui/system';


const rows = [
  { id: 1, batchid: 'bt0002', course: 'Access', status: 'Processing' },
  { id: 2, batchid: 'bt00', course: 'Access', status: 'Processing' },
  // Add more rows as needed
];

const columns = [
  { field: 'batchid', headerName: 'Batch ID', width: 150 },
  { field: 'course', headerName: 'Course Name', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
];

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
  backgroundColor: '#F5F5F5',
}));

const StudentItemBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#E0E0E0',
  marginBottom: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
}));

const SearchBoxPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F5F5F5',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#C0C0C0',
  color: theme.palette.common.black,
}));

function SamplePage() {
  return (
    <MainCard
    title="Dashboard"
    secondary={
        // <Link to="/createNewReferralForm">
        //     <Button variant="contained" endIcon={<AddIcon style={{ fontSize: '23px' }} />}>
        //         Add New Refferal
        //     </Button>

            <Button
            variant="contained"
            color="primary"
            startIcon={<SchoolIcon />}
            component={Link}
            to="/certificates/certificates"
            sx={{ ml: 1.5 }} 
          >
            Certificates
          </Button>
        // </Link>
    }
>

    <Container maxWidth="lg">
    <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <HeaderPaper>
            <Typography variant="h1" gutterBottom>
              Welcome Miller
            </Typography>
            <Typography variant="body1">
              <b>Use this portal to refer potential students to us, we will pay you a Student fee if the student registers with us!</b>
            </Typography>
          </HeaderPaper> */}
     </Grid>     
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
                          secondary="1"
                          iconPrimary={HowToRegTwoToneIcon} 
                          color="#66001a  " />
              </Grid>
              <Grid item xs={12} md={3}>
              <RevenueCard
                                    primary="OnGoing Batches"
                                    secondary="0"
                                    iconPrimary={SignalCellularAltTwoToneIcon}
                                    color="#32000c "
                                />
              </Grid>
              <Grid item xs={12} md={3}>
              <RevenueCard 
                          primary=" Pending Certificates"  
                          secondary="0" 
                          iconPrimary={InsertDriveFileTwoToneIcon} 
                          color="#4c0113 " />
              </Grid>
              <Grid item xs={12} md={3}>
              <RevenueCard
                                    primary=" Certificate Issued"
                                    secondary="0"
                                    iconPrimary={CreditScoreTwoToneIcon}
                                    color="#98344c "
                                />
              </Grid>
              <Grid item xs={12} md={3}>
                
              </Grid>
            </Grid>
          </StudentBoxPaper>
        </Grid>

        
        <Grid item xs={12}>
          {/* <SearchBoxPaper>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <SearchIcon />
              </Grid>
              <Grid item xs={11}>
                <InputBase
                  placeholder="Search for Students"
                  inputProps={{ 'aria-label': 'search Students' }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </SearchBoxPaper> */}

<Grid item xs={8} sm={5}>
                            <Typography variant="h5" component="h5">
                                Search
                            </Typography>
                            <TextField
                                fullWidth
                                // label="First Name"
                                margin="normal"
                                name="lead Report No"
                                type="text"
                                SelectProps={{ native: true }}
                                defaultValue=""
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
  <Link to="/batchStudentList">
    <ActionButton variant="contained" endIcon={<AddIcon style={{ fontSize: '23px' }} />} fullWidth>
    Batch student List 
    </ActionButton>
    </Link> 
  </Grid>
        <Grid item xs={12}>
          {/* <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Students</StyledTableCell>
                  <StyledTableCell>Course Name</StyledTableCell>
                  <StyledTableCell>Mobile Number</StyledTableCell>
                  <StyledTableCell>Earnings/Potential Earnings (LKR)</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Steav</TableCell>
                  <TableCell>Access</TableCell>
                  <TableCell>0445548964</TableCell>
                  <TableCell>20000</TableCell>
                  <TableCell>Processing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Miller</TableCell>
                  <TableCell>Access</TableCell>
                  <TableCell>0414188964</TableCell>
                  <TableCell>20000</TableCell>
                  <TableCell>Processing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer> */}

          {/* Adding the DataTable component here */}
          <div style={{ height: 600, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelectio />
                        </div>
        </Grid>
      </Grid>
    </Container>
    </MainCard>
  );
}

export default SamplePage;

