import { message } from 'antd';
import ServiceConvertor from './converter';
export const ValidateFormAddService = (data) => {
    try {
        console.log('inconvert', data);
        const dataHeaders = data.header || [];
        const dataBody = data.body || [];
        const dataParams = data.params || [];
        var dataAuth = data.Authorization || {};
        var typebody = data.typebody || 'json';
        var headers = {};
        if (Array.isArray(dataHeaders)) {
            dataHeaders.forEach((item, index) => {
                headers[`${item.key}`] = item.value;
            })
        }
        var body = {};
        if (Array.isArray(dataBody)) {
            dataBody.forEach((item, index) => {
                body[`${item.key}`] = item.value;
            })
        }else{
            body= JSON.parse(dataBody);
        }
        var params = {};
        if (Array.isArray(dataParams)) {
            dataParams.forEach((item, index) => {
                params[`${item.key}`] = item.value;
            })
        }
      
        if (dataAuth.type === 'none') {
            delete dataAuth.type
        }else{
            dataAuth = ServiceConvertor.EncodeAuthorization(dataAuth);
        }
        const info = {
            method: data.method_direct,
            url: data.url,
            header: headers,
            typebody,
            body: body,
            params: params,
            Authorization: dataAuth,
           
    
        }
        var result = {
            Id: data.id || -1,
            endpoint: data.endpoint,
        }
        result.config = {};
        result.config[`${data.method}`] = info;
        return result;
    } catch (error) {
        message.error(error.message);
    }
  
}

export const ValidateFormLogin = (data) => {
    if (!data.taikhoan) {
        return {
            message: 'Username not invalid'
        }
    }
    if (!data.matkhau) {
        return {
            message: 'Password not invalid'
        }
    }
    return true;
}
export const ValidateFormRegistry = (data) => {
    if (!data.sodienthoai) {
        return 'Số điện thoại không được bỏ trống!'
        
    }
    if (!data.tenNhanVien) {
        return 'Tên nhân viên không được bỏ trống!'

    }
    if (!data.tuoi || +data.tuoi < 16) {
        return  'Tuổi không được nhỏ hơn 16'
    
    }
    if (!['1','2','3',1, 2, 3].includes(data.mavaitro) ) {
        return  'Chọn chức vụ'
        
    }
    return {
        manv:(data.manv?+data.manv:-1),
        sodienthoai:data.sodienthoai,
        tennv: data.tenNhanVien,
        tuoi:+data.tuoi,
        mavaitro:+data.mavaitro
    };
}
export const ValidateFormAddTicket = (data) => {
    console.log(data);
    if(!data.mathe){
        return "Chọn thẻ"
    }
    if(!data.bienso){
        return "Nhập vào biển số!"
    }
    if(!data.dstart || !data.tstart){
        return "Nhập vào ngày bắt đầu!"
    }
    if(!data.magia){
        return "Chọn loại gửi!"
    }
    if(!data.loaixe){
        return "Nhập loại xe!"
    }
    if(!data.mauxe){
        return "Nhập màu xe!"
    }
    if(!data.manv){
        return "Nhân viên lập chưa được lựa chọn!"
    }
    const stringTime = data.tstart.split(":");
    const dateStart = new Date(data.dstart);
    dateStart.setHours(stringTime[0]);
    dateStart.setMinutes(stringTime[1]);
    delete data.thoigianketthuc
    return {
        ...data,
        mathe:+data.mathe,
        manv:+data.manv,
        magia:+data.magia,
        thoigianbatdau:dateStart.toISOString()
    }
}
export const ValidateFormReturnTicket = (data) => {
    if(!data.mathe){
        return "Mã thẻ không chính xác!"
    }
    if(!data.bienso){
        return "Biển số không chính xác!"

    }
    if(!data.loaixe){
        return "Loại xe không chính xác!"
    }
    if(!data.mauxe){
        return "Màu xe không chính xác!"
    }
    return {
        bienso:data.bienso,
        mathe:+data.mathe,
        loaixe:data.loaixe,
        mauxe:data.mauxe,
        thoigianketthuc:new Date(new Date().getTime()+25200000).toISOString()
    }
}