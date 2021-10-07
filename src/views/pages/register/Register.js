import { LeftOutlined } from "@ant-design/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSelect
} from "@coreui/react";
import { message } from "antd";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth";
import { ValidateFormRegistry } from "../../../helpers/validateForm";
import UserService from "../../../redux/services/UserServices";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, token } = useContext(AuthContext);
  let history = useHistory();
  const onSubmit = value => {
    setLoading(!loading);
    const valid = ValidateFormRegistry(value);
    if (valid !== true) {
      alert(valid.message);
      setLoading(false);
    } else {
      console.log(value);
      UserService.SignUpService(value)
        .then((result) => {
          if (result) {
            const token = result.token;
            history.replace('/login');
            message.success('Registry successfully');
          }
        })
        .finally(() => {
          setLoading(false);
        })
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <Link to="/login">
                <LeftOutlined
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                />
              </Link>
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      {...register("username", { required: true })}
                    />
                  </CInputGroup>
                  {errors.username && (
                    <span className="error">This field is required</span>
                  )}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      {...register("mail", { required: true })}
                    />
                  </CInputGroup>
                  {errors.mail && (
                    <span className="error">This field is required</span>
                  )}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      {...register("password", { required: true })}
                    />
                  </CInputGroup>
                  {errors.password && (
                    <span className="error">This field is required</span>
                  )}
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      {...register("repeat", { required: true })}
                    />
                  </CInputGroup>
                  {errors.repeat && (
                    <span className="error">This field is required</span>
                  )}
                  <CRow>
                    <CCol md="9" lg="7" xl="6">
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-settings" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect selected={3} defaultValue={'3'} {...register("role_id", { required: true })}>
                        <option>Role</option>
                         <option value={3}>Super User</option>
                          <option value={1}>Admin</option>
                          <option value={2}>User</option>
                        </CSelect>
                      </CInputGroup>
                      {errors.role_id && (
                        <span className="error">This field is required</span>
                      )}
                    </CCol>
                    <CCol md="9" lg="7" xl="6">
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput   placeholder="Ip Address" {...register("ip", { required: true})}
                    />
                      </CInputGroup>
                      {errors.ip && (
                        <span className="error">This field is required</span>
                      )}
                    </CCol>
                  </CRow>

                  <CButton
                    color="primary"
                    type="submit"
                    disabled={loading}
                    className="px-12"
                    block
                  >
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                {/* <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow> */}
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
