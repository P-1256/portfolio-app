import { motion } from "framer-motion"

function ProjectCard(props) {

  return (

    <motion.div
        whileHover={{
            y: -8
        }}

        transition={{
            duration: 0.3
        }}

      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-xl
        border
        border-gray-100
        flex
        flex-col
        justify-between
      "
    >

      <div>

        {/* TOP */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-6
          "
        >

          <img
            src={props.image}
            alt={props.title}
            className="w-14 h-14"
          />

          <span
            className="
              bg-[#6FCF97]
              text-[#FFFFFF]
              px-3
              py-1
              rounded-full
              text-sm
              font-semibold
            "
          >
            {props.category}
          </span>

        </div>

        {/* TITLE */}

        <h2
          className="
            text-2xl
            font-bold
            text-[#1F6F5F]
            mb-4
          "
        >
          {props.title}
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-600
            leading-relaxed
            mb-6
          "
        >
          {props.description}
        </p>

        {/* TECH STACK */}

        <div
          className="
            flex
            flex-wrap
            gap-2
            mb-8
          "
        >

          {
            props.techStack.map((tech, index) => (

              <span
                key={index}
                className="
                  bg-[#EEEEEE]
                  text-[#1F6F5F]
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                {tech}
              </span>

            ))
          }

        </div>

      </div>

      {/* BUTTONS */}

      <div className="flex gap-4">

        <a
          href={props.github}
          target="_blank"
          className="
            flex-1
            text-center
            bg-[#2FA084]
            hover:bg-[#1F6F5F]
            text-white
            py-3
            rounded-xl
            transition
            font-medium
          "
        >
          GitHub
        </a>

        <a
          href={props.live}
          target="_blank"
          className="
            flex-1
            text-center
            border-2
            border-[#2FA084]
            text-[#2FA084]
            hover:bg-[#2FA084]
            hover:text-white
            py-3
            rounded-xl
            transition
            font-medium
          "
        >
          Demo
        </a>

      </div>

    </motion.div>
  )
}

export default ProjectCard