import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BoardButton from "../BoardButton";

export default function BoardDetail() {

  const { category } = useParams();
  const categoryName = {
    INFO: "공유",
    PROMO: "홍보",
    REPORT: "제보"
  }

  return (

    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>{categoryName[category]}게시판</h2>
        <p>다양한 정보들을 공유합니다.</p>
      </div>
      <div className="sub_con">
        <div className="wrapper">
          <h4 className="board_create_title">게시판 글쓰기</h4>
          <table className="table-view-01 txt-mt">
            <colgroup>
              <col className="col_w" />
              <col width="*" />
            </colgroup>
            <tbody>

              <tr>
                <td colSpan="2" className="tit_box">
                  <input type="text" className="board_title_input" placeholder="글 제목" />

                </td>
              </tr>
              <tr>
                <td colSpan="2" className="tit_box">
                  <textarea className="board_content_input" placeholder="글 내용 입력"></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="tit_box">
                  <input type="file" className="board_file_input" placeholder="글 제목" />
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: "center" }}>
            <BoardButton name="작성하기" /* onClick={} */ />
          </div>
        </div>
      </div>
    </>
  );
}
