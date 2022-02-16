import * as React from "react";
import 'antd/dist/antd.css';
import { Row, Col, Image, Button } from 'antd';
import { useHistory } from "react-router-dom";
import "./index.css"

export const ItemComponent = () => {
  return (
    <div style={{ backgroundColor: 'rgb(222, 227, 227)' }}>
      <div style={{ height: 300 }}>
        <img src="https://vnpay.vn/s1/statics.vnpay.vn/2021/6/01pca6ty1pdoh1624008748434.png" style={{ height: '100%', width: '100%' }} />
      </div>
      <div style={{ height: 1100, backgroundColor: 'rgb(222, 227, 227)', marginTop: 50 }}>
        <div style={{height:500,backgroundColor: 'white', width: '80%',marginLeft: '10%'}}>
          <div style={{ width: '100%' ,height:350, display: 'flex', justifyContent: 'center' }}>
            <img
              width={'35%'}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              style={{ marginTop: 50,height:300 }}
            />
            <div style={{ width: '50%', marginTop: 50, marginLeft: '5%' }}>
              <h2>[Hàng mới về] Hình Xăm Dán Tạm Thời Chống Thấm Nước Họa Tiết QR Quét Ra Chữ Sáng Tạo</h2>
              <h2 style={{ backgroundColor: '#FAFAFA', color: 'red' }}>500.000 đ</h2>
              <Row gutter={24}>
                <Col span={12}>Combo khuyến mãi</Col>
                <Col span={12}>50%</Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>Số lượng còn lại</Col>
                <Col span={12}>50</Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>Color</Col>
                <Col span={12}>Black</Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>Đã bán</Col>
                <Col span={12}>50</Col>
              </Row>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <Button type="primary" style={{marginTop:50,width:'30%',height:40}}>Mua hàng</Button>
          </div>
        </div>
        <div style={{ width: '80%', height: 500, backgroundColor: 'white', marginLeft: '10%', marginTop: 50 }}>
          <br></br>
          <h2 style={{ backgroundColor: '#FAFAFA', width: '90%', marginLeft: '5%' }}>Chi tiết sản phẩm</h2>
          <Row gutter={24} style={{ width: '90%', marginLeft: '5%' }}>
            <Col span={6}>Danh Mục</Col>
            <Col span={18}>{'Shopee > Phụ Kiện & Trang Sức Nữ > Phụ kiện thêm > Hình xăm dán'}</Col>
          </Row>
          <Row gutter={24} style={{ width: '90%', marginLeft: '5%' }}>
            <Col span={6}>Giới tính</Col>
            <Col span={18}>Unisex</Col>
          </Row>
          <Row gutter={24} style={{ width: '90%', marginLeft: '5%' }}>
            <Col span={6}>Kho hàng</Col>
            <Col span={18}>3051</Col>
          </Row>
          <Row gutter={24} style={{ width: '90%', marginLeft: '5%' }}>
            <Col span={6}>Gửi từ</Col>
            <Col span={18}>Nước ngoài</Col>
          </Row>
          <br></br>
          <h2 style={{ backgroundColor: '#FAFAFA', width: '90%', marginLeft: '5%' }}>Mô tả sản phẩm</h2>
          <p style={{ width: '90%', marginLeft: '5%' }}>Đặc điểm:</p>
          <p style={{ width: '90%', marginLeft: '5%' }}>Một hình xăm dán rất tinh tế và đặc biệt, có cá tính hơn và có thể mang đến những điều bất ngờ cho mọi người. Mở điện thoại di động và quét mã QR, và văn bản tương ứng sẽ xuất hiện.</p>
          <p style={{ width: '90%', marginLeft: '5%' }}>Lưu ý:</p>
          <p style={{ width: '90%', marginLeft: '5%' }}>1. Do sự khác biệt về ánh sáng và màn hình, màu sắc của các sản phẩm có thể hơi khác so với hình ảnh.</p>
          <p style={{ width: '90%', marginLeft: '5%' }}>2. Xin vui lòng cho phép sai số 0,5-2 cm do đo lường thủ công.</p>
        </div>
      </div>
      <div style={{ height: 200, width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAFAFA' }}>
        <div style={{ width: '80%', height: 170, marginTop: 15 }}>
          <h1 style={{ color: 'black' }}>Công ty Cổ phần Giải pháp Thanh toán Việt Nam (VNPAY)</h1>
          <hr></hr>
          <h3 style={{ color: 'gray' }}>Trụ sở chính: Tầng 8, số 22 Láng Hạ, phường Láng Hạ, quận Đống Đa, Hà Nội</h3>
          <h3 style={{ color: 'gray' }}>Email: info@vnpay.vn</h3>
          <h3 style={{ color: 'gray' }}>Phone: 1900 55 55 77</h3>
        </div>
      </div>
    </div>
  )
}