import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../home/navbar/navbar.component'
import Footer from '../home/footer/footer.component'
import './categories.styles.scss'

const Categories = () => {
  return (
    <div>

      <Navbar />

      <Container className='container categories-container'>

        <Row md>
          <Col className='col radio-category'>RADIO</Col>
          <Col className='col publishing-category'>PUBLISHING</Col>
        </Row>
        <Row md>
          <Col className='col scm-category'>SUPPLY CHAIN</Col>
          <Col className='col tv-category'>TV</Col>
        </Row>

      </Container>
      <Footer />
    </div>
  )
}

export default Categories