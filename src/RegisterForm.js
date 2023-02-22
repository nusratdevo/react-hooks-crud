import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

	return (
		<div className="section is-fullheight">
		<div className="container">
		  <div className="column is-4 is-offset-4">
			<div className="box">
			  <form onSubmit={handleSubmit(handleRegistration, handleError)}>
				<div className="field">
				  <label className="label">Name</label>
				  <div className="control">
        <input className="input" name="name" type="text" {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
		</div>
        </div>
		<div className="field">
        <label className="label">Email Address</label>
        <div className="control">
		<input
		 className="input"					
          type="email"
          name="email"
          {...register('email', registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div></div>
	  <div className="field">
        <label className="label">Password</label>
        <div className="control">
        <input
          type="password"
		  name="password"
		className="input"
          {...register('password', registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div></div>
      <button className="button is-block is-info is-fullwidth">Submit</button>
		</form>
						
					
		</div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;