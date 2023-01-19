import React,{useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import TreeMenu from 'react-simple-tree-menu';
import '../node_modules/react-simple-tree-menu/dist/main.css';
import axios from 'axios';
import Tapsam from './TapS';
import Taptrain from './TapT';

const treeData = require('./RSNA.json')
const { Header, Sider, Content } = Layout;
  
function App() {
  
  const [collapseds,setcollapseds] = useState(false);
  const [content,setContent] = useState(<Tapsam/>);
  const [image,setImage] = useState("");

  const toggle = () => {
    setcollapseds(!collapseds)
  };

  return (
    
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapseds}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <TreeMenu data={treeData} 
          onClickItem={
            ({value}) => 
            axios.get('http://127.0.0.1:5000/api',{params: {image:value}}).then(respons=>setImage(respons.data))
            .then(setContent(
            <img src={`data:image/jpeg;base64,${image}`} width="300px"/>
            ))
          }
          />
            <Menu.Item key="1" onClick={() => {setContent(<Tapsam/>);}}>
              sample_submission
            </Menu.Item>
            <Menu.Item key="2" onClick={() => {setContent(<Taptrain/>);}}>
              train_labels
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapseds ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {content}
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
