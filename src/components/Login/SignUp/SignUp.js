import { Button } from "react-bootstrap";
import React from "react";
import './SignUp.css'
import { Form } from "react-bootstrap";
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {

    return (
        <div className="form-container">
            <h5 className="text-center">Sign Up</h5>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already Registered?" />
                    <Form.Label>Forgot Password?</Form.Label>
                </Form.Group>
                <Button className="w-100" variant="success" type="submit">
                    Sign Up
                </Button>
                <p className="text-center mt-2">Sign in with</p>
                <hr />
                <div className="d-flex justify-content-center m-3">
                    <BsFacebook className="mx-2 text-primary"></BsFacebook>
                    <FcGoogle className="mx-2"></FcGoogle>
                    <BsGithub className="mx-2"></BsGithub>
                </div>
            </Form>
        </div>

    );
};

export default SignUp;