import { Button, Card, message, Modal, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "../../../common/components/image";
import ProfessorServices from "../../../redux/services/ProfessorServices";
import ActionFrofessor, { AcitonDetailSubject } from "./components/ActionProfessor";
import { FormAddProfessor } from "./components/FormAddProfessor";
import './index.scss';
const ProfessorPage = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const listProfessor = useSelector(state=>state.Professor.professors);
    const dispatch = useDispatch();
    useEffect(()=>{
        ProfessorServices.GetDataProfessor(dispatch)
        .then(result => message.destroy())
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
        <Row className="add-class">
            <Button type="primary" onClick={showModal}>Thêm giảng viên</Button>
        </Row>
        <Modal title="Thêm giảng viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <FormAddProfessor callback={handleOk}/>
        </Modal>
        <Table style={{border:1}} dataSource={listProfessor} columns={columns}  bordered></Table>
    </Card>
    )
}
export default ProfessorPage;
const columns =[
    {
        title: 'STT',
        key: 'key',
        dataIndex:'key',
        width:'5%'
    },
    {
        title: 'Ảnh đại diện',
        width:'15%',
        render:(record) =><ImageComponent url={record.image} type='professor' />
    },
    {
        title: 'Tên Giảng viên',
        key: 'name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length
          },
        width:'15%'
    },
    {
        title: 'Tuổi',
        key: 'age',
        dataIndex:'age',
        sorter: {
            compare: (a, b) => a.age - b.age
          },
        width:'10%'
    },
    {
        title: 'Môn học',
        key: 'operation',
        dataIndex:'subject',
        render:(record)=> <AcitonDetailSubject record={record}/>,
        width:'10%'
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex:'email',
        width:'15%',
    },
   
    {
        title: 'Tác động',
        key: 'operation',
        width: '15%',
        render:(record)=> <ActionFrofessor record={record}/>
    }
];