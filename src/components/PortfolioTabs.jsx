import { useState } from "react"
import projectData from '../projects-data/projectsData.json'
import PopupModal from "./PopupModal";

function PortfolioTabs() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectProjectModal, setSelectProjectModal] = useState(null)
    const tabs = [
        {"id": "all", "label": "all", "icon": "⚡"},
        {"id": "react", "label": "React Apps", "icon": "⚛️"},
        {"id": "wordpress", "label": "Wordpress", "icon": "🪵"}
    ]
    const filteredProjects = activeTab === "all" ? projectData : projectData.filter((project)=> project.category === activeTab)
  return (
    <>
    <div className="tabs">
        <div className="container">
            <div className="flex justify-center items-center gap-3 mb-12">
                {
                    tabs.map((tab)=>{ 
                        const isActive = activeTab === tab.id;
                        return(
                            <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-in-out cursor-pointer ${
                                isActive 
                                ? "bg-(--primary) text-white shadow-lg scale-105" 
                                : "bg-white border-2 border-(--border) hover:bg-(--primary) hover:border-(--primary) hover:text-white"
                            }`}
                            >
                                {/* <span>{tab.icon}</span> */}
                                <span>{tab.label}</span>
                            </button>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    filteredProjects.map((project)=>(
                        <div
                            className="project-card overflow-hidden rounded-3xl bg-white"
                            key={project.id}
                            >
                            <div className="project-image h-auto overflow-hidden">
                                <img src={project.profileImage} alt={project.imgAlt} loading="lazy" decoding="async" className='w-full h-full object-cover'/>
                            </div>
                            <div className="project-content space-y-4 p-4">
                                <h4 className="text-2xl lg:text-3xl">{project.title}</h4>
                                <p className="text-(--text-muted)">
                                {project.description}
                                </p>
                                <div className="tech-stack flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                    <span
                                        className="tech-badge inline-block w-max p-2 bg-(--background) text-(--primary) rounded-3xl whitespace-nowrap"
                                        key={index}
                                    >
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 actions-btn">
                                    {project.links.live && (
                                            <a
                                            href={project.links.live}
                                            className="flex-1 text-center bg-(--background) hover:bg-(--primary) hover:text-white text-x font-semibold py-2.5 px-4 rounded-xl transition-colors"
                                            >
                                                preview 
                                            </a>
                                    )}
                                    {project.links.github && (
                                            <a 
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-(--background) hover:bg-(--primary) hover:text-white text-x font-semibold py-2.5 px-4 rounded-xl transition-colors"
                                            >
                                                GitHub 
                                            </a>
                                    )}
                                    {
                                      project.details && (
                                        <button
                                            onClick={()=> setSelectProjectModal(project)}
                                            className="flex-1 text-center bg-(--background) hover:bg-(--primary) hover:text-white text-x font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                                        >
                                            Overview 
                                        </button>
                                      )  
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    {/* Popup Modal */}
    <PopupModal project={selectProjectModal} onClose={()=> setSelectProjectModal(null)}/>
    </>
  )
}

export default PortfolioTabs
