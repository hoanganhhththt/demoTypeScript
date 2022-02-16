import * as React from "react";
import { Card, Avatar, Menu } from 'antd';
import 'antd/dist/antd.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;
const { Meta } = Card;

export const HomeComponent = () => {
  const history = useHistory();
  const listItem = [1,2,3,4,5,6,7,8,9];
  // const handleClick = (e : string):string => {
  //   console.log('click ', e);
  //   return e
  // }
  const handleSetting = () :void => {
    history.push('/itemPage')
  }
  return (
    <>
      <div style={{ height: 300 }}>
        <img src="https://vnpay.vn/s1/statics.vnpay.vn/2021/6/01pca6ty1pdoh1624008748434.png" style={{ height: '100%', width: '100%' }} />
      </div>
      <div style={{ display: 'inline-flex', width: '100%' }}>
        <div style={{ width: '25%', backgroundColor: '#FAFAFA' }}>
          <Menu
            // onClick={handleClick}
            style={{ width: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div style={{ width: '75%',display:'flex', flexDirection: 'row', flexWrap: 'wrap',alignContent: 'flex-start'}}>
          {listItem.map((item:number,key:number)=>(
            <Card
            style={{ width: '25%' }}
            key = {key}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" onClick={handleSetting}/>,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          ))}
        </div>
      </div>
      <div style={{height:200,width:'100%',display:'flex',justifyContent:'center', backgroundColor:'#FAFAFA'}}>
        <div style={{width:'80%', height:170, marginTop:15}}>
          <h1 style={{color:'black'}}>Công ty Cổ phần Giải pháp Thanh toán Việt Nam (VNPAY)</h1>
          <hr></hr>
          <h3 style={{color:'gray'}}>Trụ sở chính: Tầng 8, số 22 Láng Hạ, phường Láng Hạ, quận Đống Đa, Hà Nội</h3>
          <h3 style={{color:'gray'}}>Email: info@vnpay.vn</h3>
          <h3 style={{color:'gray'}}>Phone: 1900 55 55 77</h3>
        </div>
      </div>
    </>
  )
}