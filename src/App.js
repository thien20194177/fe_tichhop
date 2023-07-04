import React from 'react';
import './App.css';
import axios from 'axios';
import  { useState } from 'react';


export default function UserDashBoard() {

  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/cats/timkiem', {
        key: inputValue,
      });
      setResponseData(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  if(responseData=='Không có sản phẩm') return(<h1>Không có sản phẩm</h1>);
 

 var sample = {
    "product_num": 240,
    "product_name": "Điện thoại iPhone 14 Pro Max 1TB",
    "product_price": "42.490.000₫",
    "product_memory": "1TB",
    "product_color": "Vàng",
    "produc_url": "https://www.dienmayxanh.com/dien-thoai/iphone-14-pro-max-1tb",
    "img_url": "https://cdn.tgdd.vn/Products/Images/42/289705/Slider/iphone-14-pro-max-thumb-1020x570.jpg",
    "Brand": "Điện máy xanh",
    "product_overview": "  |Màn hình: OLED, 6.7, Super Retina XDR |Hệ điều hành: iOS 16 |Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP |Camera trước: 12 MP |Chip: Apple A16 Bionic |RAM: 6 GB |Dung lượng lưu trữ: 1TB |SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G |Pin, Sạc: 4323 mAh, 20 W"
};

for(let i =0; i< responseData.length; i++){
  if(responseData[i]["Brand"]==="Điện máy xanh") {
    sample= responseData[i];
    break;
  }
  sample = responseData[0];
};

var sample_inf;
if(sample['product_overview'] == undefined) sample_inf= '|';
else sample_inf = sample['product_overview'];
var sample_infor= sample_inf.split('|');

  
var source_img = {
  "Điện máy xanh": "https://dongphucvina.vn/wp-content/uploads/2022/07/logo-dien-may-xanh.png",
  "CellPhoneS":"https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CPS_2022-01_2_.png",
  "nguyenkim":"https://vcdn-kinhdoanh.vnecdn.net/2020/01/21/12-4646-1579596787.png",
  "huyhoangmobile":"https://www.huyhoangmobile.vn/images/logo.png",
  "galaxydidong":"https://galaxydidong.vn/wp-content/uploads/2022/04/logo.webp",
  "Phong Vũ":"https://phongvu.vn/cong-nghe/wp-content/uploads/sites/2/2020/07/Logo-New.jpg",
  "ShopDunk":"https://ib.vib.com.vn/banners/Promotion/20220323105355222_logo.jpg"
}

var sample_list =[{
  "product_num": 377,
  "product_name": " iPhone 14 Pro Max 128GB | Chính hãng VN/A ",
  "product_price": "26.790.000 đ",
  "product_memory": "128GB",
  "product_color": "Vàng",
  "produc_url": "https://cellphones.com.vn/iphone-14-pro-max.html",
  "img_url": "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  "Brand": "CellPhoneS"
},
{
  "product_num": 378,
  "product_name": " iPhone 14 Pro Max 128GB | Chính hãng VN/A ",
  "product_price": "26.790.000 đ",
  "product_memory": "128GB",
  "product_color": "Bạc",
  "produc_url": "https://cellphones.com.vn/iphone-14-pro-max.html",
  "img_url": "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  "Brand": "CellPhoneS"
},
{
  "product_num": 379,
  "product_name": " iPhone 14 Pro Max 128GB | Chính hãng VN/A ",
  "product_price": "26.790.000 đ",
  "product_memory": "128GB",
  "product_color": "Đen",
  "produc_url": "https://cellphones.com.vn/iphone-14-pro-max.html",
  "img_url": "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  "Brand": "CellPhoneS"
}];

if(responseData!='Không có sản phẩm') {
var sample_list = [];
for(let i =0; i< responseData.length; i++){
  sample_list.push(responseData[i]);
};
}
// console.log(responseData)
  return (
    <div class="all">
      <div class="topnav">
        <a class="active" href="#home">
          Trang chủ
        </a>
        <div class="search-container">
          <form

            class="form-submit"
          >
            <input type="text" placeholder="Tìm kiếm sản phẩm" name="search"  value={inputValue} onChange={handleChange}  />
            <button type="submit" onClick={handleSubmit}>
              <i class="fa fa-user icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png"
                  className="img-icon"
                />
              </i>
            </button>
          </form>
        </div>
      </div>

      <div class="main_content">
        <h1>Sản phẩm bạn tìm kiếm: {inputValue}</h1>
        <div class="detail-product">
          <div class="image_product">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg"
              className="img-product"
            />
            <ul class="infor-detail">
              <h2> Cấu hình sản phẩm </h2>
              {sample_infor.map((item, index) => (
                 <li className="index0">
                   <span>{item}</span>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="description">
        <h3> Danh sách cửa hàng bán sản phẩm </h3>
        <table>
  <thead>
    <tr>
      <th>Sản phẩm</th>
      <th>Dung lượng bộ nhớ</th>
      <th>Màu sắc</th>
      <th>Giá</th>
      <th>Nơi bán</th>
    </tr>
  </thead>
  <tbody>
    {sample_list.map((element, index) => (
      <tr key={index}>
        <td>{element.product_name}</td>
        <td>{element.product_memory}</td>
        <td>{element.product_color}</td>
        <td>{element.product_price}</td>
        <td>
          <a href={element.produc_url}>
            <img src={source_img[element.Brand]} className="image-logo" alt="Logo" />
          </a>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
}
