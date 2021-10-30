import { Drawer, message, Modal, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  WalletOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { rowAction } from "../../../../common/variable";
import { isForOfStatement } from "typescript";

export default function ActionClass(props) {
  const { onEdit, onDelete } = props;
  const handleOnEdit = () => {
    if (onEdit) onEdit();
  };
  const handleOnDelete = () => {
    message.info({ content: "Comming soon ...", key: "updatable" });
    if (onDelete) onDelete();
  };
  return (
    <div style={rowAction}>
      <EditOutlined
        style={{ fontSize: "20px" }}
        onClick={() => handleOnEdit()}
      />
      <Popconfirm title="Sure to delete?" onConfirm={() => handleOnDelete()}>
        <DeleteOutlined style={{ fontSize: "20px" }} />
      </Popconfirm>
    </div>
  );
}
