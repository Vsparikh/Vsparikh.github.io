import react from "react";
import Canvas from "./Canvas";

function About(props) {
  return (
    <section className="about-content" id="About">
      <h2>About Me</h2>
      <div className="skill-box">
        <div className="skill-content">
          <p>
            Hi! I am Vrajang, a passionate and team oriented developer who likes
            to create fun things. The main area of my expertise are game
            development and web development.
          </p>

          <p>
            <strong>Game devoplment:</strong> I have experiance working in AAA
            game development environments through my internships. I am familar
            with <em>Unreal Engine</em> and <em>Unity</em>.
          </p>

          <p>
            {" "}
            <strong>Web devoplment:</strong> I am familar with JS, React and
            Node.js.
          </p>
        </div>
        <div className="skill-sphere">
          <Canvas languages={props.languages} width={510} height={480}></Canvas>
        </div>
      </div>
    </section>
  );
}

export default About;
