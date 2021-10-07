import { Button, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch } from "react-redux";
import { styleRowModal, styleRowModalAction,styleColumnModal } from "../../../../common/variable";
import SubjectServices from "../../../../redux/services/SubjectServices";

export function FormAddSubject(props){
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickAdd=(data)=>{
        SubjectServices.AddSubjectService(dispatch,data)
        .then((result) =>{
            if(result==='success'){
                props.callback(false);
            }
        })
    }
    return(
             <Form onFinish={handleOnClickAdd} form={form}>
            <Row style={styleRowModal}>
                <Col span={10} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Tên môn" name="name">
                    <Input placeholder="Tên môn học"
                      required
                    />
                </Form.Item>
                </Col>
                <Col span={10} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Tín chỉ" name="price">
                    <Input type="number" placeholder="tín chi" required/>
                </Form.Item>
                </Col>  
                <Col span={4} className="columns-element" style={styleColumnModal}>
                <Form.Item name="unit" hidden={true} >
                        <Select placeholder='VND'defaultValue={"VND"} >
                        <Select.Option value='Dolar'>Dolar</Select.Option>
                        </Select>
                </Form.Item>
                </Col> 
            </Row>
            <Row style={styleRowModal}>
                <Col span={8} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Loại môn" name="type">
                    <Select placeholder='Cơ bản' defaultValue={"base"}>
                        <Select.Option value='advanced'>Advanced</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col span={9} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Số tiết học" name="totalSession">
                    <Input type="number" required/>
                </Form.Item>
                </Col>
                <Col span={5} className="columns-element" style={styleColumnModal}>
                <Form.Item  name="status">
                <Select  placeholder='Trạng thái' defaultValue={"active"}>
                        <Select.Option value='blocked'>Block</Select.Option>
                    </Select>
                </Form.Item>
                </Col>   
            </Row>
            <Row >
                <Col span={24} className="columns-element" style={styleColumnModal}>
                <Form.Item  name="description" label='Mô tả '>
                    <TextArea placeholder="giới thiệu môn học..."/>
                </Form.Item>
                </Col>
            </Row>
            <Row >
                <Col span={24} className="columns-element" style={styleColumnModal}>
                    <Row className="row-btn" style={styleRowModalAction}>
                        <Button type="" className="btnFilter" onClick={onReset}>Làm mới</Button>
                        <Button type="primary" className="btnFilter"  htmlType="submit">Thêm môn học</Button>
                    </Row>
                </Col>
            </Row>
            </Form>
    );
}