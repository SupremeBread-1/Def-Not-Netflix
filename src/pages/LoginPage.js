import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/userService";

export default function LoginPage(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

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
      await login(formState);
      props.handleSignupOrLogin();
    } catch (error) {
      alert(error.message);
    }
  }

  /* helper functions */
  function formValid() {
    return !!(formState.email && formState.password);
  }

  return (
    <main className="Page">
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <input
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className=""
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              value={formState.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              className=""
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              disabled={!formValid()}
              type="submit"
              value="Login"
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
