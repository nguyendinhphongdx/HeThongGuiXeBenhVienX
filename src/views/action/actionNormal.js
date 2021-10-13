import CIcon from '@coreui/icons-react';
import {CButton} from '@coreui/react'
import { useDispatch } from 'react-redux';
import StoreNotif from '../notifications/notif/notifStore';
export const ActionDeleteResult = () => {
    const dispatch = useDispatch();
    const handleDelete = async()=>{
        Refresh_Resutt(dispatch);
        // StoreNotif.openSuccessNotif('Thông báo!','Xóa kết quả thành công',2000,"success")
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center',cursor:'pointer'}} onClick={() => handleDelete()}>
            <CButton block color="primary" >Delete Result</CButton>
        </div>
    )
}