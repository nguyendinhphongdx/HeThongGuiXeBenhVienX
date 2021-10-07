import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Button, Popconfirm } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import settingsServices from "../../redux/services/settingsServices";
import TabNotify from "./components/TabNotify";
import HelperClass from '../../helpers/helpers';
import { openSuccessNotif } from "../notifications/notif/notifStore";
const Settings = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const fileConfig = useSelector(state => state.Settings).fileConfig || {
    notify: {},
    firebase: {},
    bmail: {},
    firebase: {},
    logs:{}
  };
  const handleSubmit = () => {
    form.submit();
  };
  const handleResetDefault = () =>{
    HelperClass.SetLoading(true,dispatch);
    setTimeout(()=>{
      settingsServices.UpdateConfig({reset:true},dispatch).then(data => {
        // openSuccessNotif('Thông báo', 'Reset Default Success!', 2000, 'success');
      })
      .finally(()=> HelperClass.SetLoading(false,dispatch))
    },1000)
  }
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam qui similique vel, cumque voluptas iure dicta magni deserunt eum nihil laudantium assumenda eius modi amet pariatur temporibus quisquam quos eaque iste, quae non. Sunt magnam consectetur cupiditate officiis sequi aliquam amet excepturi quibusdam vero eius, nulla minus, facilis quaerat. Sit neque eos iusto quidem iste molestias, accusamus non quisquam tenetur ipsum recusandae fugit at modi alias quaerat similique minus exercitationem eaque odit nesciunt inventore, error dicta officia. Repellat ipsum sunt fuga hic corrupti. Eos illum iure sint optio, vitae, libero fugiat numquam voluptatibus unde omnis in perferendis dolor animi!";
  useEffect(() => {
    settingsServices.QueryConfig(dispatch).then(data => {
      console.log("fileConfig", fileConfig);
    });
  }, []);
  return (
    <CCard>
      <CCardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 16, color: "black", fontWeight: 600 }}>
          Settings System
        </span>
        <div className="">
          <Popconfirm
            placement="bottomRight"
            title={"Are you really change config !"}
            onConfirm={handleResetDefault}
            okText="Yes"
            cancelText="No"
            style={{marginRight:20}}
          >
            <Button type="dashed" htmlType="submit">
              Back to Default
            </Button>
          </Popconfirm>
          <Popconfirm
            placement="bottomLeft"
            title={"Are you really change config !"}
            onConfirm={handleSubmit}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Popconfirm>
        </div>
      </CCardHeader>
      <CCardBody>
        <TabNotify
          form={form}
          // notify={fileConfig ? fileConfig.notify : {}}
          // mail={fileConfig ? fileConfig.bmail : {}}
          // firebase={fileConfig ? fileConfig.firebase : {}}
          {...fileConfig}
        />
      </CCardBody>
    </CCard>
  );
};
export default Settings;
