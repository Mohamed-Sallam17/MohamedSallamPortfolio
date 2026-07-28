import 'swiper/css';
import htmlIcon from '/public/assets/skills-icons/html-icon.png'
import cssIcon from '/public/assets/skills-icons/css-icon.png'
import jsIcon from '/public/assets/skills-icons/js-icon.png'
import reactIcon from '/public/assets/skills-icons/react-icon.png'
import nextIcon from '/public/assets/skills-icons/next-icon.png'
import tsIcon from '/public/assets/skills-icons/ts-icon.png'
import tailwindIcon from '/public/assets/skills-icons/tailwind-icon.png'
import wordpressIcon from '/public/assets/skills-icons/wordpress-icon.png'
import woocommerceIcon from '/public/assets/skills-icons/woocommerce-icon.png'
import gitIcon from '/public/assets/skills-icons/git-icon.png'


const skillsIcons = [
    {
        src: htmlIcon,
        alt : "HTML icon"
    },
    {
        src: cssIcon,
        alt : "CSS icon"
    },
    {
        src: jsIcon,
        alt : "JS icon"
    },
    {
        src: reactIcon,
        alt : "React icon"
    },
    {
        src: nextIcon,
        alt : "Next icon"
    },
    {
        src: tsIcon,
        alt : "TS icon"
    },
    {
        src: tailwindIcon,
        alt : "Tailwind icon"
    },
    {
        src: gitIcon,
        alt : "Git icon"
    },
    {
        src: wordpressIcon,
        alt : "Wordpress icon"
    },
    {
        src: woocommerceIcon,
        alt : "Woocommerce icon"
    }
]
function About() {

  return (
    <section className="about" id="about" data-aos="fade-up">
        <div className="container mt-8">
            <div className='flex justify-center items-center flex-col' data-aos="fade-up">
                <div className="about-content w-full mx-auto text-center">
                    <span className="uppercase text-sm lg:text-lg text-(--second-color) mb-4">about me</span>
                    <h4 className='text-xl md:text-3xl lg:text-5xl mb-8'>I build digital experiences <br /> that are 
                        <span className="text-(--second-color)"> fast, functional </span> 
                        and  
                        <span className="text-(--second-color)"> beautiful </span>
                    </h4>
                    <span className='text-[var(--desc-color)] md:w-[70%] lg:w-[60%] xl:w-[40%] mx-auto inline-block text-sm'>
                        I'm a Frontend & Wordpress Developer with a passion for creating clean,
                        high-performing websites and seamless user experiences.I specialize in
                        React, Tailwind CSS, JavaScript, and custom Wordpress development.
                        I love turning ideas into reality through code and modern design principle.
                    </span>
                </div>
                <div className="dot-shape w-full text-center flex justify-center items-center my-8 relative">
                    <span className='line w-full h-px inline-block'></span>
                    <span className='dot inline-block w-[20px] h-[20px] rounded-[50%] bg-[var(--second-color)]'></span>
                </div>
                <div className="skills text-center w-full mt-8" id='skills' data-aos="fade-up">
                    <span className="uppercase text-sm lg:text-lg text-(--second-color) mb-4">my skills</span>
                    <h4 className='text-white text-xl md:text-2xl lg:text-4xl mb-8'> Technologies | <span className="text-(--second-color)" > Work With </span></h4>
                    <div className="skills-icons">
                        <div className="marquee overflow-x-hidden relative">
                            <div className="marquee-track flex w-max gap-4 md:gap-8 lg:gap-15">
                                {
                                [...skillsIcons,...skillsIcons,...skillsIcons,...skillsIcons,...skillsIcons,...skillsIcons].map((icon,index)=>(
                                    <div className="marquee-item p-2 rounded-xl border-1 border-[#052c50] border-solid w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex justify-center items-center" key={index}>
                                        <img src={icon.src} alt={icon.alt} />
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
