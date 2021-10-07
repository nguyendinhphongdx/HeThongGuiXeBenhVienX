import { Button, Modal, Row } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormAddDocument } from "./components/FormAddDocument";
import ListCardDocument from "./components/ListCardDocument";
const DocumentPage = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const state = useSelector(state=>state)
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
            <Row className="add-file">
                <Button type="primary" onClick={showModal}>Upload Document</Button>
            </Row>
            <Modal title="Add Document" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
               <FormAddDocument callback={handleOk} state={state}/>
            </Modal>
            <ListCardDocument/>
        </div>
    );
}
export default DocumentPage;