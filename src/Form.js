import React, { useState } from "react";

const Form = () => {
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
              onChange={handleChange} />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange} />
          </div>
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  )
}

//form
//label / input for email