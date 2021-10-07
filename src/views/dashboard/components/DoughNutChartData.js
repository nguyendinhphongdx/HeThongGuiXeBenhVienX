import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { CChartDoughnut } from "@coreui/react-chartjs";

const DoughNutChartData = ({title,data}) => {
  console.log(data);
  var backgroundColor = [],dataSet =[],labels=[];
  data.forEach(element => {
    backgroundColor.push(element.color)
    dataSet.push(element.value)
    labels.push(element.key)
  });
  return (
    <CCard>
      <CCardHeader>
       <h4 className="card-title mb-0">
          {title}
        </h4>
      </CCardHeader>
      <CCardBody>
        <CChartDoughnut
          datasets={[
            {
              backgroundColor: backgroundColor,
              data: dataSet,
            },
          ]}
          labels={labels}
          options={{
            tooltips: {
              enabled: true,
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};
export default DoughNutChartData;
