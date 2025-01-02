import './App.css';
import Home from"./Nav/Home";
import  NavBar from"./Components/navbar";
import About from "./Nav/About";
import { Route,Routes,Navigate} from 'react-router-dom';
import Header from './Components/Header';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "./Components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import React, { useState } from 'react';
import Register from './Nav/Register';
import Signup from './Nav/Signup';
import Login from './Nav/login';


  const App= () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (

      <ShoppingCartProvider>

   <Container className='mb-4'>

        <div>

  <NavBar/>



<Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path ="/Store" element={<Store/>}/>
            <Route path="/Register"element={<Register/>}/>
            <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/home"
                    element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
                />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>




             

          <Header />
        {/* Other components like Main content, Footer, etc. */}


    </div>

    </Container>

  </ShoppingCartProvider>

      );
    };
  export default App;
