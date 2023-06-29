import { useForm } from "react-hook-form";
const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async () => {
    await wait(5000);
  };
  return (
    <>
      <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },

                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "please enter valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-700 text-sm font-bold">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "password should be of min 6 letters",
                },
                maxLength: {
                  value: 20,
                  message: "password must be less than 20 letters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-700 text-sm font-bold">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-stone-300 disabled:cursor-wait"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
