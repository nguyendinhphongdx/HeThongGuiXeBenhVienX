import { Button, Col, DatePicker, Form, Input, Row, Select, TimePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../../common/variable";
import ClassSerivces from '../../../../redux/services/StaffServices';
export function FormAddClass(props){
    const [form] = Form.useForm();
    const {callback} = props;
    const state = useSelector(state=>state)
    const professorRedux = state.Professor.professors;
    const subjectRedux = state.Subject.subjects;
    const dispatch = useDispatch();
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickAdd=(data)=>{
       
        const time1= {
            day:data.schedule1,
            startTime: new Date(data.time1[0]).valueOf(),
            endTime: new Date(data.time1[1]).valueOf(),
        };
        const time2= {
            day:data.schedule2,
            startTime: new Date(data.time2[0]).valueOf(),
            endTime: new Date(data.time2[1]).valueOf(),
        };
        const startDate = data.startDate?new Date(data.startDate).valueOf():Date.now().valueOf();
        const body ={...data,schedule1:time1,schedule2:time2,startDate}
        delete body.time1
        delete body.time2
        console.log('body',body);
        ClassSerivces.AddClass(dispatch,body)
        .then(result => {
            callback();
            console.log(result)
        })
        
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
    const arraySchedule = ['thứ 2','thứ 3','thứ 4','thứ 5','thứ 6','thứ 7','chủ nhật']
    const elementSchedule = arraySchedule.map((item,index)=>{
        return <Select.Option value={item} key={index}>{item}</Select.Option>
    })
    return(
        <Form onFinish={handleOnClickAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Tên lớp" name="name">
                <Input placeholder={'Nhập tên lớp'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="_idSubject" label="Subject" >
                    <Select >
                        {elementSubject}
                    </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Giảng viên" name="_idProfessor">
                <Select >
                    {elementProfessor}
                </Select>
            </Form.Item>
            </Col> 
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item name="startDate" label="Ngày bắt đầu" >
                <DatePicker  style={{width:'100%'}}/>
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={9} className="columns-element" style={styleColumnModal}>
            <Form.Item name="schedule1" label="Lịch học 1" >
                <Select initialValues={'3'}>
                    {elementSchedule}
                </Select>
            </Form.Item>
            </Col>
            <Col span={15} className="columns-element" style={styleColumnModal}>
            <Form.Item name="time1" label="Thời gian">
                    <TimePicker.RangePicker />
            </Form.Item>
            </Col> 
        </Row>
        
        <Row style={styleRowModal}>
            <Col span={9} className="columns-element" style={styleColumnModal}>
            <Form.Item name="schedule2" label="Lịch học 2" >
                <Select initialValues={'3'}>
                    {elementSchedule}
                </Select>
            </Form.Item>
            </Col>
            <Col span={15} className="columns-element" style={styleColumnModal}>
            <Form.Item name="time2" label="Thời gian">
                    <TimePicker.RangePicker />
            </Form.Item>
            </Col> 
        </Row>
        <Row >
            <Col span={24} className="columns-element" style={styleColumnModal}>
                <Row className="row-btn" style={styleRowModalAction}>
                    <Button type="" className="btnFilter" onClick={onReset}>Reset</Button>
                    <Button type="primary" className="btnFilter"  htmlType="submit">Add Class</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}