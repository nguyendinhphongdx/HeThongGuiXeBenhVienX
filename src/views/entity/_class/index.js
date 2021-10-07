import { Button, Card, message, Modal, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConvertorKB from '../../../helpers/convertKB';
import ClassServices from "../../../redux/services/ClassServices";
import React from "react";
import { FormAddClass } from "./components/FormAddClass";
import ActionClass from "./components/ActionClass";
import ProfessorServices from "../../../redux/services/ProfessorServices";
import './style.scss';
const ClassPage = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const listClass = useSelector(state=>state.Class.classes);
    const listProfessor = useSelector(state=>state.Professor.professors);
    const classConverted = ConvertorKB.convertClass(listClass,listProfessor);
    const dispatch = useDispatch();
    useEffect(()=>{
        ClassServices.GetDataClass(dispatch)
        .then(result => message.destroy())
        ProfessorServices.GetDataProfessor(dispatch)
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
            <Button type="primary" onClick={showModal}>Thêm Lớp Học</Button>
        </Row>
        <Modal title="Thêm Lớp Học" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <FormAddClass callback={handleOk}/>
        </Modal>
        <Table style={{border:1}} dataSource={classConverted} columns={columns}  bordered></Table>
    </Card>
    )
}
export default ClassPage;
const columns =[
    {
        title: 'STT',
        key: 'key',
        dataIndex:'key',
        width:'5%'
    },
    {
        title: 'Tên Lớp Học',
        key: 'name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length
          },
        width:'15%'
    },
    {
        title: 'Môn Học',
        key: 'subject',
        dataIndex:'subject',
        sorter: {
            compare: (a, b) => a.subject.length - b.subject.length,
            multiple: 3,
          },
        width:'15%'
    },
    {
        title: 'Ngày bắt đầu',
        key: 'startDate',
        dataIndex:'startDate',
        width:'15%'
    },
    {
        title: 'Số Lượng',
        key: 'total',
        dataIndex:'total',
        width:'10%',
        sorter: {
            compare: (a, b) => a.total - b.total,
            multiple: 3,
          },
    },
    {
        title: 'Gảng Viên',
        key: 'professor',
        dataIndex:'professor',
        width:'15%'
    },
    {
        title: 'Tác động',
        key: 'operation',
        width: '20%',
        render:(record)=> <ActionClass record={record}/>
    }
];
