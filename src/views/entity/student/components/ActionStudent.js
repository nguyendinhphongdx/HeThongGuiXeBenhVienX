import { Popconfirm, Drawer} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined} from '@ant-design/icons';
import { rowAction } from "../../../../common/variable";
import { useState } from "react";
import { useDispatch } from "react-redux";
import StudentServices from "../../../../redux/services/CardServices";
import { DrawerStudent } from "./DrawerStudent";

export default function ActionStudent(props){
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    const {record} = props;
    const handleDelete = () => {
      console.log(record._id);
      const body ={_id:record._id}
      console.log(body);
      StudentServices.Delete_Student_Service(dispatch,body)
    }
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} />
                <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                <DeleteOutlined  style={{fontSize: '20px' }} />
            </Popconfirm>
            <Drawer
              title={record.name}
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <DrawerStudent record={record}/>
            </Drawer>
        </div>
    );
}