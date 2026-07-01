import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import htmlIcon from '../assets/skills-icons/html-icon.png'
import cssIcon from '../assets/skills-icons/css-icon.png'
import jsIcon from '../assets/skills-icons/js-icon.png'
import reactIcon from '../assets/skills-icons/react-icon.png'
import tsIcon from '../assets/skills-icons/ts-icon.png'
import tailwindIcon from '../assets/skills-icons/tailwind-icon.png'
import wordpressIcon from '../assets/skills-icons/wordpress-icon.png'
import woocommerceIcon from '../assets/skills-icons/woocommerce-icon.png'


function About() {
  return (
    <section className="about" id="about-me">
        <div className="container mx-auto p-4">
            <div className="about-content text-white">
                <span className="uppercase">about me</span>
                <h4>I build digital experiences that are 
                    <span className="text-(--second-color)"> fast, functional </span> 
                     and  
                     <span className="text-(--second-color)"> beautiful </span>
                </h4>
                <span>
                    I'm a Frontend & Wordpress Developer with a passion for creating clean,
                    high-performing websites and seamless user experiences.I specialize in
                    React, Tailwind CSS, JavaScript, and custom Wordpress development.
                    I love turning ideas into reality through code and modern design principle.
                </span>
            </div>
            <div className="skills">
                <span className="uppercase">my skills</span>
                <h4> Technologies | <span className="text-(--second-color)" > Work With </span> </h4>
                <div className="skills-icons">
                    <Swiper className="mySwiper" slidesPerView={7} loop={true} modules={[Autoplay]} autoplay={{delay: 3000, disableOnInteraction: false}}>
                        <SwiperSlide>
                            <div>
                                <img src={htmlIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={cssIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={jsIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={reactIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={tsIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={tailwindIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={wordpressIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={woocommerceIcon} alt="HTML icon" width="50" height="50" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
