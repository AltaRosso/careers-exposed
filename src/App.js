import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home.component';
import Stories from './components/stories/stories.component';
import Categories from './components/categories/categories.component';
import Contact from './components/contact-us/contact-us.component';
import SignIn from './components/users/sign-in/sign-in.component';
import SignUp from './components/users/sign-up/sign-up.component';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
