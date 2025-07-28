import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleLogin(e){
    const email = e.Email;
    const pass = e.password;
    
    await signInWithEmailAndPassword(auth,email,pass).then((Credential)=>{
      const user = Credential.user;
      alert("user is logged in");
      navigate("/welcome")
    }).catch((error)=>{
      alert("you may entered wrong password or email")
    })
  }
  return (
    <div className="Login-Page">
      <div className="Form-section">
        <h1 className="Login-Tite">Login-Form</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="Form">
          <label className="Email-label">Enter Your Email:</label>
          <input
            defaultValue="abc69@gmail.com"
            {...register("Email", { required: true })}
            className="Email-type"
          />
          <br />
          <label className="password">Enter your Password:</label>
          <input
            {...register("password", { required: true })}
            className="password-type"
          />
          <input
            type="submit"
            disabled={isSubmitting}
            value={loading ? "submitting" : "submit"}
            className="button"
          />
          <p className="signup-page">
            Don't have account <NavLink to={"/signup"}>Signup</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
