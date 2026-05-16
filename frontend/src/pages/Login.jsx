import { Link } from "react-router-dom";

function Login() {

  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-12
      "
    >

      <div
        className="
          bg-white
          w-full
          max-w-md
          rounded-3xl
          p-8
          shadow-lg
        "
      >

        {/* HEADING */}

        <div className="mb-8 text-center">

          <p
            className="
              text-[#2FA084]
              font-semibold
              mb-2
            "
          >
            ADMIN ACCESS
          </p>

          <h1
            className="
              text-4xl
              font-bold
              text-[#1F6F5F]
              mb-3
            "
          >
            Welcome Back
          </h1>

          <p className="text-gray-600">
            Login to manage your portfolio dashboard.
          </p>

        </div>

        {/* FORM */}

        <form className="space-y-6">

          {/* EMAIL */}

          <div>

            <label
              className="
                block
                mb-2
                font-medium
                text-[#1F6F5F]
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                p-4
                rounded-xl
                bg-[#EEEEEE]
                outline-none
                focus:ring-2
                focus:ring-[#2FA084]
              "
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label
              className="
                block
                mb-2
                font-medium
                text-[#1F6F5F]
              "
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="
                w-full
                p-4
                rounded-xl
                bg-[#EEEEEE]
                outline-none
                focus:ring-2
                focus:ring-[#2FA084]
              "
            />

          </div>

          {/* BUTTON */}

          <button
            className="
              w-full
              bg-[#2FA084]
              hover:bg-[#1F6F5F]
              text-white
              py-4
              rounded-xl
              transition
              font-semibold
              cursor-pointer
            "
          >
            Login
          </button>

          <p
  className="
    text-center
    text-gray-600
    mt-6
  "
>

  Don’t have an account?

  <Link
    to="/register"
    className="
      text-[#2FA084]
      font-semibold
      ml-2
      hover:underline
    "
  >
    Register
  </Link>

</p>

        </form>

      </div>

    </section>
  )
}

export default Login