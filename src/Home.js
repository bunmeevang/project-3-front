// import Login from "./components/Login"
import {useState, useEffect} from 'react'

function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("Anon")
  const [password, setPassword] = useState('thePass')



  const handleSubmit = async (e) => {
    // fetch()
    // filter through fetch data to see if username and password matches
    // If there is a match then setLoggedIn(true)


    // turn this into something for this project
    // e.preventDefault();
    // try {
    //   const response = await fetch(
    //     "https://todos-by-bernier.herokuapp.com/todos/",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(newTodo)
    //     }
    //   );
    //   const data = await response.json();
    //   setTodos([...todos, data]);
    //   setNewTodo({
    //     subject: "",
    //     details: ""
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  }


  // else {
  return (
    <div className="App">
      <h1>CODR</h1>
      <div>
            <h2>LOGIN</h2>
            <form>
                  Username: <input type='text'></input> <br />
                  Password: <input type="password"></input> <br /> 
                  <button type='submit' onClick={handleSubmit()}>Submit!</button>
            </form>
        </div>
    </div>
  );
}

export default Home;
