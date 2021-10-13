import { Drawer, message, Modal, Popconfirm} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined,TeamOutlined} from '@ant-design/icons';
import { rowAction } from "../../../../common/variable";

export default function ActionClass(props){
    
    const {onEdit,onDelete} = props;
    return(
        <div style={rowAction}>
          <EditOutlined style={{fontSize: '20px' }} onClick={()=>onEdit?onEdit():null}/>
          <Popconfirm title="Sure to delete?" onConfirm={()=>onDelete?onDelete():null}
          >
          <DeleteOutlined  style={{fontSize: '20px' }}/>
          </Popconfirm>
        </div>
    );
}