import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { Button, Space, Table } from 'antd'
import React from 'react'
import { ActionExec } from '../action/actionExecAPI'

const Mobile = () => {
    const data = [{
        deviceId:'a',
        username:'b',
        ip:'c',
        connect:false
    }]
    const columns = [
        {
            title: 'DeviceId',
            dataIndex: 'deviceId',
            width: '15%',
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            width: '10%'
        },
        {
            title: 'Ip Address',
            dataIndex: 'ip',
            width: '10%'
        },
        {
            title: 'Connect',
            dataIndex: 'connect',
            width: '10%'
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: '25%',
            render: (item:any) => (
                <Space size="middle">
                    <ActionExec service={item} />
                    <Button className="ant-dropdown-link"
                        onClick={() => console.log()}>
                        Update
                    </Button>
                </Space>
            ),
        },
    ]
  return (
    <>
         <CCard>
        <CCardHeader>
          FIREBASE
        </CCardHeader>
        <CCardBody>
          <CRow>
                <CCol>
                    <Table
                        tableLayout={'fixed'}
                        dataSource={data}
                        columns={columns}
                        pagination={{ pageSize: 5 }}
                    />
                </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Mobile
