import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Tabletrain from './TableT';
import TabletrainCom from './TableT_Com';
import ChartT_ID from './ChartT_ID';
import ChartT_Val from './ChartT_Val';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Taptrain = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Detail" key="1">
      <Tabletrain/>
    </TabPane>
    <TabPane tab="Compact" key="2">
      <TabletrainCom/>
    </TabPane>
    <TabPane tab="Column" key="3">
      <h1>BraTS21ID</h1><br/>
      <ChartT_ID/><br/><br/><br/>
      <h1>MGMT_value</h1><br/>
      <ChartT_Val/>
    </TabPane>
  </Tabs>
);

export default Taptrain;