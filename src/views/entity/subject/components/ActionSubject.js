import { Popconfirm, Drawer} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined} from '@ant-design/icons';
import { rowAction } from "../../../../common/variable";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ActionSubject(props){
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
    
    const {subject} = props;
    const handleDelete = () => {
    }
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} />
                <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                <DeleteOutlined  style={{fontSize: '20px' }}/>
            </Popconfirm>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
        </div>
    );
}
