import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="form-container">
            <h5 className="text-center">Login</h5>
            <hr />
            <p className="text-center mt-2">Sign in with</p>
            <div className="d-flex justify-content-center m-3">
                <BsFacebook className="mx-2 text-primary"></BsFacebook>
                <FcGoogle className="mx-2"></FcGoogle>
                <BsGithub className="mx-2"></BsGithub>
            </div>
            <Form>
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
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                    <p><Link to='/signup'>Create an account</Link></p>
                    <Form.Label>Forgot Password?</Form.Label>
                </Form.Group>
                <Button className="w-100" variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </div>

    );
};

export default Login;