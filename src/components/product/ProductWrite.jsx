import topImage from "../../images/pet.jpg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {

  const navigate = useNavigate();



  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [loc, setLoc] = useState('');
  const [file, setFile] = useState([]);

  const handleFileChange = (e) => {
    setFile(file.concat(e.target.files[0]));
  };

  const WriteProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    formData.append('price', price);
    formData.append('loc', loc);
    file.forEach(picture =>{
      formData.append('imageFiles', picture);
    });

    let sendData = await axios
      .post(`/v1/product/write`, formData)
      .then(function (res) {
        if (res.status === 200) {
          navigate(`/product`);
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
        <h2>마켓</h2>
        <p>저렴한 가격에 나눔하세요~.</p>
      </div>
      <div className="sub_con">
        <div className="wrapper">
          <h4 className="product_create_title">마켓 글쓰기</h4>
          <form>
            <table className="table-view-01 txt-mt">
              <colgroup>
                <col className="col_w" />
                <col width="*" />
              </colgroup>
              <tbody>

                <tr>
                  <td colSpan="2" className="tit_box">
                    <input type="text" required className="product_name_input" placeholder="상품명"
                      onChange={(e) => setName(e.target.value)}
                    />

                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="tit_box">
                    <select
                        required
                        className="product_type_input"
                        onChange={(e) => setType(e.target.value)}
                    >
                      <option value="">상품종류 선택</option>
                      <option value="FOOD">FOOD</option>
                      <option value="TOY">TOY</option>
                      <option value="SNACK">SNACK</option>
                      <option value="SAND">SAND</option>
                      <option value="BEAUTY">BEAUTY</option>
                      <option value="ETC">ETC</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="tit_box">
                    <textarea className="product_content_input" placeholder="상품 설명 입력"
                      onChange={(e) => setContent(e.target.value)}

                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="tit_box">
                    <textarea className="product_price_input" placeholder="상품 가격 입력"
                      onChange={(e) => setPrice(e.target.value)}

                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="tit_box">
                    <textarea className="product_loc_input" placeholder="지역 입력"
                      onChange={(e) => setLoc(e.target.value)}

                    ></textarea>
                  </td>
                </tr>



                <tr>
                  <td colSpan="2" className="tit_box">
                    <input type="file" className="product_file_input" placeholder="이미지 첨부" multiple onChange={handleFileChange} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="product_btn" onClick={WriteProduct} >작성하기</button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}
