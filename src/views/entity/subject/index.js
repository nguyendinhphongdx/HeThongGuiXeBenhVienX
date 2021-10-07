import { Button, Modal, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubjectServices from "../../../redux/services/SubjectServices";
import ActionSubject from "./components/ActionSubject";
import { FormAddSubject } from "./components/FormAddSubject";
import './index.scss';
const SubjectPage = () =>{
    const listSubject = useSelector(state=>state.Subject.subjects)
    const dispatch = useDispatch()
    useEffect(()=>{
        SubjectServices.GetDataSubject(dispatch)
    },[])
    const [isModalVisible, setIsModalVisible] = useState(false);
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
        <div className="tabelPanel">
            <Row className="add-subject">
                <Button type="primary" onClick={showModal}>Thêm Môn Học</Button>
            </Row>
            <Modal title="Thêm Môn Học" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={null} width={600}
            >
               <FormAddSubject callback={setIsModalVisible}/>
            </Modal>
            <Table dataSource={listSubject} bordered columns={columns}></Table>
        </div>
        
    );
}
export default SubjectPage;
const columns =[
    {
        key: 'key',
        title: 'STT',
        dataIndex:'key',
        width:'5%',
    },
    {
        key: 'name',
        title: 'Tên Môn',
        dataIndex:'name',
        sorter: {
            compare:(a,b)=> a.name.length - b.name.length
        },
        width:'15%',
    },
    {
        key: 'price',
        title: 'Số tín',
        dataIndex:'price',
        width:'10%',
    },
    // {
    //     key: 'unit',
    //     title: 'Unit',
    //     dataIndex:'unit',
    //     width:'10%',
    // },
    {
        key: 'totalSession',
        title: 'Số tiết',
        dataIndex:'totalSession',
        width:'15%',
    },
    // {
    //     key: 'type',
    //     title: 'Type',
    //     dataIndex:'type',
    //     width:'10%',
    // },
    {
        key: 'description',
        title: 'Mô tả',
        dataIndex:'description',
        width:'25%',
    },
    {
        key: 'status',
        title: 'Trạng thái',
        dataIndex:'status',
        width:'10%',
    },
    {
        key: 'operation',
        title: 'Tác động',
        render:(record)=> <ActionSubject subject={record}/>
    },

]
