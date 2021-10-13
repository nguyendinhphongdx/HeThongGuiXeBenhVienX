import CIcon from "@coreui/icons-react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import { Button, Card, Image, Row, Table, Upload } from "antd";
import React, { useEffect, useState } from "react";
import ActionClass from "../_class/components/ActionClass";
import './index.scss';
import helpers from "../../../helpers/helpers";
const StudentPage = () => {
  const [ticketSelected, setTicketSelected] = useState(null);
  const tickets = [];
  const prices = [];
  const selectTicket = ticket => {
    setTicketSelected(ticket);
  };
  const [base64Image,setBase64Image] = useState(null); 
  Array.apply(null, { length: 10 }).map((item, index) => {
    tickets.push({
      index: index,
      maThe: "Ma The " + index,
      bienSo: `29y3-07832`,
      loaiXe: "Winner",
      mauXe:'BLACK',
      thoiGianBatDau:
        new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString(),
      thoiGianKetThuc:
        new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString(),
      nhanVienLap: "Nhân Viên " + index,
      donGia: 20000,
    });
    prices.push({
      index: index,
      maGia: "Ma Gía " + index,
      loaiGui: 15 + index + " Ngày",
      giaTien: 5000 + index * 1000,
    });
  });
  const toggleLaser = () =>{
    document.getElementById("laser").classList.toggle('active');
    document.getElementById("box-image").classList.toggle("blur");
      setTimeout(()=>{
        document.getElementById("laser").classList.toggle('active');
        document.getElementById("box-image").classList.toggle("blur");
      },2000)
  }
  const scanImage = (name)=>{
    toggleLaser();
    const object = helpers.getInForFromNameFile(name);
    setTimeout(()=>{
        setTicketSelected({
            bienSo:object.licence,
            mauXe:object.color,
            loaiXe:object.type
        })
    },2000);
  }
  const handleOnChangeInputTikcet = (e, type) => {};
  const  onChangeFile = (info) =>{
     if(info.fileList && info.fileList[0]){
        setTimeout(() => {
            setBase64Image(info.fileList[0].thumbUrl);
            scanImage(info.fileList[0].name);
        }, 1000);
     }else{
        setBase64Image(null);
     }
  }
  useEffect(() => {}, []);
  const columnTickets = [
    {
      title: "STT",
      key: "index",
      dataIndex: "index",
      width: "3%",
    },
    {
      title: "Mã Thẻ",
      key: "maThe",
      dataIndex: "maThe",
      sorter: {
        compare: (a, b) => a.subject.length - b.subject.length,
        multiple: 3,
      },
      width: "10%",
    },
    {
      title: "Biển Số",
      key: "bienSo",
      dataIndex: "bienSo",
      width: "10%",
    },
    {
        title: "Màu Xe",
        key: "mauXe",
        dataIndex: "mauXe",
        width: "8%",
      },
    {
      title: "Loại Xe",
      key: "loaiXe",
      dataIndex: "loaiXe",
      width: "10%",
    },
    {
      title: "Bắt Đầu",
      key: "thoiGianBatDau",
      dataIndex: "thoiGianBatDau",
      width: "15%",
    },
    {
      title: "Kết Thúc",
      key: "thoiGianKetThuc",
      dataIndex: "thoiGianKetThuc",
      width: "15%",
    },
    {
      title: "Nhân Viên Lập",
      key: "nhanVienLap",
      dataIndex: "nhanVienLap",
      width: "10%",
    },
    {
      title: "Đơn giá / lượt",
      key: "donGia",
      dataIndex: "donGia",
      width: "10%",
    },
    {
      title: "Tác động",
      key: "operation",
      width: "20%",
      render: record => (
        <ActionClass
          onEdit={() => selectTicket(record)}
          onDelete={() => console.log("delete")}
        />
      ),
    },
  ];
  const columnPrices = [
    {
      title: "STT",
      key: "index",
      dataIndex: "index",
      width: "5%",
    },
    {
      title: "Mã Giá",
      key: "maGia",
      dataIndex: "maGia",
      width: "12%",
    },
    {
      title: "Loại Gửi",
      key: "loaiGui",
      dataIndex: "loaiGui",
      width: "10%",
    },
    {
      title: "Gía Tiền",
      key: "giaTien",
      dataIndex: "giaTien",
      width: "10%",
    },
    {
      title: "Tác động",
      key: "operation",
      width: "20%",
      render: record => (
        <ActionClass
          onEdit={() => selectTicket(record)}
          onDelete={() => console.log("delete")}
        />
      ),
    },
  ];
  return (
    <div className="">
      <Row className="tabelPanel">
        <CCol xs="7">
          <CRow>
            <Card className="table table-full">
              <Row className="add-class">
                <h4>Bảng giá</h4>
              </Row>
              <Table
                style={{ border: 1 }}
                dataSource={prices}
                columns={columnPrices}
                pagination={{ pageSize: 4 }}
                bordered
              ></Table>
            </Card>
          </CRow>
          <CRow>
            <Card className="table table-full">
              <CRow>
                <CCol xs="4">
                  <Upload  
                   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                   listType="picture"
                    onChange ={onChangeFile}
                    beforeUpload={()=> false}
                    >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </CCol>
                <CCol xs="8" style={{display:'flex',justifyContent:'center'}}>
                    <div id="box-image" className="box-image">
                        <div id="laser" className="diode">
                        <div className="laser"></div>
                        </div>
                        <Image
                        width={350}
                        height={350}
                        src={`${base64Image}`}
                    />
                    </div>
                </CCol>
              </CRow>
            </Card>
          </CRow>
        </CCol>
        <CCol xs="5">
          <CCard className="table table-full">
            <CCardHeader className="add-class">
              <h4>Thông tin vé thẻ</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="5">
                  <CFormGroup>
                    <CLabel htmlFor="name">Mã Thẻ</CLabel>
                    <CInput id="name" placeholder="Code Card" 
                    value={ticketSelected?ticketSelected.maThe:""}
                    onChange={e =>handleOnChangeInputTikcet(e,'code')}
                    disabled />
                  </CFormGroup>
                </CCol>
                <CCol xs="7">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Biển Số</CLabel>
                    <CInput id="ccnumber" placeholder="Licene plate" 
                    className="impress"
                     value={ticketSelected?ticketSelected.bienSo:""}
                     onChange={e =>handleOnChangeInputTikcet(e,'licence')}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="5">
                  <CFormGroup>
                    <CLabel htmlFor="name">Màu Xe</CLabel>
                    <CInput id="name" placeholder="Code Color" 
                     className="impress"
                     value={ticketSelected?ticketSelected.mauXe:""}
                     onChange={e =>handleOnChangeInputTikcet(e,'color')}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="7">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Loại Xe</CLabel>
                    <CInput id="ccnumber" placeholder="Type" 
                     className="impress"
                    value={ticketSelected?ticketSelected.loaiXe:""}
                    onChange={e =>handleOnChangeInputTikcet(e,'type')}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Thời Gian Băt Đầu</CLabel>
                    <CInput type="date" id="name"
                     value={ticketSelected?ticketSelected.thoiGianBatDau: ""}
                     onChange={e =>handleOnChangeInputTikcet(e,'dateStart')}
                    />
                    <CInput type="time" id="name"
                     value={ticketSelected?ticketSelected.thoiGianBatDau: ""}
                     onChange={e =>handleOnChangeInputTikcet(e,'timeStart')} 
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Thời Gian Kết Thúc </CLabel>
                    <CInput type="date" id="name" 
                      value={ticketSelected?ticketSelected.thoiGianKetThuc:""}
                    />
                    <CInput type="time" id="name" 
                      value={ticketSelected?ticketSelected.thoiGianKetThuc: ""}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nhân Viên Lập </CLabel>
                    <CInput  id="name" placeholder="Name" 
                      value={ticketSelected?ticketSelected.nhanVienLap: ""}
                      onChange={e => handleOnChangeInputTikcet(e,"name")}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="name">Loại Gửi </CLabel>
                    <CSelect
                       value={ticketSelected?ticketSelected.loaiGui: ""}
                       onChange={e => handleOnChangeInputTikcet(e,"price")}
                    >
                        <option>15 Ngày</option>
                        <option>20 Ngày</option>
                        <option>25 Ngày</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <div className="footer-button">
                <Button type="default" onClick={()=>setTicketSelected(null)}>Hủy</Button>
                <Button type="primary">
                  {" "}
                  <CIcon name="cil-cursor" />
                  Thêm Thẻ
                </Button>
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
      </Row>

      <Row className="tabelPanel">
        <Card className="table table-full">
          <Row className="add-class">
            <h4>Danh sách thẻ</h4>
          </Row>
          <Table
            style={{ border: 1 }}
            dataSource={tickets}
            columns={columnTickets}
            pagination={{ pageSize: 4 }}
            bordered
          ></Table>
        </Card>
      </Row>
    </div>
  );
};
export default StudentPage;
