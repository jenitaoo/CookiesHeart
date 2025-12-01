import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      auth?.setUser(null);

      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MakerSuite</Link>
      </div>
      <div className="nav-links">
        {auth?.user ? (
          <>
            <span>Hello, {auth.user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
