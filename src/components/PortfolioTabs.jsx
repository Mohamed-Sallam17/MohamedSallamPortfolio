import { useState } from "react"
import projectData from '../projects-data/projectsData.json'
import { GrShare } from "react-icons/gr";

function PortfolioTabs() {
    const [activeTab, setActiveTab] = useState("all");
    const tabs = [
        {"id": "all", "label": "all", "icon": "⚡"},
        {"id": "React", "label": "React Apps", "icon": "⚛️"},
        {"id": "Wordpress", "label": "Wordpress", "icon": "🪵"}
    ]
    const filteredProjects = activeTab === "all" ? projectData : projectData.filter((project)=> project.category === activeTab)
  return (
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
                                ? "bg-[#06466380] text-white shadow-lg scale-105" 
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
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
                            className="project-card overflow-hidden rounded-3xl bg-[#03182b]"
                            key={project.id}
                            >
                            <div className="project-image h-48 overflow-hidden">
                                <img src={project.image} alt={project.imgAlt} className='w-full h-full object-cover'/>
                            </div>
                            <div className="project-content space-y-3 p-4">
                                <h4 className="text-2xl lg:text-3xl">{project.title}</h4>
                                <p className="text-[var(--desc-color)]">
                                {project.description}
                                </p>
                                <div className="tech-stack flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                    <span
                                        className="tech-badge inline-block w-max p-2 bg-(--second-bg) rounded-3xl whitespace-nowrap"
                                        key={index}
                                    >
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {
                                        project.links.live && (
                                            <a 
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center hover:bg-(--second-bg) text-black text-x font-semibold py-2.5 px-4 rounded-xl transition-colors"
                                            >
                                                preview 🔗
                                            </a>
                                        )
                                    }
                                                                        {
                                        project.links.github && (
                                            <a 
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-white hover:bg-(--second-bg) text-black text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
                                            >
                                                GitHub 💻
                                            </a>
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
  )
}

export default PortfolioTabs
