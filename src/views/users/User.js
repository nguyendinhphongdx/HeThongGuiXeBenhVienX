import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Popconfirm } from "antd";
import UserServices from "../../redux/services/UserServices";
import HelperClass from "../../helpers/helpers";
import { useHistory } from "react-router-dom";

const User = ({ match }) => {
  const userRedux = useSelector(state => state.Users.users);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = userRedux.find(user => user.Id.toString() === match.params.id);
  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  const handleDelete = () => {
    const nameCurrent = JSON.parse(
      localStorage.getItem("currentUser") || "{}"
    ).username;
    if(user.username === nameCurrent){
        message.info('Can not delete');
    }else{
      HelperClass.SetLoading(true, dispatch);
      setTimeout(()=>{
        UserServices.DeleteUser(match.params.id, dispatch)
        .then()
        .finally(data => {
          HelperClass.SetLoading(false, dispatch);
          history.push(`/users`)
        });
      },1000)
    }
    
  };
  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="">User id: {match.params.id}</div>
              <div className="">
                <Popconfirm
                  title={"Are you sure delete account?"}
                  onConfirm={() => handleDelete()}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="ghost">Delete Account</Button>
                </Popconfirm>
                ,
              </div>
            </div>
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {userDetails.map(([key, value], index) => {
                  if (key != "hidePass") {
                    return (
                      <tr key={index.toString()}>
                        <td>{`${key}:`}</td>
                        <td>
                          <strong>{value}</strong>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;
