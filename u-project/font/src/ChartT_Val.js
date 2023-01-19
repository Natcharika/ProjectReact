import 'antd/dist/antd.css';
import { Histogram } from '@ant-design/charts';

const data = require('./PathT.json');

function ChartT_Val () {
    var config = {
        data: data,
        binField: 'MGMT_value',
        binWidth: 1,
        tooltip: {
          showMarkers: false,
          position: 'top',
        },
        interactions: [{ type: 'element-highlight' }],
        meta: {
          range: {
            min: 0,
            tickInterval: 1,
          },
          count: {
            max: 310,
            nice: true,
          },
        },
      };
      return <Histogram {...config} />;
}
export default ChartT_Val ;