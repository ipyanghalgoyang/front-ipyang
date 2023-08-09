import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function BoardDetail() {


  const [boardContents, setBoardContents] = useState([]);
  const [commentContents, setCommentContents] = useState([]);

  const { id } = useParams();

  const infoContents = async () => {
    let res = await axios.get(`/v1/board/read/${id}`);

    setBoardContents([res.data.resultData.resultData.selectBoardDtos]);
    setCommentContents(res.data.resultData.resultData.commentList);

  };






  useEffect(() => {
    infoContents();
  }, [id]);
  return (

    <>
      <div
        className="main_banner"
        style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
      >
        <h2>공유게시판</h2>
        <p>다양한 정보들을 공유합니다.</p>
      </div>
      <div className="sub_con">
        <div className="wrapper">
          <table className="table-view-01 txt-mt">
            <colgroup>
              <col className="col_w" />
              <col width="*" />
            </colgroup>
            <tbody>

                  <tr>
                    <td colSpan="2" className="clearfix tit_box">
                      <p className="tit">

                        {boardContents[0] && boardContents[0].title}


                      </p>
                      <p className="tbl_detail_span mt_05">
                      <span className="name">
                        작성자: {boardContents[0] && boardContents[0].nickname}
                      {/* {boardContents.selectBoardDtos.nickname}*/}
                      </span>
                        <span className="date"></span>
                      </p>
                    </td>
                  </tr>
                  <tr style={{ lineHeight: "20px", color: "#666" }}>
                    <td>첨부파일     </td>


                    <td className="text_left">
                      조회수 : {boardContents[0] && boardContents[0].viewCnt}
                      추천수 : {boardContents[0] && boardContents[0].likeCnt}


                      <p className="addfile_txt">첨부파일 없음</p>


                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <div className="board-box">
                        {/* 이미지 리스트 */}
                        {boardContents[0] && boardContents[0].imgList ? (
                            boardContents[0].imgList.map((imgUrl, index) => (
                                <div key={index}>
                                  <img src={imgUrl} alt={`Image ${index}`} />
                                </div>
                            ))
                        ) : (
                            <p>이미지 없음</p>
                        )}


                        <br />
                        {boardContents[0] && boardContents[0].content}

                        <br />


                       {/* 1프로 타입*/}
                        <br />
                        {/*무슨차이인지 알수있을까요*/}
                      </div>
                    </td>


                  </tr>
         {/*         <tr style={{ lineHeight: "20px", color: "#666" }}>
                    <td>이미지</td>
                    <td className="text_left">
                      {boardContents[0] && boardContents[0].imgList.map((imgUrl, index) => (
                          <div key={index}>
                            <img src={imgUrl} alt={`Image ${index}`} />
                          </div>
                      ))}
                    </td>
                  </tr>*/}

            </tbody>
          </table>
          <p>
            목록보기버튼    글수정버튼    글삭제하기버튼    추천버튼
          </p>
          <div className="mt_20">
            <h4 className="reply_top">댓글</h4>
            {commentContents.map((el, idx) => {
              return (

            <div className="reply_box">
              <span className="reply_writer">{el.nickname}</span>
              <span className="reply_content">{el.content}</span>
             추천 <span className="reply_likeCnt">{el.likeCnt}</span>
              <span className="reply_datetime">{el.createdAt}</span>
            </div>
              );
            })}


     {/*       <div className="reply_box">
              <span className="reply_writer">테스트</span>
              <span className="reply_content">테스트</span>
              <span className="reply_datetime">2023-07-29 15:24:00</span>
            </div>
            <div className="reply_box">
              <span className="reply_writer">테스트</span>
              <span className="reply_content">테스트</span>
              <span className="reply_datetime">2023-07-29 15:24:00</span>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
}
