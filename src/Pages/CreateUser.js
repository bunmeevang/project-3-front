


export default function CreateUser() {
    const handleSubmit = async (e) => {
        // fetch()
        // filter through fetch data to see if username
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

    return (
        <div>
            <h1>Create New User</h1>
             <form>
                   Username: <input type='text'></input> <br />
                   <button type='submit' onClick={handleSubmit()}>Submit!</button>
             </form>
         </div>
        
    )

}