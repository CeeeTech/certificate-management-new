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
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';

const BatchForm = () => {
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
        batch_id: '',
        duration: '',
        numberOfStudents: '',
        startdate: '',
        enddate: '',
        course: ''
    };

    const validationSchema = Yup.object().shape({
        batch_id: Yup.string().required('Batch ID is required'),
        duration: Yup.string().required('Duration is required'),
        numberOfStudents: Yup.number().required('Number of Students is required'),
        startdate: Yup.date().required('Start Date is required'),
        enddate: Yup.date().required('End Date is required'),
        course: Yup.string().required('Course is required')
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post('http://localhost:8000/api/batch', values);
            console.log(res.data);
            resetForm();
            handleOpenSnackbar('Batch added successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <MainCard title="Add New Batch">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ errors, touched, handleChange, handleSubmit, isSubmitting, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" justifyContent="center">
                            <Grid container sx={{ p: 3 }} spacing={matchDownSM ? 0 : 2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Batch ID
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="batch_id"
                                        type="text"
                                        value={values.batch_id}
                                        onChange={handleChange}
                                        error={Boolean(touched.batch_id && errors.batch_id)}
                                        helperText={touched.batch_id && errors.batch_id}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <GroupIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Duration
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="duration"
                                        type="text"
                                        value={values.duration}
                                        onChange={handleChange}
                                        error={Boolean(touched.duration && errors.duration)}
                                        helperText={touched.duration && errors.duration}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                     <ScheduleIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Start Date
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="startdate"
                                        type="date"
                                        value={values.startdate}
                                        onChange={handleChange}
                                        error={Boolean(touched.startdate && errors.startdate)}
                                        helperText={touched.startdate && errors.startdate}
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
                                        End Date
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="enddate"
                                        type="date"
                                        value={values.enddate}
                                        onChange={handleChange}
                                        error={Boolean(touched.enddate && errors.enddate)}
                                        helperText={touched.enddate && errors.enddate}
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
                                        Number of Students
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="numberOfStudents"
                                        type="number"
                                        value={values.numberOfStudents}
                                        onChange={handleChange}
                                        error={Boolean(touched.numberOfStudents && errors.numberOfStudents)}
                                        helperText={touched.numberOfStudents && errors.numberOfStudents}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PeopleAltIcon />
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
    );
};

export default BatchForm;
