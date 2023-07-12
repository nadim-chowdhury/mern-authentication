import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log(email, password);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Log In
      </button>

      <p className="mt-4">
        Don&apos;t Have Any Account? &nbsp;
        <Link to="/signup" className="text-decoration-none">
          Signup Here
        </Link>
      </p>
    </form>
  );
}
