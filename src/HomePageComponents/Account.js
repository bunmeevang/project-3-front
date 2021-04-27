import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DelAccount from './DelAccount'
import styles from "./Account.module.css";

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
        <div>
        <div className={styles.update} onClick={() => {
            if(update) {
                setUpdate(false)
            } else setUpdate(true)
        }}>Update</div>
            <div className={styles.delete}>
                <DelAccount profData={profData}/>
            </div>
        {update ?       
        <div className={styles.innerBorder}>
            <form onSubmit={fetchProfileInfo}>
                <label>
                    <span className={styles.textBox}>First name:{" "}</span>
                    <input className={styles.text}
                    type="text"
                    name="firstname"
                    value={editedInfo.firstname}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    <span className={styles.textBox}>Last name:{" "}</span>
                    <input className={styles.text}
                    type="text"
                    name="lastname"
                    value={editedInfo.lastname}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    <span className={styles.textBox}>Gender Pronouns:{" "}</span>
                    <input className={styles.text}
                    type="text"
                    name="genderpronouns"
                    value={editedInfo.genderpronouns}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    <span className={styles.textBox}>Location:{" "}</span>
                    <input className={styles.text}
                    type="text"
                    name="location"
                    value={editedInfo.location}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    <span className={styles.textBox}>About Me:{" "}</span>
                    <input className={styles.text}
                    type="text"
                    name="aboutme"
                    value={editedInfo.aboutme}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <label>
                    <span className={styles.textBox}>LinkedIn:{" "}</span>
                    <input className={styles.text}
                    type="text"
                    name="linkedin"
                    value={editedInfo.linkedin}
                    onChange={handleChange}
                    />
                </label><br /><br />
                <br /><br />
                <div className={styles.formSub}type="submit">Submit</div>
            </form>
            {/* <h3> {profData.id}{profData.firstname} {profData.lastname} </h3>
            <div className={styles.aboutme}>
                <ul className={styles.list}>
                    <li>Location {profData.location}</li>
                    <li>LinkedIn {profData.linkedin}</li>
                    <li>Pronouns {profData.genderpronouns}</li>
                </ul>
            </div>
            <div>
                <h4>About Me</h4>
                <p>{profData.aboutme}</p>
            </div> */}
        </div>
        :
        <div className={styles.aboutme}>
            <h3> {profData.id}{profData.firstname} {profData.lastname} </h3>
            <div>
                <ul className={styles.list}>
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