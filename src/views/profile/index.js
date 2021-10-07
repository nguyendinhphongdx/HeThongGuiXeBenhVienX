import { Tabs } from "antd";
import BaseSetting from "./components/BaseSetting";
import History from "./components/History";
import './style.scss';
const { TabPane } = Tabs;

 const ProfilePage=()=>{
    return(
        <div className="profilePage">
            <Tabs tabPosition={'left'}>
          <TabPane tab="Basic Setting" key="1">
            <BaseSetting/>
          </TabPane>
          <TabPane tab="History" key="2">
            <History/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
          <History/>
          </TabPane>
        </Tabs>
        </div>
        
    );
}
export default ProfilePage;