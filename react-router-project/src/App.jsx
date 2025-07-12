import {
    BrowserRouter as Router,
    Routes, Route
} from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blogs from './Page/Blogs';
import Blogsdetail from './Page/Blogsdetail';

function App() {

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path='/blogs/:id' element={<Blogsdetail/>}/>
      </Routes>
     </Router>
    </>
  )

}

export default App
