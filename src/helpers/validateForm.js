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
export const ValidateFormUpdateConfig = (data, {access_data,option}) => {
    const config = data.origin.config;
    const body = {
        ...data.origin,
    };
    body.config = {};
    const boo = !(option.key === undefined ||  option.key === '' || option.endpoint === undefined || option.method === undefined)
    console.log(boo);
    const newOption = boo?option:{}
    body.config[`${data.Method}`] = {
        ...config[`${data.Method}`],
        access_data: access_data,
        option:newOption
    }
    return body;
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
    console.log(data);
    if (!data.username) {
        return {
            message: 'Username not invalid'
        }
    }
    if (!data.password) {
        return {
            message: 'Password not invalid'
        }
    }
    if (data.password !== data.repeat) {
        return {
            message: 'password is not same'
        }
    }
    if (!['1','2','3'].includes(data.role_id)) {
        return {
            message: 'Role is not defind'
        }
    }
    if (data.ip.split('.').length!=4) {
        return {
            message: 'Ip address is incorect'
        }
    }
    return true;
}
export function validateClass(data){
    var result = {...data}
    if(!data.name){
        delete result.name
    }
    if(!data._idSubject){
        delete result._idSubject
    }
    if(!data._idProfessor){
        delete result._idProfessor
    }
    if(!data.schedule1){
        delete result.schedule1
    }
    if(!data.schedule2){
        delete result.schedule2
    }
    return result;

}