import { Button, Col, DatePicker, Form, Input, Row, Select, TimePicker } from "antd";
import { useDispatch } from "react-redux";
import moment from 'moment';
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../../common/variable";
import { validateClass } from "../../../../helpers/validateForm";
import ClassServices from "../../../../redux/services/ClassServices";
export function UpdateClass(props){
    const [form] = Form.useForm();
    const {record,callback,state} = props;
    const professorRedux = state.Professor.professors;
    const subjectRedux = state.Subject.subjects;
    const dispatch = useDispatch();
    const onReset = () => {
        form.resetFields();
      };
    
    const handleOnClickUpdate=(data)=>{
        const time1= {
            day:data.schedule1,
            startTime: data.time1?new Date(data.time1[0]).valueOf():record.schedule1.startTime,
            endTime: data.time1?new Date(data.time1[1]).valueOf():record.schedule1.endTime,
        };
        const time2= {
            day:data.schedule2,
            startTime: data.time2?new Date(data.time2[0]).valueOf():record.schedule2.startTime,
            endTime: data.time2?new Date(data.time2[1]).valueOf():record.schedule2.endTime,
        };
        const startDate = data.startDate?new Date(data.startDate).valueOf():Date.now().valueOf();
        const body ={_id:record._id,...data,schedule1:time1,schedule2:time2,startDate}
        delete body.time1;
        delete body.time2;
        const dataValidate = validateClass(body);
        if(Object.keys(dataValidate).length!==0){
            ClassServices.UpdateDataClass(dispatch,dataValidate)
            .then(result =>{
                console.log(result);
                callback();
            })
        }
        callback();
        console.log(record);
    }
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
    const arraySchedule = ['thứ 2','thứ 3','thứ 4','thứ 5','thứ 6','thứ 7','thứ 1']
    const elementSchedule = arraySchedule.map((item,index)=>{
        return <Select.Option value={item} key={index}>{item}</Select.Option>
    })
    return(
        <Form onFinish={handleOnClickUpdate} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Name" name="name" value={record.name}>
                <Input placeholder={record.name} defaultValue={record.name} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="_idSubject" label="Subject" initialValue={record.subject}>
                    <Select required={true}>
                        {elementSubject}
                    </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Proff" name="_idProfessor" initialValue={record.professor}>
                <Select required={true}>
                    {elementProfessor}
                </Select>
            </Form.Item>
            </Col> 
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item name="startDate" label="Start Date" >
                <DatePicker  style={{width:'100%'}} required={true} />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="schedule1" label="Schedule 1" >
                <Select required={true}>
                    {elementSchedule}
                </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="time1" label="Time">
                    <TimePicker.RangePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} required={true}/>
            </Form.Item>
            </Col> 
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="schedule2" label="Schedule 2" >
                <Select initialValues={'3'} required={true}>
                    {elementSchedule}
                </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="time2" label="Time">
                    <TimePicker.RangePicker required={true}/>
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