import { Form, Input, Button, Row, Col, Image, Switch } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./styles.scss";
import settingsServices from "../../../../redux/services/settingsServices";
import { useDispatch } from "react-redux";
import HelperClass from "../../../../helpers/helpers";
import StoreNotif from "../../../notifications/notif/notifStore";
const TabNotify = ({ notify, bmail, firebase, news, els, logs, form }) => {
  const dispatch = useDispatch();
  const [checkUser, setCheckUser] = useState(() => notify.activeUser);
  const [checkSPUser, setCheckSPUser] = useState(() => notify.activeSPUser);
  const [checkSendMail, setSendMail] = useState(() => bmail.active);
  const [image, setImage] = useState(() => bmail.image);
  const [checkLogs, setCheckLogs] = useState(() => logs.active);
  const toogleCheck = (preState, setSate) => {
    setSate(!preState);
  };
  const handleFinish = values => {
    const body = {
      ...values,
      news: {
        ...values.news,
        timeSync: parseInt(values.notify.timeSync),
      },
      bmail: {
        ...values.bmail,
        image: image,
        active: checkSendMail,
        mailPort: parseInt(values.bmail.mailPort),
        // hash 
        subIndex:"datamail-",
        deleteAffterDay:1,
         // end hash 
      },
      notify: {
        ...values.notify,
        activeUser: checkUser,
        activeSPUser: checkSPUser,
        dayAgoDeleteNotify: parseInt(values.notify.dayAgoDeleteNotify),
        limitRecord: parseInt(values.notify.limitRecord),
        offset: parseInt(values.notify.offset),
        timeSync: parseInt(values.notify.timeSync),
      },
      logs: {
        ...values.logs,
        active: checkLogs,
      },
    };
    HelperClass.SetLoading(true, dispatch);
    setTimeout(() => {
      settingsServices
        .UpdateConfig(body, dispatch)
        .then(data => {
          // openSuccessNotif(
          //   "Thông báo",
          //   "Cập nhật thành công!",
          //   2000,
          //   "success"
          // );
        })
        .finally(() => HelperClass.SetLoading(false, dispatch));
    }, 1000);
  };
  const handleOnChangeImage = e => {
    setImage(e.target.value);
  };
  useEffect(() => {
    form.setFieldsValue({ notify, bmail, firebase, news, els, logs });
    setSendMail(bmail.active);
    setImage(bmail.image);
    setCheckUser(notify.activeUser);
    setCheckSPUser(notify.activeSPUser);
    setCheckLogs(logs.active);
  }, [notify, form, bmail, logs]);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
    },
  };

  const SettingsMail = () => {
    return (
      <>
        <h5>Mail</h5>
        <Form.Item label="Active Send Mail">
          <Switch
            defaultChecked={checkSendMail}
            onChange={() => toogleCheck(checkSendMail, setSendMail)}
          />
        </Form.Item>
        <Form.Item
          label="Image"
          name={["bmail", "image"]}
        >
          <Input value={image} onChange={e => handleOnChangeImage(e)} />
          <div
            style={{
              paddingTop: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={image} style={{ width: "250px", height: 140 }} />
          </div>
        </Form.Item>
        <Form.Item
          label="Address"
          name={["bmail", "address"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telephone"
          name={["bmail", "telephone"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Title"
          name={["bmail", "title"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mail Server"
          name={["bmail", "adminEmail"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input placeholder={"adminEmail"} />
        </Form.Item>
        <Form.Item
          label="Mail Password "
          name={["bmail", "adminPassword"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Mail Host "
          name={["bmail", "mailHost"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input placeholder={"mail.yenbai.gov.vn"} />
        </Form.Item>
        <Form.Item
          label="Mail Port "
          name={["bmail", "mailPort"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item label="Receiver">
          <Form.List
            name={["bmail", "to"]}
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(new Error("At least 1 email"));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...formItemLayout}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input email or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="email" style={{ width: "95%" }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "95%" }}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
      </>
    );
  };
  const SettingsNotify = () => {
    return (
      <>
        <h5>Notify</h5>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item label="Active User">
            {/* <label class="switch"> */}
            <Switch
              defaultChecked={checkUser}
              onChange={() => toogleCheck(checkUser, setCheckUser)}
            />
            {/* <span class="slider round"></span> */}
            {/* </label> */}
          </Form.Item>
          <Form.Item label="Active Supper User">
            <Switch
              defaultChecked={checkSPUser}
              onChange={() => toogleCheck(checkSPUser, setCheckSPUser)}
            />
          </Form.Item>
        </Row>
        <Form.Item
          label="Days delete Notify"
          name={["notify", "dayAgoDeleteNotify"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          label="Limited Record Send"
          name={["notify", "limitRecord"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          label="Offset"
          name={["notify", "offset"]}
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          label="Time Sync"
          name={["notify", "timeSync"]}
          rules={[{ required: true, message: "Default 60000" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Row>Template</Row>
        <Row>
          <Form.Item
            style={{ width: "100%" }}
            label="Title"
            name={["notify", "template", "title"]}
            rules={[{ required: true, message: "please enter message" }]}
          >
            <Input type={"text"} />
          </Form.Item>
        </Row>
      </>
    );
  };
  const SettingsFireBase = () => {
    return (
      <>
        <h5>FireBase</h5>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            label="Database_URL"
            name={["firebase", "database_url"]}
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Database URL" }]}
          >
            <Input />
          </Form.Item>
        </Row>
      </>
    );
  };
  const SettingsNews = () => {
    return (
      <>
        <h5>News</h5>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            label="WhiteHat News"
            name={["news", "white_hat_rss"]}
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Enter whitehat news" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Time Sync"
            name={["news", "timeSync"]}
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Enter whitehat news" }]}
          >
            <Input type={"number"} />
          </Form.Item>
        </Row>
      </>
    );
  };
  const SettingsELS = () => {
    return (
      <>
        <h5>ElastichSearch</h5>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            label="host"
            name={["els", "host"]}
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Host" }]}
          >
            <Input />
          </Form.Item>
        </Row>
      </>
    );
  };

  const SettingsLogs = () => {
    return (
      <>
        <h5>Logs</h5>
        <Form.Item label="Active Collect Logs">
          <Switch
            defaultChecked={checkLogs}
            onChange={() => toogleCheck(checkLogs, setCheckLogs)}
          />
        </Form.Item>
        <Form.Item name={["logs", "subIndex"]}>
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          label="TimeSync"
          name={["logs", "timeSync"]}
          rules={[{ message: "please fill this field", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Limit Record every Sync" name={["logs", "limit"]}
        rules={[{ message: "please fill this field", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Day Number Delete Logs"
          name={["logs", "deleteAffterDay"]}
        >
          <Input />
        </Form.Item>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "33%", minWidth: 300 }}>
            <h5>Table Logs Delete</h5>
            <Form.Item>
              <Form.List
                name={["logs", "tableDeleteAffterDay"]}
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 1) {
                        return Promise.reject(new Error("At least 1 email"));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...formItemLayout}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please input email or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Name Table"
                            style={{ width: "90%" }}
                            disabled={true}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            // onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "90%" }}
                        icon={<PlusOutlined />}
                        disabled={true}
                      >
                        Add field
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </div>
          <div style={{ width: "33%", minWidth: 300 }}>
            <h5>Logs for Notify</h5>
            <Form.Item>
              <Form.List
                name={["logs", "toNotify"]}
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 1) {
                        return Promise.reject(new Error("At least 1 email"));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...formItemLayout}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please input email or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Name Table"
                            style={{ width: "90%" }}
                            disabled={true}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            // onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "90%" }}
                        icon={<PlusOutlined />}
                        disabled={true}
                      >
                        Add field
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </div>
          <div style={{ width: "33%", minWidth: 300 }}>
            <h5>Logs for Mail</h5>
            <Form.Item>
              <Form.List
                name={["logs", "toEmail"]}
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 1) {
                        return Promise.reject(new Error("At least 1 email"));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...formItemLayout}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please input email or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Name Table"
                            style={{ width: "90%" }}
                            disabled={true}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            // onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "90%" }}
                        icon={<PlusOutlined />}
                        disabled={true}
                      >
                        Add field
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="settings-notify">
      <Row>
        <Form
          form={form}
          onFinish={value => handleFinish(value, "notify")}
          style={{ width: "100%" }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <Col span={11}>
              <Row style={{ display: "contents" }}>
                <SettingsNotify />
              </Row>
              <Row style={{ display: "contents" }}>
                <SettingsFireBase />
              </Row>
              <Row style={{ display: "contents" }}>
                <SettingsNews />
              </Row>
              <Row style={{ display: "contents" }}>
                <SettingsELS />
              </Row>
              <Row style={{ display: "contents" }}>
                <SettingsLogs />
              </Row>
            </Col>
            <Col span={11}>
              <Row style={{ display: "contents" }}>
                <SettingsMail />
              </Row>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};
export default TabNotify;
