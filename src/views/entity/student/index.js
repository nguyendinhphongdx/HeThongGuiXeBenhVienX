import { Button, Card, Modal, Row , Table} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "../../../common/components/image";
import StudentServices from "../../../redux/services/StudentServices";
import ActionStudent from "./components/ActionStudent";
import { FormAddStudent } from "./components/FormAddStudent";
const StudentPage = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const studentRedux = useSelector(state=>state.Student.students);
    const dispatch = useDispatch();
    useEffect(()=>{
        StudentServices.GetDataStudent(dispatch)
    },[])
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return(
        <Card className="tabelPanel">
            <Row className="add-student">
                <Button type="primary" onClick={showModal}>Thêm sinh viên</Button>
            </Row>
            <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
               <FormAddStudent callback={handleOk} />
            </Modal>
            <Table dataSource={studentRedux} columns={columns} bordered 
             pagination={{ pageSize: 5 }}
            ></Table>
        </Card>
        
    );
}
export default StudentPage;
const columns =[
    {
        key: 'key',
        title: 'STT',
        dataIndex:'key',
        width:'5%'
    },
    {
        key: 'name',
        title: 'Tên sinh viên',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.Length - b.name.Length 
          },
          width:'15%'
    },
    {
        title: 'Ảnh đại diện',
        width:'10%',
        render:(record)=> <ImageComponent url={record.image} type='student'/>
    },
    {
        key: 'age',
        title: 'Tuổi',
        dataIndex:'age',
        width:'10%'
    },
    {
        key: 'email',
        title: 'Email',
        dataIndex:'email'
    },
    {
        key: 'status',
        title: 'Trạng thái',
        dataIndex:'status'
    },
    {
        key: 'operation',
        title: 'Tác động',
        render:(record)=> <ActionStudent record={record}/>,
        width:'20%'
    },

]