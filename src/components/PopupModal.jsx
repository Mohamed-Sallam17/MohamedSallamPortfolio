import ReactDOM from "react-dom"; 
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function ProjectModal({ project, onClose }) {

  if (!project) return null;


  return ReactDOM.createPortal(
    <div
      className="popup-modal fixed inset-0 z-[9999] backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-(--background) text-white border border-(--border) rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white border border-(--border) hover:bg-(--primary) hover:border(--primary) w-8 h-8 rounded-full flex items-center justify-center text-lg cursor-pointer transition-colors"
        >
          ✕
        </button>


        <h3 className="text-2xl font-bold pb-3 pr-8">
          {project.title}
        </h3>


        {project.details?.features && (
          <div className="space-y-2 project-features">
            <h5 className="text-lg font-semibold">Features:</h5>
            <ul className="list-disc list-inside space-y-1 text-(--text-muted) text-sm">
              {project.details.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.details?.videoUrl && (
          <div className="space-y-2 project-video">
            <h5 className="text-lg font-semibold">Video: </h5>
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <video
                src={project.details.videoUrl}
                title="Project Video"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        )}


        <div className="space-y-3 project-media">
            <h5 className="text-lg font-semibold">Images: </h5>
            <Swiper
                spaceBetween={"30px"}
                className="mySwiper border-2 border-(--border) rounded-2xl p-5!"
            >
            {project.details?.screenshots && (
                <>
                {project.details.screenshots.map((img, idx) => (
                  <SwiperSlide >
                    <img
                    key={idx}
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    loading="lazy" 
                    decoding="async"
                    className="w-full rounded-xl border border-(--border) object-cover h-full"
                    />
                  </SwiperSlide>
                ))}
                </>
            )}
            </Swiper>
        </div>
 
      </div>
    </div>,
    document.body 
  );
}

export default ProjectModal;