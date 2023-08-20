import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BoardBtn from "../BoardButton";

export default function NoticeDetail() {

    const [noticeContents, setNoticeContents] = useState([]);
    const { id } = useParams();

    const infoContents = async () => {
        let res = await axios.get(`/v1/notice/${id}`);
        setNoticeContents([res.data.resultData]);
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
                <h2>고객센터</h2>
                <p>도움이 필요하신가요?</p>
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

                                    {noticeContents[0] && noticeContents[0].title}

                                </p>
                                <p className="tbl_detail_span mt_05">
                    <span className="name">
                      작성자: {/*{boardContents[0] && boardContents[0].nickname}*/} 관리자
                        {/* {boardContents.selectBoardDtos.nickname}*/}
                    </span>
                                    <span className="date">
                      {noticeContents[0] && noticeContents[0].createdAt}
                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr style={{ lineHeight: "20px", color: "#666" }}>
                            <td className="text_left">
                                {/*<p style={{ marginBottom: "6px" }}>조회 : {noticeContents[0] && noticeContents[0].viewCnt}</p>
                                <p style={{ marginBottom: "6px" }}>추천 : {noticeContents[0] && noticeContents[0].likeCnt}</p>*/}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="board-box">
                                    {/* 이미지 리스트 */}
                                    {noticeContents[0] && noticeContents[0].noticeImgs ? (
                                        noticeContents[0].noticeImgs.map((imgUrl, index) => (
                                            <div key={index}>
                                                <img src={imgUrl} alt={`Image ${index}`} style={{ width: "100%" }} />
                                            </div>
                                        ))
                                    ) : (
                                        ""
                                    )}

                                    {noticeContents[0] && noticeContents[0].content}

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
                        <tr className="board_btn_box">
                            <td>
                                <BoardBtn name="목록보기" func="goback" />
                            </td>

                        </tr>
                        </tbody>
                    </table>
                    <p>

                    </p>
                </div>
            </div>
        </>
    );
}
