import topImage from "../../images/pet.jpg"
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BoardButton from "../BoardButton";

export default function CustomerCenter() {
    const [noticeList, setNoticeList] = useState([]);

    const { category } = useParams();
    const categoryName = {
        NOTICE: "공지사항",
        EVENT: "이벤트",
        FAQ: "질문과 답변"
    }

    const noticeContents = () => {
        let noticeResult = axios
            .get(`/v1/notice/category/${category}`)
            .then(function (res) {
                setNoticeList(res.data.resultData.dto.content);
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    useEffect(() => {
        noticeContents();
    }, [category]);
    return (
        <>
            <div
                className="main_banner"
                style={{ backgroundImage: `url(${topImage})`, verticalAlign: "middle" }}
            >
                <h2>고객센터</h2>
                <p>도움이 필요하신가요?</p>
            </div>
            <div className="gnb">
                <ul>
                    <li>
                        <Link to="/customer/NOTICE">공지사항</Link>
                    </li>
                    <li>
                        <Link to="/customer/EVENT">이벤트</Link>
                    </li>
                    <li>
                        <Link to="/customer/FAQ">질문과 답변</Link>
                    </li>
                    <li>
                        <Link to="/customer/inquire">문의하기</Link>
                    </li>
                </ul>
            </div>
            <div className="sub_con">
                <div className="wrapper">
                    <table className="table_board_for">
                        <thead>
                        <tr>
                            <th style={{ width: "10%" }}>번호</th>
                            <th style={{ width: "*%" }}>제목</th>
                            <th style={{ width: "30%" }}>작성일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {noticeList.map((el, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{el.id}</td>
                                    <td className="text_left posi_r">
                                        <Link to={"/notice/detail/" + el.id} className="detail_link">
                                            {el.title}
                                        </Link>
                                    </td>
                                    <td>{el.createdAt.substring(2, 10)}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <div style={{ textAlign: "right" }}>
                        <Link to={`/notice/${category}/write`}><BoardButton name="작성하기" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
