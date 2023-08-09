import topImage from "../../images/review.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import img2 from "../../images/main_adopting_3.jpg";
import {Link} from "react-router-dom";

export default function Product() {
  const [productList, setProductList] = useState([]);

  const productContents = () => {
    let productResult = axios
      .get("/v1/product?page=1")
      .then(function (res) {
        setProductList(res.data.resultData.productDtos.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    productContents();
  }, []);
  return (
    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>마켓</h2>
        <p>저렴한 가격에 나눔하세요~</p>
      </div>
      <div className="sub_con">
        <div className="wrapper">
          <table className="table_board_for">
            <thead>
              <tr>
       
              </tr>
            </thead>
            <tbody>
            <div className="vertical_list">
              {productList.map((el, idx) => {
                return (
           

                    <div style={{ width: "25%" }}>
                      <h4 className="product_loc">{el.status === 'N' ? '판매중' : '판매완료'}


                      </h4>
                    <li className="item">
                      <Link to={"/product/detail/" + el.id} className="detail_link">
                        <img src={img2} alt="" />
                      </Link>
                    </li>
                    <h4 className="product_loc">{el.loc}</h4>
                    <h4 className="product_title">{el.name}</h4>
                    <h4 style={{ textAlign: "center" }}>
                      <span className="product_price">
                        {el.price.toLocaleString()}원
                      </span>
                    </h4>
                    </div>

                );
              })}
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
