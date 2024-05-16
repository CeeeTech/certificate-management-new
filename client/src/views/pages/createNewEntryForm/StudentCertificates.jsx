import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    CardActions,
    CircularProgress,
    Snackbar,
    InputAdornment,
    useMediaQuery
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarRateIcon from '@mui/icons-material/StarRate';
import MuiAlert from '@mui/material/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'utils/axios';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import Autocomplete from '@mui/material/Autocomplete';
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router';
import LooksOneIcon from '@mui/icons-material/LooksOne';
const StudentCertificates = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const initialValues = {
        sName: '',
        markValue: '',
        result: ''
    };
    const location = useLocation()
    const [Cname, setCname] = useState('')
    const [students, setStudents] = useState([]);
    const [Description,setDescription] = useState('')
    const [markType,setmarkType] = useState('')
    const [Level, setLevel] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        fetchStudents();
        console.log(location);
            setCname(location.state.Cname);
            setDescription(location.state.Description)
            setmarkType(location.state.markType)
            setLevel(location.state.Level)
    }, [location]);
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
        sName: Yup.string().required('Student is required'),
        markValue: Yup.string().required('Mark Value is required'),
        result: Yup.string().required('Result is required')
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post('http://localhost:8000/api/StudentCertificates', values);
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
                                        value={Cname}
                                        disabled
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
                                        value={Description}
                                        disabled
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
                                         Mark Type
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="markType"
                                        select
                                        value={markType}
                                        disabled
                                        onChange={handleChange}
                                        error={Boolean(touched.markType && errors.markType)}
                                        helperText={touched.markType && errors.markType}
                                        InputProps={{
                                            startAdornment: <StarRateIcon />
                                        }}
                                    >
                                       
                                        <MenuItem value="Credits">Credits</MenuItem>
                                        <MenuItem value="Marks">Marks</MenuItem>
                                        <MenuItem value="Grade">Grade</MenuItem>
                                    </TextField>
                                </Grid>

                                
                                {markType === 'Grade' && (
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                           Grading
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
                                         
                                            <MenuItem value="A+">A+</MenuItem>
                                            <MenuItem value="A">A</MenuItem>
                                            <MenuItem value="A-">A-</MenuItem>
                                            <MenuItem value="B+">B+</MenuItem>
                                            <MenuItem value="B">B</MenuItem>
                                            <MenuItem value="B-">B-</MenuItem>
                                            <MenuItem value="C+">C+</MenuItem>
                                            <MenuItem value="C">C</MenuItem>
                                            <MenuItem value="C-">C-</MenuItem>
                                            <MenuItem value="D+">D+</MenuItem>
                                            <MenuItem value="D">D</MenuItem>
                                            <MenuItem value="D_">D-</MenuItem>
                                            <MenuItem value="E">E</MenuItem>
                                           
                                            
                                        </TextField>
                                    </Grid>
                                )}

                                {markType === 'Marks' && (
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Mark Value
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="markValue"
                                            type="number"
                                            value={values.markValue}
                                            onChange={handleChange}
                                            error={Boolean(touched.markValue && errors.markValue)}
                                            helperText={touched.markValue && errors.markValue}
                                            inputProps={{ min: 0, max: 100, style: { appearance: 'none' } }}
                                        />
                                    </Grid>
                                )}
                         
                                 {markType === 'Credits' && (
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Credits Value
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="markValue"
                                            type="number"
                                            value={values.markValue}
                                            onChange={handleChange}
                                            error={Boolean(touched.markValue && errors.markValue)}
                                            helperText={touched.markValue && errors.markValue}
                                            inputProps={{ min: 0, max: 200, style: { appearance: 'none' } }}
                                        />
                                    </Grid>
                                )}

<Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Level
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="Level"
                                        select
                                        disabled
                                        value={Level}
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
                                       <MenuItem value="9">8</MenuItem>
                                       <MenuItem value="10">10</MenuItem>
                                       
                                       
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Select Student
                                    </Typography>
                                    <Autocomplete
                                        fullWidth
                                        margin="normal"
                                        id="sName"
                                        options={students}
                                        getOptionLabel={(option) => option.name}
                                        value={students.find((student) => student._id === values.sName) || null}
                                        onChange={(event, newValue) => {
                                            handleChange('sName')(newValue ? newValue._id : '');
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                {...params}
                                                error={Boolean(touched.sName && errors.sName)}
                                                helperText={touched.sName && errors.sName}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PersonIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5" component="h5">
                                        Pass or Fail
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        name="result"
                                        select
                                        value={values.result}
                                        onChange={handleChange}
                                        error={Boolean(touched.result && errors.result)}
                                        helperText={touched.result && errors.result}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <StarRateIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    >
                                        <MenuItem value="Pass">Pass</MenuItem>
                                        <MenuItem value="Fail">Fail</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <CardActions sx={{ justifyContent: 'flex-end', mt: 2 }}>
                                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                    {isSubmitting ? <CircularProgress size={20} color="inherit" /> : 'Add Student'}
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
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success" sx={{ backgroundColor: '#7f0220', color:'white' }}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </MainCard>
    );
};

export default StudentCertificates;


