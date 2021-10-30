import { UploadOutlined } from "@ant-design/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
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
import { string } from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import helpers from "../../../helpers/helpers";
import {
  ValidateFormAddTicket,
  ValidateFormReturnTicket,
} from "../../../helpers/validateForm";
import CardServices from "../../../redux/services/CardServices";
import LocationServices from "../../../redux/services/LocationServices";
import PriceServices from "../../../redux/services/PriceServices";
import StaffServices from "../../../redux/services/StaffServices";
import TicketServices from "../../../redux/services/TicketServices";
import ActionClass from "../_class/components/ActionClass";
import StoreNotif from "../../notifications/notif/notifStore";

import "./index.scss";
const StudentPage = () => {
  const dispatch = useDispatch();
  const [ticketSelected, setTicketSelected] = useState(null);
  const [isUpdate, setUpdate] = useState(false);
  const [disable, setDisable] = useState(false);
  const [base64Image, setBase64Image] = useState(null);
  const store = useSelector(state => state);
  const tickets = useSelector(state => state.Ticket.tickets);
  const prices = useSelector(state => state.Price.prices);
  const staffs = useSelector(state => state.Staff.staffs);
  const cards = useSelector(state => state.Card.cards);

  const locations = useSelector(state => state.Location.locations);
  const ticketConverted = useMemo(() => {
    return tickets.map(item => {
      const findnv = staffs.find(nv => nv.manv === item.manv);
      const findprice = prices.find(pr => pr.magia === item.magia);
      const findcard = cards.find(cr => cr.mathe === item.mathe);
      return {
        ...item,
        nhanvienlap: findnv ? findnv.tennv : "unknown",
        dongia: findprice ? findprice.giaTien : "unknown",
        tinhtrang:findcard?(findcard.tinhtrang?"Used":"Not Used"):"unknown",
      };
    });
  }, [tickets, staffs, prices,cards]);
  console.log('ticketConverted',ticketConverted);
  const selectTicket = ticket => {
    console.log(ticket);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setUpdate(true);
    setTicketSelected(ticket);
    setDisable(ticket.thoigianketthuc !== "Chưa trả lại");
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
    setTicketSelected(null);
    setTimeout(() => {
      setTicketSelected({
        bienso: object.licence,
        mauxe: object.color,
        loaixe: object.type,
        dstart: helpers.getDateInputDate(new Date().getTime()),
        tstart: helpers.getTimeInputTime(new Date().getTime()),
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
  const cardOptions = cards.map((item, index) => {
    const location = locations.find(kv => kv.maKhuVuc == item.makhuvuc);
    return (
      <option key={index} value={item.mathe}>
        {`${item.mathe} - ${location ? location.tenKhuVuc : ""}`}
      </option>
    );
  });
  const handleOnChangeInputTikcet = (e, type) => {
    let element = {};
    const value = e.target.value;
    switch (type) {
      case "code":
        element.mathe = value;
        break;
      case "licence":
        element.bienso = value;
        break;
      case "type":
        element.loaixe = value;
        break;
      case "color":
        element.mauxe = value;
        break;
      case "timeStart":
        element.tstart = value;
        break;
      case "dateStart":
        element.dstart = value;
        break;
      case "timeEnd":
        element.tend = value;
        break;
      case "dateEnd":
        element.dend = value;
        break;
      case "price":
        element.loaigui = value;
        break;
      case "name":
        element.nhanvienlap = value;
        break;
    }
    setTicketSelected({
      ...ticketSelected,
      ...element,
    });
  };
  const onChangeFile = info => {
    if (info.fileList && info.fileList[0]) {
      setTimeout(() => {
        setBase64Image(info.fileList[0].thumbUrl);
        scanImage(info.fileList[0].name);
      }, 1000);
    } else {
      setBase64Image(null);
    }
  };
  const handleAddTicket = () => {
    if (!ticketSelected) return message.error("Hãy nhập thông tin!");
    const obj = {
      ...ticketSelected,
      manv: ticketSelected.manv || staffs[0].manv,
      magia: ticketSelected.magia || prices[0].magia,
    };
    const validate = ValidateFormAddTicket(obj);
    if (typeof validate === string) return message.info(validate);
    if (!isUpdate) {
      const card = cards.find(item => item.mathe == validate.mathe);
      if (card && !card.tinhtrang) {
        helpers.SetLoading(true, dispatch);
        TicketServices.AddTicketServices(dispatch, validate).finally(() => {
          setTimeout(() => {
            message.success({ content: "Thêm thành công", key: "updatable" });
            helpers.SetLoading(false, dispatch);
          }, 2000);
        });
      } else return message.info("Thẻ này đã được sử dụng!");
    } else {
      helpers.SetLoading(true, dispatch);
      TicketServices.UpdateTicketServices(dispatch, validate).finally(() => {
        setTimeout(() => {
          message.success({ content: "Cập nhật thành công", key: "updatable" });
          helpers.SetLoading(false, dispatch);
        }, 2000);
      });
    }
  };
  const handleReturnTicket = () => {
    const isReturn = cards.find(item => item.mathe === ticketSelected.mathe);
    console.log(cards, ticketSelected.mathe);

    if (isReturn.tinhtrang) {
      const obj = {
        ...ticketSelected,
        manv: ticketSelected.manv || staffs[0].manv,
        magia: ticketSelected.magia || prices[0].magia,
      };
      const validate = ValidateFormReturnTicket(obj);
      helpers.SetLoading(true, dispatch);
      TicketServices.ReturnTicketServices(dispatch, validate).finally(() => {
        TicketServices.GetDataTicket(dispatch)
        setTimeout(() => {
          StoreNotif.openSuccessNotif("Thông báo", "Thu hồi thành công!", 2000);
          helpers.SetLoading(false, dispatch);
        }, 2000);
      });
    } else {
      message.info("Không thể thu hồi vé đã trả lại!");
    }
  };
  const handleCancel = () => {
    setTicketSelected(null);
    setUpdate(false);
    setDisable(false);
  };
  useEffect(() => {
    Promise.all([
      TicketServices.GetDataTicket(dispatch),
      PriceServices.GetAllPrices(dispatch),
      StaffServices.GetDataStaff(dispatch),
      CardServices.GetDataCard(dispatch),
      LocationServices.GetDataLocation(dispatch),
    ]).finally(() => message.success("Lấy dữ liệu vé thẻ thành công!"));
  }, []);
  const columnTickets = [
    {
      title: "Mã Thẻ",
      key: "mathe",
      dataIndex: "mathe",
      sorter: {
        compare: (a, b) => a.mathe - b.mathe,
        multiple: 3,
      },
      width: "10%",
    },
    {
      title: "Trạng Thái",
      key: "tinhtrang",
      dataIndex: "tinhtrang",
      width: "8%",
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
                            value={ticketSelected ? ticketSelected.bienso : ""}
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
                            value={ticketSelected ? ticketSelected.loaixe : ""}
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
          <CForm>
            <CCard className="table table-full" id="top-info">
              <CCardHeader className="add-class">
                <h4>Thông tin vé thẻ</h4>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="5">
                    <CFormGroup>
                      <CLabel htmlFor="code">Mã Thẻ</CLabel>
                      <CSelect
                        id="code"
                        value={ticketSelected ? ticketSelected.mathe : ""}
                        onChange={e => handleOnChangeInputTikcet(e, "code")}
                      >
                        {cardOptions}
                      </CSelect>
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
                            ? helpers.getDateInputDate(ticketSelected.dstart)
                            : ""
                        }
                        onChange={e =>
                          handleOnChangeInputTikcet(e, "dateStart")
                        }
                      />
                      <CInput
                        type="time"
                        id="name"
                        value={ticketSelected ? ticketSelected.tstart : ""}
                        onChange={e =>
                          handleOnChangeInputTikcet(e, "timeStart")
                        }
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
                          ticketSelected &&
                          ticketSelected.thoigianketthuc !== "Chưa trả lại"
                            ? helpers.getDateInputDate(ticketSelected.dend)
                            : ""
                        }
                        onChange={e => handleOnChangeInputTikcet(e, "dateEnd")}
                      />
                      <CInput
                        type="time"
                        id="name"
                        value={
                          ticketSelected &&
                          ticketSelected.thoigianketthuc !== "Chưa trả lại"
                            ? ticketSelected.tend
                            : ""
                        }
                        onChange={e => handleOnChangeInputTikcet(e, "timeEnd")}
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
                        value={ticketSelected ? ticketSelected.manv : ""}
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
                        value={ticketSelected ? ticketSelected.magia : ""}
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
                  <Button type="default" onClick={handleCancel}>
                    Hủy
                  </Button>
                  <Button
                    type="primary"
                    disabled={!isUpdate}
                    onClick={handleReturnTicket}
                  >
                    {" "}
                    <CIcon name="cil-ban" />
                    Thu hồi
                  </Button>
                  <Popconfirm
                    onConfirm={() => handleAddTicket()}
                    disabled={disable}
                    title={
                      isUpdate ? "Xác nhận cập nhật!" : "Xác nhận thêm mới!"
                    }
                  >
                    <Button type="primary" disabled={disable}>
                      {" "}
                      <CIcon name="cil-cursor" />
                      {isUpdate ? "Cập nhật" : "Tạo vé"}
                    </Button>
                  </Popconfirm>
                </div>
              </CCardFooter>
            </CCard>
          </CForm>
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
