import react from "react";

function Contact(props) {
  return (
    <footer className="contact-section" id="Contact">
      {/* <h2 className="contact-intro">Get in Touch</h2> */}
      <ul className="contact-list">{props.children}</ul>
    </footer>
  );
}

function ContactEntry({ icon, link, text }) {
  return (
    <li className="contact-entry">
      <img src={icon} alt="contact-logo" />
      <a href={link} target="_blank" class="contact-link">
        {text}
      </a>
    </li>
  );
}

export { Contact, ContactEntry };
