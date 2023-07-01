import Slider from "react-slick";
import img1 from "../../images/main_adopting_1.jpg";
import img2 from "../../images/main_adopting_2.jpg";
import img3 from "../../images/main_adopting_3.jpg";
import img4 from "../../images/main_adopting_4.jpg";

export default function MainAdopting() {
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="title_wrap">
        <h2 className="board_title _bar">
          <p className="tit_1">
            IPYANG <strong>MARKET</strong>
          </p>
          <p className="tit_2">입양 마켓</p>
        </h2>
      </div>
      <div className="wrapper">
        <div className="vertical_list">
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
          <li className="item">
            <a href="">
              <img src={img2} alt="" />
            </a>
          </li>
        </div>
      </div>
    </>
  );
}
