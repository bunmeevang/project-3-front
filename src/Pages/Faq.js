import styles from "./Faq.module.css";
export default function Faq(props){

    return (
        <div className={styles.border}>
            <h1 className={styles.faq}>{props.page}</h1>
            <div>
                <p className={styles.questions}><span className={styles.changeColor}>Q:</span> What's wrong with your site?</p>
                <p className={styles.answers}><span className={styles.changeColor}>A:</span> This was a test website where we were testing our skills, so some features may still not be up and running.</p>
            </div>
            <div>
                <p className={styles.questions}><span className={styles.changeColor}>Q:</span> How do I create An account?</p>
                <p className={styles.answers}><span className={styles.changeColor}>A:</span> Click on the "Create a new user!" on the home page.</p>
            </div>
        </div>
    )
}