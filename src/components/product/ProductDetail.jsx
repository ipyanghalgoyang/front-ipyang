import topImage from "../../images/pet.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function ProductDetail() {


  const [productContents, setProductContents] = useState([]);

  const { id } = useParams();

  const infoContents = async () => {
    let res = await axios.get(`/v1/product/${id}`);

    setProductContents([res.data.resultData.resultData]);

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
        <h2>마켓</h2>
        <p>저렴한 가격에 나눔하세요.</p>
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

                        {productContents[0] && productContents[0].name}


                      </p>
                      <p className="tbl_detail_span mt_05">
                      <span className="name">
                        작성자: {productContents[0] && productContents[0].nickname}

                      </span>
                        <span className="date"></span>
                      </p>
                    </td>
                  </tr>
                  <tr style={{ lineHeight: "20px", color: "#666" }}>
                    <td>품목     </td>


                    <td className="text_left">


                      {productContents[0] && productContents[0].type}



                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <div className="board-box">


                      가격:  {productContents[0] && productContents[0].price}
                        <br />
                      제품설명:  {productContents[0] && productContents[0].content}

                        <br />
                      지역: {productContents[0] && productContents[0].loc}


                      </div>
                    </td>


                  </tr>


            </tbody>
          </table>
          <p>
            목록보기버튼    글수정버튼    글삭제하기버튼    추천버튼
          </p>

        </div>
      </div>
    </>
  );
}
