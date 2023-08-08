import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Info() {
  const [infoList, setInfoList] = useState([]);

  const infoContents = () => {
    let infoResult = axios
      .get("/v1/board/INFO")
      .then(function (res) {
        setInfoList(res.data.resultData.boardDtos.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    infoContents();
  }, []);
  return (
    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>공유게시판</h2>
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
              {infoList.map((el, idx) => {
                return (
                  <tr>
                    <td>{el.id}</td>
                    <td class="text_left posi_r">
                      <Link to={"/board/detail/" + el.id} className="detail_link">
                        {el.title}
                      </Link>
                    </td>
                    <td>{el.nickname}</td>
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
