import { Avatar, List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hacker from "../../../assets/images/hacker.png";
import HistoryServices from "../../../redux/services/HistoryServices";
export default function History() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  const dispatch = useDispatch();
  const historyRedux = useSelector(state => state.History.histories);
  useEffect(() => {
    HistoryServices.GetDataHistory(dispatch).then(data => {});
  }, []);
  return (
    <div className="HistoryPage">
      <List
        itemLayout="horizontal"
        dataSource={historyRedux}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={hacker} />}
              title={`user: ${item.user} - address: ${item.remoteAddress}`}
              description={item.path}
            />
            <div style={{ marginRight: "20px" }}>{item.content}</div>
          </List.Item>
        )}
      />
    </div>
  );
}
