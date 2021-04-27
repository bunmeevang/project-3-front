import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Faq from './Pages/Faq'
import Account from './HomePageComponents/Account'
import CreateUser from './Pages/CreateUser'
import HomeFeed from './HomePageComponents/HomeFeed';

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

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
  // {
  //   Component: Account,
  //   key: 'Account',
  //   path: '/account'
  // },
  {
    Component: Home,
    key: 'Home',
    path: '/'
  }
]
const reverseRoute = [... routes].reverse();

export default function App () {
  return (
    <Router>
      {/* <Header /> */}
      <header className="headers">
        {/* <h1 className="title">CODR</h1> */}
       <nav className="linkFlex">
          {reverseRoute.reverse().map(route => <Link key={route.key} to={route.path}>{route.key}</Link>)}
        </nav>
      </header>
      <Switch>
        <Route path={'/createUser'} exact component={CreateUser}/>
        {
          routes.map(({key, Component, path}) => (
            <Route
              key={key}
              path={path}
              component={props => <Component {...props} exact page={key} />}
              />))
        }
      </Switch>
    </Router>
  )
}
// Faqs, Home, Contact, About
// Login page, newuser page