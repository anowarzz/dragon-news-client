import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {

useTitle('Register')

 const [error, setError] = useState(''); 

 const [accepted, setAccepted] = useState(false)
 
const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext)

const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photo.value;
      


    createUser (email, password) 
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
            setError('')
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success('Please Verify Your Email Address')
        })
        .catch(e => { 
          console.error(e)
        setError(e.message)
        })

}

const handleAccepted = (event) => {
  setAccepted(event.target.checked);
}


const handleUpdateUserProfile = (name, photoURL) => {

const profile = {
  displayName : name,
  photoURL : photoURL 
}

  updateUserProfile(profile)
  .then(()=> {})
  .catch(e => console.error(e))
}



  const handleEmailVerification =  () =>{
    verifyEmail()
    .then(() => {})
    .catch(e => console.error(e))
  }



    return (
        <div>
               <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Enter Photo URL"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        onClick={handleAccepted} 
        label={<> Accept <Link to='/terms'> Terms & Conditions</Link> </>} />
      </Form.Group>


      <Button variant="primary" type="submit" disabled = {!accepted}>
        Register
      </Button>

      <Form.Text className="text-danger d-block fw-semibold fs-6">
          {error}
        </Form.Text>
    </Form>
        </div>
    );
};

export default Register;