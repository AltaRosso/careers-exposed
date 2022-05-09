// import { useState } from "react";

// import Navbar from "../../home/navbar/navbar.component";
// import Footer from "../../home/footer/footer.component";

// const SignUp = () => {

//   const [registerEmail, setRegisterEmail] = useState("")
//   const register = async () => {


//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="contact-container">

//         <h2>Don't have an account?</h2>

//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name:</label>
//           <input type="name" className="form-control" name="name" placeholder="Enter your name"
//             onChange={(event) => {
//               setRegisterEmail(event.target.value)
//             }}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label" />
//           <input type="email" className="form-control" name="email" placeholder="E-mail"
//             onChange={(event) => {
//               setRegisterEmail(event.target.value)
//             }}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="industry" className="form-label" />
//           <input type="text" className="form-control" name="industry" placeholder="Industry you're interested in"
//             onChange={(event) => {
//               setRegisterEmail(event.target.value)
//             }}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label" />
//           <input type="password" className="form-control" name="password" placeholder="Password" required
//             onChange={(event) => {
//               setRegisterEmail(event.target.value)
//             }}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label" />
//           <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password"
//             onChange={(event) => {
//               setRegisterEmail(event.target.value)
//             }}
//           />
//         </div>

//         <a type="submit" href="emailsent.com">Sign Up</a>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default SignUp