import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import BoardButton from "../BoardButton";

export default function BoardDetail() {

  const { category } = useParams();
  const categoryName = {
    INFO: "공유",
    PROMO: "홍보",
    REPORT: "제보"
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);




  const handleFileChange = (e) => {
    setFile(e.target.files[0]);};

  const WriteBoard = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);


    let sendData  =  await axios
        .post(`/v1/board/${category}/write`, formData)
      .then(response => {
        console.log('API 요청 성공:', response.data);
      })
      .catch(error => {
        console.error('API 요청 오류:', error);
      });
  };

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
                  <input type="text" className="board_title_input" placeholder="글 제목"
                          onChange={(e) =>setTitle(e.target.value)}
                  />

                </td>
              </tr>
              <tr>
                <td colSpan="2" className="tit_box">
                  <textarea className="board_content_input" placeholder="글 내용 입력"
                            onChange={(e) =>setContent(e.target.value)}

                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="tit_box">
                  <input type="file" className="board_file_input" placeholder="글 제목"  onChange={handleFileChange}/>
                </td>
              </tr>
            </tbody>
          </table>


          <div style={{ textAlign: "center" }}>
            <Link to={`/board/${category}`}>
            <BoardButton name="작성하기"  onClick={WriteBoard}  />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
