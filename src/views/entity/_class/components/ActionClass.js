import { Drawer, message, Modal, Popconfirm} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined,TeamOutlined} from '@ant-design/icons';
import { rowAction } from "../../../../common/variable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import StudentServices from "../../../../redux/services/StudentServices";
import ClassServices from "../../../../redux/services/ClassServices";
import { DrawerClass } from "./DrawerClass";
import { UpdateClass } from "./UpdateClass";
import { AddMemberToClass } from "./AddMember";

export default function ActionClass(props){
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalMemberVisible, setIsModalMemberVisible] = useState(false);
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    useEffect(()=>{
        StudentServices.GetDataStudent(dispatch).then(()=> message.destroy())
    },[]);
    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModalMember = () => {
      setIsModalMemberVisible(true);
  };
    const handleOkMember = () => {
      setIsModalMemberVisible(false);
  };

  const handleCancelMember = () => {
    setIsModalMemberVisible(false);
  };
    const handleDelete=()=>{
      const body ={_id:record._id}
      ClassServices.DeleteDataClass(dispatch,body)
      .then((result)=>console.log(result));
      
    }
    const {record} = props;
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} onClick={showModal}/>
              <Modal title="Edit Class" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                  <UpdateClass state={state} record={record} callback={handleOk}/>  
              </Modal>
              <TeamOutlined style={{fontSize: '20px' }} onClick={showModalMember}/>
              <Modal title="Members" visible={isModalMemberVisible} onOk={handleOkMember} onCancel={handleCancelMember} footer={null}>
                  <AddMemberToClass record={record} callback={handleCancelMember}/>  
              </Modal>
            <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                <DeleteOutlined  style={{fontSize: '20px' }}/>
            </Popconfirm>
            <Drawer
            title={record.name}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={300}
          >
            <DrawerClass students={record.member} professor={record.professor} record={record}/>
          </Drawer>
        </div>
    );
}