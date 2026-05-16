function Register() {

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

        <div className="mb-8 text-center">

          <p
            className="
              text-[#2FA084]
              font-semibold
              mb-2
            "
          >
            CREATE ACCOUNT
          </p>

          <h1
            className="
              text-4xl
              font-bold
              text-[#1F6F5F]
              mb-3
            "
          >
            Register
          </h1>

          <p className="text-gray-600">
            Create your admin account.
          </p>

        </div>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Name"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#EEEEEE]
              outline-none
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#EEEEEE]
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full
              p-4
              rounded-xl
              bg-[#EEEEEE]
              outline-none
            "
          />

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
            Register
          </button>

        </form>

      </div>

    </section>
  )
}

export default Register