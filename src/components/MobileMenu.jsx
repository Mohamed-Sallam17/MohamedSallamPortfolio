import ReactDOM from "react-dom"; 

function MobileMenu({isOpen,onClose}) {

    if(!isOpen) return null ;

  return ReactDOM.createPortal(
    <div className="mm-menu fixed inset-0 z-[9999] backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto" >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black w-8 h-8 rounded-full flex items-center justify-center text-lg cursor-pointer transition-colors"
        >
          ✕
        </button>
      <ul className="mm-main-menu text-center text-2xl">
        <li className="py-4">
            <a href="#about" onClick={onClose}>About</a>
        </li>
        <li className="py-4">
            <a href="#skills" onClick={onClose}>Skills</a>
        </li>
        <li className="py-4">
            <a href="#projects" onClick={onClose}>Projects</a>
        </li>
        <li className="py-4">
            <a href="#contact" onClick={onClose}>Contact</a>
        </li>
      </ul>
    </div>,
    document.body
  )
}

export default MobileMenu
