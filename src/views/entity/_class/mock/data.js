export const columns =[
    {
        title: 'STT',
        key: 'key',
        dataIndex:'key',
        width:'5%'
    },
    {
        title: 'Tên Lớp Học',
        key: 'name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length
          },
        width:'15%'
    },
    {
        title: 'Môn Học',
        key: 'subject',
        dataIndex:'subject',
        sorter: {
            compare: (a, b) => a.subject.length - b.subject.length,
            multiple: 3,
          },
        width:'15%'
    },
    {
        title: 'Ngày bắt đầu',
        key: 'startDate',
        dataIndex:'startDate',
        width:'15%'
    },
    {
        title: 'Số Lượng',
        key: 'total',
        dataIndex:'total',
        width:'10%',
        sorter: {
            compare: (a, b) => a.total - b.total,
            multiple: 3,
          },
    },
    {
        title: 'Gảng Viên',
        key: 'professor',
        dataIndex:'professor',
        width:'15%'
    },
    {
        title: 'Tác động',
        key: 'operation',
        width: '20%',
        render:(record)=> <ActionClass record={record}/>
    }
];