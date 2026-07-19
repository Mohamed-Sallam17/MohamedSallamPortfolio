import { GrShare } from 'react-icons/gr';
import projectData from '../projects-data/projectsData.json'

function Projects() {
  return (
    <section className="projects mt-8" id="projects" data-aos="fade-up">
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
                      <GrShare className='text-xl'/>
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
