import styles from "./AboutUs.module.css";

function AboutUs(props) {
  return (
  <div className={styles.background}>
    <h1 className={styles.title}>About CODR</h1>
    <div className={styles.App}>
      <h1 className={styles.aboutUs}>{props.page}</h1>
      <p className={styles.intro}>We are software engineering students at General Assembly. Our goal is to make an App that people can connect to each other. </p>

      <p className={styles.aboutIntro}>This project was created by:</p>
      <ul>

        <li className={styles.aboutUl}>
          <ul>
            <h4 className={styles.names}>
              Arichson Her
            </h4>
            <li className={styles.aboutLi}>Role for this project: Frontend Deveoper</li>
          
          </ul>
        </li>
        <li className={styles.aboutUl}>
          <ul>
            <h4 className={styles.names}>
              Bunmee Vang
            </h4>
            <li className={styles.aboutLi}>Role for this project: Backend Deveoper</li>
          
          </ul>
        </li>
        <li className={styles.aboutUl}>
          <ul>
            <h4 className={styles.names}>
              Drew Wilson
            </h4>
            <li className={styles.aboutLi}>Role for this project: Backend Deveoper</li>
          
          </ul>
        </li>
        <li className={styles.aboutUl}>
          <ul>
            <h4 className={styles.names}>
              Gabrielle 
            </h4>
            <li className={styles.aboutLi}>Role for this project: Frontend Deveoper</li>
          
          </ul>
        </li>
      </ul>
      <button className={styles.contact}>Contact us</button>
      {/* <p className={styles.email}>Email us at: bunmee.vang@gmail.com</p> */}
    </div>
  </div>
  );
}

export default AboutUs;
