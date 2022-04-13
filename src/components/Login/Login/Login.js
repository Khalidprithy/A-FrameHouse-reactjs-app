import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate('/home')
    }

    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

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
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <p className="text-danger">{error?.message}</p>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                    <p><Link to='/signup'>Create an account</Link></p>
                    <Form.Label>Forgot Password?</Form.Label>
                </Form.Group>
                <Button className="w-100" variant="success" type="submit">
                    Login
                </Button>
                {
                    loading && <p className="text-center mt-2">Loading ...</p>
                }
            </Form>
        </div>

    );
};

export default Login;