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
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';




export default function batchForm() {
    const theme = useTheme();
    //const { user } = useAuthContext();
    //const { logout } = useLogout();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [duration, setDuration] = useState('');
    const [courses] = useState([]);
    // const [statuses, setStatuses] = useState([]);

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };
    
      const handleDurationBlur = () => {
        // You can perform validation or formatting if necessary
    };

    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];

    const [batchData] = useState({
        batch_id: '',
        duration: '',
        numberOfStudents: '',
        startdate: formattedDate,
        enddate: formattedDate,
        course: ''
        
    });

    const fetchCourses = async () => {};

   // const fetchBranches = async () => {};

    const fetchStatuses = async () => {};

    useEffect(() => {
        fetchCourses();
        //fetchBranches();
        fetchStatuses();
        console.log(formattedDate);
    }, []);

    const handleSubmit = async (values) => {
        console.log('Submitting form with values:', values);
        // let batch_id = '';
    };

    return (
        <>
            <MainCard title="Add New batch">
                <Formik
                    initialValues={{
                        batch_id: batchData.batch_id || '',
                        duration: batchData.duration || '',
                        numberOfStudents: batchData.numberOfStudents || '',
                        course: batchData.course || '',
                        startdate: batchData.startdate || '',
                        enddate: batchData.enddate || ''
                        
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
                        <form>
                            <Grid container direction="column" justifyContent="center">
                                <Grid container sx={{ p: 3 }} spacing={matchDownSM ? 0 : 2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                        Batch ID
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="batch_id"
                                            name="batch_id"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.batch_id}
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
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                             Start Date
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="startdate"
                                            type="startdate"
                                            onChange={handleChange}
                                            value={values.startdate}
                                            onBlur={handleBlur}
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
                                            // label="First Name"
                                            margin="normal"
                                            name="enddate"
                                            type="enddate"
                                            onChange={handleChange}
                                            value={values.enddate}
                                            onBlur={handleBlur}
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
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.numberOfStudents}
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
                                            // label="First Name"
                                            margin="normal"
                                            name="course"
                                            select
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            SelectProps={{ native: true }}
                                            value={values.course}
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
                                            {values.course == '' ? (
                                                <option value="" disabled>
                                                    Select Course
                                                </option>
                                            ) : (
                                                <></>
                                            )}
                                            {courses && courses.length > 0 ? (
                                                courses.map((option) => (
                                                    <option key={option._id} value={option.name}>
                                                        {option.name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="" disabled>
                                                    No Courses available
                                                </option>
                                            )}
                                        </TextField>
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
                                        Add batch
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
