import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BoardDetail() {
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
          <table className="table-view-01 txt-mt">
            <colgroup>
              <col class="col_w" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <td colspan="2" className="clearfix tit_box">
                  <p className="tit">제목</p>
                  <p className="tbl_detail_span mt_05">
                    <span className="name">canoasin</span>
                    <span className="date">2023-07-29</span>
                  </p>
                </td>
              </tr>
              <tr style={{ lineHeight: "20px", color: "#666" }}>
                <td>첨부파일</td>
                <td className="text_left">
                  <p className="addfile_txt">첨부파일 없음</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div className="board-box">
                    미니타입
                    <br />
                    1프로 타입
                    <br />
                    무슨차이인지 알수있을까요
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt_20">
            <h4 className="reply_top">댓글</h4>
            <div className="reply_box">
              <span className="reply_writer">테스트</span>
              <span className="reply_content">테스트</span>
              <span className="reply_datetime">2023-07-29 15:24:00</span>
            </div>
            <div className="reply_box">
              <span className="reply_writer">테스트</span>
              <span className="reply_content">테스트</span>
              <span className="reply_datetime">2023-07-29 15:24:00</span>
            </div>
            <div className="reply_box">
              <span className="reply_writer">테스트</span>
              <span className="reply_content">테스트</span>
              <span className="reply_datetime">2023-07-29 15:24:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}