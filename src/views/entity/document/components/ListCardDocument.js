import { List } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentServices from '../../../../redux/services/DocumentServices';
import CardUpload from './CardUpDocument';
export default function ListCardDocument(){
    const documentRedux = useSelector(state=>state.Document.documents)
    const [data,setData] = useState(documentRedux);
    const dispatch = useDispatch()
    useEffect(()=>{
      DocumentServices.GetDataDocument(dispatch)
      .then(documents =>{
        console.log(documents);
      })
      console.log('render');
    },[data])
    return(
        <div className="ListCardUpload">
        <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 4,
        }}
        dataSource={documentRedux}
        renderItem={item => (
          <List.Item >
            <CardUpload record={item}/>
          </List.Item>
        )}
      />
        </div>
    );
}