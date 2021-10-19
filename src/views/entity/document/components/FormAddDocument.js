import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Switch, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DocumentServices from '../../../../redux/services/TicketServices';
import { styleColumnModal, styleRowModal, styleRowModalAction, styleRowUploadAvatar } from "../../../../common/variable";

export function FormAddDocument(props){
    const {callback,state} = props;
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [file,setFile] = useState(()=>[]);
    const onChangeHandler = (e)=>{
        setFile(e.target.files[0]);
    }
    const onReset = () => {
        form.resetFields();
      };
    function handleChangeOnAdd(data){
      data = {...data,file:file}
      DocumentServices.AddDocumentService(dispatch,data)
      .then((data)=>{
        callback();
      })
     
    }
    const subjectRedux = state.Subject.subjects;
    const professorRedux = state.Professor.professors;
    const elementSubject = subjectRedux.map(item => {
        return(
            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
        );
    })
    const elementProfessor = professorRedux.map(item => {
        return(
            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
        );
    })
    return(
        <Form onFinish={handleChangeOnAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Title" name="title">
                <Input placeholder={'Enter Title'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
           <Col span={12} className="columns-element" style={styleColumnModal}>
               <Row>
               <Col span={24} className="columns-element" style={styleColumnModal}>
                        <Form.Item label="Subject" name="_idSubject">
                            <Select>{elementSubject}</Select>
                        </Form.Item>
               </Col>
               </Row>
           </Col>
           <Col span={12} className="columns-element" style={styleRowUploadAvatar}>
                    <Form.Item label="Avatar" name="file"  onChange={onChangeHandler}>
                        <Upload >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
           </Col>
        </Row>
        <Row style={styleRowModal}>
                    <Col span={16} className="columns-element" style={styleColumnModal}>
                        <Form.Item label="Professor" name="_idAuth">
                            <Select>{elementProfessor}</Select>
                        </Form.Item>
                    </Col>
               <Col span={8} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="Status" name="status" >
                                <Switch checked={true}/>
                            </Form.Item>
               </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Description" name="description">
                <TextArea placeholder="Introduction about student"/>
            </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24} className="columns-element" style={styleColumnModal}>
                <Row className="row-btn" style={styleRowModalAction}>
                    <Button type="" className="btnFilter" onClick={onReset}>Reset</Button>
                    <Button type="primary" className="btnFilter"  htmlType="submit">Update Class</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}