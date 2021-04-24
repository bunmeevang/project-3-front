
import {Link} from 'react-router-dom'


export default function Login(){
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