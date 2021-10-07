import {
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle
} from '@coreui/react';
import { Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import helpers from '../../helpers/helpers';
import { ValidateFormAddService } from '../../helpers/validateForm';
export const ActionExec = ({service}) => {
    const dispatch = useDispatch();
    const [disabled,setDisabled]= useState(false);
    const handleExec = () =>{
       
    }
    return (
        <div onClick={() => handleExec() } 
        style={{display: 'flex', justifyContent: 'center',cursor:'pointer',width:'120px'}}>
                <Button block color="primary" disabled={disabled}>Exec</Button>
        </div>

    )
}
export const ActionEdit = ({service}) => {
    const [edit,setEdit] = useState(false);
    const dispatch = useDispatch();
    const handleEditForm = () => {
    }
    const handleSubmitService = (data) => {
        const converted = ValidateFormAddService(data);
        console.log('converted',converted);
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center',cursor:'pointer',width:'120px'}}>
            <Button block  color="secondary" onClick={handleEditForm}>Edit</Button>
            <CModal
            show={edit}
            onClose={() => setEdit(!edit)}
            color="success"
            size="lg"
        >
            <CModalHeader closeButton>
                <CModalTitle>Update Service</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {/* <FormEditService
                    onSubmit={handleSubmitService}
                    title={"Update Service"}
                    form={`formEdit${service.origin.Id}`} /> */}
            </CModalBody>
        </CModal>
        </div>


    )
}