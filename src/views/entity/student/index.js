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
import {
  Button,
  Card,
  Image,
  message,
  Popconfirm,
  Row,
  Table,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import ActionClass from "../_class/components/ActionClass";
import "./index.scss";
import helpers from "../../../helpers/helpers";
import TicketServices from "../../../redux/services/TicketServices";
import { useDispatch, useSelector } from "react-redux";
import PriceServices from "../../../redux/services/PriceServices";
import UserServices from "../../../redux/services/UserServices";
import StaffServices from "../../../redux/services/StaffServices";
const StudentPage = () => {
  const dispatch = useDispatch();
  const [ticketSelected, setTicketSelected] = useState(null);
  const [ticketSubmit,setTicketSubmit] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const tickets = useSelector(state => state.Ticket.tickets);
  const prices = useSelector(state => state.Price.prices);
  const staffs = useSelector(state => state.Staff.staffs);
  const ticketConverted = tickets.map(item => {
    const findnv = staffs.find(item => item.manv === item.manv);
    const findprice = prices.find(item => item.magia === item.magia);
    return {
      ...item,
      nhanvienlap: findnv ? findnv.tennv : "unknown",
      dongia: findprice ? findprice.giaTien : "unknown",
    };
  });
  const selectTicket = ticket => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(ticket);
    setTicketSelected(ticket);
  };
  const toggleLaser = () => {
    document.getElementById("laser").classList.toggle("active");
    document.getElementById("box-image").classList.toggle("blur");
    setTimeout(() => {
      document.getElementById("laser").classList.toggle("active");
      document.getElementById("box-image").classList.toggle("blur");
    }, 2000);
  };
  const scanImage = name => {
    toggleLaser();
    const object = helpers.getInForFromNameFile(name);
    console.log(object);
    setTimeout(() => {
      setTicketSelected({
        bienso: object.licence,
        mauxe: object.color,
        loaixe: object.type,
      });
    }, 2000);
  };
  const typeSend = prices.map((item, index) => {
    return (
      <option key={index} value={item.magia}>
        {item.loaiGui}
      </option>
    );
  });
  const staffOptions = staffs.map((item, index) => {
    return (
      <option key={index} value={item.manv}>
        {item.tennv}
      </option>
    );
  });
  const handleOnChangeInputTikcet = (e, type) => {
    console.log(e.target.value);
      switch(type){
        case 'code':setTicketSelected({
          ...ticketSelected,
          mathe:e.target.value
        }); break;
        case 'licence':setTicketSelected({
          ...ticketSelected,
          bienso:e.target.value
        }); break;
        case 'type':setTicketSelected({
          ...ticketSelected,
          loaixe:e.target.value
        }); break;
        case 'color':setTicketSelected({
          ...ticketSelected,
          mauxe:e.target.value
        }); break;
        case 'timeStart':setTicketSelected({
          ...ticketSelected,
          start:e.target.value
        }); break;
        
      }
  };
  const onChangeFile = info => {
    if (info.fileList && info.fileList[0]) {
      setTimeout(() => {
        setBase64Image(info.fileList[0].thumbUrl);
        console.log("=====>>>> Log", info.fileList[0].thumbUrl);
        scanImage(info.fileList[0].name);
      }, 1000);
    } else {
      setBase64Image(null);
    }
  };
  const handleSubmit = () =>{
    console.log({...ticketSelected,...ticketSubmit});
  }
  useEffect(() => {
    TicketServices.GetDataTicket(dispatch);
    PriceServices.GetAllPrices(dispatch);
    StaffServices.GetDataStaff(dispatch);
  }, []);

  const columnTickets = [
    {
      title: "STT",
      key: "index",
      dataIndex: "index",
      width: "3%",
    },
    {
      title: "Mã Thẻ",
      key: "mathe",
      dataIndex: "mathe",
      sorter: {
        compare: (a, b) => a.submathe - b.mathe,
        multiple: 3,
      },
      width: "10%",
    },
    {
      title: "Biển Số",
      key: "bienso",
      dataIndex: "bienso",
      width: "10%",
    },
    {
      title: "Màu Xe",
      key: "mauxe",
      dataIndex: "mauxe",
      width: "8%",
    },
    {
      title: "Loại Xe",
      key: "loaixe",
      dataIndex: "loaixe",
      width: "10%",
    },
    {
      title: "Bắt Đầu",
      key: "thoigianbatdau",
      dataIndex: "thoigianbatdau",
      width: "15%",
    },
    {
      title: "Kết Thúc",
      key: "thoigianketthuc",
      dataIndex: "thoigianketthuc",
      width: "15%",
    },
    {
      title: "Nhân Viên Lập",
      key: "nhanvienlap",
      dataIndex: "nhanvienlap",
      width: "10%",
    },
    {
      title: "Đơn giá / lượt",
      key: "dongia",
      dataIndex: "dongia",
      width: "10%",
    },
    {
      title: "Tác động",
      key: "operation",
      width: "20%",
      render: record => (
        <div className="">
          <ActionClass
            onEdit={() => selectTicket(record)}
            onDelete={() => console.log("delete")}
          />
        </div>
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
        <div className="">
          <ActionClass
            onEdit={() => selectTicket(record)}
            onDelete={() => console.log("delete")}
          />
        </div>
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
                <CCol xs="5">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    onChange={onChangeFile}
                    beforeUpload={() => false}
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  <CCard style={{ marginTop: 30, padding: 10 }}>
                    <CRow>
                      <CCol xs="5"></CCol>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="ccnumber">Biển Số</CLabel>
                          <CInput
                            id="ccnumber"
                            placeholder="Licene plate"
                            className="impress"
                            value={ticketSelected ? ticketSelected.bienSo : ""}
                            onChange={e =>
                              handleOnChangeInputTikcet(e, "licence")
                            }
                          />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="5">
                        <CFormGroup>
                          <CLabel htmlFor="name">Màu Xe</CLabel>
                          <CInput
                            id="name"
                            placeholder="Code Color"
                            className="impress"
                            value={ticketSelected ? ticketSelected.mauXe : ""}
                            onChange={e =>
                              handleOnChangeInputTikcet(e, "color")
                            }
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="7">
                        <CFormGroup>
                          <CLabel htmlFor="ccnumber">Loại Xe</CLabel>
                          <CInput
                            id="ccnumber"
                            placeholder="Type"
                            className="impress"
                            value={ticketSelected ? ticketSelected.loaiXe : ""}
                            onChange={e => handleOnChangeInputTikcet(e, "type")}
                          />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCard>
                </CCol>
                <CCol
                  xs="7"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div id="box-image" className="box-image">
                    <div id="laser" className="diode">
                      <div className="laser"></div>
                    </div>
                    <Image width={350} height={350} src={`${base64Image}`} />
                  </div>
                </CCol>
              </CRow>
            </Card>
          </CRow>
        </CCol>
        <CCol xs="5">
          <CCard className="table table-full" id="top-info">
            <CCardHeader className="add-class">
              <h4>Thông tin vé thẻ</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="5">
                  <CFormGroup>
                    <CLabel htmlFor="name">Mã Thẻ</CLabel>
                    <CInput
                      id="name"
                      placeholder="Code Card"
                      value={ticketSelected ? ticketSelected.mathe : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "code")}
                      disabled
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="7">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Biển Số</CLabel>
                    <CInput
                      id="ccnumber"
                      placeholder="Licene plate"
                      className="impress"
                      value={ticketSelected ? ticketSelected.bienso : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "licence")}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="5">
                  <CFormGroup>
                    <CLabel htmlFor="name">Màu Xe</CLabel>
                    <CInput
                      id="name"
                      placeholder="Code Color"
                      className="impress"
                      value={ticketSelected ? ticketSelected.mauxe : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "color")}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="7">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Loại Xe</CLabel>
                    <CInput
                      id="ccnumber"
                      placeholder="Type"
                      className="impress"
                      value={ticketSelected ? ticketSelected.loaixe : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "type")}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Thời Gian Băt Đầu</CLabel>
                    <CInput
                      type="date"
                      id="name"
                      value={
                        ticketSelected
                          ? helpers.getDateInputDate(ticketSelected.start)
                          : ""
                      }
                      onChange={e => handleOnChangeInputTikcet(e, "dateStart")}
                    />
                    <CInput
                      type="time"
                      id="name"
                      value={ticketSelected ? helpers.getTimeInputTime(ticketSelected.start) : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "timeStart")}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Thời Gian Kết Thúc </CLabel>
                    <CInput
                      type="date"
                      id="name"
                      value={
                        ticketSelected
                          ? helpers.getDateInputDate(ticketSelected.end)
                          : ""
                      }
                    />
                    <CInput
                      type="time"
                      id="name"
                      value={
                        ticketSelected
                          ? helpers.getTimeInputTime(ticketSelected.end)
                          : ""
                      }
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="name">Nhân Viên Lập </CLabel>
                    <CSelect
                      id="name"
                      name="name"
                      value={ticketSelected ? ticketSelected.nhanvienlap : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "name")}
                    >
                      {staffOptions}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="name">Loại Gửi </CLabel>
                    <CSelect
                      value={ticketSelected ? ticketSelected.loaigui : ""}
                      onChange={e => handleOnChangeInputTikcet(e, "price")}
                    >
                      {typeSend}
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <div className="footer-button">
                <Button type="default" onClick={() => setTicketSelected(null)}>
                  Hủy
                </Button>
                <Popconfirm
                  onConfirm={handleSubmit}
                >
                  <Button type="primary">
                    {" "}
                    <CIcon name="cil-cursor" />
                    Thêm Thẻ
                  </Button>
                </Popconfirm>
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
      </Row>
      <Row className="tabelPanel">
        <Card className="table table-full">
          <Row className="add-class">
            <h4>Danh sách vé thẻ</h4>
          </Row>
          <Table
            style={{ border: 1 }}
            dataSource={ticketConverted}
            columns={columnTickets}
            pagination={{ pageSize: 4 }}
            bordered
          />
        </Card>
      </Row>
    </div>
  );
};
export default StudentPage;
