import { Drawer, Popconfirm, Popover} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined} from '@ant-design/icons';
import { rowAction } from "../../../../common/variable";
import { useState } from "react";
import { DrawerProfessor } from "./DrawerProfessor";
import TableDetailSubject from "./ModalSubject";
export default function ActionFrofessor(props){
    const {record} = props;
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} />
                <Popconfirm title="Sure to delete?" onConfirm={() => alert('Are you sure you want to delete'+record.name)}>
                <DeleteOutlined  style={{fontSize: '20px' }}/>
            </Popconfirm>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <DrawerProfessor record={record}/>
            </Drawer>
        </div>
    );
}
export function AcitonDetailSubject(props) {
    const {record} = props;
    return(
        <div className="">
            <Popover placement="bottom" title={'Subjects'} content={<TableDetailSubject record={record}/>} trigger="click">
                <WalletOutlined style={{fontSize: '20px' }}/>
            </Popover>
        </div>
       
    );
    
}
export function AcitonRemoveSubject(props){
    const {record} = props;
    return(
        <DeleteOutlined onClick={()=>alert(record.name)}/>
    );
}