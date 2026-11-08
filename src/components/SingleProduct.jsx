import { useParams } from "react-router-dom";

function SingleProduct() {
    const {projectName} = useParams();
  return (

    <div className="pt-[20rem]"> 
      <h2>تفاصيل المشروع: {projectName}</h2>
    </div>
  )
}

export default SingleProduct
