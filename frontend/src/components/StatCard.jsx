import { motion } from "framer-motion"

function StatCard(props) {

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >

      <motion.div
        whileHover={{
            y: -8
        }}

        transition={{
            duration: 0.3
        }}

      className="
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        border
        border-gray-100
      "
    >

      <div
        className="
          flex
          items-center
          gap-4
          mb-6
        "
      >

        <img
          src={props.image}
          alt={props.label}
          className="
            w-12
            h-12
            object-contain
          "
        />

        <div>

          <p
            className="
              text-sm
              font-semibold
              text-[#2FA084]
              uppercase
              tracking-wide
            "
          >
            {props.label}
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-[#1F6F5F]
            "
          >
            {props.value}
          </h2>

        </div>

      </div>

      <p className="text-gray-600 leading-relaxed">
        {props.description}
      </p>

    </motion.div>

    </a>
  )
}

export default StatCard