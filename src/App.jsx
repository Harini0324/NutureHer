import Aboutus from "./components/Aboutus";
import FeedBack from "./components/Feedback";
import Login from "./components/auth/Login";
import Register from "./components/auth/register";
import Helpline from "./components/container/Helpline";

import Login from "./components/auth/Login";
import Register from "./components/auth/register";
import Helpline from "./components/container/Helpline";


import {
  Navbar,
  Home,
  About,
  Contact,
  Footer,
  Professionals,
   Blog,
} from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
function App() {
  return (
    <div className='font-Poppins bg-Solitude'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
                <About />
                <Blog/>
                
                
                <Contact />
               
              </Layout>
            }
          />
          <Route
            path='/aboutus'
            element={
              <Layout>
                <Aboutus />
              </Layout>
            }
          />
          <Route
            path='/feedback'
            element={
              <Layout>
                <FeedBack />
              </Layout>
            }
          />
          <Route
            path='/interactwithus'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/professionals'
            element={
              <Layout>
                <Professionals />
              </Layout>
            }
          />
           <Route
            path='/blogs'
            element={
              <Layout>
                <Blog/>
              </Layout>
            }
          />
           <Route
            path='/helpline'
            element={
              <Layout>
               <Helpline/>
              </Layout>
            }
          />
           <Route
            path='/helpline'
            element={
              <Layout>
               <Helpline/>
              </Layout>
            }
          />
          <Route path='/login' element={<Layout>
               <Login/>
               <Login/>
              </Layout>} />
          <Route path='/register'
           element={
            <Layout>
           <Register/>
           <Register/>
          </Layout>
           } 
           />
        </Routes>
      </Router>
    </div>
  );
}

export default App;