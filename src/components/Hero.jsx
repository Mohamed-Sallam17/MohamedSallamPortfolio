import { GrDownload } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa';


function Hero() {
  return (
    <section className="hero-section h-dvh relative overflow-hidden" data-aos="zoom-in">
      <div className="h-full container mx-auto p-4 relative z-10">
        <div className="h-full flex justify-center items-center flex-col text-center space-y-6" >
          <div>
            <h1  className="uppercase text-sm lg:text-lg text-(--primary) mb-4">
              frontend & wordpress developer
            </h1>
            <p className="text-4xl lg:text-6xl font-bold leading-[1.4]">
                Building Modern,<br />Web <span className="text-(--primary)">Experiences</span>
            </p>
          </div>
          <div className='flex items-center justify-center gap-3 md:gap-5'>
            <a href="/#projects" className='py-4 px-4 text-sm md:text- bg-(--primary) text-white rounded-xl border border-(--border) flex items-center gap-2 cursor-pointer'>
              <FaArrowRight />
              View My Work
            </a>
              <a href="/Mohamed Sallam - Frontend Developer - CV.pdf" download="Mohamed Sallam - Frontend Developer - CV.pdf" className='py-4 px-4 md:text-xl text-sm bg-white rounded-xl border border-(--border) flex items-center gap-2 cursor-pointer' target='_blanck'>              
                <GrDownload  className='text-(--primary)'/>
                Download CV
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;