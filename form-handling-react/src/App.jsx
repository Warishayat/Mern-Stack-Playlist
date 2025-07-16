import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useForm } from "react-hook-form";
import { error } from "console";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

 async function onSubmit(data) {
    //yahan par api ko call kar k backend par daata dety hewn let see kia hut ahe
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("form is submitted...", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">First Name</label>
        <input
          {...register("firstname")}
        />
        {errors.firstname && (
          <p className="error-message">{errors.firstname.message}</p>
        )}
        <br />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          className={errors.lastname ? "error-input" : ""}
          {...register("lastname", { required: true, maxLength: 8 })}
        />
        {errors.lastname && (
          <p className="error-message">{errors.lastname.message}</p>
        )}
        <br />

        <br />
        <label htmlFor="">Email</label>
        <input
          className={errors.lastname ? "error-input" : ""}
          {...register("email", {
            required: true,
            minLength: { value: 3, message: "min length should be three." },
            maxLength: 8,
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
        <br />
        <input type="submit"  disabled ={isSubmitting}
        value={isSubmitting ? "submitting" : "submit"}
        />
      </form>
    </>
  );
}

export default App;
