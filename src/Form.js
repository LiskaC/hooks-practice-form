import React, { useState } from "react";
import useForm from './useForm.js';
import validate from "./validateLogin"

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

  return (
    <div>
      <form noValidate onSubmit={handleSubmit} >
        <div>
          <label>Email</label>
          <div>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  )
}

//form
//label / input for email

export default Form;