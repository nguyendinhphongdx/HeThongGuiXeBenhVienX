import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CalendarServices from '../../redux/services/CalendarServices';
import './style.scss';
import TableCalendar from './TableCalendar';
const CalendarPage = () =>{
    const  dispatch = useDispatch();
    useEffect(()=>{
        CalendarServices.GetDataSchedule(dispatch).then(data => console.log(data))

    },[])
    return(
        <TableCalendar/>
    )
}
export default CalendarPage;