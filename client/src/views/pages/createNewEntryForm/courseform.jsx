import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, CardActions, Divider, InputAdornment, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useEffect } from 'react';
import { useState } from 'react';
//import config from '../../../config';
//import { useAuthContext } from '../../../context/useAuthContext';
import PersonIcon from '@mui/icons-material/Person';
import WidthFullIcon from '@mui/icons-material/WidthFull';
//import * as Yup from 'yup';
import { Formik } from 'formik';
//import { useLogout } from '../../../hooks/useLogout';
//import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
import CircularProgress from '@mui/material/CircularProgress';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';


export default function CourseForm() {
    const theme = useTheme();
    //const { user } = useAuthContext();
    //const { logout } = useLogout();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [coursename, stecourseName] = useState('');
    const [course_id, setcourseId] = useState('');
    
    const [description, setdescription] = useState('');
    const [error, seterror] = useState('') 
    const [duration, setDuration] = useState('');
    // const [courses] = useState([]);
    // const [statuses, setStatuses] = useState([]);
    

    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];

    


    const [CourseData] = useState({
        coursename: '',
        course_id: '',
        duration: '',
        description:''
    });

    //const fetchCourses = async () => {};

    //const fetchBatches = async () => {};

    const fetchStatuses = async () => {};

    useEffect(() => {
        //fetchCourses();
       // fetchBatches();
        fetchStatuses();
        console.log(formattedDate);
    }, []);
     


    const handleDurationChange = (event) => {
      setDuration(event.target.value);
  };
  
    const handleDurationBlur = () => {
      //  validation or formatting if necessary
  };
  

    const handleSubmit = async (values) => {
        try {
            // Perform form submission or other operations
            console.log('Submitting form with values:', values);
            // Include duration in further processing
        } catch (error) {
            setError(error.message); // Update the error state with the error message
        }
    };

    return (
        <>
        {error && <div className="error-message">{error}</div>}
            <MainCard title="Add New Courses">
                <Formik
                    initialValues={{
                        coursename: CourseData.coursename || '',
                        course_id: CourseData.course_id || '',
                        duration: CourseData.duration || '',
                        description: CourseData.description || ''
                      
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
                        <form>
                            <Grid container direction="column" justifyContent="center">
                                <Grid container sx={{ p: 3 }} spacing={matchDownSM ? 0 : 2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                             Course Name
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="name"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.coursename}
                                            error={Boolean(touched.coursename && errors.coursename)}
                                            helperText={touched.coursename && errors.coursename}
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
                                            name="course_id"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.course_id}
                                            error={Boolean(touched.course_id && errors.course_id)}
                                            helperText={touched.course_id && errors.course_id}
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
                                            // label="First Name"
                                            margin="normal"
                                            name="duration"
                                            type="text"
                                            onChange={handleDurationChange}
                                            value={values.duration}
                                            onBlur={handleDurationBlur}
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

                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="h5" component="h5">
                                            Description
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="description"
                                            type="text"
                                            onChange={handleChange}
                                            value={values.description}
                                            onBlur={handleBlur}
                                            error={Boolean(touched.description && errors.description)}
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
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting}
                                        endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                                    >
                                        Add Course
                                    </Button>
                                </CardActions>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </MainCard>
        </>
    );
}
