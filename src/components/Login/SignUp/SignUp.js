import { Button } from "react-bootstrap";
import React, { useState } from "react";
import './SignUp.css'
import { Form } from "react-bootstrap";
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
    const [newUser, setNewUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

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

    // Facebook auth

    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                setNewUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    // Google auth

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setNewUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // Github auth

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setNewUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    }



    if (user) {
        navigate('/home')
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Password did not matched');
            return;
        }
        if (password.length < 8 && password.length > 12) {
            setError('Password must be 8-12 characters');
            return;
        }
        setError('')
        createUserWithEmailAndPassword(email, password);

    }


    return (
        <div className="form-container">
            <p className="text-center mt-2">Sign in with</p>
            <div className="d-flex justify-content-center m-3">
                <BsFacebook onClick={handleFacebookSignIn} className="mx-2 text-primary social-icons"></BsFacebook>
                <FcGoogle onClick={handleGoogleSignIn} className="mx-2 social-icons"></FcGoogle>
                <BsGithub onClick={handleGithubSignIn} className="mx-2 social-icons"></BsGithub>
            </div>
            <hr />
            <h5 className="text-center">Sign Up</h5>
            <Form onSubmit={handleCreateUser} className="form-submit">
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
                <p className="text-danger">{error}</p>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                    <Link className="text-decoration-none ms-2 text-primary" to='/login'>Already registered?</Link>
                </Form.Group>
                <Button className="w-100" variant="success" type="submit">
                    Sign Up
                </Button>

            </Form>
        </div>

    );
};

export default SignUp;