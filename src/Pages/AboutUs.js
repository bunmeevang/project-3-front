import './AboutUs.css';

function AboutUs(props) {
  return (
    <div className="border">
      <h1 className="aboutUs">{props.page}</h1>
      <p className="intro">We are software engineering students at General Assembly. Our goal is to make an App that people can connect to each other. </p>
      <p className="aboutIntro">This project was created by:</p>
      <ul className="aboutUl">
        <li>
          <ul>
            <h4 className="names">
              Arichson Her
            </h4>
            <li className="aboutLi">Role for this project: Frontend Deveoper</li>
          
          </ul>
        </li>
        <li>
          <ul>
            <h4 className="names">
              Bunmee Vang
            </h4>
            <li className="aboutLi">Role for this project: Backend Deveoper</li>
          
          </ul>
        </li>
        <li>
          <ul>
            <h4 className="names">
              Drew Wilson
            </h4>
            <li className="aboutLi">Role for this project: Backend Deveoper</li>
          
          </ul>
        </li>
        <li>
          <ul>
            <h4 className="names">
              Gabrielle 
            </h4>
            <li className="aboutLi">Role for this project: Frontend Deveoper</li>
          
          </ul>
        </li>
      </ul>
      <h3 className="contact">Contact us</h3>
      <p>Email us at: bunmee.vang@gmail.com</p>
    </div>
  );
}

export default AboutUs;
