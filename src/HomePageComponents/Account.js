import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Account(props){
    const fetchProfileInfo = async () => {    
    
        // turn this into something for this project
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


    return (
        <div className="App">
            <h1>{props.page}</h1>
            <h3> Name, Last </h3>
            <div>
                <ul>
                    <li>Location</li>
                    <li>Email</li>
                    <li>LinkedIn</li>        
                    <li>Gender</li>                                       
                    <li>Pronouns</li>                                         
                    <li>Birthday</li>
                </ul>
            </div>
            <div>
                <h4>About Me</h4>
                <p>Information about me</p>
            </div>
        </div>
    )
}