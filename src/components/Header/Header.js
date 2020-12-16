// import { Link } from "react-router-dom";
// import "./Header.css";
import Nav from "../Nav/Nav";

export default function Header(props) {
  return (
    <Nav
      user={props.user}
      // handleSidebar={props.handleSidebar}
      handleLogout={props.handleLogout}
    />
  );
}
