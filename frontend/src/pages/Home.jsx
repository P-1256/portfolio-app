import StatCard from "../components/StatCard"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

function Home() {

  return (

    <section
      className="
        max-w-6xl
        mx-auto
        px-6
        py-5
      "
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* LEFT SIDE */}

        <div>

          <p
            className="
              text-[#2FA084]
              font-semibold
              mb-4
            "
          >
            FULL STACK LEARNING JOURNEY
          </p>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-[#1F6F5F]
              leading-tight
              mb-6
            "
          >
            Hi, I'm Priyanshu
          </h1>

          <p
            className="
              text-lg
              text-gray-700
              leading-relaxed
              mb-8
            "
          >
            Backend developer exploring React,
            frontend architecture, NodeJs, and full stack
            development by building real-world
            projects.

          </p>

          <div className="flex gap-4">

            <Link to="/projects"
              className="
                bg-[#2FA084]
                hover:bg-[#1F6F5F]
                text-white
                px-6
                py-3
                rounded-xl
                transition
                cursor-pointer
                font-medium
              "
            >
              View Projects
            </Link>

            <Link to="/contact"
              className="
                border-2
                border-[#2FA084]
                text-[#2FA084]
                hover:bg-[#2FA084]
                hover:text-white
                px-6
                py-3
                rounded-xl
                transition
                cursor-pointer
                font-medium
              "
            >
              Contact Me
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}

          transition={{
          duration: 0.8,
          delay: 0.2
          }}

          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          <div className="mb-6">

            <h2
              className="
                text-2xl
                font-bold
                text-[#1F6F5F]
                mb-2
              "
            >
              Developer Profile
            </h2>

            <p className="text-gray-600">
              Building scalable full stack apps.
            </p>

          </div>

          <div className="space-y-4">

  {/* Frontend */}

  <div
    className="
      flex
      items-center
      justify-between
      bg-[#EEEEEE]
      p-4
      rounded-xl
    "
  >

    <div className="flex items-center gap-3">

      <img
        src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        alt="React"
        className="w-8 h-8"
      />

      <span className="font-medium">
        Frontend
      </span>

    </div>

    <span className="text-[#2FA084] font-semibold">
      React
    </span>

  </div>

  {/* Backend */}

  <div
    className="
      flex
      items-center
      justify-between
      bg-[#EEEEEE]
      p-4
      rounded-xl
    "
  >

    <div className="flex items-center gap-3">

      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
        alt="Node"
        className="w-8 h-8"
      />

      <span className="font-medium">
        Backend
      </span>

    </div>

    <span className="text-[#2FA084] font-semibold">
      Node.js
    </span>

  </div>

  {/* API */}

  <div
    className="
      flex
      items-center
      justify-between
      bg-[#EEEEEE]
      p-4
      rounded-xl
    "
  >

    <div className="flex items-center gap-3">

      <img
        src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png"
        alt="API"
        className="w-8 h-8"
      />

      <span className="font-medium">
        APIs
      </span>

    </div>

    <span className="text-[#2FA084] font-semibold">
      REST
    </span>

  </div>

</div>

        </motion.div>

      </motion.div>


      <div className="mt-24">

  <div className="mb-10">

    <p
      className="
        text-[#2FA084]
        font-semibold
        mb-3
      "
    >
      PROBLEM SOLVING
    </p>

    <h2
      className="
        text-4xl
        font-bold
        text-[#1F6F5F]
      "
    >
      DSA & Competitive Programming
    </h2>

  </div>

  <div
    className="
      grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
    "
  >

    <StatCard
      label="LeetCode"
      value="200+"
      description="Problems solved across multiple topics"
      image="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
      link="https://leetcode.com/u/ProPract"
    />

    <StatCard
      label="Codeforces"
      value="200+"
      description="Problems solved of rating 800-1000"
      image="https://sta.codeforces.com/s/91837/images/codeforces-logo-with-telegram.png"
      link="https://codeforces.com/profile/KumarPriyanshu"
    />

    <StatCard
      label="DSA Topics"
      value="15+"
      description="Arrays, Binary Search, Sliding Window, Two Pointer and more"
      image="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
    />

    <StatCard
      label="TLE Eliminators"
      value="Active"
      description="Regularly practicing from CP-31 Sheet"
      image="https://dqy38fnwh4fqs.cloudfront.net/company/COMH9OLLJDPADEEEJ3DBABABAEEGL8/logo-1706089857364.webp"
    />

    <StatCard
      label="Leetcode"
      value="101"
      description="Maximum  streak of 101 days"
      image="https://static.vecteezy.com/system/resources/previews/019/907/094/original/fire-graphic-clipart-design-free-png.png"
      link="https://leetcode.com/u/ProPract"
    />

    <StatCard
      label="Codeforces"
      value="19"
      description="Maximum  streak of 19 days"
      image="https://static.vecteezy.com/system/resources/previews/019/907/094/original/fire-graphic-clipart-design-free-png.png"
      link="https://codeforces.com/profile/KumarPriyanshu"
    />

  </div>

</div>

    </section>
  )
}

export default Home