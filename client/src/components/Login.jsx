import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
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
