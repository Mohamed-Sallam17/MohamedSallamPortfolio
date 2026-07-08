import projectData from '../projects-data/projectsData.json'

function Projects() {
  return (
    <section className="projects mt-8" id="projects">
      <div className="container">
        <div className="about-content w-full mx-auto text-center">
          <span className="uppercase text-sm lg:text-lg text-(--second-color) mb-4">
            Featured Projects
          </span>
          <h4 className="text-2xl md:text-3xl lg:text-5xl mb-8">
            Some Things I've
            <span className="text-(--second-color)"> Built</span>
          </h4>
        </div>
        <div className="project-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((project) => (
            <div
              className="project-card overflow-hidden rounded-3xl bg-[#03182b]"
              key={project.id}
            >
              <div className="project-image h-48 overflow-hidden">
                <img src={project.imgSrc} alt={project.imgAlt} className='w-full h-full object-cover'/>
              </div>
              <div className="project-content space-y-3 p-4">
                <h4 className="text-2xl lg:text-3xl">{project.title}</h4>
                <p className="text-[var(--desc-color)]">
                  {project.description}
                </p>
                <div className="tech-skill flex justify-between items-center gap-4">
                  <div className="tech-stack flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        className="tech-badge inline-block w-max p-2 bg-[#06466380] rounded-3xl whitespace-nowrap"
                        key={index}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="preview ">
                    <a href="#" className='hover:text-(--second-color) transition-colors'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-square-arrow-out-up-right"
                      >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects
