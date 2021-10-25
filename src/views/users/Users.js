import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardBody, CCardFooter, CCardHeader,
  CCol, CFormGroup, CInput, CLabel, CRow
} from "@coreui/react";
import { Button, Card, message, Row, Table } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ValidateFormRegistry } from "../../helpers/validateForm";
import RoleServices from "../../redux/services/RoleServices";
import StaffServices from "../../redux/services/StaffServices";
import ActionClass from "../entity/_class/components/ActionClass";
import StoreNotif from "../notifications/notif/notifStore";


const Users = () => {
  const history = useHistory();
  const [form] = useForm();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([1-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [userSelected,setUserSelected] = useState(null);
  let userRedux =  useSelector(state => state.Staff.staffs);
  let rolesRedux =  useSelector(state => state.Role.roles);
  const userConverted = userRedux.map(item =>{
    const findRole = rolesRedux.find(role => role.mavaitro === item.mavaitro)
    return {
      ...item,
      tenvaitro:findRole?findRole.tenvaitro:'unknow'
    }
  })
  const selectUser = (user) =>{
    setUserSelected(user);
  }
  const handleOnChangeInputUser = (e,type)=>{

  }

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
    StaffServices.GetDataStaff(dispatch);
    RoleServices.GetAllRoles(dispatch);
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
    key: "sodienthoai",
    dataIndex: "sodienthoai",
    width: "15%",
},
{
  title: "Vai Trò",
  key: "tenvaitro",
  dataIndex: "tenvaitro",
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
            dataSource={userConverted}
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
                    value={userSelected ? userSelected.sodienthoai : null}
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
