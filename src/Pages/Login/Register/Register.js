import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {


const {createUser} = useContext(AuthContext)

const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photo.value;
      
 console.log(name, email, photoURL, password);


    createUser (email, password) 
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
        })
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
     
      <Button variant="primary" type="submit">
        Register
      </Button>

      {/* <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> */}
    </Form>
        </div>
    );
};

export default Register;