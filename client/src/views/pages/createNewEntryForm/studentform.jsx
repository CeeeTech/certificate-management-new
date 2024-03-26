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

export default function StudentForm() {
    const theme = useTheme();
    //const { user } = useAuthContext();
    //const { logout } = useLogout();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [courses] = useState([]);
    // const [statuses, setStatuses] = useState([]);
    const [batches, setBatches] = useState([]); 

    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];

    const [StudentData] = useState({
        name: '',
        nic: '',
        dob: '',
        email: '',
        contact_no: '',
        address: '',
        date: formattedDate,
        scheduled_to: '',
        course: '',
        batch: ''
    });

    const fetchCourses = async () => {};

    const fetchBatches = async () => {};

    const fetchStatuses = async () => {};

    useEffect(() => {
        fetchCourses();
        fetchBatches();
        fetchStatuses();
        console.log(formattedDate);
    }, []);

    const handleSubmit = async (values) => {
        console.log('Submitting form with values:', values);
        // let student_id = '';
    };

    return (
        <>
            <MainCard title="Add New Student">
                <Formik
                    initialValues={{
                        name: StudentData.name || '',
                        nic: StudentData.nic || '',
                        address: StudentData.address || '',
                        contact_no: StudentData.contact_no || '',
                        email: StudentData.email || '',
                        course: StudentData.course || '',
                        date: StudentData.date || '',
                        batch: StudentData.batch || '',
                        dob: StudentData.dob || '',
                        scheduled_to: StudentData.scheduled_to || ''
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
                        <form>
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
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
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
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nic}
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
                                            Date of birth
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="dob"
                                            type="date"
                                            onChange={handleChange}
                                            value={values.dob}
                                            onBlur={handleBlur}
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
                                            // label="First Name"
                                            margin="normal"
                                            name="email"
                                            type="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.email}
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
                                            // label="First Name"
                                            margin="normal"
                                            name="address"
                                            type="text"
                                            onChange={handleChange}
                                            value={values.address}
                                            onBlur={handleBlur}
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
                                            Contact Number
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="contact_no"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contact_no}
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
                                            Date
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="date"
                                            type="date"
                                            onChange={handleChange}
                                            value={values.date}
                                            onBlur={handleBlur}
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
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Select Batch
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="batch"
                                            select
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            SelectProps={{ native: true }}
                                            value={values.batch}
                                            error={Boolean(touched.batch && errors.batch)}
                                            helperText={touched.batch && errors.batch}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AssignmentIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        >
                                            {values.batch == '' ? (
                                                <option value="" disabled>
                                                    Select Batch
                                                </option>
                                            ) : (
                                                <></>
                                            )}
                                            {batches && batches.length > 0 ? (
                                                batches.map((option) => (
                                                    <option key={option._id} value={option.name}>
                                                        {option.name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="" disabled>
                                                    No Batches available
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
                                        Add Student
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
