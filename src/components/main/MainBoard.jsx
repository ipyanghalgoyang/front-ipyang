import { useState, useEffect } from "react";
import axios from "axios";

export default function MainMarket() {

  const [adoptList, setAdoptList] = useState([]);
  const [boardList, setBoardList] = useState([]);

  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const adoptContents = async () => {

    let adoptResult = await axios
      .get("/v1/adopt",)
      .then(function (res) {
        setAdoptList(res.data.resultData);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const boardContents = async () => {

    let boardResult = await axios
      .get("/v1/board",)
      .then(function (res) {
        setBoardList(res.data.resultData);
      })
      .catch(function (err) {
        console.log(err);
      });
  };


  useEffect(() => {
    adoptContents();
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
                      <div className="date">{el.createdAt.substring(2, 10)}</div>
                    </a>
                  </li>
                )
              })}

            </ul>
          </div>
          <div className="lastest_board lastest_box">
            <div className="title Score_4">문의하기</div>
            <ul className="list_wrap">
              {boardList.map((el, idx) => {
                if (el.commonBoard === "Info")
                  return (
                    <li className="list" key={idx}>
                      <a>
                        <div className="content">{el.title}</div>
                        {/* <div className="date">{el.createdAt.substring(2, 10)}</div> */}
                      </a>
                    </li>
                  )
              })}

            </ul>
          </div>

        </div>
        <div className="latest_wr">
          <div className="lastest_board lastest_box">
            <div className="title Score_4">홍보하기</div>
            <ul className="list_wrap">
              {boardList.map((el, idx) => {
                if (el.commonBoard === "Promo")
                  return (
                    <li className="list" key={idx}>
                      <a>
                        <div className="content">{el.title}</div>
                        {/* <div className="date">{el.createdAt.substring(2, 10)}</div> */}
                      </a>
                    </li>
                  )
              })}
            </ul>
          </div>
          <div className="lastest_board lastest_box">
            <div className="title Score_4">제보하기</div>
            <ul className="list_wrap">
              {boardList.map((el, idx) => {
                if (el.commonBoard === "Report")
                  return (
                    <li className="list" key={idx}>
                      <a>
                        <div className="content">{el.title}</div>
                        {/* <div className="date">{el.createdAt.substring(2, 10)}</div> */}
                      </a>
                    </li>
                  )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
