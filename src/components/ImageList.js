import react from "react";


const ImageList =(props)=>{
    const images = props.images.map((image)=>{
            return <img key={image.id} className="ui large rounded centered image" alt= {image.description} src = {image.urls.regular} />
    })
    return(
        <div>{images}</div>
    )
}

export default ImageList;