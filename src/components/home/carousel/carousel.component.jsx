import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import Daluxolo from '../../assets/slider/cover1.svg'
import image_01 from '../../assets/slider/image_01.jpg'
import image_02 from '../../assets/slider/image_02.jpg'
import './carousel.styles.scss'




const Karousel = () => {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Daluxolo}
          alt="Daluxolo"
        />
        <Carousel.Caption>
          <h3>Daluxolo</h3>
          <p>Radio Personality</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_01}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_02}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default Karousel
