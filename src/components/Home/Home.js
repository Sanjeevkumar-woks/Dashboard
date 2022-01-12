import './home.css'
import {LineChartGraph} from "./LineChart"
import { userData } from "./dummyData";
import { data } from "./dummyData";
import {BarChartGraph} from "./Barchart"
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ForumIcon from '@mui/icons-material/Forum';

export function Home(){
    return(
        <div className='display'>
            <h1>Dashboard</h1>
            <div className='report'>
                <div className='earning-monthly'>
                    <p>Earning(monthly)</p>
                    <div className='icons'>
                    <h2>$ 40,000</h2>
                        <EventIcon sx={{fontSize:"40px", color:"lightgray"}}/>
                    </div>
                </div>
                <div className='earning-annualy'>
                <p>Earning(Annualy)</p>
                <div className='icons'>
                         <h2>$215,000</h2>
                        <AttachMoneyIcon sx={{fontSize:"40px", color:"lightgray"}}/>
                    </div>
                </div>
                <div className='tasks'>
                <p>Tasks</p>
                <div className='icons'>
                        <h2>50%</h2>
                        <AssignmentOutlinedIcon sx={{fontSize:"40px", color:"lightgray"}}/>
                    </div>
                </div>
                <div className='pending'>
                <p>Pending Request</p>
                <div className='icons'>
                <h2>18</h2>
                        <ForumIcon sx={{fontSize:"40px", color:"lightgray"}}/>
                    </div>
                </div>
            </div>
            <div>
            <LineChartGraph data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
            <BarChartGraph data={data}/>
        </div>
    );
}