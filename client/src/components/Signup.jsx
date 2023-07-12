import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>

      <p className="mt-4">
        Already Have An Account? &nbsp;
        <Link to="/login" className="text-decoration-none">
          Login Here
        </Link>
      </p>
    </form>
  );
}
