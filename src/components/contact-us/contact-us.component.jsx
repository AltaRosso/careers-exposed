import Navbar from '../home/navbar/navbar.component'
import Footer from '../home/footer/footer.component'

import { ImFacebook, ImInstagram, ImLinkedin } from 'react-icons/im'

import { Form } from 'react-bootstrap'
import './contact-us.styles.scss'

const Contact = () => {
  return (
    <div>
      <Navbar />


      <div className="contact-container">

        <h1>Any Questions?</h1>
        <Form.Text className="text-muted">
          Checkout us out on social media:
        </Form.Text>

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

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" />
          <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" />
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your E-mail" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" />
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Your Message" defaultValue={""} />
        </div>
        <a id="send-msg-btn" type="submit" href="emailsent.com">Send Message</a>
      </div>

      <Footer />
    </div>
  )
}

export default Contact