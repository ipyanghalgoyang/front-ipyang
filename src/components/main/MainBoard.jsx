import { useState, useEffect } from "react";
import axios from "axios";
import img2 from "../../images/main_adopting_3.jpg";

export default function MainMarket() {
  const [adoptList, setAdoptList] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [marketBoard, setMarketBoard] = useState([]);

  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const boardContents = async () => {
    let boardResult = await axios
      .get("/v1/main")
      .then(function (res) {
        setAdoptList(res.data.resultData.adoptDtos.content);
        setBoardList(res.data.resultData.boardDtos.content);
        setMarketBoard(res.data.resultData.productDtos.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    boardContents();
  }, []);

  return (
    <>
      <div className="title_wrap">
        <h2 className="board_title _bar">
          <p className="tit_1">
            IPYANG <strong>BOARD</strong>
          </p>
          <p className="tit_2">최근게시물</p>
        </h2>
      </div>
      <div className="wrapper">
        <div className="latest_wr">
          <div className="lastest_board lastest_box">
            <div className="title Score_4">입양하기</div>
            <ul className="list_wrap">
              {adoptList.map((el, idx) => {
                return (
                  <li className="list" key={idx}>
                    <a>
                      <div className="content">{el.title}</div>
                      <div className="date">
                        {el.createdAt.substring(2, 10)}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lastest_board lastest_box">
            <div className="title Score_4">문의하기</div>
            <ul className="list_wrap">
              {boardList.map((el, idx) => {
                if (el.category === "INFO") {
                  return (
                    <li className="list" key={idx}>
                      <a>
                        <div className="content">
                          {el.title ? el.title : "내용 없음"}
                        </div>
                        <div className="date">
                          {el.createdAt.substring(2, 10)}
                        </div>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className="latest_wr">
          <div className="lastest_board lastest_box">
            <div className="title Score_4">홍보하기</div>
            <ul className="list_wrap">
              {boardList.map((el, idx) => {
                if (el.category === "PROMO") {
                  return (
                    <li className="list" key={idx}>
                      <a>
                        <div className="content">{el.title}</div>
                        {
                          <div className="date">
                            {el.createdAt.substring(2, 10)}
                          </div>
                        }
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="lastest_board lastest_box">
            <div className="title Score_4">제보하기</div>
            <ul className="list_wrap">
              {boardList.map((el, idx) => {
                if (el.category === "REPORT") {
                  return (
                    <li className="list" key={idx}>
                      <a>
                        <div className="content">{el.title}</div>
                        {
                          <div className="date">
                            {el.createdAt.substring(2, 10)}
                          </div>
                        }
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
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
            {marketBoard.map((el, idx) => {
              return (
                <div style={{ width: "25%" }}>
                  <li className="item">
                    <a href="">
                      <img src={img2} alt="" />
                    </a>
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
        </div>
      </div>
    </>
  );
}
