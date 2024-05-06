import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, CardActions, Divider, InputAdornment, Typography, useMediaQuery, Snackbar } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssignmentIcon from '@mui/icons-material/Assignment';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import WidthFullIcon from '@mui/icons-material/WidthFull';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

export default function StudentForm() {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [courses, setCourses] = useState([]);
  
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        fetchCourses();
       
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/coures');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };
   

    const handleOpenSnackbar = (message) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const initialValues = {
        name: '',
        nic: '',
        dob: '',
        email: '',
        address: '',
        contact_no: '',
        date: '',
        course: '',
       
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        nic: Yup.string().required('NIC is required'),
        dob: Yup.date().required('Date of Birth is required'),
        email: Yup.string().required('Emailis required'),
        address: Yup.string().required('Address is required'),
        contact_no: Yup.string().required('Contact Number is required'),
        date: Yup.date().required('Date is required'),
        course: Yup.string().required('Course is required'),
       
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post('http://localhost:8000/api/Student', values);
            console.log(res.data);
            resetForm();
            handleOpenSnackbar('Student added successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <MainCard title="Add New Student" >
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ errors, touched, handleChange, handleSubmit, isSubmitting, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" justifyContent="center">
                            <Grid container sx={{ p: 3 }} spacing={matchDownSM ? 0 : 2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                      Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="name"
                                        type="text"
                                        value={values.name}
                                        onChange={handleChange}
                                        error={Boolean(touched.name && errors.name)}
                                        helperText={touched.name && errors.name}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                       NIC
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="nic"
                                        type="text"
                                        value={values.nic}
                                        onChange={handleChange}
                                        error={Boolean(touched.nic && errors.nic)}
                                        helperText={touched.nic && errors.nic}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <WidthFullIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                      Date of Birth
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="dob"
                                        type="date"
                                        value={values.dob}
                                        onChange={handleChange}
                                        error={Boolean(touched.dob && errors.dob)}
                                        helperText={touched.dob && errors.dob}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <DateRangeIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                      Email
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange}
                                        error={Boolean(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h5" component="h5">
                                       Address
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="address"
                                        type="text"
                                        value={values.address}
                                        onChange={handleChange}
                                        error={Boolean(touched.address && errors.address)}
                                        helperText={touched.address && errors.address}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HomeIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                      Date
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="date"
                                        type="date"
                                        value={values.date}
                                        onChange={handleChange}
                                        error={Boolean(touched.date && errors.date)}
                                        helperText={touched.date && errors.date}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <DateRangeIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                       Conatact  Number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="contact_no"
                                        type="text"
                                        value={values.contact_no}
                                        onChange={handleChange}
                                        error={Boolean(touched.contact_no && errors.contact_no)}
                                        helperText={touched.contact_no && errors.contact_no}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CallIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Select Course
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="course"
                                        select
                                        value={values.course}
                                        onChange={handleChange}
                                        error={Boolean(touched.course && errors.course)}
                                        helperText={touched.course && errors.course}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AssignmentIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    >
                                        <MenuItem value="">Select Course</MenuItem>
                                        {courses.map((course) => (
                                            <MenuItem key={course._id} value={course._id}>
                                                {course.courseName}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                               
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 2 }} />
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                    {isSubmitting ? <CircularProgress size={20} color="inherit" /> : 'Add Batch'}
                                </Button>
                            </CardActions>
                        </Grid>
                    </form>
                )}
            </Formik>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
            </MainCard>
        </>
    );
}
