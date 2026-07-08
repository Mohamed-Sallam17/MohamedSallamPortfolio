import { FaLocationDot } from "react-icons/fa6"
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io"

function Footer() {
  return (
    <footer className="mt-8">
      <div className="container">
        <div className="contact-me w-full mx-auto text-center">
          <span className="uppercase text-sm lg:text-lg text-(--second-color) mb-4"> get in touch</span>
          <h4 className="text-2xl md:text-3xl lg:text-5xl mb-4">
            Let's Work
            <span className="text-(--second-color)"> Together</span>
          </h4>
          <p className='text-[var(--desc-color)] mx-auto text-[0.9rem]'>
            Have a project in mind or want to collebrate ? <br /> 
            Feel free to reach out. I'd love to hear from you 
          </p>
        </div>
        <div className="contacts-menu mt-4">
          <ul className="flex items-center justify-center flex-wrap gap-4">
            <li className="w-max bg-[#06466380] p-4 rounded-2xl"> 
              <a href="mailto:m.sallam1920@gmail.com" className="flex items-center justify-center gap-2">
                <IoMdMail />
                <span>m.sallam1920@gmail.com</span>
              </a>
            </li>
            <li className="w-max bg-[#06466380] p-4 rounded-2xl">
              <a href="https://wa.me/+201006830249" className="flex items-center justify-center gap-2"> 
                <IoLogoWhatsapp/>
                <span>+20 100 683 0249</span>
              </a>
            </li>
            <li className="w-max bg-[#06466380] p-4 rounded-2xl">
              <a href="" className="flex items-center justify-center gap-2">
                <FaLocationDot />
                <span>Egypt</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="profiles">
          <a href="">
            <i></i>
          </a>
        </div>
      </div>
      <div className="copyright mt-8 h-[80px] flex items-center justify-center bg-[#06466380]">
        <p>@ Mohamed Sallam. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
