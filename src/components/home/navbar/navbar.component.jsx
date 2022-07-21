import Logo from "./logo/logo.component"
import Corona from "./corona.component"
import { Link, Outlet } from "react-router-dom"


//Styles
import './navbar.styles.scss'

const Navbar = () => {
  return (
    <div>
      <Corona />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="nav-link" to={'/home'}>
              <Logo />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <Link className="nav-link" to={'/stories'}>Stories</Link>

              <Link className="nav-link" to={'/categories'}>Categories</Link>

              <Link className="nav-link disabled" to={'/recruitment'}>Recruitment</Link>

              <Link className="nav-link" to={'/contact'}>Contact US</Link>

            </ul>


            <Link className="nav-link text-secondary" to={'/signin'}>Sign In</Link>

            <Link className="nav-link text-secondary" to={'/signup'}>Register</Link>

          </div>
        </div>
      </nav >
      <Outlet />
    </div >
  )
}

export default Navbar
