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
    CSelect
} from "@coreui/react";
import { Button, Card, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ActionClass from "./components/ActionClass";
import "./style.scss";
const LocationPage = () => {
  let locations = [];
  let cards = [];
  const dispatch = useDispatch();
  const [locationSelected, setLocationSelected] = useState(null);
  const [cardSelected, setCardSelected] = useState(null);
  const handleOnChangeInputLocation = (name, type) => {
    if ((type = "name")) {
      setLocationSelected({
        ...locationSelected,
        tenKhuVuc: name.target.value,
      });
      if ((type = "max")) {
        setLocationSelected({
          ...locationSelected,
          soLuongToiDa: name.target.value,
        });
      }
    }
  };
  const handleOnChangeInputCard = (name, type) => {
    if (type = "name") {
        setCardSelected({
          ...cardSelected,
          tenKhuVuc: name.target.value,
        });
        };
    }
  const selectLocation = location => {
    setLocationSelected(location);
  };
  const selectCard = card => {
    setCardSelected(card);
  };
  useEffect(() => {}, []);
  Array.apply(null, { length: 10 }).map((item, index) => {
    locations.push({
      index: index,
      maKhuVuc: index,
      tenKhuVuc: `Tên Khu Vực A ${index}`,
      soLuongToiDa: 20,
      soLuongHienTai: 0,
    });
    cards.push({
      index: index,
      maThe: `Mã Thẻ ${index}`,
      tenKhuVuc:`Tên Khu Vực ${index}`
    });
  });
  const nameLocation = locations.map((item, index) => {
    return (
      <option key={index} value={index}>
        {item.tenKhuVuc}
      </option>
    );
  });
  const columnsLocation = [
    {
      title: "STT",
      key: "index",
      dataIndex: "index",
      width: "5%",
    },
    {
      title: "Mã Khu Vực",
      key: "maKhuVuc",
      dataIndex: "maKhuVuc",
      sorter: {
        compare: (a, b) => a.subject.length - b.subject.length,
        multiple: 3,
      },
      width: "15%",
    },
    {
      title: "Tên Khu Vực",
      key: "maKhuVuc",
      dataIndex: "maKhuVuc",
      width: "15%",
    },
    {
      title: "Số Lượng Tối Đa",
      key: "soLuongToiDa",
      dataIndex: "soLuongToiDa",

      width: "15%",
    },
    {
      title: "Số Lượng Hiện Tại",
      key: "soLuongHienTai",
      dataIndex: "soLuongHienTai",

      width: "15%",
    },
    {
      title: "Tác động",
      key: "operation",
      width: "15%",
      render: record => (
        <ActionClass
          onEdit={() => selectLocation(record)}
          onDelete={() => console.log("delete")}
        />
      ),
    },
  ];
  const columnsCard = [
    {
      title: "STT",
      key: "index",
      dataIndex: "index",
      width: "5%",
    },
    {
      title: "Mã Thẻ",
      key: "maThe",
      dataIndex: "maThe",
      sorter: {
        compare: (a, b) => a.subject.length - b.subject.length,
        multiple: 3,
      },
      width: "15%",
    },
    {
        title: "Tên Khu Vực",
        key: "tenKhuVuc",
        dataIndex: "tenKhuVuc",
        width: "15%",
    },
    {
      title: "Tác động",
      key: "operation",
      width: "15%",
      render: record => (
        <ActionClass
          onEdit={() => selectCard(record)}
          onDelete={() => console.log("delete")}
        />
      ),
    },
  ];
  return (
    <div className="">
      <Row className="tabelPanel">
        <Card className="table table-list">
          <Row className="add-class">
            <h4>Danh sách khu vực</h4>
          </Row>
          <Table
            style={{ border: 1 }}
            dataSource={locations}
            columns={columnsLocation}
            bordered
            pagination={{ pageSize: 4 }}
          ></Table>
        </Card>
        <CCard className="table table-info">
          <CCardHeader className="add-class">
            <h4>Thông tin khu vực</h4>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Mã Khu Vực</CLabel>
                  <CInput
                    id="name"
                    placeholder="Code Location"
                    value={locationSelected ? locationSelected.maKhuVuc : null}
                    disabled
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="8">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Tên Khu Vực</CLabel>
                  <CInput
                    id="ccnumber"
                    placeholder="Enter Name Location"
                    value={locationSelected ? locationSelected.tenKhuVuc : null}
                    onChange={e => handleOnChangeInputLocation(e, "name")}
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="max">Số Lượng Tối Đa</CLabel>
                  <CSelect
                    custom
                    name="max"
                    id="max"
                    value={
                      locationSelected ? locationSelected.index : null
                    }
                    onChange={e => handleOnChangeInputLocation(e, "max")}
                  >
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                    <option value="4">40</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="current">Số Lượng Hiện Tại</CLabel>
                  <CInput
                    custom
                    name="current"
                    id="current"
                    disabled
                    value={
                      locationSelected ? locationSelected.soLuongHienTai : null
                    }
                    placeholder="Current Number"
                  />
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
                Thêm Khu Vực
              </Button>
            </div>
          </CCardFooter>
        </CCard>
      </Row>
      <Row className="tabelPanel">
        <Card className="table table-list">
          <Row className="add-class">
            <h4>Danh sách thẻ</h4>
          </Row>
          <Table
            style={{ border: 1 }}
            dataSource={cards}
            columns={columnsCard}
            pagination={{ pageSize: 4 }}
            bordered
          ></Table>
        </Card>
        <CCard className="table table-info">
          <CCardHeader className="add-class">
            <h4>Thông tin thẻ</h4>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="namecard">Tên Khu Vực</CLabel>
                  <CSelect custom name="namecard" id="namecard"
                  value={cardSelected?cardSelected.index:null}  
                  onChange={(e)=> handleOnChangeInputCard(e,'name')}
                  >
                    {nameLocation}
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Mã Thẻ</CLabel>
                  <CInput id="name" placeholder="Code Location" disabled />
                </CFormGroup>
              </CCol>
              <CCol xs="8">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Tình Trạng</CLabel>
                  <CInput id="ccnumber" placeholder="Status" disabled />
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
                Thêm Thẻ
              </Button>
            </div>
          </CCardFooter>
        </CCard>
      </Row>
    </div>
  );
};

export default LocationPage;
