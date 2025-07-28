import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onsubmitHandler(e) {
    const email = e.Email;
    const password = e.password;
    const name = e.name;
    await createUserWithEmailAndPassword(auth, email, password, name)
      .then((credential) => {
        const user = credential.user;
        alert("user is created", user);
        navigate("/login");
      })
      .catch((error) => {
        alert("There is some error");
      });
  }
  return (
    <div className="Signup-Page">
      <div className="Form-section">
        <h1 className="Signup-Tite">Sign-Up</h1>
        <form onSubmit={handleSubmit(onsubmitHandler)} className="Form">
          <label className="Email-label">Enter Your Email:</label>
          <input
            defaultValue="abc69@gmail.com"
            {...register("Email", { required: true })}
            className="Email-type"
          />
          <br />
          <label>Enter your Full name</label>
          <input
            {...register("fullname", { required: true })}
            className="fullname"
          />
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
          <p className="login-link">
            Already have the account <NavLink to={"/login"}>Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
