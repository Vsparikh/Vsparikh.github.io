import react from "react";

const getCircles = (numCircles) => {
  let circles = [];
  for (var i = 0; i < numCircles; i++) {
    circles.push(<li key={i}></li>);
  }
  return circles;
};

function BannerBackground(props) {
  return (
    <div className="banner-background">
      <ul className="circles">{getCircles(props.numCircles)}</ul>
    </div>
  );
}

function Banner(props) {
  return (
    <section className="banner">
      <BannerBackground numCircles={props.numCircles} />
      <div className="banner-text">
        <h1>Hi! I'm {props.profile.name}</h1>
        <p>
          I'm a {props.profile.schoolYear} year {props.profile.program} @
          <strong>{props.profile.university}</strong>
        </p>
        <p>You can check out more about me below.</p>

        <a href={props.contactLink} className="contact-me">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Banner;
