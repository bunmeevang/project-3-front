// import Login from "./components/Login"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../HomePageComponents/HomeFeed"
import HomeFeed from '../HomePageComponents/HomeFeed'
import HomeNav from '../HomePageComponents/HomeNav'
import Account from "../HomePageComponents/Account"
import styles from "./Home.module.css";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectAcc, setSelectAcc] = useState(false)
  const [theProfData, setTheProfData] = useState({})
  const [userName, setUserName] = useState("Anon")
  const [fetchedName, setFetchedName] = useState('FetchAnon')



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://codr-project3.herokuapp.com/profile/",
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


  const isLogged = () =>{
  return (
    <div className={styles.homeBorder}>
      <p onClick={()=> setSelectAcc(true)}>Account</p>
      <p onClick={()=> setSelectAcc(false)}>Home</p>
      {selectAcc ? <Account profData={theProfData}/>
       : <div>
       <h1> Home Page </h1>
       <HomeFeed userName={userName}/>
       <HomeNav />
       </div>}
      

    </div>
  );}

  const notLogged =() =>{
    return (
      <div>
        {/* <h1 className={styles.title}>CODR</h1> */}
          <div className={styles.border}>
              <h2 className={styles.login}>LOGIN</h2>
              <form className={"user"}>
                    Username: <input type='text' onChange={event => setUserName(event.target.value)}></input> <br />
                    <button className={styles.button} type='submit' onClick={handleSubmit}>Submit!</button>
              </form>
              <div className={styles.text}> Don't have a login? <Link to={"/createUser"}>Create a new user!</Link> </div>
          </div>
      </div>
    );
  }
  return loggedIn ? isLogged() : notLogged()
}
export default Home;
