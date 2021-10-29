import { SERVER_NODE } from '../axios/configAPI';
import helpers from '../helpers/helpers';
import Helper from '../helpers/helpers';
class ServiceConverter{
    EncodeAuthorization = (object) => {
        if (object.type === 'Bear') {
            return `Bear ${object.token}`
        }
        if (object.type === 'Basic') {
            const stringBtoa = `${object.username || ''}:${object.password || ''}`
            return `Basic ${window.btoa(stringBtoa)}`
        } else {
            return null || {}
        }
    }
    DecodeAuthorization = (string) => {
        if (typeof string === 'string') {
            const auth = string.split(" ");
            console.log('decode', auth);
            if(auth[0] === 'Bear'){
                return {
                    type:auth[0], 
                    token:auth[1]
                };
            }else{
                const atob = window.atob(auth[1]).split(":");
                return {
                    type:auth[0], 
                    username: atob[0],
                    password:  atob[1]
                };
            }
        }else{
            return {}
        }
    }
  
    convertUsers=(users)=>{
        return users.map((item,index)=>{
            return {
                ...item,
                index:index,
                maNhanVien:`Nhân Viên ${item.manv}`,
                tenNhanVien:`${item.tennv}`,
                tuoi:item.tuoi,
                soDienThoai:item.sdt || '0352337342'
            }
        })
    }
    convertLocation = (arr) =>{
        return arr.map((item,index)=>{
            return {
                  index: index,
                  maKhuVuc: item.makhuvuc,
                  tenKhuVuc: `Khu Vực  ${item.tenkhuvuc}`,
                  soLuongToiDa: item.soluongtoida,
                  soLuongHienTai: item.soluonghientai
            }
        })
    }
    convertCard = (arr) =>{
        return arr.map((item,index)=>{
            return {
                index: index,
                ...item,
                trangthai: item.tinhtrang?'đang được sử dụng':'chưa được sử dụng'
            }
        })
    }
    convertTicket = (arr) =>{
        return arr.map((item,index)=>{
            const kt = item.thoigianketthuc === item.thoigianbatdau?'Chưa trả lại':new Date(item.thoigianketthuc).toLocaleDateString() +' - '+new Date(item.thoigianketthuc).toLocaleTimeString()
            return {
                index: index,
                ...item,
                dstart:item.thoigianbatdau,
                tstart:helpers.getTimeInputTime(item.thoigianbatdau),
                dend:item.thoigianketthuc,
                tend:helpers.getTimeInputTime(item.thoigianketthuc),
                thoigianbatdau:new Date(item.thoigianbatdau).toLocaleDateString() +' - '+new Date(item.thoigianbatdau).toLocaleTimeString(),
                thoigianketthuc:kt,
            }
        })
    }
    convertPrice = (arr) =>{
        return arr.map((item,index)=>{
            return {
                index: index,
                ...item,
                maGia:`Mã giá ${item.magia}`,
                loaiGui:`${item.loaiGui} Ngày`
            }
        })
    }
    convertChartAnalysType = (arr) =>{
        const data = arr.map((item,index)=>{
            // loaixe: 'winner', soluong: 17, index: 3
            return {
                ...item,
                key:item.loaixe,
                value:item.soluong
            }
        })
        return helpers.addFieldColorRandom(data)
    }
}
export default new ServiceConverter();
