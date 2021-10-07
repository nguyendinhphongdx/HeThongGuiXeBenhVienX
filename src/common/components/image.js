import { Image } from "antd";
import defaultAvatar from '../../assets/images/default.png';
import {SERVER_NODE} from '../../axios/configAPI';
export default function ImageComponent(props) {
    var src='';
    var folder=null;
    switch(props.type){
        case 'professor': folder='frofessor';break;
        case 'student': folder='students';break
        default: return null; 
    }
    if(folder){
        src = props.url!==''?`${SERVER_NODE}/uploads/${folder}/${props.url}`:defaultAvatar;
    }else{
        src = defaultAvatar;
    }
    return(
        <div className="">
            <Image width={props.size || 100} src={src}/>
        </div>
    );
}