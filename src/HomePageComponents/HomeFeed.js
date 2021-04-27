import{useState, useEffect} from "react";




export default function HomeFeed({userName}) {
    /////////ARRAY
    const [apiData, setApiData] = useState([]);
    // const [thePush, setThePush] = useState([...apiData.push])


    const getArrayData = async () => {
        try {
        const res = await fetch("https://codr-project-3.herokuapp.com/array/");
        
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
                "https://codr-project-3.herokuapp.com/array/"
                ,
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
                    body: ""
                    // push: [... ]
                });
        } catch (error){
            console.error(error);
        }
    };

    const handleDelete = async (e, id, i) => {
        try {
            const response = await fetch(
            `https://codr-project-3.herokuapp.com/array/${id}/`,
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



    const [pushData, setPushData] = useState([])

    const [newPush, setNewPush] = useState({
        user: `${userName}`,
        push: ""
    });
    const getPushData = async () => {
        try {
            const res = await fetch("https://codr-project-3.herokuapp.com/push/");
            const data = await res.json();
            setPushData(data)

        } catch (err){
            console.log(err);
        }
    }

    const [array, setUpdateArray] = useState({
        user: `${userName}`,
        body: ""
    });
    const [push, setUpdatePush] = useState({
        user: `${userName}`,
        body: ""
    });

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://codr-project-3.herokuapp.com/push/",
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
                    push: ""
                });
        } catch (error){
            console.error(error);
        }
    };

    const pushDelete = async (e, id, i) => {
        try {
            const response = await fetch(
            `https://codr-project-3.herokuapp.com/push/${id}/`,
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
    <div>
        
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

            <label>
                body: {" "}
            <input 
            type="text" 
            name="body"
            value={array.body}
            onChange={handleChange}
            placeHolder ="Enter an array"
            />
            </label>
            <br/>
            <input type="submit"/>
        </form>
        
        <div>
            {pushData.map((pushData, i) => {
                return ( <div>

                   <h3 key={i}> 
                    name: {pushData.user}</h3>
                    <h4>body: {pushData.push}</h4>
                    <button
                    onClick={(e) => {
                        pushDelete(e, pushData.user, i);
                    }}
                    >
                        DELETE ME

                    </button>
                </div>
                )
            })}
            {apiData.map((apiData, i) => {
                return ( <div>
                    ARRAY                     {apiData.id}
                    <h3 key={i}> 
                    name: {apiData.user}</h3>
                    <h4>body: {apiData.body}</h4>

                    <button
                        onClick={(e) => {
                            handleDelete(e, apiData.id, i);
                        }}>
                        DELETE ME
                    </button>
            <form onSubmit={submit}>
                <label>
                    user: {" "}
                <input 
                type="text"
                name="user"
                value={newPush.user}
                onChange={change}
                placeHolder ="Enter a name"
                />
                </label>

                <label>
                    push: {" "}
                <input 
                type="text" 
                name="push"
                value={newPush.push}
                onChange={change}
                placeHolder ="Enter an array"
                />
                </label>
                <br/>
                <input type="submit"/>
            </form>
                    </div>
                )
            })}
        </div>
        
    </div>
)

}

