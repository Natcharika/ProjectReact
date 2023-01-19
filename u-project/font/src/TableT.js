import { Table } from 'antd';
import 'antd/dist/antd.css';
import ChartT_ID from './ChartT_ID';
import ChartT_Val from './ChartT_Val';

const data = require('./PathT.json')

function Tabletrain(){

        const columns = [
    {
        title: 'BraTS21ID',
        sorter: (a, b) => a.BraTS21ID - b.BraTS21ID, 
        children: [
            {
                title: <ChartT_ID/>,
                dataIndex: 'BraTS21ID',
            }
        ]
    },
    {
        title: 'MGMT_value',
        sorter: (a, b) => a.MGMT_value - b.MGMT_value, 
        children: [
            {
                title: <ChartT_Val/>,
                dataIndex: 'MGMT_value',
            }
        ]
    }
    ];

    return (
    <>
        <Table
        scroll={{ x: 1000, y: 500 }}
        columns={columns}
        dataSource={data}//แหล่งข้อมูล
        onChange={onChange}
        pagination={false}
        bordered
        summary={pageData => {
            let totalBorrow = 0;
            let totalRepayment = 0;

            pageData.forEach(({ borrow, repayment }) => {
            totalBorrow += borrow;
            totalRepayment += repayment;
            });
        }}
        />
    </>
    );
}

function onChange(sorter) {
    console.log(sorter);

    return (<Table onChange={onChange} />);
  }

export default Tabletrain;