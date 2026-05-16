import { motion } from "framer-motion"

function Contact() {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}

      className="
        max-w-6xl
        mx-auto
        px-6
        py-16
      "
    >

      {/* HEADING */}

      <div className="mb-14">

        <p
          className="
            text-[#2FA084]
            font-semibold
            mb-3
          "
        >
          CONTACT
        </p>

        <h1
          className="
            text-5xl
            font-bold
            text-[#1F6F5F]
            mb-4
          "
        >
          Let’s Connect
        </h1>

        <p
          className="
            text-gray-600
            text-lg
            max-w-2xl
          "
        >
          Open to collaboration, internships,
          backend development opportunities,
          and full stack projects.
        </p>

      </div>

      {/* MAIN GRID */}

      <div
        className="
          grid
          md:grid-cols-2
          gap-10
        "
      >

        {/* LEFT SIDE */}

        <div className="space-y-6">

  {/* EMAIL */}

  <div
    className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      flex
      items-center
      gap-5
    "
  >

    <img
      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
      alt="Email"
      className="w-12 h-12"
    />

    <div>

      <p
        className="
          text-sm
          text-[#2FA084]
          font-semibold
          mb-1
        "
      >
        EMAIL
      </p>

      <h2
        className="
          text-lg
          font-bold
          text-[#1F6F5F]
        "
      >
        priyanshu@gmail.com
      </h2>

    </div>

  </div>

  {/* LINKEDIN */}

  <div
    className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      flex
      items-center
      gap-5
    "
  >

    <img
      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
      alt="LinkedIn"
      className="w-12 h-12"
    />

    <div>

      <p
        className="
          text-sm
          text-[#2FA084]
          font-semibold
          mb-1
        "
      >
        LINKEDIN
      </p>

      <a
        href="https://www.linkedin.com/in/priyanshu-kumar-8743163a8/"
        target="_blank"
        className="
          text-lg
          font-bold
          text-[#1F6F5F]
          hover:text-[#2FA084]
          transition
        "
      >
        https://www.linkedin.com/in/priyanshu-kumar
      </a>

    </div>

  </div>

  {/* GITHUB */}

  <div
    className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      flex
      items-center
      gap-5
    "
  >

    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
      alt="GitHub"
      className="w-12 h-12"
    />

    <div>

      <p
        className="
          text-sm
          text-[#2FA084]
          font-semibold
          mb-1
        "
      >
        GITHUB
      </p>

      <a
        href="https://github.com/P-1256"
        target="_blank"
        className="
          text-lg
          font-bold
          text-[#1F6F5F]
          hover:text-[#2FA084]
          transition
        "
      >
        github.com/P-1256
      </a>

    </div>

  </div>

  {/* STATUS */}

  <div
    className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      flex
      items-center
      gap-5
    "
  >

    <img
      src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
      alt="Status"
      className="w-12 h-12"
    />

    <div>

      <p
        className="
          text-sm
          text-[#2FA084]
          font-semibold
          mb-1
        "
      >
        STATUS
      </p>

      <h2
        className="
          text-lg
          font-bold
          text-[#1F6F5F]
        "
      >
        Open To Opportunities
      </h2>

    </div>

  </div>

</div>

        {/* RIGHT SIDE */}

        <div
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <form className="space-y-6">

            {/* NAME */}

            <div>

              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-[#1F6F5F]
                "
              >
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
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

            {/* MESSAGE */}

            <div>

              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-[#1F6F5F]
                "
              >
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-[#EEEEEE]
                  outline-none
                  resize-none
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
              Send Message
            </button>

          </form>

        </div>

      </div>

    </motion.div>
  )
}

export default Contact