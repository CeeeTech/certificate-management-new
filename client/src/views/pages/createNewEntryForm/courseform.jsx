import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, CardActions, Divider, InputAdornment, Typography, useMediaQuery, Snackbar } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import WidthFullIcon from '@mui/icons-material/WidthFull';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
const CourseForm = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const initialValues = {
        courseName: '',
        courseId: '',
        duration: '',
        description: ''
    };

    const validationSchema = Yup.object().shape({
        courseName: Yup.string().required('Course Name is required'),
        courseId: Yup.string().required('Course ID is required'),
        duration: Yup.string().required('Duration is required'),
        description: Yup.string().required('Description is required')
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleOpenSnackbar = (message) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post('http://localhost:8000/api/coures', values);
            console.log(res.data);
            resetForm();
            handleOpenSnackbar('Course added successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <MainCard
            title="Add New Course"
         
        >
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" justifyContent="center">
                            <Grid container sx={{ p: 3 }} spacing={matchDownSM ? 0 : 2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Course Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        type="text"
                                        name="courseName"
                                        value={values.courseName}
                                        onChange={handleChange}
                                        error={touched.courseName && Boolean(errors.courseName)}
                                        helperText={touched.courseName && errors.courseName}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SchoolIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Course ID
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        type="text"
                                        name="courseId"
                                        value={values.courseId}
                                        onChange={handleChange}
                                        error={touched.courseId && Boolean(errors.courseId)}
                                        helperText={touched.courseId && errors.courseId}
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
                                        Duration
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        type="text"
                                        name="duration"
                                        value={values.duration}
                                        onChange={handleChange}
                                        error={touched.duration && Boolean(errors.duration)}
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
                                        Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        type="text"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        error={touched.description && Boolean(errors.description)}
                                        helperText={touched.description && errors.description}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <DescriptionIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 2 }} />
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                    {isSubmitting ? <CircularProgress size={20} color="inherit" /> : 'Add Course'}
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
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success"   sx={{ backgroundColor: '#7f0220', color:'white' }} >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </MainCard>
    );
};

export default CourseForm;
