import topImage from "../../images/cat.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Promo() {
  const [promoList, setPromoList] = useState([]);
  let promoNum = 0;

  const promoContents = () => {
    let promoResult = axios
      .get("/v1/board/PROMO")
      .then(function (res) {
        setPromoList(res.data.resultData.boardDtos.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    promoContents();
  }, []);
  return (
    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>홍보게시판</h2>
        <p>분양 중인 아가들을 소개합니다.</p>
      </div>
      <div className="sub_con">
        <div className="wrapper">
          <table className="table_board_for">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>번호</th>
                <th style={{ width: "*%" }}>제목</th>
                <th style={{ width: "12%" }}>이름</th>
                <th style={{ width: "15%" }}>작성일</th>
                <th style={{ width: "15%" }}>상태</th>
              </tr>
            </thead>
            <tbody>
              {promoList.map((el, idx, num) => {
                return (
                  <tr key={idx}>
                    <td>{++promoNum}</td>
                    <td className="text_left posi_r">
                      <Link to={"/board/detail/" + el.id} className="detail_link">
                        {el.title}
                      </Link>
                    </td>
                    <td>{el.nickname ? null : "이름 없음"}</td>
                    <td>{el.createdAt.substring(2, 10)}</td>
                    <td>대기중</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
