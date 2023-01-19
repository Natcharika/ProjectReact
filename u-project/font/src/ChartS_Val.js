import 'antd/dist/antd.css';
import { Histogram } from '@ant-design/charts';

const data = require('./PathS.json');

function ChartS_Val () {
    var config = {
        data: data,
        binField: 'MGMT_value',
        binWidth: 0.5,
        tooltip: {
          showMarkers: false,
          position: 'top',
        },
        interactions: [{ type: 'element-highlight' }],
        meta: {
          range: {
            min: 0.5,
            max: 1,
            tickInterval: 0.5,
          },
          count: {
            max: 100,
            nice: true,
          },
        },
      };
      return <Histogram {...config} />;
}
export default ChartS_Val ;