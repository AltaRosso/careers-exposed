import { useEffect, useState } from "react";
import Navbar from "../../home/navbar/navbar.component";
import Footer from "../../home/footer/footer.component";
require('dotenv').config()

const Signup = () => {

  const [name, setName] = useState(null)
  const [registerEmail, setRegisterEmail] = useState(null)
  const [industry, setIndustry] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const clientId = process.env.CLIENT_ID

  const handleCallbackResponse = (response) => {
    console.log('JWT:', response.credential)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      Client_id: clientId,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signinDiv'),
      { theme: 'outline', size: 'large' }
    )
  }, [])

  return (
    <div>
      <Navbar />
      <div className="contact-container">

        <h2>Don't have an account?</h2>
        <div id="signinDiv"></div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" name="name" placeholder="Enter your name"
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="email" className="form-control" name="email" placeholder="E-mail"
            onChange={(event) => {
              setRegisterEmail(event.target.value)
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="industry" className="form-label">Industry</label>
          <input type="text" className="form-control" name="industry" placeholder="Industry you're interested in"
            onChange={(event) => {
              setIndustry(event.target.value)
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" placeholder="Password" required
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
          <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password"
            onChange={(event) => {
              setConfirmPassword(event.target.value)
            }}
          />
        </div>

        <button type="submit">Sign Up</button>
      </div>

      <Footer />
    </div>
  )
}

export default Signup
