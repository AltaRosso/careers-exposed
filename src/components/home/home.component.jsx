import Navbar from "./navbar/navbar.component"
import Karousel from "./carousel/carousel.component"
import About from "./about/about.component"
import Footer from "./footer/footer.component"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Karousel />
      <About />
      <Footer />
    </div>
  )
}

export default Home