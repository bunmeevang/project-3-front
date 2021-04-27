import {useState} from 'react'
import styles from "./Account.module.css";

export default function DelAccount({profData}) {

    const [delOne, setDelOne] = useState(false)
    const [delTwo, setDelTwo] = useState(false)
    const [delThree, setDelThree] = useState(false)
    const handleDelete = async (e) => {
        try {
          const response = await fetch(
            `https://codr-project-3.herokuapp.com/profile/${profData.id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
          const data = response.json();
          setDelThree(true)
        } catch (error) {
          console.error(error);
        }
    };
    const checkTruth = () => {
        if(delOne && delTwo && delThree) {
            return true
        }
    }
    const successDel = () => {

        return (
            <div>
                <h2>You have Scucessfully deleted your account</h2>
                {setTimeout(window.location.reload(), 10000)}
            </div>

        )
    }
    return(
        <div>
            <div className={styles.delBtn} onClick={()=>{setDelOne(true)}}>Delete Profile</div>
            {delOne ?
                <div>
                    <h3>ERROR! Are you sure you want to delete?</h3>
                    <button onClick={()=>{setDelTwo(true)}}>Yes</button>
                    <button onClick={()=>{setDelOne(false)}}>No</button>
                    {delTwo ?
                        <div> 
                            <h3>ARE YOU SURE SURE?</h3> 
                            <button onClick={handleDelete}>Just Delete It already</button>
                            <button onClick={() => {setDelOne(false); setDelTwo(false)}}>Ok! I won't Delete</button> <br />
                            {checkTruth() ? successDel() : ""}
                        </div>
                        : 
                        <div></div>
                    }
                </div>
                : 
                <div>
                </div>
            }

        </div>
    )
} 