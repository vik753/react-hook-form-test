import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmitHandler = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="text" name="first_name" {...register('first_name', {required: true,})} />
      {errors.first_name && <span>first name is required...</span>}
      <input type="submit"/>
    </form>
  )
}

export default App;