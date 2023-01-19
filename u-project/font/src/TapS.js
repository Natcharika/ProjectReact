import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Tablesamp from './TableS';
import TablesampCom from './TableS_Com';
import ChartS_ID from './ChartS_ID';
import ChartS_Val from './ChartS_Val';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Tapsam = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Detail" key="1">
      <Tablesamp/>
    </TabPane>
    <TabPane tab="Compact" key="2">
      <TablesampCom/>
    </TabPane>
    <TabPane tab="Column" key="3">
      <h1>BraTS21ID</h1><br/>
      <ChartS_ID/><br/><br/><br/>
      <h1>MGMT_value</h1><br/>
      <ChartS_Val/>
    </TabPane>
  </Tabs>
);

export default Tapsam;