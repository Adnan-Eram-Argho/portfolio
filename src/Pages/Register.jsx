import { useForm } from "react-hook-form";
import auth from "../Firebase/firebase.config";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

function Register() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit =  (data) => {
        createUserWithEmailAndPassword(data.Email, data.password);
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-neutral p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-secondary mb-6">Login</h2>

        {error && (
          <div className="mb-4 text-red-500 text-center">
            <p>Error: {error.message}</p>
          </div>
        )}

        {loading && (
          <div className="mb-4 text-center">
            <p>Loading...</p>
          </div>
        )}

        {user ? (
          <div className="text-center text-green-500">
            <p>Signed In User: {user.email}</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-secondary" htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                className="input input-bordered input-secondary w-full"
              />
              {errors.Email && (
                <p className="text-red-500 text-xs italic">Please enter a valid email.</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-secondary" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="input input-bordered input-secondary w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">Password is required.</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="btn btn-outline btn-secondary">
                Sign In
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default Register
