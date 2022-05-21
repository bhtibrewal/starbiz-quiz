import "./page_not_found.css";
import image from "../../assets/images/404_image.svg";

export const PageNotFound = () => {
    return (
      <main className="main center">
        <img className="img_404" src={image} alt='page not found'/>
      </main>
    );
};
