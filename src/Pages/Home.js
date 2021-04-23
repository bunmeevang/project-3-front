// import Login from "./components/Login"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../HomePageComponents/HomeFeed"
import HomeFeed from '../HomePageComponents/HomeFeed'
import HomeNav from '../HomePageComponents/HomeNav'

function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [theProfData, setTheProfData] = useState({})
  const [userName, setUserName] = useState("Anon")
  const [fetchedName, setFetchedName] = useState('FetchAnon')



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://codr-project-3.herokuapp.com/profile/",
      );
      const data = await response.json();
      data.map( object => {
        if(object.firstname === userName){
          setTheProfData(object)
          setFetchedName(object.firstname)
          setLoggedIn(true)
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  if(loggedIn){
  return (
    <div className="App">
      <h1> Home Page </h1>
      {userName}
      {fetchedName}

      <HomeFeed />
      <HomeNav />
    </div>
  );

  }else {
    return (
      <div className="App">
        <h1>CODR</h1>
          <div>
              <h2>LOGIN</h2>
              <form>
                    Username: <input type='text' onChange={event => setUserName(event.target.value)}></input> <br />
                    <button type='submit' onClick={handleSubmit}>Submit!</button>
              </form>
              <div> Don't have a login? <Link to={"/createUser"}>Create a new user!</Link> </div>
              
          </div>
      </div>
    );
  }
}

export default Home;
