import { FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { FaGithub, FaLocationDot } from "react-icons/fa6"
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io"

function Footer() {
  return (
    <footer className="mt-8" id="contact" data-aos="fade-up">
      <div className="container">
        <div className="contact-me w-full mx-auto text-center">
          <span className="uppercase text-sm lg:text-lg text-(--primary) mb-4"> get in touch</span>
          <h4 className="text-2xl md:text-3xl lg:text-5xl mb-4">
            Let's Work
            <span className="text-(--primary)"> Together</span>
          </h4>
          <p className='text-(--text-muted) mx-auto text-[0.9rem]'>
            Have a project in mind or want to collebrate ? <br /> 
            Feel free to reach out. I'd love to hear from you 
          </p>
        </div>
        <div className="profiles flex items-center justify-center flex-wrap gap-4 mt-8">
          <a href="mailto:m.sallam1920@gmail.com" target="_blanck" className="w-max border-2 border-(--border) bg-white hover:border-(--primary) hover:bg-(--primary) hover:text-(--background) p-4 rounded-2xl">
            <IoMdMail className="text-2xl"/>
          </a>
          <a href="tel:+201006830249" target="_blanck" className="w-max border-2 border-(--border) bg-white hover:border-(--primary) hover:bg-(--primary) hover:text-(--background) p-4 rounded-2xl">
            <FaPhoneAlt className="text-2xl"/>
          </a>
          {/* <a href="https://github.com/Mohamed-Sallam17" target="_blanck" className="w-max border-2 border-(--border) bg-white hover:border-(--primary) hover:bg-(--primary) hover:text-(--background) p-4 rounded-2xl">
            <FaGithub className="text-2xl"/>
          </a> */}
          <a href="https://wa.me/+201006830249" target="_blanck" className="w-max border-2 border-(--border) bg-white hover:border-(--primary) hover:bg-(--primary) hover:text-(--background) p-4 rounded-2xl">
            <IoLogoWhatsapp className="text-2xl"/>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-sallam-46b3b6237?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blanck" className="w-max border-2 border-(--border) bg-white hover:border-(--primary) hover:bg-(--primary) hover:text-(--background) p-4 rounded-2xl">
            <FaLinkedin className="text-2xl"/>
          </a>
        </div>
      </div>
      <div className="copyright mt-8 h-[80px] flex items-center justify-center text-white bg-(--primary) dark:bg-black">
        <p>@ Mohamed Sallam. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
