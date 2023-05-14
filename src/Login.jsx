import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase";
import './App.css'
import { useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const loginHandler = async (e) => {
    e.preventDefault();
    const currUser = localStorage.getItem("codeHavenUser");
    try {
      if (currUser) {
        navigate('/dashboard')
      }
      else {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        localStorage.setItem("codeHavenUser", response?.user.uid);
        localStorage.setItem("codeHavenUserEmail", response?.user.email)
        navigate('/dashboard')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="homepageWrapper">
        <div className="formWrapper">
          <img
            src="/logo_bg_removed.png"
            alt="code-haven-logo"
            className="logoImg"
          />
          <div className="formWrapperText">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account.</p>
          </div>
          <div className="inputGroup">
            <input
              type="text"
              style={{ borderRadius: '5px' }}
              name="email"
              value={email}
              placeholder="Enter Email Id"
              className="inputBox"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              style={{ borderRadius: '5px' }}
              value={password}
              placeholder="Enter Password"
              className="inputBox"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="passwordResetText">
              <p>
                Forgot Password? <a href="/resetpassword">Reset Password</a>
              </p>
            </div>
            <button className="btn join-btn" onClick={loginHandler}>
              Login
            </button>
          </div>
        </div>
        <div className="passwordResetText">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
