import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
} from "@coreui/react";
import { CChartRadar } from "@coreui/react-chartjs";
import { SERVER_NODE } from "../../../axios/configAPI";

const SlideCarosel = ({ data }) => {
  return (
    //   <CCard>
    //   <CCardHeader>
    //   <h4 className="card-title mb-0">
    //           Fetured News
    //       </h4>
    //   </CCardHeader>
    //   <CCardBody>
    //     <CCarousel animate autoSlide={3000}>
    //       <CCarouselIndicators/>
    //       <CCarouselInner>
    //         {element}
    //       </CCarouselInner>
    //       <CCarouselControl direction="prev"/>
    //       <CCarouselControl direction="next"/>
    //     </CCarousel>
    //   </CCardBody>
    // </CCard>
    <CCard>
      <CCardHeader>Radar Chart</CCardHeader>
      <CCardBody>
        <CChartRadar
          datasets={[
            {
              label: "2019",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              tooltipLabelColor: "rgba(179,181,198,1)",
              data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
              label: "2020",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              tooltipLabelColor: "rgba(255,99,132,1)",
              data: [28, 48, 40, 19, 96, 27, 100],
            },
          ]}
          options={{
            aspectRatio: 1.5,
            tooltips: {
              enabled: true,
            },
          }}
          labels={[
            "Eating",
            "Drinking",
            "Sleeping",
            "Designing",
            "Coding",
            "Cycling",
            "Running",
          ]}
        />
      </CCardBody>
    </CCard>
  );
};
export default SlideCarosel;
