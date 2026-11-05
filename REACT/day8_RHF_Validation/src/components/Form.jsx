import { React } from 'react';
import { useForm } from 'react-hook-form';
const Form = ({ setUsers, setToggle }) => {

  let { register, handleSubmit, reset, formState: { errors } } = useForm(
    {
      mode: "onChange"
    }
  );
  let formSubmit = (data) => {
    setUsers((prev) => [...prev, data])
    console.log("user data", data)
    reset();
    setToggle((prev) => !prev)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold font-Sans text-xl">Create User</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-6  bg-gray-100 w-70 rounded border-2 border-gray-400 p-5">
        <input {...register("name", {
          required: "name is required!",
          pattern: {
            value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
            message: "Enter a valid name without extra spaces"
          }
        })}
          className=" outline-0 rounded border border-gray-400 p-2" type="text" placeholder="Name" />


        {/* Remember: && in JSX is commonly used to show or hide elements based on a condition. */}
        {/* {errors.name && <p className="text-red-600 text-sm">Name Required !</p>} */}

        {/* Another way */}
        {errors.name
          ? <p className="text-red-600 text-sm">{errors.name.message}</p>
          : null
        }

        <input {...register("email", {
          required: "email is required!",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address"
          }
        },
        )} className=" outline-0 rounded border border-gray-400 p-2" type="email" placeholder="Email" />

        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

        <input {...register("contact", {
          required: "Number is required!",
          minLength: {
            value: 10,
            message: "Minimum 10 digit is required"
          },
          maxLength: {
            value: 10,
            message: "Maximum 10 digit allowed"
          }
        })} className=" outline-0 rounded border border-gray-400 p-2" type="tel" placeholder="Contact Number" />

        {errors.contact && <p className="text-red-600 text-sm">{errors.contact.message}</p>
        }
        <input {...register("image", { required: "image url is required!" })} className=" outline-0 rounded border border-gray-400 p-2" type="url" placeholder="Image" />

        {errors.image && <p className="text-red-600 text-sm">{errors.image.message}</p>}

        {/* for password validation */}

        <input {...register("password", {
          required: "password is required!",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
          }
        })} className=" outline-0 rounded border border-gray-400 p-2" type="password" placeholder="Password" />

        {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}

        <button className="rounded bg-sky-600 text-white p-2">Add user</button>
      </form>
    </div>
  )
}

export default Form