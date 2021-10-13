import React, { useState, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CLabel,
  CInput,
  CFormGroup,
  CSelect,
  CCardFooter,
} from "@coreui/react";

import usersData from "./UsersData";
import UserServices from "../../redux/services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, message, Popconfirm, Row,Table } from "antd";
import { useForm } from "antd/lib/form/Form";
import { ValidateFormRegistry } from "../../helpers/validateForm";
import HelperClass from "../../helpers/helpers";
import StoreNotif from "../notifications/notif/notifStore";
import ActionClass from "../entity/_class/components/ActionClass";

const Users = () => {
  const history = useHistory();
  const [form] = useForm();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([1-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [userSelected,setUserSelected] = useState(null);
  let userRedux = [];
  Array.apply(null,{length:10}).map((item,index)=>{
    const role = index%2==0?'soát vé':'kiểm toán';
    userRedux.push({
      index:index,
      maNhanVien:`Mã Nhân Viên ${index}`,
      tenNhanVien:`Tên Nhân Viên ${index}`,
      tuoi:20,
      soDienThoai:'0352337342',
      vaiTro:role
    })
  })
  const selectUser = (user) =>{
    setUserSelected(user)
  }
  const handleOnChangeInputUser = (e,type)=>{

  }
  const nameCurrent = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  ).username;

  const handleSubmit = values => {
    if (values.password != values.repeat) {
      message.info("password is not match");
    } else {
      const valid = ValidateFormRegistry(values);
      if (valid == true) {
       
      } else {
        StoreNotif.openSuccessNotif("Create User", valid.message, 2000);
      }
    }
  };
  const handleCancel = () => {
    form.resetFields();
  };

  useEffect(() => {
   
  }, []);
  
  const columnsUser = [
    {
      title: "STT",
      key: "index",
      dataIndex: "index",
      width: "5%",
    },
    {
      title: "Mã Nhân Viên",
      key: "maNhanVien",
      dataIndex: "maNhanVien",
      width: "15%",
    },
    {
        title: "Tên Nhân Viên",
        key: "tenNhanVien",
        dataIndex: "tenNhanVien",
        width: "15%",
    },
    {
      title: "Độ Tuổi",
      key: "tuoi",
      dataIndex: "tuoi",
      width: "15%",
  },
  {
    title: "Số Điện Thoại",
    key: "soDienThoai",
    dataIndex: "soDienThoai",
    width: "15%",
},
{
  title: "Vai Trò",
  key: "vaiTro",
  dataIndex: "vaiTro",
  width: "15%",
},
    {
      title: "Tác động",
      key: "operation",
      width: "15%",
      render: record => (
        <ActionClass
          onEdit={() => selectUser(record)}
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
            <h4>Danh sách nhân Viên</h4>
          </Row>
          <Table
            style={{ border: 1 }}
            dataSource={userRedux}
            columns={columnsUser}
            bordered
            pagination={{ pageSize: 4 }}
          ></Table>
        </Card>
        <CCard className="table table-info">
          <CCardHeader className="add-class">
            <h4>Thông tin nhân viên</h4>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="name">Mã Nhân Viên</CLabel>
                  <CInput
                    id="name"
                    placeholder="Code Location"
                    value={userSelected ? userSelected.maNhanVien : null}
                    disabled
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="8">
                <CFormGroup>
                  <CLabel htmlFor="ccnumber">Tên Nhân Viên</CLabel>
                  <CInput
                    id="ccnumber"
                    placeholder="Enter Name Location"
                    value={userSelected ? userSelected.tenNhanVien : null}
                    onChange={e => handleOnChangeInputUser(e, "name")}
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="max">Tuổi</CLabel>
                  <CInput
                    id="age"
                    placeholder="Enter Age"
                    value={userSelected ? userSelected.tuoi : null}
                    onChange={e => handleOnChangeInputUser(e, "age")}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="phone">Số Điện Thoại</CLabel>
                  <CInput
                    custom
                    name="phone"
                    id="phone"
                    disabled
                    value={userSelected ? userSelected.tuoi : null}
                    onChange={e => handleOnChangeInputUser(e, "phone")}
                    placeholder="Phone Number"
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
      
      </div>
  );
};

export default Users;
