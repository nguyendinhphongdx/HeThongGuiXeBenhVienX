import React, { useState, useEffect } from "react";
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
} from "@coreui/react";

import usersData from "./UsersData";
import UserServices from "../../redux/services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Popconfirm } from "antd";
import Modal from "antd/lib/modal/Modal";
import FormAddAccount from "./component/formAddAccount";
import { useForm } from "antd/lib/form/Form";
import { ValidateFormRegistry } from "../../helpers/validateForm";
import HelperClass from "../../helpers/helpers";
import { openSuccessNotif } from "../notifications/notif/notifStore";
// const getBadge = status => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };

const Users = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryPage = useLocation().search.match(/page=([1-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const userRedux = useSelector(state => state.Users.users);
  const [form] = useForm();
  const [page, setPage] = useState(currentPage);
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const nameCurrent = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  ).username;

  const handleSubmit = values => {
    if (values.password != values.repeat) {
      message.info("password is not match");
    } else {
      const valid = ValidateFormRegistry(values);
      if (valid == true) {
        HelperClass.SetLoading(true, dispatch);
        const body = { ...values, role_id: parseInt(values.role_id) };
        UserServices.SignUpService(body).then(data => {
          if (data) {
            UserServices.QueryAll(dispatch).then(data => {
              // openSuccessNotif("Create User", "Create Success", 2000);
              HelperClass.SetLoading(false, dispatch);
              handleCancel();
            });
          } else {
            HelperClass.SetLoading(false, dispatch);
            handleCancel();
          }
        });
      } else {
        message.info(valid.message);
      }
      setDisable(false);
    }
  };
  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };
  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
    UserServices.QueryAll(dispatch).then(data => {});
  }, [currentPage, page]);

  return (
    <div className="">
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              <div
                className=""
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="font-weight-bold">Users</div>
                <Button type="primary" onClick={() => setVisible(!visible)}>
                  Add User
                </Button>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={userRedux}
                // fields={[
                //   { key: 'name', _classes: 'font-weight-bold' },
                //   'registered', 'role', 'status'
                // ]}
                fields={[
                  { key: "username", _classes: "font-weight-bold" },
                  "ipAddress",
                  "hidePass",
                  "mail",
                  "nameRole",
                ]}
                hover
                striped
                itemsPerPage={5}
                activePage={page}
                clickableRows
                onRowClick={item => {
                  history.push(`/users/${item.Id}`);
                }}
                scopedSlots={{
                  username: item => {
                    
                    return (
                      <td>
                        <div className="font-weight-bold" style={{color:nameCurrent==item.username?'red':'black'}}>{item.username}</div>
                      </td>
                    );
                  },
                }}
              />
              <CPagination
                activePage={page}
                onActivePageChange={pageChange}
                pages={Math.ceil(userRedux.length / 5)}
                doubleArrows={false}
                align="end"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <Modal
        visible={visible}
        title="Create an User account"
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={() => handleCancel()}>
            Cancel
          </Button>,
          <Popconfirm
            title={"Are you sure create account?"}
            onConfirm={() => form.submit()}
            okText="Yes"
            cancelText="No"
          >
            <Button key="submit" type="primary">
              Ok
            </Button>
            ,
          </Popconfirm>,
        ]}
      >
        <FormAddAccount form={form} handleSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default Users;
