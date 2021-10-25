import { EyeInvisibleOutlined, EyeTwoTone, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Switch, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styleColumnModal, styleRowModal, styleRowModalAction, styleRowUploadAvatar } from "../../../../common/variable";
export function FormAddProfessor(props){
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
    
      .then(result => {
        callback();
      })
    }
    return(
        <Form onFinish={handleChangeOnAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Tên Giảng viên" name="name">
                <Input placeholder={'Nhập tên Giảng viên'} required={true}
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
                                placeholder="Mật khẩu"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                        </Form.Item>
               </Col>
               </Row>
               <Row >
                    <Col span={24} className="columns-element" style={styleColumnModal}>
                    <Form.Item label="Tuổi" name="age">
                            <Input type="number" min="25" max="50" defaultValue={20}/>
                        </Form.Item>
                    </Col>
               </Row>
              
           </Col>
           <Col span={12} className="columns-element" style={styleRowUploadAvatar}>
                    <Form.Item label="Ảnh đại diện" name="file"  onChange={onChangeHandler}>
                        <Upload >
                            <Button icon={<UploadOutlined />}>Tải lên</Button>
                        </Upload>
                    </Form.Item>
           </Col>
        </Row>
        <Row style={styleRowModal}>
               <Col span={15} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="Số điện thoại" name="phone" >
                            <Input  placeholder={'Nhập số điện thoại'}/>
                            </Form.Item>
               </Col>
               <Col span={9} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="Trạng thái" name="status" >
                                <Switch defaultChecked={true}/>
                            </Form.Item>
               </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Email" name="email">
                <Input type="email" placeholder={'Nhập email'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Mô tả" name="description">
                <TextArea placeholder="Giới thiệu"/>
            </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24} className="columns-element" style={styleColumnModal}>
                <Row className="row-btn" style={styleRowModalAction}>
                    <Button type="" className="btnFilter" onClick={onReset}>Làm mới</Button>
                    <Button type="primary" className="btnFilter"  htmlType="submit">Thêm Giảng viên</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}