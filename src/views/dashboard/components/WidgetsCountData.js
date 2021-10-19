import CIcon from "@coreui/icons-react";
import {
  CCol,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CWidgetDropdown
} from "@coreui/react";
import { Carousel, Col, Row } from "antd";
import React from "react";
import helpers from "../../../helpers/helpers";
import ChartBarSimple from "../../charts/ChartBarSimple";
import ChartLineSimple from "../../charts/ChartLineSimple";

const WidgetsCountData = ({ data }) => {
  const listdevided = helpers.devideCard(data);
  const randomType = (data, index) => {
    const professorName =`Số lượng xe - ${data.value}`;
    var type = 0;
    if (index == 0 || (index % 4 == 0 && index > 4)) {
      type = 0;
    }
    if (index == 1 || (index % 4 == 1 && index > 4)) {
      type = 1;
    }
    if (index == 2 || (index % 4 == 2 && index > 4)) {
      type = 2;
    }
    if (index == 3 || (index % 4 == 3 && index > 4)) {
      type = 3;
    }
    switch (type) {
      case 0: {
        return (
          <Col key={index} className={'col-cus'}>
            <CWidgetDropdown
              className="box"
              color="gradient-primary"
              header={data.name}
              text={`${professorName}`}
              children={<h3>abc</h3>}
              footerSlot={
                <ChartLineSimple
                  pointed
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: "70px" }}
                  dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                  pointHoverBackgroundColor="primary"
                  label="Members"
                  labels="months"
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </Col>
        );
      }

      case 1: {
        return (
          <Col key={index} className={'col-cus'}>
            <CWidgetDropdown
              color="gradient-info"
              header={data.name}
              text={professorName}
              footerSlot={
                <ChartLineSimple
                  pointed
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  dataPoints={[1, 18, 9, 17, 34, 22, 11]}
                  pointHoverBackgroundColor="info"
                  options={{ elements: { line: { tension: 0.00001 } } }}
                  label="Members"
                  labels="months"
                />
              }
            >
              <CDropdown>
                <CDropdownToggle caret={false} color="transparent">
                  <CIcon name="cil-location-pin" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </Col>
        );
      }

      case 2: {
        return (
          <CCol key={index} className={'col-cus'}>
            <CWidgetDropdown
              color="gradient-warning"
              header={data.name}
              text={professorName}
              footerSlot={
                <ChartLineSimple
                  className="mt-3"
                  style={{ height: "70px" }}
                  backgroundColor="rgba(255,255,255,.2)"
                  dataPoints={[78, 81, 80, 45, 34, 12, 40]}
                  options={{ elements: { line: { borderWidth: 2.5 } } }}
                  pointHoverBackgroundColor="warning"
                  label="Members"
                  labels="months"
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>
        );
      }

      case 3: {
        return (
          <CCol key={index} className={'col-cus'}>
            <CWidgetDropdown
              color="gradient-danger"
              header={data.name}
              text={professorName}
            
              footerSlot={
                <ChartBarSimple
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  backgroundColor="rgb(250, 152, 152)"
                  label="Members"
                  labels="months"
                />
              }
            >
              <CDropdown>
                <CDropdownToggle
                  caret
                  className="text-white"
                  color="transparent"
                >
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>
        );
      }

      default:
        return (
          <CCol sm="6" lg="3" key={index} className={'col-cus'}>
            <CWidgetDropdown
              color="gradient-warning"
              header="9.823"
              text="Members online"
              footerSlot={
                <ChartLineSimple
                  className="mt-3"
                  style={{ height: "70px" }}
                  backgroundColor="rgba(255,255,255,.2)"
                  dataPoints={[78, 81, 80, 45, 34, 12, 40]}
                  options={{ elements: { line: { borderWidth: 2.5 } } }}
                  pointHoverBackgroundColor="warning"
                  label="Members"
                  labels="months"
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>
        );
        break;
    }
  };
  const elementCarousel = listdevided.map((group, index) => {
    const elementItem = group.map((item, index) => {
      return (
        <Col span={6} key={index}>
            {randomType(item, index)}
        </Col>
      );
    });
    return (
      <div key={index}>
        <div
          style={{
            color: "#fff",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          <Row gutter={16} className="row-carousel">
            {elementItem}
          </Row>
        </div>
      </div>
    );
  });

  return (
    // <CCard className="scroll-horiziontal">
    //   <CCardHeader>
    //     <h4 className="card-title mb-0">Analysis Data From Logs SOC</h4>
    //   </CCardHeader>
    //   <CCardBody>
    //     <CRow className="scroll-horiziontal">

    //     </CRow>
    //   </CCardBody>
    // </CCard>
    <Carousel autoplay>{elementCarousel}</Carousel>
    // <CCard style={{backgroundColor:'transparent'}}>

    // </CCard>
  );
};

export default WidgetsCountData;
