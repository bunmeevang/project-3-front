import{useState, useEffect} from "react";




export default function HomeFeed() {
    const [apiData, setApiData] = useState([]);
    const apiUrl = "https://codr-project-3.herokuapp.com/array"
    const [array, setUpdateArray] = useState({
        subject: "",
        detail: ""
    });

    const getApiData = async () => {
    try {
        const res = await fetch(apiUrl);
        
        const data = await res.json();
        setApiData(data)
        
    } catch (err){
        console.log(err);
    }
    }
    useEffect(() => {
        getApiData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                apiUrl,
                {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(array)
                
                }
                );
                const data = await response.json();
                setApiData([...apiData, data]);
                setUpdateArray({
                    user: "",
                    body: ""
                });
        }catch (error){
            console.error(error);
        }
    };

    const handleDelete = async (e, id, i) => {
        try {
            const response = await fetch(
            "https://codr-project-3.herokuapp.com/array/${id}",
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
    };

    

return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                User: {" "}

            <input 
            type="text"
            name="User"
            value={array.user}
            onChange={handleChange}
            placeHolder ="Enter a name"
            />
            </label>

            <label>
                body: {" "}

            <input 
            type="text" 
            name="body"
            value={array.body} id="array"
            onChange={handleChange}
            placeHolder ="Enter an array"
            />
            </label>
            <br/>
            <input type="submit"/>

        </form>
        <p>Data fetched from the api</p>
        <div>
            {apiData.map((apiData, i) => {
                return ( <div>
                    <h3 key={i}> name: {apiData.user}</h3>
                    <h4>body: {apiData.body}</h4>
                    <button
                    onClick={(e) => {
                        handleDelete(e, apiData.id, i);
                    }}
                    >
                        DELETE ME

                    </button>

                    </div>
                )
            })}
        </div>
        
    </div>
)

}

