import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
// import { Form, Button } from 'react-bootstrap';
import {MDBContainer, MDBCol, MDBRow,MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import Spinner from './Spinner';


const LoginForm = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = (id) => {
      
    // //   setOnscreen(id)
    //   setShow(true);

    
    // }

    const navigate = useNavigate();

    const [email,setEmail]=useState("")
    const [password,setPasssword]=useState("")
    const [isloading,setIsloading]=useState(false)

    const handleSubmit =()=>{
        if (email==="derrickdadson14@gmail.com" && password==="Kwamena20"){
            setIsloading(true);
            setShow(true);

            setTimeout(() => {                
                navigate('/Dashboard', { replace: true });
                setIsloading(false);
              }, 3000);
        }
    }
 
    return (
        <div style={{color:'black'}}>
            <MDBContainer fluid className="p-3 my-5 h-custom">        
          <MDBRow>
    
            <MDBCol col='10' md='6'>
              <img src="https://pbs.twimg.com/media/Fo3b_YzXEAoJhI8?format=png&name=360x360" className="img-fluid" alt='Logo'/>
            </MDBCol>
    
            <MDBCol col='4' md='6'>
             {/* {isloading?<Spinner/>:<></>} */}

              <MDBInput onChange={(e)=>setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput onChange={(e)=>setPasssword(e.target.value)}  wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
    
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
    
              <div className='text-center text-md-start mt-4 pt-2'>
                <Button onClick={handleSubmit} className="btn btn-primary" size='lg'>Login</Button>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
              </div>
    
            </MDBCol>
    
          </MDBRow>
    
          <div>
          <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    {/* <Modal.Title>Ready to Upvote</Modal.Title> */}
  </Modal.Header>
  <Modal.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {isloading?<Spinner />:<></>}
  </Modal.Body>
  <Modal.Footer>
    {/* <button className='btn btn-primary' onClick={()=>handleUpvote(onscreenid)}>
      Upvote
    </button> */}
  </Modal.Footer>
</Modal>
    </div>
    
        </MDBContainer>

        



        </div>
        
      );
}

export default LoginForm;