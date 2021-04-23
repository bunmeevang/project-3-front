import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Account({profData}){
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
            {/* <h1>{props.page}</h1> */}
            <h3> {profData.firstname} {profData.lastname} </h3>
            <div>
                <ul>
                    <li>Location {profData.location}</li>
                    {/* <li>Email {profData.}</li> */}
                    <li>LinkedIn {profData.linkedin}</li>
                    <li>Pronouns {profData.genderpronouns}</li>
                    {/* <li>Birthday {profData.}</li> */}
                </ul>
            </div>
            <div>
                <h4>About Me</h4>
                <p>{profData.aboutme}</p>
            </div>
        </div>
    )
}