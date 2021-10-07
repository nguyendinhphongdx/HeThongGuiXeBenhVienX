import { useDispatch, useSelector } from 'react-redux';
import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import socketIo from '../../socket.io';
const TableCalendar = ()=>{
    const data = useSelector(state=>state.Calendar.schedule);
    console.log(useSelector(state=>state));
    const handleONclick = (arg)=>{
        if(arg.requestType.includes("eventChanged")){
            const data = arg.data[0]
            socketIo.sendNotification({_class:data.Subject,des:data.Description,start:data.StartTime,end:data.EndTime})
        }
    }
    return(
        <div className="tabelPanel">
            <ScheduleComponent actionComplete={handleONclick} isAllDay={true} height='80%' selectedDate={new Date()} eventSettings={{dataSource:data}}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    );
}
export default TableCalendar;