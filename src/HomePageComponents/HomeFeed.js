import{useState, useEffect} from "react";
import styles from "./HomeFeed.module.css";


export default function HomeFeed({userName}) {
    /////////ARRAY
    const [apiData, setApiData] = useState([]);
    const apiUrl = "https://codr-project3.herokuapp.com/array/"
    const [pushData, setPushData] = useState([])

    const [newPush, setNewPush] = useState({
        user: `${userName}`,
        comment: ""
    });

    const [array, setUpdateArray] = useState({
        user: `${userName}`,
        body: "",
        comment: []
    });
    const [push, setUpdatePush] = useState({
        user: `${userName}`,
        body: ""
    });

    const getPushData = async () => {
        try {
            const res = await fetch("https://codr-project3.herokuapp.com/comment/");
            const data = await res.json();
            setPushData(data)
        } catch (err){
                     console.log(err);
                 }
             }


    const getArrayData = async () => {
        try {
        const res = await fetch("https://codr-project3.herokuapp.com/array/");
        
        const data = await res.json();
        setApiData(data)
        
    } catch (err){
        console.log(err);
    }
    }
    useEffect(() => {
        getPushData();
        getArrayData();
    }, []);

    const arrayPostMethod = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://codr-project3.herokuapp.com/array/",
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(array)
                }
                );
                const data = await response.json();
                setApiData([...apiData, data]);
                console.log('hello')
                setUpdateArray({
                    user: `${userName}`,
                    body: "",
                    comment: []
                });
        } catch (error){
            console.error(error);
        }
    };

    const handleDelete = async (e, id, i) => {
        try {
            const response = await fetch(
            `https://codr-project3.herokuapp.com/comment/${id}/`,
            {
                method: "DELETE",
                header: {
                    "Content-Type": "application/json"
                }
            }
            );
            const data = response.json();
            const copyApiData = [...apiData];
            copyApiData.splice(i, 1);
            setApiData(copyApiData);

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        setUpdateArray({ ...array, [e.target.name]: e.target.value});
        console.log(e.target)
        console.log(array);
        console.log(apiData)
    };


/////////////////////PUSH



    //const [pushData, setPushData] = useState([])

    // const [newPush, setNewPush] = useState({
    //     user: `${userName}`,
    //     comment: ""
    // });
    // const getPushData = async () => {
    //     try {
    //         const res = await fetch("https://codr-project3.herokuapp.com/comment/");
    //         const data = await res.json();
    //         setPushData(data)

    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://codr-project3.herokuapp.com/comment/",
                {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(push)
                
                }
                );
                const data = await response.json();
                setPushData([...pushData, data]);
                setNewPush({
                    user: `${userName}`,
                    comment: ""
                });
        } catch (error){
            console.error(error);
        }
    };

    const pushDelete = async (e, id, i) => {
        try {
            const response = await fetch(
            `https://codr-project3.herokuapp.com/array/${id}/`,
            {
                method: "DELETE",
                header: {
                    "Content-Type": "application/json"
                }
            }
            );
            const data = response.json();
            const copyPushData = [...pushData];
            copyPushData.splice(i, 1);
            setPushData(copyPushData);

        } catch (error) {
            console.error(error);
        }
    };

    const change = (e) => {
        setNewPush({...newPush, [e.target.name]: e.target.value});
        console.log(newPush);
    };


    

return(
    <div className={styles.homeTitle}>
        
        <form onSubmit={arrayPostMethod}>
            {/* <label>
                user: {" "}
            <input 
            type="text"
            name="user"
            value={array.user}
            onChange={handleChange}
            placeHolder ="Enter a name"
            />
            </label> */}

            <label className={styles.label}>
                Body: {" "}
            <input 
            type="text" 
            name="body"
            value={array.body}
            onChange={handleChange}
            placeHolder ="Enter an comment"
            />
            </label>
            <br/>
            <div className={styles.submit}type="submit">Submit</div>
        </form>
        
        <div className={styles.homeBorder}>
            {pushData.map((pushData, i) => {
                return ( <div>

                   <h3 key={i}> 
                    <span className={styles.name}>Name:</span> {pushData.user}</h3>
                    <h4><span className={styles.name}>Comment:</span> {pushData.comment}</h4>
                    <div className={styles.delBtn}
                    onClick={(e) => {
                        pushDelete(e, pushData.user, i);
                    }}
                    >
                        DELETE 

                    </div>
                </div>
                )
            })}
            {apiData.map((apiData, i) => {
                return ( <div className={styles.arrayBorder}>
                    <span className={styles.arrayName}>ARRAY                    {apiData.id}</span>
                    <h3 key={i}> 
                    name: {apiData.user}</h3>
                    <h4>body: {apiData.body}</h4>

                    <div className={styles.delBtn}
                        onClick={(e) => {
                            handleDelete(e, apiData.id, i);
                        }}>
                        DELETE 
                    </div>
            <form onSubmit={submit}>
                <div className={styles.commentBox}>
                <label className={styles.text}>
                    <span className={styles.colorChange}>User: {" "}</span>
                <input className={styles.textBox} 
                type="text"
                name="user"
                value={newPush.user}
                onChange={change}
                placeHolder ="Enter a name"
                />
                </label>

                <label>
                    <span className={styles.colorChange}>Comment: {" "}</span>
                <input className={styles.textBox}
                type="text" 
                name="push"
                value={newPush.comment}
                onChange={change}
                placeHolder ="Enter an comment"
                />
                </label>
                </div>
                <br/>
                <div className={styles.submit}type="submit">Submit</div>
            </form>
                    </div>
                )
            })}
        </div>
        
    </div>
)

};