import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, CardActions, Divider, InputAdornment, Typography, useMediaQuery, Snackbar, MenuItem } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIcon from '@mui/icons-material/Assignment';

import axios from 'utils/axios';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MuiAlert from '@mui/material/Alert';
import DescriptionIcon from '@mui/icons-material/Description';
import StarRateIcon from '@mui/icons-material/StarRate';
import LooksOneIcon from '@mui/icons-material/LooksOne';
const CertificateForm = () => {
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
        Cname: '',
        course: '',
        Description: '',
        markType: '',
        Level:""
    };
    
    const validationSchema = Yup.object().shape({
        Cname: Yup.string().required('Certificate name is required'),
        course: Yup.string().required('Course is required'),
        Description: Yup.string().required('Description is required'),
        markType: Yup.string().required('Mark Type is required'),
        Level: Yup.string().required(' Level is required')
    });
    
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post('http://localhost:8000/api/certificates', values);
            console.log(res.data);
            resetForm();
            handleOpenSnackbar('Certificate added successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <MainCard>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ errors, touched, handleChange, handleSubmit, isSubmitting, values, }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" justifyContent="center">
                            <Grid container sx={{ p: 3 }} spacing={matchDownSM ? 0 : 2}>
                              
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Certificate Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="Cname"
                                        type="text"
                                        value={values.Cname}
                                        onChange={handleChange}
                                        error={Boolean(touched.Cname && errors.Cname)}
                                        helperText={touched.Cname && errors.Cname}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <WorkspacePremiumIcon />
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

                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                    Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="Description"
                                        type="text"
                                        value={values.Description}
                                        onChange={handleChange}
                                        error={Boolean(touched.Description && errors.Description)}
                                        helperText={touched.Description && errors.Description}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <DescriptionIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                              
                                 <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                         Mark Type
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="markType"
                                        select
                                        value={values.markType}
                                        onChange={handleChange}
                                        error={Boolean(touched.markType && errors.markType)}
                                        helperText={touched.markType && errors.markType}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <StarRateIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    >
                                       
                                     
                                       <MenuItem value="Credits">Credits</MenuItem>
                                        <MenuItem value="Marks">Marks</MenuItem>
                                        <MenuItem value="Grade">Grade</MenuItem>
                                    </TextField>
                                </Grid>
                                 <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Level
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="Level"
                                        select
                                        value={values.Level}
                                        onChange={handleChange}
                                        error={Boolean(touched.Level && errors.Level)}
                                        helperText={touched.Level && errors.Level}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LooksOneIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    >
                                       
                                     
                                       <MenuItem value="1">1</MenuItem>
                                       <MenuItem value="2">2</MenuItem>
                                       <MenuItem value="3">3</MenuItem>
                                       <MenuItem value="4">4</MenuItem>
                                       <MenuItem value="5">5</MenuItem>
                                       <MenuItem value="6">6</MenuItem>
                                       <MenuItem value="7">7</MenuItem>
                                       <MenuItem value="8">8</MenuItem>
                                       <MenuItem value="9">9</MenuItem>
                                       <MenuItem value="10">10</MenuItem>
                                       
                                       
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Divider sx={{ mt: 3, mb: 2 }} />
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                    {isSubmitting ? <CircularProgress size={20} color="inherit" /> : 'Add Certificate'}
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

export default CertificateForm;