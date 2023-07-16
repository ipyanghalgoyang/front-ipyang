import Slider from "react-slick";
import img1 from "../../images/main_adopting_1.jpg";
import img2 from "../../images/main_adopting_2.jpg";
import img3 from "../../images/main_adopting_3.jpg";
import img4 from "../../images/main_adopting_4.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MainAdopting() {
  const [adoptList, setAdoptList] = useState([]);
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const adoptContents = () => {
    let adoptResult = axios
      .get("/v1/adopt")
      .then(function (res) {
        setAdoptList(res.data.resultData);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    adoptContents();
  }, []);
  return (
    <div className="main_adopting">
      <div className="adopting_title">
        <span className="bold">분양중인</span>
        <span>반려묘</span>
      </div>
      <div className="adopting_cat">
        <Slider {...slickSettings}>
          {/* {adoptList.map((el, idx) => {
            return (
              <div className="img" key={idx}>
                <span
                  className="img_src"
                  style={{ backgroundImage: `url(${img1})` }}
                >
                  {el.title}
                </span>
              </div>
            );
          })} */}
          <div className="img">
            <span
              className="img_src"
              style={{ backgroundImage: `url(${img1})` }}
            ></span>
          </div>
          <div className="img">
            <span
              className="img_src"
              style={{ backgroundImage: `url(${img2})` }}
            ></span>
          </div>
          <div className="img">
            <span
              className="img_src"
              style={{ backgroundImage: `url(${img3})` }}
            ></span>
          </div>
          <div className="img">
            <span
              className="img_src"
              style={{ backgroundImage: `url(${img4})` }}
            ></span>
          </div>
        </Slider>
        <div
          className="adopting_title"
          style={{ letterSpacing: "30px", padding: "40px 0px" }}
        >
          <span style={{ color: "#c69c6d" }}>
            <em>C</em>
            ATS
          </span>
          <span style={{ color: "#999999" }}>&</span>
          <span style={{ color: "#ba7455" }}>
            <em>S</em>ERVANTS
          </span>
        </div>
      </div>
    </div>
  );
}
