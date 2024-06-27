import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function Rigistering() {
  const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    age: yup.number().required('Age is required').positive().integer(),
    email: yup.string().min(15, "Can't be less than 15 characters").email('Please provide a valid email').required('Email is required'),
    password: yup.string().min(8, "Password must be at least 8 characters").max(20, "Password can't be more than 20 characters").required('Password is required'),
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling form submission (e.g., API call) can be added here
    console.log(formik.values); // Log form values for now
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    
    <div className="container mt-5 loginstyle">
      <h1>Rigster form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-groupn ">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.firstName && formik.errors.firstName ? (
            <small className="text-danger">{formik.errors.firstName}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.lastName && formik.errors.lastName ? (
            <small className="text-danger">{formik.errors.lastName}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" className="form-control" id="age" name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.age && formik.errors.age ? (
            <small className="text-danger">{formik.errors.age}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? (
            <small className="text-danger">{formik.errors.email}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? (
            <small className="text-danger">{formik.errors.password}</small>
          ) : null}
        </div>
        <button type="submit" className="btn btn-info m-3">Register</button>
      </form>
    </div>
  );
}
