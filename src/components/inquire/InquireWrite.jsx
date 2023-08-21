import topImage from "../../images/pet.jpg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginSession from "../../hooks/LoginSession";

export default function InquireWrite() {
    LoginSession();

    const navigate = useNavigate();

    const { category } = useParams();
    const categoryName = {
        NOTICE: "공지사항",
        EVENT: "이벤트",
        FAQ: "질문과 답변"
    };

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [passwd, setPasswd] = useState('');
    const [file, setFile] = useState([]);

    const handleFileChange = (e) => {
        setFile(file.concat(e.target.files[0]));
    };

    const WriteInquire = async (e) => {
        e.preventDefault();

        if (passwd.length !== 4) {
            alert("비밀번호를 4자리로 입력해주세요.");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('passwd', passwd);
        file.forEach(picture =>{
            formData.append('noticeFile', picture);
        });

        let sendData = await axios
            .post(`/v1/inquire/write`, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function (res) {
                if (res.status === 200) {
                    navigate(`/customer/inquire`);
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
                <h2>고객센터</h2>
                <p>도움이 필요하신가요?</p>
            </div>
            <div className="sub_con">
                <div className="wrapper">
                    <h4 className="board_create_title">고객센터 글쓰기</h4>
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
                    <textarea className="board_password_input" placeholder="비밀번호 입력"
                              onChange={(e) => setPasswd(e.target.value)}

                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="tit_box">
                                    <input type="file" className="board_file_input" placeholder="글 제목" multiple onChange={handleFileChange} />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div style={{ textAlign: "center" }}>
                            <button type="submit" className="board_btn" onClick={WriteInquire} >작성하기</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );

}