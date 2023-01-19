import 'antd/dist/antd.css';
import { Histogram } from '@ant-design/charts';

const data = require('./PathS.json');

function ChartS_ID () {
    var config = {
        data: data,
        binField: 'BraTS21ID',
        binWidth: 101,
        tooltip: {
          showMarkers: false,
          position: 'top',
        },
        interactions: [{ type: 'element-highlight' }],
        meta: {
          range: {
            min: 0,
            tickInterval: 1010,
          },
          count: {
            max: 20,
            nice: true,
          },
        },
      };
      return <Histogram {...config} />;
}
export default ChartS_ID ;