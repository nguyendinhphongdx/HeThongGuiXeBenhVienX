import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartBar } from "@coreui/react-chartjs";
import { Button } from "antd";
import { useEffect, useRef } from "react";
import { Column } from "@ant-design/charts";
import { useDispatch, useSelector } from "react-redux";

const ChartDataAttack = ({ data }) => {
  const barChart = [];
  const dispatch = useDispatch();
  const dataConverted = barChart.map(item => {
    return {
      ...item,
      value: Number(item.value),
    };
  });
  var config = {
    data: dataConverted,
    isGroup: true,
    xField: "class",
    yField: "value",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  };
  let chart;
  const ref = useRef();
  const downloadImage = () => {
    chart?.downloadImage();
    ref.current?.downloadImage();
  };
  useEffect(() => {}, []);
  return (
    <CCard>
        <CCardHeader>
          Bar Chart
        </CCardHeader>
        <CCardBody className="full-heigh">
          <CChartBar
            datasets={[
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
  );
};
export default ChartDataAttack;
