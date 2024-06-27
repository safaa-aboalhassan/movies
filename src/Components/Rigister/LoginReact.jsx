import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export default function LoginReact() {
  const validationSchema = yup.object({
    email: yup.string().min(15, "Can't be less than 15 characters").email('Please provide a valid email').required('This field is required'),
    password: yup.string().min(8, "Can't be less than 8 characters").max(20, "Can't be more than 20 characters").required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className=" container mt-5 loginstyle">
      <h1>login form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-control"
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-danger">{formik.errors.email}</small>
            ) : null}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="form-control"
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-danger">{formik.errors.password}</small>
            ) : null}
          </div>
          <button type="submit" className="btn btn-info m-3">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
