import { useEffect, useState } from "react";
import {getProjects} from "../api/projectApi";
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const fetchProjects = async () => {

      try {
        const data = await getProjects();
        setProjects(data);
      } 
      catch (error) {
        console.log(error);
      }
  };

  fetchProjects();

}, []);


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
          MY WORK
        </p>

        <h1
          className="
            text-5xl
            font-bold
            text-[#1F6F5F]
            mb-4
          "
        >
          Featured Projects
        </h1>

        <p
          className="
            text-gray-600
            text-lg
            max-w-2xl
          "
        >
          Full stack and backend-focused projects 
          featuring REST APIs, authentication, 
          database design, and modern React 
          interfaces.
        </p>

      </div>

      {/* PROJECT GRID */}

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {
          projects.map((project) => (

            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              live={project.live}
              image={project.image}
              category={project.category}
            />

          ))
        }

      </div>

    </motion.div>
  )
}

export default Projects
