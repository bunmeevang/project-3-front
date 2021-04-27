import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DelAccount from './DelAccount'

export default function Account({profData}){
    const [pkKey, setPkKey] = useState(profData.id)
    const [editedInfo, setEditedInfo] = useState({
        firstname: "",
        lastname: "",
        genderpronouns: "",
        location: "",
        aboutme: "",
        linkedin: ""
      });
    const [update, setUpdate] = useState(false)
    const fetchProfileInfo = async (e) => {   
        // console.log(pkKey) 
        e.preventDefault();
        try {
            console.log(editedInfo)
            const response = await fetch(
            `https://codr-project3.herokuapp.com/profile/${pkKey}/`
            ,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(editedInfo)
            }
          );
          const data = await response.json();
          console.log('Hello')
        //   setTodos([...todos, data]);
          setEditedInfo({
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
        setEditedInfo({ ...editedInfo, [e.target.name]: e.target.value });
        // console.log(editedInfo)
      };

    

    return (
        <div className="App">
        <h5 onClick={() => {
            if(update) {
                setUpdate(false)
            } else setUpdate(true)
        }}>Update</h5>
        {update ?       
        <div>
            <DelAccount profData={profData}/>
            <form onSubmit={fetchProfileInfo}>
                <label>
                    First name:{" "}
                    <input
                    type="text"
                    name="firstname"
                    value={editedInfo.firstname}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    Last name:{" "}
                    <input
                    type="text"
                    name="lastname"
                    value={editedInfo.lastname}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    Gender Pronouns:{" "}
                    <input
                    type="text"
                    name="genderpronouns"
                    value={editedInfo.genderpronouns}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    Location:{" "}
                    <input
                    type="text"
                    name="location"
                    value={editedInfo.location}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    About Me:{" "}
                    <input
                    type="text"
                    name="aboutme"
                    value={editedInfo.aboutme}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    LinkedIn:{" "}
                    <input
                    type="text"
                    name="linkedin"
                    value={editedInfo.linkedin}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <br /><br />
                <input type="submit" />
            </form>
            <h3> {profData.id}{profData.firstname} {profData.lastname} </h3>
            <div>
                <ul>
                    <li>Location {profData.location}</li>
                    <li>LinkedIn {profData.linkedin}</li>
                    <li>Pronouns {profData.genderpronouns}</li>
                </ul>
            </div>
            <div>
                <h4>About Me</h4>
                <p>{profData.aboutme}</p>
            </div>
        </div>
        :
        <div className="App">
            <h3> {profData.id}{profData.firstname} {profData.lastname} </h3>
            <div>
                <ul>
                    <li>Location: {profData.location}</li>
                    <li>LinkedIn: {profData.linkedin}</li>
                    <li>Pronouns: {profData.genderpronouns}</li>
                </ul>
            </div>
            <div>
                <h4>About Me</h4>
                <p>{profData.aboutme}</p>
            </div>
        </div>
        }
    </div>
    )
}