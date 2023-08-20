import topImage from "../../images/pet.jpg"
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BoardButton from "../BoardButton";

export default function Inquire() {
    const [inquireList, setInquireList] = useState([]);

    const { category } = useParams();
    const categoryName = {
        NOTICE: "공지사항",
        EVENT: "이벤트",
        FAQ: "질문과 답변"
    }

    const inquireContents = () => {
        let inquireResult = axios
            .get(`/v1/inquire`)
            .then(function (res) {
                setInquireList(res.data.resultData.dto.content);
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    const showPasswordPrompt = (id) => {
        const inputPasswd = window.prompt("비밀번호를 입력하세요:");
        if (inputPasswd) {
            // axios를 사용하여 비밀번호 전송
            axios.get(`/v1/inquire/${id}`, {
                params: {
                    inputPasswd: inputPasswd
                }
            })
                .then(function (res) {
                    // 서버에서 받은 응답 처리
                    if (res.data.statusCode === 200) {
                        window.location.href = `/inquire/detail/${id}`;
                    } else {
                        alert("비밀번호가 일치하지 않습니다");
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        inquireContents();
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
                        {inquireList.map((el, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{el.id}</td>
                                    <td className="text_left posi_r">
                                        <Link to={"/inquire/detail/" + el.id} className="detail_link" onClick={() => showPasswordPrompt(el.id)}>
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