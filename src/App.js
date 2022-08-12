import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserCollection from './views/UserCollection'
import Home from './views/Home'
import AllCryptos from './views/AllCryptos'
import CryptoSingle from './views/CryptoSingle'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { user } from './contexts/AuthProvider'


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="AllCryptos" element={<AllCryptos />} >
          <Route path="CryptoSingle" element={<CryptoSingle />} />
        </Route>
        <Route path="/UserCollection" element={<UserCollection/>} />
        <Route path="*" element={<p>Page not found!</p>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}



