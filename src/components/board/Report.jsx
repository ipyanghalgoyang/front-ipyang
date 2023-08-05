import topImage from "../../images/review.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Report() {
  const [reportList, setReportList] = useState([]);

  const reportContents = () => {
    let adoptResult = axios
      .get("/v1/board/REPORT")
      .then(function (res) {
        setReportList(res.data.resultData.boardDtos.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    reportContents();
  }, []);
  return (
    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>제보게시판</h2>
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
              {reportList.map((el, idx) => {
                return (
                  <tr>
                    <td>{el.id}</td>
                    <td class="text_left posi_r">
                      <a href="" className="detail_link">
                        {el.title}
                      </a>
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