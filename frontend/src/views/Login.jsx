import React from 'react'
import { Helmet } from 'react-helmet'
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    
  }
  return (
    <>
      <Helmet>
        <title>LOGIN</title>
        <meta name="description" content="laravel-react crud login page" />
      </Helmet>
      <div className="form-wrapper">
        <div className="card p-4 p-md-5 border-0" style={{ maxWidth: '500px', width: '100%' }}>
          <form onSubmit={handleLogin}>
            <MDBInput className='mb-4' type='text' label='Username' />
            <MDBInput className='mb-4' type='password' label='Password' />

            <MDBRow className='mb-4'>
              <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
              </MDBCol>
              <MDBCol>
                <a href='#!'>Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' block>
              Sign in
            </MDBBtn>
          </form>
        </div>
      </div>
    </>
  )
}
// const styles = StyleSheet.create({
// form:{
// }
// })
export default Login
