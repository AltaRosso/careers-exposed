
import { ImFacebook, ImInstagram, ImLinkedin } from 'react-icons/im'
import './footer.styles.scss'


const Footer = () => {
  return (
    <div className="footer-container">
      <p className="text-white text-center">© Copyright Careers Exposed | All rights reserved.</p>
      <div className=' icons-container text-center'>
        <a href='https://www.facebook.com/careersexpozed' rel="noreferrer" target={'_blank'}>
          <ImFacebook className='text-secondary' />
        </a>
        <a href='https://www.instagram.com/careers.expo' rel="noreferrer" target={'_blank'}>
          <ImInstagram className='text-secondary' />
        </a>
        <a href='https://www.linkedin.com/company/careers-exposed/' rel="noreferrer" target={'_blank'}>
          <ImLinkedin className='text-secondary' />
        </a>
      </div>
    </div>
  )
}

export default Footer