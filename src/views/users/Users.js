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
import { Button, Card, message, Popconfirm, Popover, Row, Table } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import helpers from "../../helpers/helpers";
import { ValidateFormRegistry } from "../../helpers/validateForm";
import RoleServices from "../../redux/services/RoleServices";
import StaffServices from "../../redux/services/StaffServices";
import ActionClass from "../entity/_class/components/ActionClass";
import StoreNotif from "../notifications/notif/notifStore";
import TableStaff from "./component/TableStaff";

const Users = () => {
  const dispatch = useDispatch();
  const [userSelected, setUserSelected] = useState(null);
  const [accountSelected, setAccountSelected] = useState(null);
  const [isUpdate,setIsUpdate] = useState(false);
  let userRedux = useSelector(state => state.Staff.staffs);
  let rolesRedux = useSelector(state => state.Role.roles);
  let accountRedux = useSelector(state => state.Staff.accounts);
  const [alreadyAccount, setAlreadyAccount] = useState(false);
  const userConverted = useCallback(
    userRedux.map(item => {
      const findRole = rolesRedux.find(role => role.mavaitro === item.mavaitro);
      return {
        ...item,
        tenvaitro: findRole ? findRole.tenvaitro : "unknow",
      };
    }),
    [userRedux, rolesRedux]
  );
  const roleOptions = useMemo(() => {
    return rolesRedux.map((item, index) => {
      return (
        <option key={index} value={item.mavaitro}>
          {" "}
          {item.tenvaitro}{" "}
        </option>
      );
    });
  }, [rolesRedux]);
  const selectUser = user => {
    const findAccount = accountRedux.find(item => item.manv == user.manv);
    if (findAccount) {
      setAccountSelected(findAccount);
      setAlreadyAccount(true);
    } else {
      setAccountSelected(null);
      setAlreadyAccount(false);
    }
    setUserSelected(user);
    setIsUpdate(true);
  };
  const handleOnChangeInputUser = (e, type) => {
    const element = {};
    const account = {};
    switch (type) {
      case "name":
        element.tenNhanVien = e.target.value;
        break;
      case "age":
        element.tuoi = e.target.value;
        break;
      case "phone":
        element.sodienthoai = e.target.value;
        break;
      case "role":
        element.mavaitro = e.target.value;
        break;
      case "account":
        account.tendangnhap = e.target.value;
        break;
      case "password":
        account.matkhau = e.target.value;
        break;
    }
    setUserSelected({
      ...userSelected,
      ...element,
    });
    setAccountSelected({ ...accountSelected, ...account });
  };

  const handleSubmit = () => {
    const loadingFalse = () => {
      setTimeout(()=>{
        helpers.SetLoading(false,dispatch);
        handleCancel();
        StoreNotif.openSuccessNotif("Thông báo","Thực hiện thành công!", 2000);
      },2000)
    }
    if(!userSelected) return message.info('Điền thông tin!');
    const valid = ValidateFormRegistry(userSelected);
    if (typeof valid == "string") return message.info(valid);
    helpers.SetLoading(true,dispatch);
    if(isUpdate){
      StaffServices.UpdateStaff(dispatch,valid).finally(()=>loadingFalse());
    }else{
      StaffServices.AddStaff(dispatch,valid).finally(()=>loadingFalse());
    }
  };
  const handleCancel = () => {
    setAccountSelected(null);
    setUserSelected(null);
    setAlreadyAccount(false);
    setIsUpdate(false)
  };

  useEffect(() => {
    StaffServices.GetDataStaff(dispatch);
    RoleServices.GetAllRoles(dispatch);
    StaffServices.GetDataAccount(dispatch);
  }, []);

  const columnsUser = useCallback(
    [
      {
        title: "STT",
        key: "index",
        dataIndex: "index",
        sorter: {
          compare: (a, b) => a.index - b.index,
        },
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
    ],
    []
  );

  return (
    <div className="">
      <Row className="tabelPanel">
        <TableStaff columnsUser={columnsUser} userConverted={userConverted} />
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
                    value={userSelected ? userSelected.maNhanVien : ""}
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
                    value={userSelected ? userSelected.tenNhanVien : ""}
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
                    type="number"
                    placeholder="Enter Age"
                    value={userSelected ? userSelected.tuoi : ""}
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
                    value={userSelected ? userSelected.sodienthoai : ""}
                    onChange={e => handleOnChangeInputUser(e, "phone")}
                    placeholder="Phone Number"
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="role">Vai trò</CLabel>
                  <CSelect
                    name="role"
                    id="role"
                    value={userSelected ? userSelected.mavaitro : ""}
                    onChange={e => handleOnChangeInputUser(e, "role")}
                  >
                    {roleOptions}
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
            {alreadyAccount && (
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="account">Tài khoản</CLabel>
                    <CInput
                      id="account"
                      placeholder="Chưa có tài khoản"
                      value={accountSelected ? accountSelected.tendangnhap : ""}
                      onChange={e => handleOnChangeInputUser(e, "account")}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="pass">Mật khẩu</CLabel>
                    <CInput
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Mật khẩu"
                      value={accountSelected ? accountSelected.matkhau : ""}
                      onChange={e => handleOnChangeInputUser(e, "password")}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
            )}
          </CCardBody>
          <CCardFooter>
            <div className="footer-button">
              <Button type="default" onClick={handleCancel}>
                Hủy
              </Button>
              <Popconfirm
                title={isUpdate ? "Xác nhân cập nhật!" : "Xác nhận thên"}
                onConfirm={handleSubmit}
              >
                <Button type="primary">
                  {" "}
                  <CIcon name="cil-cursor" />
                  {isUpdate ? "Cập nhật" : "Thêm nhân viên"}
                </Button>
              </Popconfirm>
            </div>
          </CCardFooter>
        </CCard>
      </Row>
    </div>
  );
};

export default Users;
