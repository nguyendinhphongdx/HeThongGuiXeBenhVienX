import { Card } from "antd";
import pdf from '../../../../assets/images/pdf.png';
import doc from '../../../../assets/images/doc.png';
import zip from '../../../../assets/images/zip.png';
import image from '../../../../assets/images/default.png';
import jpg from '../../../../assets/images/jpg.png';
import js from '../../../../assets/images/js.png';
import xlsx from '../../../../assets/images/xlsx.png';
import { SERVER_NODE } from "../../../../axios/configAPI";
export default function CardDocument(props){
    const {record} = props;
    const onError = (err) => {
        console.log(err);
    }
    let type = image;
    switch(record.type){
        case 'doc': type=doc;break;
        case 'pdf': type=pdf;break;
        case 'zip': type=zip;break;
        case 'jpg': type=jpg;break;
        case 'js': type=js;break;
        case 'xlsx': type=xlsx;break;
        default: type=image;
    }   
    const path = `${SERVER_NODE}/${record.path}`;
    console.log(path);
    return(
        <Card title={record.title}>
                <a href={path} target="_blank" rel="noreferrer">
                <img width="100%" src={type} alt={record.title}/>
                </a>
                 <h4 style={{textAlign:'center',marginTop:20}}>{record.subject?record.subject[0].name:'nameUndefind'}</h4>
        </Card>
    );
}