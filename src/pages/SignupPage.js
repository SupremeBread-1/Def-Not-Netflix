import { signup } from "../services/userService";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  function formValid() {
    return !!(formState.name && formState.email && formState.password);
  }

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formValid()) return;
    try {
      await signup(formState);
      props.handleSignupOrLogin();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <main className="Page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <input
              type="text"
              onChange={handleChange}
              value={formState.name}
              placeholder="Name"
              name="name"
              id="name"
              className=""
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              type="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="Email"
              name="email"
              id="email"
              className=""
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              type="password"
              onChange={handleChange}
              value={formState.password}
              placeholder="Password"
              name="password"
              id="password"
              className=""
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              type="submit"
              disabled={!formValid()}
              value="Sign Up"
              className=""
            />
            &nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    </main>
  );
}
