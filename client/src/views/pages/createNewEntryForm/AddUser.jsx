import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Button, Typography, FormControl, Select, MenuItem } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const DetailedRegistrationForm = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('');

    const formik = useFormik({
        initialValues: {
            f_name: '',
            S_name: '',
            Co_name: '',
            email: '',
            password: '',
            confirm_password: '',
            role: '',
        },
        validationSchema: Yup.object().shape({
            f_name: Yup.string().required('First name is required'),
            S_name: Yup.string().required('Second name is required'),
            Co_name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            role: Yup.string().required('User type is required'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await fetch('http://localhost:8000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Success:', data);
                navigate('/course/information');
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setSubmitting(false);
            }
        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
        formik.setFieldValue('role', event.target.value); // Update role field value
    };

    return (
        <Grid container spacing={gridSpacing} justifyContent="center">
            <Grid item xs={12} md={9} lg={7}>
                <MainCard title="Registration Form">
                    <Box sx={{ p: 4 }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                            <Grid container spacing={{ xs: 0, sm: 2 }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="f_name"
                                        label="First Name"
                                        value={formik.values.f_name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.f_name && Boolean(formik.errors.f_name)}
                                        helperText={formik.touched.f_name && formik.errors.f_name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="S_name"
                                        label="Second Name"
                                        value={formik.values.S_name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.S_name && Boolean(formik.errors.S_name)}
                                        helperText={formik.touched.S_name && formik.errors.S_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                        fullWidth
                                        id="Co_name"
                                        label={userType === 'admin' ? 'Organization Name' : 'Institution Name'}
                                        value={formik.values.Co_name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.Co_name && Boolean(formik.errors.Co_name)}
                                        helperText={formik.touched.Co_name && formik.errors.Co_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <FormControl fullWidth>
                                        <Select
                                            id="role"
                                            value={userType}
                                            onChange={handleUserTypeChange}
                                            onBlur={formik.handleBlur}
                                            displayEmpty
                                        >
                                            <MenuItem value="" disabled>
                                                Select User Type
                                            </MenuItem>
                                            <MenuItem value="admin">Admin</MenuItem>
                                            <MenuItem value="institution">Institution</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="confirm_password"
                                        label="Confirm Password"
                                        type="password"
                                        value={formik.values.confirm_password}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.confirm_password &&
                                            Boolean(formik.errors.confirm_password)
                                        }
                                        helperText={
                                            formik.touched.confirm_password &&
                                            formik.errors.confirm_password
                                        }
                                    />
                                </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={formik.isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DetailedRegistrationForm;
