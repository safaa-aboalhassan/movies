import React, { useEffect, useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User logged in:', { email, password });
  };
  return (
   <>
   <div className='Appstyle'>
   <div className="container mt-5 ">
     
      <form onSubmit={handleSubmit} className='Appstyle'>
        <div className="form-group Appstyle">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-info m-3">Log In</button>
      </form>
    </div>
    </div>
   </>
  )
}
