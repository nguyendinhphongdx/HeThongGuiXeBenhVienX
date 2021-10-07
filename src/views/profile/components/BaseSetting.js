import { Button, Upload, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import defaultlogo from "../../../assets/images/default.png";
import {UploadOutlined, StarOutlined} from '@ant-design/icons';
export default function BaseSetting(){
    return(
        <div className="baseSetting">
        <Form>
        <Row>
        <Col span={10} className="columns-form">
                <h3>Basci Settings</h3>
                
                    <Form.Item name='email' label='Email' className="form-item-setting">
                        <Input placeholder="Please enter your email"/>
                    </Form.Item>
                    <Form.Item name='nickname' label='NickName' className="form-item-setting">
                        <Input placeholder="Please enter your nickname"/>
                    </Form.Item>
                    <Form.Item name='persional' label='Persional Profile' className="form-item-setting">
                        <TextArea placeholder="Brief introduction to yourself" rows={5}/>
                    </Form.Item>
                    <Form.Item name='country' label='Country/Region' className="form-item-setting">
                        <Select>
                            <Select.Option>Viet Nam</Select.Option>
                            <Select.Option>Indonesia</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='phone' label='Phone Number' className="form-item-setting">
                        <Input placeholder="Enter phone number"/>
                    </Form.Item>
                    <Form.Item className="form-item-setting">
                        <Button type="primary" style={{width:'100%'}}>Update Information</Button>
                    </Form.Item>
                
            </Col>
            <Col span={14} className="columns-form" >
                    <Form.Item className="form-item-setting form-item-upload">
                        <Row><img src={defaultlogo} alt='avatar' style={{width:'50%'}}/></Row>
                        <Row>
                            <Upload><Button icon={<UploadOutlined />}>Update Avatar</Button></Upload>
                        </Row>
                    </Form.Item>
                
            </Col>
        </Row>  
        </Form>
        </div>
    );
}
const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
    showUploadList: {
      showDownloadIcon: true,
      downloadIcon: 'download ',
      showRemoveIcon: true,
      removeIcon: <StarOutlined onClick={e => console.log(e, 'custom removeIcon event')} />,
    },
  };