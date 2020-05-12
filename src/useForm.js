import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({ email: "", password: "" });


  const handleChange = e => {
    const { name, value } = event.target;

    setValues(
      {
        ...values,
        [name]: value
      }
    )
  };

  const handleSubmit = e => {
    console.log("submitted successfully");
    event.preventDefault();
    submit();
  };
}