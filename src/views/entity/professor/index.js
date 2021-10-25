import CIcon from "@coreui/icons-react";
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
import { Button, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ImageComponent from "../../../common/components/image";
import LocationServices from "../../../redux/services/LocationServices";
import ActionFrofessor, {
  AcitonDetailSubject,
} from "./components/ActionProfessor";
import "./index.scss";

const ProfessorPage = () => {
  const dispatch = useDispatch();
  let locations = [];
  let days = [];
  Array.apply(null, { length: 10 }).map((item, index) => {
    locations.push({
      index: index,
      maKhuVuc: index,
      tenKhuVuc: `Tên Khu Vực A ${index}`,
      soLuongToiDa: 20,
      soLuongHienTai: 0,
    });
    const date = new Date();
    days.push({
      index: index,
      key: date.setDate(date.getDate() - index),
    });
  });
  const nameLocation = locations.map((item, index) => {
    return (
      <option key={index} value={index}>
        {item.tenKhuVuc}
      </option>
    );
  });
  const nameDays = days.map((item, index) => {
    return (
      <option key={index} value={item.index}>
        {new Date(item.key).toLocaleDateString()}
      </option>
    );
  });
  useEffect(() => {}, []);

  return (
    <div className="">
      <Row className="tabelPanel">
        <CCol xs="6">
          <CCard className="table table-full">
            <CCardHeader className="add-class">
              <h4>Hệ thống camera giám sát</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="namecard">Tên Khu Vực</CLabel>
                    <CSelect custom name="namecard" id="namecard">
                      {nameLocation}
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="namecard">Ngày ghi nhận</CLabel>
                    <CSelect custom name="namecard" id="namecard">
                      {nameDays}
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <div className="footer-button">
                <Button type="default">Hủy</Button>
                <Button type="primary">
                  {" "}
                  <CIcon name="cil-cursor" />
                  Tìm kiếm
                </Button>
              </div>
            </CCardFooter>
          </CCard>
        
        </CCol>
        <CCol xs="6">
          <CCard className="table table-full">
            <CCardHeader className="add-class">
              <h4>Camera 1</h4>
            </CCardHeader>
            <CCardBody>
                <video controls width={'100%'} src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4" autoPlay="true" preload="none"></video>
            </CCardBody>
          </CCard>
        </CCol>
      </Row>
      <Row className="tabelPanel">
      <CCol xs="6">
          <CCard className="table table-full">
            <CCardHeader className="add-class">
              <h4>Camera 2</h4>
            </CCardHeader>
            <CCardBody>
            <video controls width={'100%'} src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4"  autoPlay="true" preload="none"></video>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="6">
          <CCard className="table table-full">
            <CCardHeader className="add-class">
              <h4>Camera 3</h4>
            </CCardHeader>
            <CCardBody>
            <video controls width={'100%'} src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4" preload="none"></video>
            </CCardBody>
          </CCard>
        </CCol>
      </Row>
    </div>
  );
};
export default ProfessorPage;
const columns = [
  {
    title: "STT",
    key: "key",
    dataIndex: "key",
    width: "5%",
  },
  {
    title: "Ảnh đại diện",
    width: "15%",
    render: record => <ImageComponent url={record.image} type="professor" />,
  },
  {
    title: "Tên Giảng viên",
    key: "name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.name.length - b.name.length,
    },
    width: "15%",
  },
  {
    title: "Tuổi",
    key: "age",
    dataIndex: "age",
    sorter: {
      compare: (a, b) => a.age - b.age,
    },
    width: "10%",
  },
  {
    title: "Môn học",
    key: "operation",
    dataIndex: "subject",
    render: record => <AcitonDetailSubject record={record} />,
    width: "10%",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
    width: "15%",
  },

  {
    title: "Tác động",
    key: "operation",
    width: "15%",
    render: record => <ActionFrofessor record={record} />,
  },
];
