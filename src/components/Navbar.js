import react from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul class="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href={props.section} class="nav-link">
        <img src={props.icon} className="nav-item-logo" alt="logo" />
        <span class="link-text">{props.text}</span>
      </a>
    </li>
  );
}
export { Navbar, NavItem };
