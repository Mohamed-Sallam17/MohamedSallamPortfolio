import projectData from '../projects-data/projectsData.json'

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="about-content w-full mx-auto text-center">
          <span className="uppercase text-sm lg:text-lg text-(--second-color) mb-4">
            Featured Projects{" "}
          </span>
          <h4 className="text-xl md:text-3xl lg:text-5xl mb-8">
            {" "}
            Some Things I've
            <span className="text-(--second-color)"> Built</span>
          </h4>
        </div>
        <div className="project-container grid grid-cols-1 md:grid-cols-3 space-x-4">
          {projectData.map((project) => (
            <div className="project-card p-4 rounded-3xl bg-[#03182b]" key={project.id}>
              <div className="project-image">
                <img src={project.imgSrc} alt={project.imgAlt} />
              </div>
              <div className="project-content space-y-3">
                <h4 className='text-2xl md:text-3xl'>{project.title}</h4>
                <p className='text-[var(--desc-color)]'>{project.description}</p>
                <div className="tech-skill flex justify-between">
                  <div className="tech-stack space-x-2">
                    {project.skills.map((skill, index) => (
                      <span className="tech-badge p-2 bg-[#06466380] rounded-3xl" key={index}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="preview">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
                    >
                      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                      <path d="m21 3-9 9" />
                      <path d="M15 3h6v6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects
