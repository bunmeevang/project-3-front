
export default function Faq(props){

    return (
        <div className="App">
            <h1>{props.page}</h1>
            <div>
                <p>Q: What's wrong with your site?</p>
                <p>A: This was a test website where we were testing our skills, so some features may still not be up and running.</p>
            </div>
            <div>
                <p>Q: How do I create An account?</p>
                <p>A: You create an account.</p>
            </div>
        </div>
    )
}