import styles from "./CreateUser.module.css";
import {useState} from 'react';


export default function CreateUser() {
    const [newInfo, setNewInfo] = useState({
        firstname: "Empty",
        lastname: "Empty",
        genderpronouns: "Empty",
        location: "Empty",
        aboutme: "Empty",
        linkedin: "Empty"
      });
    const handleSubmit = async (e) => {   
        // console.log(pkKey) 
        e.preventDefault();
        try {
            const response = await fetch(
            `https://codr-project3.herokuapp.com/profile/`
            ,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newInfo)
            }
            );
            const data = await response.json();
            console.log(newInfo)
            //   setTodos([...todos, data]);
            setNewInfo({
                firstname: "",
                lastname: "",
                genderpronouns: "",
                location: "",
                aboutme: "",
                linkedin: ""
            });
        } catch (error) {
            console.error(error);
        }
    }
    const handleChange = (e) => {
        console.log(e.target.firstname)
        setNewInfo({ ...newInfo, [e.target.name]: e.target.value });
        console.log(newInfo)
      };

    return (
        <div>
            <h1 className={styles.createnewuser}>Create New User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First name:{""}
                    <input
                    type="text"
                    name="firstname"
                    value={newInfo.firstname}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <input type='submit' />
             </form>
         </div>
    )
}