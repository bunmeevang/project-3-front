import React from 'react';
// import {Link } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom'
import AboutUs from '../../Pages/AboutUs'
import Home from '../../Pages/Home'
import Faq from '../../Pages/Faq'


const routes = [
    {
      Component: AboutUs,
      key: 'About Us',
      path: '/AboutUs'
    },
    {
      Component: Faq,
      key: 'Faq',
      path: '/faq'
    },
  
    {
      Component: Home,
      key: 'Home',
      path: '/'
    }
  ]
  
function Header() {
    return (
        
        <Router>
            <nav>
                {routes.map(route => <Link key={route.key} to={route.path}>{route.key}</Link>)}
            </nav>
        </Router>
    )
}

export default Header