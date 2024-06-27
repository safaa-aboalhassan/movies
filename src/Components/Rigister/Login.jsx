import React, { useEffect, useState } from 'react';

export default function Login() {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const [errorlist, setErrorList] = useState({});

  const handleFormMail = (e) => {
    setFormInput({ ...formInput, email: e.target.value });
  }

  const handleFormPass = (e) => {
    setFormInput({ ...formInput, password: e.target.value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorList(validatinInput(formInput));
  }

  const validatinInput = (input) => {
    let errors = {};
    if (!input.email || input.email.length < 10) {
      errors.email = "Email should be at least 10 characters long.";
    }
    if (!input.password || input.password.length < 8) {
      errors.password = "Password should be at least 8 characters long.";
    }
    return errors;
  }

  useEffect(() => {
    console.log(formInput, errorlist);
  }, [formInput, errorlist]);

  return (
    <div className=''>
      <div className="container mt-5 ">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group ">
            <label>Email</label>
            <input type="email" name='email' className="form-control" value={formInput.email} onChange={handleFormMail} />
            {errorlist && errorlist.email ? (<small className='text-danger'>{errorlist.email}</small>) : null}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' className="form-control" value={formInput.password} onChange={handleFormPass} />
            {errorlist && errorlist.password ? (<small className='text-danger'>{errorlist.password}</small>) : null}
          </div>
          <button type="submit" className="btn btn-info m-3">Log In</button>
        </form>
      </div>
    </div>
  )
}
