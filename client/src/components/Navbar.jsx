import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 pb-4">
      <div>
        <Link to="/" className="fs-2 text-decoration-none text-uppercase fw-bold">
          Auth.
        </Link>
      </div>

      <div>
        <Link to="/login" className="btn btn-primary me-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Signup
        </Link>
      </div>
    </div>
  );
}
