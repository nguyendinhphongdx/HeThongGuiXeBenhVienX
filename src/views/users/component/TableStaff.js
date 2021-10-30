import { Card, Row, Table } from "antd";
import { memo } from "react";

const RenderTable = ({userConverted,columnsUser}) => {
    return (
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
    )
  }
export default memo(RenderTable); 