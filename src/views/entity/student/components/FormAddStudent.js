import { EyeInvisibleOutlined, EyeTwoTone, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Switch, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styleColumnModal, styleRowModal, styleRowModalAction, styleRowUploadAvatar } from "../../../../common/variable";
import StudentServices from '../../../../redux/services/CardServices';
export function FormAddStudent(props){
    const {callback} = props;
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [file,setFile] = useState(()=>[]);
    const onChangeHandler = (e)=>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }
    const onReset = () => {
        form.resetFields();
      };
    function handleChangeOnAdd(data){
      data = {...data,file:file}
      StudentServices.Add_Student_Service(dispatch,data)
      .then(result => {
        callback();
      })
    }
    return(
        <Form onFinish={handleChangeOnAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Tên Sinh viên" name="name">
                <Input placeholder={'Nhập tên Sinh viên'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
           <Col span={12} className="columns-element" style={styleColumnModal}>
               <Row>
               <Col span={24} className="columns-element" style={styleColumnModal}>
                        <Form.Item label="Mật khẩu" name="password">
                        <Input.Password
                                placeholder="nhập nhật khẩu"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                        </Form.Item>
               </Col>
               </Row>
               <Row >
                    <Col span={24} className="columns-element" style={styleColumnModal}>
                    <Form.Item label="Tuổi" name="age">
                            <Input type="number" min="10" max="30" defaultValue={20}/>
                        </Form.Item>
                    </Col>
               </Row>
              
           </Col>
           <Col span={12} className="columns-element" style={styleRowUploadAvatar}>
                    <Form.Item label="Ảnh đại diện" name="file"  onChange={onChangeHandler}>
                        <Upload >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
           </Col>
        </Row>
        <Row style={styleRowModal}>
               <Col span={12} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="SDT" name="phone" >
                            <Input min="10" max="30" placeholder={'Nhập sdt'}/>
                            </Form.Item>
               </Col>
               <Col span={12} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="Trạng thái" name="status" >
                                <Switch defaultChecked={true}/>
                            </Form.Item>
               </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Email" name="email">
                <Input type="email" placeholder={'nhập gmail'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Mô tả" name="description">
                <TextArea placeholder="Giới thiệu về sinh viên"/>
            </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24} className="columns-element" style={styleColumnModal}>
                <Row className="row-btn" style={styleRowModalAction}>
                    <Button type="" className="btnFilter" onClick={onReset}>Làm mới</Button>
                    <Button type="primary" className="btnFilter"  htmlType="submit">Thêm sinh viên</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}