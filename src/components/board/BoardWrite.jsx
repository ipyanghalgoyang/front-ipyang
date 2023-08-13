import topImage from "../../images/pet.jpg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BoardDetail() {

  const navigate = useNavigate();

  const { category } = useParams();
  const categoryName = {
    INFO: "공유",
    PROMO: "홍보",
    REPORT: "제보"
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const WriteBoard = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('boardFile', file);

    let sendData = await axios
      .post(`/v1/board/${category}/write`, formData)
      .then(function (res) {
        if (res.status === 200) {
          navigate(`/board/${category}`);
        }
      })
      .catch(function (err) {
        alert("필수 항목을 입력해주세요.");
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
          <form>
            <table className="table-view-01 txt-mt">
              <colgroup>
                <col className="col_w" />
                <col width="*" />
              </colgroup>
              <tbody>

                <tr>
                  <td colSpan="2" className="tit_box">
                    <input type="text" required className="board_title_input" placeholder="글 제목"
                      onChange={(e) => setTitle(e.target.value)}
                    />

                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="tit_box">
                    <textarea className="board_content_input" placeholder="글 내용 입력"
                      onChange={(e) => setContent(e.target.value)}

                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="tit_box">
                    <input type="file" className="board_file_input" placeholder="글 제목" onChange={handleFileChange} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="board_btn" onClick={WriteBoard} >작성하기</button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}
