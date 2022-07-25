import React, { useState } from "react";
import Navbar from "../../home/navbar/navbar.component";
import Footer from "../../home/footer/footer.component";
import Form from 'react-bootstrap/Form'
import { FcGoogle } from 'react-icons/fc'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth, signInWithGoogle } from '../../../utils/firebase/firebase.utils'

import './sign-up.scss'

const Signup = () => {

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })


  // const clientId = process.env.REACT_APP_CLIENT_ID


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div>
      <Navbar />
      <div className="sign-in-container">

        <>
          {user &&
            <button onClick={logout}>Log Out</button>
          }
        </>

        <div className="login-container">

          <h2>Already have an account?</h2>

          <div className="signin-with-google-container text-center">
            <button className="signin-with-google" onClick={signInWithGoogle}><FcGoogle />Sign in with Google</button>
          </div>
          <Form>
            <div className="mb-3">

              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                onChange={(event) => {
                  setLoginEmail(event.target.value)
                }}
              />
            </div>
            <div className="mb-3">

              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value)
                }}
              />
            </div>

            <div className="sign-button-conatiner">
              <button className="btn btn-primary sign-up-button" type="submit" onClick={login}>Sign In</button>
            </div>
          </Form>
        </div>

        <div className="register-container">
          <h2>Don't have an account?</h2>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="E-mail"
              required
              onChange={(event) => {
                setRegisterEmail(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="industry" className="form-label">Industry</label>
            <input
              type="text"
              className="form-control"
              name="industry"
              laceholder="Industry you're interested in"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required
              onChange={(event) => {
                setRegisterPassword(event.target.value)
              }}
            />
          </div>

          <div className="sign-button-conatiner">
            <button className="btn btn-primary sign-up-button" type="submit" onClick={register}>Sign Up</button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Signup
