import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartBar } from "@coreui/react-chartjs";
import { Button } from "antd";
import { useEffect, useRef } from "react";
import { Column } from "@ant-design/charts";
import { useDispatch, useSelector } from "react-redux";
import ClassServices from "../../../redux/services/ClassServices";

const ChartDataAttack = ({ data }) => {
  const barChart = useSelector(state => state.Class.chart);
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
        { type: "adjust-color"},
      ],
    },
  };
  let chart;
  const ref = useRef();
  const downloadImage = () => {
    chart?.downloadImage();
    ref.current?.downloadImage();
  };
  useEffect(()=>{
    ClassServices.GetDataChartClass(dispatch)
   },[])
  return (
   
    <CCard>
      <CCardHeader>
        <CCardHeader style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}> <p>Radar Chart</p>  
        <Button
          type="primary"
          style={{ margin: "10px 0" }}
          onClick={downloadImage}
        >
          {" "}
          Download{" "}
        </Button></CCardHeader>
       
      </CCardHeader>
      <CCardBody className="card-body-barchart">
        <Column
          {...config}
        />
      </CCardBody>
    </CCard>
  );
};
export default ChartDataAttack;
