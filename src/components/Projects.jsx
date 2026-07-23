import PortfolioTabs from './PortfolioTabs';

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
        <PortfolioTabs/>
      </div>
    </section>
  );
}

export default Projects
