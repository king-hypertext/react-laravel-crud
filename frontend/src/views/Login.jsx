import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import DateTime from '../components/DateTime';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, usernameValue] = useState('')
  const [password, passwordValue] = useState('')
  const [loading, setLoading] = useState('d-none')
  const [buttonText, setButtonText] = useState('login')
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading('')
    setButtonText('authenticating')
    console.log(username, password);
  }
  return (
    <>
      <Helmet>
        <title>React-Laravel | LOGIN</title>
        <meta name="description" content="laravel-react crud login page" />
      </Helmet>
      <div className="form-wrapper">
        <div className="card p-4 p-md-5 border-0" style={{ maxWidth: '500px', width: '100%' }}>
          <form onSubmit={handleLogin}>
            <MDBInput required title='Username is required' onChange={e => { usernameValue(e.target.value) }} className='mb-4' type='text' label='Username' />
            <MDBInput required title='Enter your password' onChange={e => { passwordValue(e.target.value) }} className='mb-4' type='password' label='Password' />
            <MDBBtn type='submit' block>
              <span className={`spinner-border spinner-border-sm ${loading} me-2`} role="status" aria-hidden="true"></span>
              {buttonText}
            </MDBBtn>
          </form>
          <div className='my-4 d-flex justify-content-center '>
            <DateTime date time />
          </div>
          <Link to={'forgot-password'} className='text-center'>Forgot password?</Link>
        </div>
      </div>
    </>
  )
}
export default Login
