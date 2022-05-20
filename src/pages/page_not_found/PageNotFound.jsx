import "./page_not_found.css";
import image from "../../assets/images/404_image.svg";
// import image from '../../assets/images/'

export const PageNotFound = () => {
    return (
      <main className="main center">
        <img className="img_404" src={image} />
      </main>
    );
};
