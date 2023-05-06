import React from "react";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { providers, signIn, useSession } from "next-auth/react";
import { RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const result = await signIn("github", {
      name,
      email,
      password,
      callbackUrl: "/",
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <h2 className={styles.heading}>Sign In</h2>
        <h6 className={styles.subHeading}>Sign in to your account</h6>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={()=>signIn()}>
            <FcGoogle />
            Sign in with Google
          </button>
          <button className={styles.btn}>
            <RiAppleFill />
            Sign in with Apple
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formDiv}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" {...register("email")} className={styles.input} />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" {...register("password")} className={styles.input}/>

          <p className={styles.password}>Forgot password?</p>
          <button
            className={styles.signIn}
            type="submit"
            onClick={() => console.log("register button clicked")}
          >
            Sign In
          </button>
        </form>
        <p className={styles.account}>Don't have an account? <span className={styles.password}>Register here</span></p>
      </div>
    </div>
  );
};

export default Form;
