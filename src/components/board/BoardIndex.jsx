import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";
import BoardButton from "../BoardButton";

export default function BoardIndex() {
  const [boardList, setBoardList] = useState([]);

  const { category } = useParams();
  const categoryName = {
    INFO: "공유",
    PROMO: "홍보",
    REPORT: "제보"
  }

  const boardContents = () => {
    let boardResult = axios
      .get(`/v1/board/${category}`)
      .then(function (res) {
        setBoardList(res.data.resultData.boardDtos.content);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    boardContents();
  }, [category]);
  return (
    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>{categoryName[category]}게시판</h2>
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
                <th style={{ width: "15%" }}>조회수</th>
                <th style={{ width: "15%" }}>추천수</th>
              </tr>
            </thead>
            <tbody>
              {boardList.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td>{el.id}</td>
                    <td className="text_left posi_r">
                      <Link to={"/board/detail/" + el.id} className="detail_link">
                        {el.title}
                      </Link>
                    </td>
                    <td>{el.nickname}</td>
                    <td>{el.createdAt.substring(2, 10)}</td>
                    <td>{el.viewCnt}</td>
                    <td>{el.likeCnt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ textAlign: "right" }}>
            <Link to={`/board/${category}/write`}><BoardButton name="작성하기" /></Link>
          </div>
        </div>
      </div>
    </>
  );
}
