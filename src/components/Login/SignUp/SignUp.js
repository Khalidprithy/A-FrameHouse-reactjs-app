import { Button } from "react-bootstrap";
import React, { useState } from "react";
import './SignUp.css'
import { Form } from "react-bootstrap";
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = e => {
        setName(e.target.value);
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }


    return (
        <div className="form-container">
            <p className="text-center mt-2">Sign in with</p>
            <div className="d-flex justify-content-center m-3">
                <BsFacebook className="mx-2 text-primary"></BsFacebook>
                <FcGoogle className="mx-2"></FcGoogle>
                <BsGithub className="mx-2"></BsGithub>
            </div>
            <hr />
            <h5 className="text-center">Sign Up</h5>
            <Form className="form-submit">
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already Registered?" />
                </Form.Group>
                <Button className="w-100" variant="success" type="submit">
                    Sign Up
                </Button>

            </Form>
        </div>

    );
};

export default SignUp;