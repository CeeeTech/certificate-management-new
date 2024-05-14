import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Grid,
    Typography,
    TextField,
    Autocomplete,
    MenuItem,
    Button,
    CardActions,
    CircularProgress,
    Snackbar,
    InputAdornment,
    useMediaQuery,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarRateIcon from '@mui/icons-material/StarRate';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MuiAlert from '@mui/material/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';

const StudentCertificates = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const [initialValues, setInitialValues] = useState({
        Cname: location.state?.certificateName || '',
        Description: location.state?.description || '',
        markType: location.state?.markType || '',
        markValue: ''
    });
    const [students, setStudents] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        console.log(location.state); 
        setInitialValues({
            Cname: location.state?.certificateName || '',
            Description: location.state?.description || '',
            markType: location.state?.markType || '',
            markValue: ''
        });

        fetchStudents();
    }, [location.state]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Student');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleOpenSnackbar = (message) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

 
    const validationSchema = Yup.object().shape({
       
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
                {({ errors, touched, handleChange, handleSubmit, isSubmitting, values }) => (
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
                                            startAdornment: <DescriptionIcon />
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
                                        name="Description"
                                        type="text"
                                        value={values.Description}
                                        onChange={handleChange}
                                        error={Boolean(touched.Description && errors.Description)}
                                        helperText={touched.Description && errors.Description}
                                        InputProps={{
                                            startAdornment: <WorkspacePremiumIcon />
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Select Mark Type
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
                                            startAdornment: <StarRateIcon />
                                        }}
                                    >
                                        <MenuItem value="">Select Mark Type</MenuItem>
                                        <MenuItem value="Credits">Credits</MenuItem>
                                        <MenuItem value="Marks">Marks</MenuItem>
                                        <MenuItem value="Percentage">Grade</MenuItem>
                                    </TextField>
                                </Grid>
                                {values.markType === 'Credits' && (
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Select Mark Value
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="markValue"
                                            select
                                            value={values.markValue}
                                            onChange={handleChange}
                                            error={Boolean(touched.markValue && errors.markValue)}
                                            helperText={touched.markValue && errors.markValue}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <StarRateIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        >
                                            <MenuItem value="">Select Mark Value</MenuItem>
                                            <MenuItem value="A">A</MenuItem>
                                            <MenuItem value="A-">A-</MenuItem>
                                            <MenuItem value="A+">A+</MenuItem>
                                            <MenuItem value="B">B</MenuItem>
                                            <MenuItem value="B-">B-</MenuItem>
                                            <MenuItem value="B+">B+</MenuItem>
                                        </TextField>
                                    </Grid>
                                )}

                                {values.markType !== 'Credits' && (
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Mark Value
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="markValue"
                                            type="text"
                                            value={values.markValue}
                                            onChange={handleChange}
                                            error={Boolean(touched.markValue && errors.markValue)}
                                            helperText={touched.markValue && errors.markValue}
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Select Student
                                    </Typography>
                                    <Autocomplete
                                        fullWidth
                                        margin="normal"
                                        id="student"
                                        options={students}
                                        getOptionLabel={(option) => option.name}
                                        value={values.student ? students.find((student) => student._id === values.student) : null}
                                        onChange={(event, newValue) => {
                                            setFieldValue('student', newValue ? newValue._id : '');
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                error={Boolean(touched.student && errors.student)}
                                                helperText={touched.student && errors.student}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PeopleAltIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />{' '}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        pass or fail
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
                                        <MenuItem value="Credits">pass</MenuItem>
                                        <MenuItem value="Marks">fail</MenuItem>
                                    </TextField>
                                </Grid>
                            
                            </Grid>
                            <CardActions sx={{ justifyContent: 'flex-end', mt: 2 }}>
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
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </MainCard>
    );
};

export default StudentCertificates;
