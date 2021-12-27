/* Importing the required components */
import Section from "./components/Section";
import Progress from "./components/Progress";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";

import myImage from "./img/designer.svg"; // importing the image file

/* Importing Bootstrap & Icons */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Section color="dark">
        <section className="row">
          <div className="col">
            <h1 className="text-light">Mohammed Khallaf</h1>
            <p className="text-light">Web Developer</p>
            <Button color="light">CONTACT ME</Button>
          </div>
          <div className="col">
            <img src={myImage} alt="" className="" />
          </div>
        </section>
      </Section>
      {/* _________ */}
      <Section color="light">
        <div className="row">
          <div className="col-3">
            <h1>About me</h1>
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
              facilisis mauris sit amet massa vitae. Lacus sed viverra tellus in
              hac. A arcu cursus vitae congue mauris. Quam nulla porttitor massa
              id neque. Curabitur gravida arcu ac tortor dignissim convallis.
              Sed risus pretium quam vulputate dignissim suspendisse in.
            </p>
            <Button color="dark">Download Resume</Button>
          </div>
        </div>
      </Section>
      <Section color="primary">
        <h1 className="text-center">Skills</h1>
        <p className="text-center pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          facilisis mauris sit amet massa vitae. Lacus sed viverra tellus in
          hac. A arcu cursus vitae congue mauris.
        </p>
        <div className="row">
          <div className="col">
            <ul>
              My Focus
              <li>UI/UX</li>
              <li>Responsinve</li>
              <li>Web Desing</li>
              <li>Mobile App Desing</li>
            </ul>
          </div>
          <div className="col">
            <Progress name="HTML" percent="60" />
            <Progress name="CSS" percent="50" />
            <Progress name="JS" percent="30" />
            <Progress name="Bootstrap" percent="80" />
          </div>
        </div>
      </Section>
      <Section color="secondary">
        <h1 className="text-center pb-3"> Portfolio</h1>
        <div className=" row row-cols-3 g-3">
          <Card>Web Desing</Card>
          <Card>Web Desing</Card>
          <Card>Web Desing</Card>
          <Card>Web Desing</Card>
          <Card>Web Desing</Card>
          <Card>Web Desing</Card>
        </div>
      </Section>
      <Section color="black">
        <Footer>
          <div className="row">
            <div className="col-4">
              <h4>GET IN TOUCH</h4>
              <div className="text-light">
                <i class="bi bi-envelope-fill"></i>
                <span> &nbsp; ee.mkh.202gmail.com</span>
              </div>
              <div className="text-light">
                <i class="bi bi-person-video2"></i>
                <span> &nbsp;01029149153</span>
              </div>
            </div>
            <div className="col-4">
              <Button color="light">CONTACT ME</Button>
            </div>
            <div className="col-4">

              
            </div>
          </div>
        </Footer>
      </Section>
    </>
  );
}

export default App;
